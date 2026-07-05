// "use client";

// import { useEffect, useState } from "react";
// import { Moon, Sun } from "lucide-react";

// type Theme = "light" | "dark";

// function getStoredTheme(): Theme | null {
//   try {
//     const saved = window.localStorage.getItem("theme");
//     if (saved === "light" || saved === "dark") return saved;
//     return window.matchMedia("(prefers-color-scheme: dark)").matches
//       ? "dark"
//       : "light";
//   } catch {
//     return null;
//   }
// }

// function applyTheme(theme: Theme) {
//   document.documentElement.classList.toggle("dark", theme === "dark");
//   document.documentElement.style.colorScheme = theme;
// }

// export function ThemeToggle() {
//   // Start as null to avoid server/client mismatch — real value set after mount
//   const [theme, setTheme] = useState<Theme | null>(null);

//   useEffect(() => {
//     const resolved = getStoredTheme() ?? "light";
//     // eslint-disable-next-line react-hooks/set-state-in-effect
//     setTheme(resolved);
//     applyTheme(resolved);
//   }, []);

//   function toggleTheme() {
//     const next = theme === "dark" ? "light" : "dark";
//     const apply = () => {
//       setTheme(next);
//       window.localStorage.setItem("theme", next);
//       applyTheme(next);
//       // Play sound effect (add the file at public/sound/theme-toggle.mp3)
//       const audio = new Audio('/sound/click-003.mp3');
//       // fire‑and‑forget; ignore errors if user blocks autoplay
//       void audio.play().catch(() => {});
//     };
//     if (!document.startViewTransition) {
//       apply();
//       return;
//     }
//     document.startViewTransition(apply);
//   }

//   const isDark = theme === "dark";
//   const label = isDark ? "Switch to light theme" : "Switch to dark theme";

//   return (
//     <button
//       type="button"
//       onClick={toggleTheme}
//       className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-card text-muted-foreground transition hover:bg-muted/10 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
//       aria-label={label}
//       title={label}
//       suppressHydrationWarning
//     >
//       {isDark ? (
//         <Sun size={16} aria-hidden="true" />
//       ) : (
//         <Moon size={16} aria-hidden="true" />
//       )}
//     </button>
//   );
// }



'use client'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
gsap.registerPlugin(Draggable)

