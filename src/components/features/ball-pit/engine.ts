// Hand-rolled 2D ball physics engine.
// Balls collide with real DOM elements (via getBoundingClientRect) and each other.
// Modeled after danperks.dev's slingshot mechanic — fixed timestep, gravity,
// AABB collision against DOM rects, restitution + damping, sleep threshold.

export interface Ball {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: string;
  asleep: boolean;
}

export interface Collider {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

const GRAVITY = 2300; // px/s^2
const WALL_RESTITUTION = 0.58;
const DOM_RESTITUTION = 0.65;
const DAMPING = 0.985;
const SLEEP_VELOCITY = 26; // px/s
const BALL_RESTITUTION = 1.85; // ball-ball bounce multiplier
const STEPS_PER_SECOND = 120;
const FIXED_DT = 1 / STEPS_PER_SECOND;

let nextId = 1;

export function createBall(x: number, y: number, vx: number, vy: number, color: string, r = 7): Ball {
  return { id: nextId++, x, y, vx, vy, r, color, asleep: false };
}

export function collectColliders(selector = "a, button, [data-collide]"): Collider[] {
  const els = document.querySelectorAll<HTMLElement>(selector);
  const rects: Collider[] = [];
  els.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;
    rects.push({
      left: rect.left,
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
    });
  });
  return rects;
}

function resolveDomCollision(ball: Ball, rect: Collider): boolean {
  const closestX = Math.max(rect.left, Math.min(ball.x, rect.right));
  const closestY = Math.max(rect.top, Math.min(ball.y, rect.bottom));
  const dx = ball.x - closestX;
  const dy = ball.y - closestY;
  const distSq = dx * dx + dy * dy;

  if (distSq >= ball.r * ball.r || distSq === 0) return false;

  const dist = Math.sqrt(distSq);
  const nx = dx / dist;
  const ny = dy / dist;
  const overlap = ball.r - dist;

  ball.x += nx * overlap;
  ball.y += ny * overlap;

  const dot = ball.vx * nx + ball.vy * ny;
  ball.vx -= (1 + DOM_RESTITUTION) * dot * nx;
  ball.vy -= (1 + DOM_RESTITUTION) * dot * ny;
  return true;
}

function resolveBallCollision(a: Ball, b: Ball) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const distSq = dx * dx + dy * dy;
  const minDist = a.r + b.r;

  if (distSq >= minDist * minDist || distSq === 0) return;

  const dist = Math.sqrt(distSq);
  const nx = dx / dist;
  const ny = dy / dist;
  const overlap = (minDist - dist) / 2;

  a.x -= nx * overlap;
  a.y -= ny * overlap;
  b.x += nx * overlap;
  b.y += ny * overlap;

  const relVx = b.vx - a.vx;
  const relVy = b.vy - a.vy;
  const relDot = relVx * nx + relVy * ny;
  if (relDot > 0) return; // already separating

  const impulse = -relDot * BALL_RESTITUTION * 0.5;
  a.vx -= impulse * nx;
  a.vy -= impulse * ny;
  b.vx += impulse * nx;
  b.vy += impulse * ny;
}

export function stepSimulation(
  balls: Ball[],
  colliders: Collider[],
  width: number,
  height: number,
  accumulatedMs: number
): number {
  let acc = accumulatedMs;
  while (acc >= FIXED_DT * 1000) {
    for (const ball of balls) {
      if (ball.asleep) continue;

      ball.vy += GRAVITY * FIXED_DT;
      ball.x += ball.vx * FIXED_DT;
      ball.y += ball.vy * FIXED_DT;

      // walls
      if (ball.x - ball.r < 0) {
        ball.x = ball.r;
        ball.vx = -ball.vx * WALL_RESTITUTION;
      } else if (ball.x + ball.r > width) {
        ball.x = width - ball.r;
        ball.vx = -ball.vx * WALL_RESTITUTION;
      }
      if (ball.y - ball.r < 0) {
        ball.y = ball.r;
        ball.vy = -ball.vy * WALL_RESTITUTION;
      } else if (ball.y + ball.r > height) {
        ball.y = height - ball.r;
        ball.vy = -ball.vy * WALL_RESTITUTION;
        ball.vx *= DAMPING;
      }

      for (const rect of colliders) {
        resolveDomCollision(ball, rect);
      }

      const speed = Math.hypot(ball.vx, ball.vy);
      if (speed < SLEEP_VELOCITY && ball.y + ball.r >= height - 0.5) {
        ball.asleep = true;
        ball.vx = 0;
        ball.vy = 0;
      }
    }

    for (let i = 0; i < balls.length; i++) {
      for (let j = i + 1; j < balls.length; j++) {
        resolveBallCollision(balls[i], balls[j]);
      }
    }

    acc -= FIXED_DT * 1000;
  }
  return acc;
}
