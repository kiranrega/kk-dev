export function StatusBadge() {
  return (
    <div className="inline-flex items-center gap-2 bg-[#0a0a0a] border border-[#22c55e] rounded-full py-1.5 px-3.5 shadow-[0_0_8px_2px_rgba(34,197,94,0.5)]">
      {/* Pulsing green dot */}
      <span className="w-2 h-2 bg-[#22c55e] rounded-full animate-pulseDot"></span>

      {/* Text */}
      <span className="text-[#22c55e] font-medium text-sm">Open to work</span>

      {/* Mascot – simple cat SVG */}
      <span className="w-4 h-4 animate-bounceIdle">
        <svg viewBox="0 0 24 24" fill="#22c55e" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M12 2c-1.1 0-2 .9-2 2v3H7c-.55 0-1 .45-1 1v5h2v6h2v-6h2v6h2v-6h2v-5c0-.55-.45-1-1-1h-3V4c0-1.1-.9-2-2-2z" />
        </svg>
      </span>
    </div>
  );
}