export default function ThemeToggle() {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [showHint, setShowHint] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark'
    document.documentElement.classList.toggle('dark', saved === 'dark')
    document.documentElement.style.colorScheme = saved

    const FORM = formRef.current
    if (!FORM) return

    const TOGGLE = FORM.querySelector<HTMLButtonElement>('button')
    const HIT    = FORM.querySelector<HTMLElement>('.grab-handle')
    const DUMMY_CORD = FORM.querySelector<SVGLineElement>('.toggle-scene__dummy-cord line')
    if (!TOGGLE || !HIT || !DUMMY_CORD) return

    // Hint stays permanently visible; dismiss only after first drag
    const dismissHint = () => setShowHint(false)
    HIT.addEventListener('pointerdown', dismissHint, { once: true })

    let startX = 0, startY = 0
    const PROXY = document.createElement('div')
    const ENDX  = Number(DUMMY_CORD.getAttribute('x2'))
    const ENDY  = Number(DUMMY_CORD.getAttribute('y2'))
    const RESET = () => gsap.set(PROXY, { x: ENDX, y: ENDY })
    RESET()

    const toggle = () => {
      const isLight = TOGGLE.getAttribute('aria-pressed') === 'false'
      TOGGLE.setAttribute('aria-pressed', String(isLight))
      const next = isLight ? 'light' : 'dark'
      document.documentElement.classList.toggle('dark', next === 'dark')
      document.documentElement.style.colorScheme = next
      localStorage.setItem('theme', next)
      const audio = new Audio('/sound/click-003.mp3')
      void audio.play().catch(() => {})
    }

    const onSubmit = (e: Event) => {
      e.preventDefault()
      if (document.startViewTransition) {
        document.startViewTransition(toggle)
      } else {
        toggle()
      }
    }
    FORM.addEventListener('submit', onSubmit)

    const draggable = Draggable.create(PROXY, {
      trigger: HIT,
      type: 'x,y',
      onPress(e: any)   { startX = e.x; startY = e.y },
      onDragStart()     { document.documentElement.style.cursor = 'grabbing' },
      onDrag() {
        const ratio = 1 / ((FORM.offsetWidth * 0.65) / 134)
        gsap.set(DUMMY_CORD, {
          attr: {
            x2: this.startX + (this.x - this.startX) * ratio,
            y2: this.startY + (this.y - this.startY) * ratio,
          },
        })
      },
      onRelease(e: any) {
        document.documentElement.style.cursor = 'unset'
        const travelled = Math.hypot(Math.abs(e.x - startX), Math.abs(e.y - startY))
        gsap.to(DUMMY_CORD, {
          attr: { x2: ENDX, y2: ENDY },
          duration: 0.1,
          onComplete: () => { if (travelled > 50) FORM.requestSubmit(); RESET() },
        })
      },
    })

    return () => {
      FORM.removeEventListener('submit', onSubmit)
      draggable[0]?.kill()
      HIT.removeEventListener('pointerdown', dismissHint)
    }
  }, [])

  return (
    <>
      <form ref={formRef} className="toggle-form">
        <button
          aria-pressed="false"
          className="toggle-btn"
          onClick={() => formRef.current?.requestSubmit()}
        >
          <span className="sr-only">Toggle theme</span>

          {/* ── Bulb SVG ── */}
          <svg
            aria-hidden="true"
            className="toggle-scene"
            viewBox="32 32 134 420"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Cord + draggable hit area */}
            <g className="toggle-scene__cords">
              <g className="line toggle-scene__dummy-cord">
                <line x1="98" x2="98" y1="240" y2="380" />
              </g>
              <circle
                className="toggle-scene__hit-spot"
                cx="98.7255" cy="380.5405" r="60"
                fill="transparent"
              />
            </g>

            {/* Bulb group */}
            <g
              className="toggle-scene__bulb bulb"
              transform="translate(844.069 -645.213)"
            >
              {/* Cap (base of bulb) */}
              <path
                className="bulb__cap"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4.677"
                d="M-774.546 827.629s12.917-13.473 29.203-13.412c16.53.062 29.203 13.412 29.203 13.412v53.6s-8.825 16-29.203 16c-21.674 0-29.203-16-29.203-16z"
              />
              {/* Filament */}
              <g className="bulb__filament" fill="none" strokeLinecap="round" strokeWidth="5">
                <path d="M-752.914 823.875l-8.858-33.06" />
                <path d="M-737.772 823.875l8.858-33.06" />
              </g>
              {/* Glass globe */}
              <path
                className="bulb__bulb"
                strokeLinecap="round"
                strokeWidth="5"
                d="M-783.192 803.855c5.251 8.815 5.295 21.32 13.272 27.774 12.299 8.045 36.46 8.115 49.127 0 7.976-6.454 8.022-18.96 13.273-27.774 3.992-6.7 14.408-19.811 14.408-19.811 8.276-11.539 12.769-24.594 12.769-38.699 0-35.898-29.102-65-65-65-35.899 0-65 29.102-65 65 0 13.667 4.217 26.348 12.405 38.2 0 0 10.754 13.61 14.746 20.31z"
              />
            </g>
          </svg>

          <div className="grab-handle" />
        </button>
      </form>

      {/* ── "drag me." hint ── */}
      <div
        className="drag-hint drag-hint--visible"
        aria-hidden="true"
      >
        <span className="drag-hint__text">drag me.</span>
        <svg
          className="drag-hint__arrow"
          viewBox="0 0 100 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Curved stroke from bottom-left to top-right */}
          <path
            d="M10 62 C 28 30, 62 12, 88 10"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
          />
          {/* Arrowhead */}
          <path
            d="M82 4 L90 12 L78 16"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>
    </>
  )
}