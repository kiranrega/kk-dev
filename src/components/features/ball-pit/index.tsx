"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CircleDot } from "lucide-react";
import { Ball, Collider, collectColliders, createBall, stepSimulation } from "./engine";

const COLORS = ["#00C9A7", "#22d3ee", "#f97316", "#f43f5e", "#a78bfa"];

export function BallPit() {
  const [enabled, setEnabled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ballsRef = useRef<Ball[]>([]);
  const collidersRef = useRef<Collider[]>([]);
  const draggingRef = useRef<{ x: number; y: number; startX: number; startY: number; t: number } | null>(null);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("ball-pit-enabled");
    setEnabled(saved === "true");
  }, []);

  const toggle = () => {
    const next = !enabled;
    setEnabled(next);
    localStorage.setItem("ball-pit-enabled", String(next));
    if (!next) ballsRef.current = [];
  };

  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth * devicePixelRatio;
      canvas.height = window.innerHeight * devicePixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      collidersRef.current = collectColliders();
    };
    resize();
    window.addEventListener("resize", resize);

    const mutationObserver = new MutationObserver(() => {
      collidersRef.current = collectColliders();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true, attributes: true });

    let raf = 0;
    let last = performance.now();
    let acc = 0;

    const loop = (now: number) => {
      const dt = now - last;
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

    const onPointerDown = (e: PointerEvent) => {
      draggingRef.current = { x: e.clientX, y: e.clientY, startX: e.clientX, startY: e.clientY, t: performance.now() };
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      draggingRef.current.x = e.clientX;
      draggingRef.current.y = e.clientY;
    };
    const onPointerUp = (e: PointerEvent) => {
      const d = draggingRef.current;
      draggingRef.current = null;
      if (!d) return;
      const dt = Math.max(performance.now() - d.t, 16);
      const vx = ((d.startX - e.clientX) / dt) * 1000 * 0.6;
      const vy = ((d.startY - e.clientY) / dt) * 1000 * 0.6;
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      ballsRef.current.push(createBall(d.startX, d.startY, vx, vy, color));
      if (ballsRef.current.length > 40) ballsRef.current.shift();
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      mutationObserver.disconnect();
      canvas.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [enabled]);

  if (!mounted) return null;

  return (
    <>
      {enabled &&
        createPortal(
          <canvas
            ref={canvasRef}
            className="pointer-events-auto fixed inset-0 z-50 touch-none"
            aria-hidden="true"
          />,
          document.body
        )}
      <button
        type="button"
        onClick={toggle}
        className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg border transition-all duration-200 ${
          enabled
            ? "border-muted bg-muted/10 text-foreground"
            : "border-border bg-card text-muted-foreground"
        } hover:bg-muted/10`}
        title={enabled ? "Disable ball pit" : "Enable ball pit"}
        aria-label={enabled ? "Disable ball pit" : "Enable ball pit"}
      >
        <CircleDot size={16} className={enabled ? "animate-pulse" : ""} />
      </button>
    </>
  );
}
