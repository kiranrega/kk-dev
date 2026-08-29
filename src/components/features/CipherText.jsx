import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&*";

/**
 * CipherText — scrambles into place, left to right.
 *
 * Usage:
 *   <CipherText text="Kiran Rega" trigger="mount" />
 *   <CipherText text="Full-Stack Engineer" trigger="hover" speed={30} />
 *   <CipherText text="Hyderabad, India" trigger="inView" />
 */
export default function CipherText({
  text,
  trigger = "mount", // "mount" | "hover" | "inView"
  speed = 18,        // ms per tick
  className = "",
  as: Tag = "span",
}) {
  const [display, setDisplay] = useState(text);
  const ref = useRef(null);
  const intervalRef = useRef(null);

  const scramble = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    let iteration = 0;
    const totalIterations = text.length * 2;

    intervalRef.current = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration / 2) return text[index];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
      iteration++;
      if (iteration >= totalIterations) clearInterval(intervalRef.current);
    }, speed);
  };

  useEffect(() => {
    if (trigger === "mount") scramble();

    if (trigger === "inView" && ref.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            scramble();
            observer.disconnect(); // only once
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(ref.current);
      return () => observer.disconnect();
    }

    return () => intervalRef.current && clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, trigger]);

  const hoverProps =
    trigger === "hover" ? { onMouseEnter: scramble } : {};

  return (
    <Tag ref={ref} className={className} {...hoverProps}>
      {display}
    </Tag>
  );
}
