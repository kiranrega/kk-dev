"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type Petal = {
  x: number;
  y: number;
  size: number;
  speed: number;
  fall: number;
  phase: number;
  rotation: number;
};

const PETAL_COUNT = 60;

function drawPetal(context: CanvasRenderingContext2D, size: number) {
  context.beginPath();
  context.moveTo(0, -size);
  context.quadraticCurveTo(-size * 0.9, 0, 0, size);
  context.quadraticCurveTo(size * 0.9, 0, 0, -size);
  context.fillStyle = "rgba(191, 219, 254, 0.7)";
  context.fill();
  context.strokeStyle = "rgba(96, 165, 250, 0.8)";
  context.lineWidth = 0.75;
  context.stroke();
  context.beginPath();
  context.moveTo(0, -size);
  context.lineTo(0, size);
  context.stroke();
}

export function HeroBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!container || !canvas || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = 0;
    let running = !reducedMotion.matches;
    let width = 0;
    let height = 0;
    let devicePixelRatio = 1;
    const petals: Petal[] = [];

    const resize = () => {
      devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = Math.max(1, Math.floor(width * devicePixelRatio));
      canvas.height = Math.max(1, Math.floor(height * devicePixelRatio));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };

    const resetPetal = (petal: Petal, initial = false) => {
      petal.x = initial ? Math.random() * width : -petal.size * 2;
      petal.y = height * 0.2 + Math.random() * height * 0.7;
      petal.size = 4 + Math.random() * 6;
      petal.speed = 0.4 + Math.random() * 1.8;
      petal.fall = 0.05 + Math.random() * 0.12;
      petal.phase = Math.random() * Math.PI * 2;
      petal.rotation = Math.random() * Math.PI * 2;
    };

    const render = () => {
      context.clearRect(0, 0, width, height);
      for (const petal of petals) {
        petal.x += petal.speed;
        petal.y += petal.fall + Math.sin(petal.x * 0.012 + petal.phase) * 0.12;
        petal.rotation += 0.008 + petal.speed * 0.002;

        if (petal.x > width + 30 || petal.y > height + 30) resetPetal(petal);

        context.save();
        context.translate(petal.x, petal.y);
        context.rotate(petal.rotation);
        drawPetal(context, petal.size);
        context.restore();
      }

      if (running) animationFrame = requestAnimationFrame(render);
    };

    resize();
    for (let index = 0; index < PETAL_COUNT; index += 1) {
      const petal = {} as Petal;
      resetPetal(petal, true);
      petals.push(petal);
    }
    render();

    const handleMotionPreference = () => {
      running = !reducedMotion.matches;
      cancelAnimationFrame(animationFrame);
      if (running) render();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(container);
    reducedMotion.addEventListener("change", handleMotionPreference);

    return () => {
      running = false;
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
      reducedMotion.removeEventListener("change", handleMotionPreference);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/9] w-full overflow-hidden border-x border-edge bg-slate-900 sm:aspect-[2/1]"
    >
      <Image
        src="/assets/cover.png"
        alt="Illustration of a quiet forest waterfall"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 768px"
        className="object-cover"
      />
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 h-full w-full"
      />
    </div>
  );
}
