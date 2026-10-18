"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CircleDot } from "lucide-react";
import { Ball, Collider, collectColliders, createBall, stepSimulation } from "./engine";

const COLORS = ["#00C9A7", "#22d3ee", "#f97316", "#f43f5e", "#a78bfa"];
const MAX_FRAME_DELTA_MS = 100;

type DragState = {
  x: number;
  y: number;
  startX: number;
  startY: number;
  t: number;
};

type InteractionStyles = {
  userSelect: string;
  webkitUserSelect: string;
  touchAction: string;
};

export function BallPit() {
  const [enabled, setEnabled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ballsRef = useRef<Ball[]>([]);
  const collidersRef = useRef<Collider[]>([]);
  const draggingRef = useRef<DragState | null>(null);
  const interactionStylesRef = useRef<InteractionStyles | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
      try {
        setEnabled(window.localStorage.getItem("ball-pit-enabled") === "true");
      } catch {
        setEnabled(false);
      }
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    if (reducedMotion) return;

    const next = !enabled;
    setEnabled(next);
    try {
      window.localStorage.setItem("ball-pit-enabled", String(next));
    } catch {
      // Storage can be unavailable in privacy-restricted browser contexts.
    }
    if (!next) ballsRef.current = [];
  };

  useEffect(() => {
    if (!enabled || reducedMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let colliderRefreshRaf = 0;
    const scheduleColliderRefresh = () => {
      if (colliderRefreshRaf) return;
      colliderRefreshRaf = requestAnimationFrame(() => {
        colliderRefreshRaf = 0;
        collidersRef.current = collectColliders();
      });
    };

    const resize = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      canvas.width = Math.floor(window.innerWidth * pixelRatio);
      canvas.height = Math.floor(window.innerHeight * pixelRatio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      collidersRef.current = collectColliders();
    };
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", scheduleColliderRefresh, { passive: true });
    window.visualViewport?.addEventListener("scroll", scheduleColliderRefresh, { passive: true });

    const mutationObserver = new MutationObserver(scheduleColliderRefresh);
    mutationObserver.observe(document.body, { childList: true, subtree: true, attributes: true });

    let raf = 0;
    let last = performance.now();
    let acc = 0;

    const resetTiming = () => {
      last = performance.now();
      acc = 0;
    };

    const loop = (now: number) => {
      const dt = Math.min(Math.max(now - last, 0), MAX_FRAME_DELTA_MS);
      last = now;
      acc += dt;
      acc = stepSimulation(ballsRef.current, collidersRef.current, window.innerWidth, window.innerHeight, acc);

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (const ball of ballsRef.current) {
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
        ctx.fillStyle = ball.color;
        ctx.fill();
      }

      if (draggingRef.current) {
        const d = draggingRef.current;
        ctx.beginPath();
        ctx.moveTo(d.startX, d.startY);
        ctx.lineTo(d.x, d.y);
        ctx.strokeStyle = "rgba(0,201,167,0.4)";
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const restoreInteractionStyles = () => {
      const previous = interactionStylesRef.current;
      if (!previous) return;

      document.body.style.userSelect = previous.userSelect;
      document.body.style.webkitUserSelect = previous.webkitUserSelect;
      document.body.style.touchAction = previous.touchAction;
      interactionStylesRef.current = null;
    };

    const cancelDrag = () => {
      draggingRef.current = null;
      restoreInteractionStyles();
    };

    const startDrag = (e: PointerEvent) => {
      if (!e.isPrimary || (e.pointerType === "mouse" && e.button !== 0) || draggingRef.current) return;

      const target = e.target;
      if (target instanceof Element && target.closest("a, button, input, select, textarea, [role='button'], [contenteditable='true']")) {
        return;
      }

      draggingRef.current = {
        x: e.clientX,
        y: e.clientY,
        startX: e.clientX,
        startY: e.clientY,
        t: performance.now(),
      };
      interactionStylesRef.current = {
        userSelect: document.body.style.userSelect,
        webkitUserSelect: document.body.style.webkitUserSelect,
        touchAction: document.body.style.touchAction,
      };

      // Prevent text selection and page scrolling during a touch drag.
      document.body.style.userSelect = "none";
      document.body.style.webkitUserSelect = "none";
      if (e.pointerType === "touch") {
        document.body.style.touchAction = "none";
        e.preventDefault();
      }
      window.getSelection()?.removeAllRanges();
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      if (e.pointerType === "touch") e.preventDefault();
      draggingRef.current.x = e.clientX;
      draggingRef.current.y = e.clientY;
    };

    const releaseDrag = (clientX: number, clientY: number) => {
      const d = draggingRef.current;
      draggingRef.current = null;
      restoreInteractionStyles();

      if (!d) return;
      const dt = Math.max(performance.now() - d.t, 16);
      const vx = ((d.startX - clientX) / dt) * 1000 * 0.6;
      const vy = ((d.startY - clientY) / dt) * 1000 * 0.6;
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      ballsRef.current.push(createBall(d.startX, d.startY, vx, vy, color));
      if (ballsRef.current.length > 40) ballsRef.current.shift();
    };

    const onPointerUp = (e: PointerEvent) => releaseDrag(e.clientX, e.clientY);
    const onPointerCancel = cancelDrag;
    const onWindowBlur = () => {
      cancelDrag();
      resetTiming();
    };
    const onVisibilityChange = () => {
      cancelDrag();
      resetTiming();
      if (!document.hidden) scheduleColliderRefresh();
    };

    window.addEventListener("pointerdown", startDrag);
    window.addEventListener("pointermove", onPointerMove, { passive: false });
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerCancel);
    window.addEventListener("blur", onWindowBlur);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(colliderRefreshRaf);
      cancelDrag();
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", scheduleColliderRefresh);
      window.visualViewport?.removeEventListener("scroll", scheduleColliderRefresh);
      mutationObserver.disconnect();
      window.removeEventListener("pointerdown", startDrag);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerCancel);
      window.removeEventListener("blur", onWindowBlur);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [enabled, reducedMotion]);

  if (!mounted) return null;

  const isActive = enabled && !reducedMotion;
  const toggleLabel = reducedMotion
    ? "Ball pit disabled because reduced motion is enabled"
    : enabled
      ? "Disable ball pit"
      : "Enable ball pit";

  return (
    <>
      {isActive &&
        createPortal(
          <canvas
            ref={canvasRef}
            className="pointer-events-none fixed inset-0 z-50 touch-none"
            aria-hidden="true"
          />,
          document.body
        )}
      <button
        type="button"
        onClick={toggle}
        disabled={reducedMotion}
        className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg border transition-all duration-200 ${
          enabled
            ? "border-muted bg-muted/10 text-foreground"
            : "border-border bg-card text-muted-foreground"
        } hover:bg-muted/10 disabled:cursor-not-allowed disabled:opacity-50`}
        title={toggleLabel}
        aria-label={toggleLabel}
        aria-pressed={enabled}
      >
        <CircleDot size={16} className={isActive ? "animate-pulse" : ""} aria-hidden="true" />
      </button>
    </>
  );
}
