import { Link } from "@tanstack/react-router";

export function BrandMark({ size = 42 }: { size?: number }) {
  return (
    <span className="brand-mark" style={{ width: size, height: size, borderRadius: size / 3 }}>
      <svg viewBox="0 0 32 32" width={size * 0.58} height={size * 0.58} aria-hidden="true">
        <path
          d="M4 7.2c3.6-1.7 7.2-1.7 10.8 0v18c-3.6-1.7-7.2-1.7-10.8 0z"
          fill="currentColor"
          opacity="0.95"
        />
        <path
          d="M28 7.2c-3.6-1.7-7.2-1.7-10.8 0v18c3.6-1.7 7.2-1.7 10.8 0z"
          fill="currentColor"
          opacity="0.6"
        />
        <path
          d="M16 3.4l1.15 2.6 2.6 1.15-2.6 1.15L16 10.9l-1.15-2.6-2.6-1.15 2.6-1.15z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

export function BrandLogo({ size = 42, compact = false }: { size?: number; compact?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3">
      <BrandMark size={size} />
      <span className={compact ? "font-extrabold" : "text-lg font-extrabold tracking-tight"}>
        StudyWise <span className="brand-accent">AI</span>
      </span>
    </Link>
  );
}
