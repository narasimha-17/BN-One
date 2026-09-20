const ICONS = {
  PowerLens: (
    <>
      <circle cx="12" cy="12" r="7.5" />
      <circle cx="12" cy="12" r="2.8" />
      <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22" />
    </>
  ),
  VIBE: <path d="M2.5 12h3.5l2.5-6.5 4 13 3-9.5 1.5 3H21.5" />,
  'Code Check': (
    <>
      <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
      <path d="M9.8 12.4l1.6 1.6 3-3.6" />
    </>
  ),
  'Exam+': (
    <>
      <path d="M2 9l10-5 10 5-10 5L2 9z" />
      <path d="M6 11.5V16c0 1.6 2.7 3 6 3s6-1.4 6-3v-4.5" />
      <path d="M22 9v5.5" />
    </>
  ),
}

export default function ProductLogo({ name, className = 'h-6 w-6' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {ICONS[name] ?? <circle cx="12" cy="12" r="8" />}
    </svg>
  )
}
