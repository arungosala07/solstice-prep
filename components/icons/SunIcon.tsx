export function SunIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Rays */}
      <line x1="20" y1="2" x2="20" y2="7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="20" y1="33" x2="20" y2="38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="2" y1="20" x2="7" y2="20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="33" y1="20" x2="38" y2="20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="6.34" y1="6.34" x2="9.88" y2="9.88" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="30.12" y1="30.12" x2="33.66" y2="33.66" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="33.66" y1="6.34" x2="30.12" y2="9.88" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="9.88" y1="30.12" x2="6.34" y2="33.66" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Core circle */}
      <circle cx="20" cy="20" r="7.5" fill="currentColor" />
    </svg>
  );
}
