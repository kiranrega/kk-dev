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
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/hooks/use-theme'
gsap.registerPlugin(Draggable, useGSAP)

export default function ThemeToggle() {
  const formRef = useRef<HTMLFormElement | null>(null)
  const draggedRef = useRef(false)
  const { isDark, toggleTheme } = useTheme()

  useGSAP((_context, contextSafe) => {
    const FORM = formRef.current
    if (!FORM) return

    const TOGGLE = FORM.querySelector<HTMLButtonElement>('button')
    const HIT    = FORM.querySelector<SVGCircleElement>('.toggle-scene__hit-spot')
    const DUMMY_CORD = FORM.querySelector<SVGLineElement>('.toggle-scene__dummy-cord line')
    const SCENE = FORM.querySelector<SVGSVGElement>('.toggle-scene')
    if (!TOGGLE || !HIT || !DUMMY_CORD || !SCENE) return

    let startX = 0, startY = 0
    const PROXY = document.createElement('div')
    const ENDX  = Number(DUMMY_CORD.getAttribute('x2'))
    const ENDY  = Number(DUMMY_CORD.getAttribute('y2'))
    const cordEnd = { x: ENDX, y: ENDY }
    let startCordX = ENDX, startCordY = ENDY
    let screenToSvg: DOMMatrix | null = null
    const originalPlayState = FORM.style.animationPlayState
    const RESET = () => {
      gsap.set(PROXY, { x: 0, y: 0 })
      FORM.style.animationPlayState = originalPlayState
    }
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let returnTween: gsap.core.Tween | null = null
    RESET()

    // Keep the visible cord and its grab target on the same animated point.
    const renderCord = () => {
      DUMMY_CORD.setAttribute('x2', String(cordEnd.x))
      DUMMY_CORD.setAttribute('y2', String(cordEnd.y))
      HIT.setAttribute('cx', String(cordEnd.x))
      HIT.setAttribute('cy', String(cordEnd.y))
    }
    renderCord()

    const settleCord = () => {
      returnTween?.kill()
      cordEnd.x = ENDX
      cordEnd.y = ENDY
      renderCord()
      RESET()
    }
    reducedMotion.addEventListener('change', settleCord)

    const toggleAudio = new Audio('/sound/click-003.mp3')
    toggleAudio.preload = 'auto'
    toggleAudio.volume = 0.7
    const playToggleSound = () => {
      toggleAudio.currentTime = 0
      void toggleAudio.play().catch(() => {})
    }

    const onSubmit = (e: Event) => {
      e.preventDefault()
      if (document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.startViewTransition(toggleTheme)
      } else {
        toggleTheme()
      }
    }
    FORM.addEventListener('submit', onSubmit)

    const releaseCord = contextSafe!((travelled: number) => {
      returnTween?.kill()
      returnTween = gsap.to(cordEnd, {
        x: ENDX,
        y: ENDY,
        duration: reducedMotion.matches ? 0 : 0.8,
        ease: 'elastic.out(1, 0.45)',
        overwrite: true,
        onUpdate: renderCord,
        onComplete: RESET,
      })
      if (travelled > 50) {
        playToggleSound()
        // Keep the cord live while it springs back instead of snapshotting it.
        toggleTheme()
      }
    })

    const draggable = Draggable.create(PROXY, {
      trigger: HIT,
      type: 'x,y',
      onPress() {
        returnTween?.kill()
        FORM.style.animationPlayState = 'paused'
        startCordX = cordEnd.x
        startCordY = cordEnd.y
        screenToSvg = SCENE.getScreenCTM()?.inverse() ?? null
        startX = this.pointerX
        startY = this.pointerY
      },
      onDragStart() {
        draggedRef.current = true
        document.documentElement.style.cursor = 'grabbing'
      },
      onDrag() {
        if (!screenToSvg) return
        const dx = this.pointerX - startX
        const dy = this.pointerY - startY
        cordEnd.x = startCordX + screenToSvg.a * dx + screenToSvg.c * dy
        cordEnd.y = startCordY + screenToSvg.b * dx + screenToSvg.d * dy
        renderCord()
      },
      onRelease() {
        document.documentElement.style.cursor = 'unset'
        const travelled = Math.hypot(this.pointerX - startX, this.pointerY - startY)
        releaseCord(travelled)
      },
    })

    return () => {
      FORM.removeEventListener('submit', onSubmit)
      reducedMotion.removeEventListener('change', settleCord)
      returnTween?.kill()
      toggleAudio.pause()
      draggable[0]?.kill()
      FORM.style.animationPlayState = originalPlayState
      document.documentElement.style.cursor = ''
    }
  }, { scope: formRef, dependencies: [toggleTheme], revertOnUpdate: true })

  return (
    <>
      <form ref={formRef} className="toggle-form">
        <button
          type="button"
          aria-pressed={!isDark}
          title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
          className="toggle-btn"
          onPointerDown={() => { draggedRef.current = false }}
          onClick={(event) => {
            // A drag release can also synthesize a click on the containing button.
            if (event.detail > 0 && draggedRef.current) return
            formRef.current?.requestSubmit()
          }}
        >
          <span className="sr-only">Light theme</span>
          <span className="toggle-compact-icon" aria-hidden="true">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </span>

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
                cx="98" cy="380" r="78"
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

          {/* Previous fixed HTML grab area: <div className="grab-handle" /> */}
        </button>
      </form>

      {/* ── "drag me." hint ── */}
      <div
        className="drag-hint drag-hint--visible"
        aria-hidden="true"
      >
        <span className="drag-hint__text">drag me to see magic.</span>
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
