export default function BackgroundCurves() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <svg
        className="h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="curve-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#6d28d9" stopOpacity="0" />
            <stop offset="0.35" stopColor="#6d28d9" stopOpacity="0.22" />
            <stop offset="0.75" stopColor="#6d28d9" stopOpacity="0.12" />
            <stop offset="1" stopColor="#6d28d9" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="curve-fill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#6d28d9" stopOpacity="0.09" />
            <stop offset="1" stopColor="#6d28d9" stopOpacity="0" />
          </linearGradient>
          <filter id="curve-soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="28" />
          </filter>
        </defs>

        <g className="curve-drift">
          <path d="M-120 0H760C640 190 330 120 -120 340Z" fill="url(#curve-fill)" filter="url(#curve-soft)" />
          <path d="M1560 900H880C990 750 1270 800 1560 590Z" fill="url(#curve-fill)" filter="url(#curve-soft)" />

          <path d="M-100 220C200 80 420 380 760 240S1240 60 1560 200" stroke="url(#curve-line)" strokeWidth="1.3" />
          <path d="M-100 290C220 160 460 450 800 310S1260 140 1560 280" stroke="url(#curve-line)" strokeWidth="1.3" />
          <path d="M-100 360C240 240 500 520 840 380S1280 220 1560 360" stroke="url(#curve-line)" strokeWidth="1.3" />
          <path d="M-100 430C260 320 540 590 880 450S1300 300 1560 440" stroke="url(#curve-line)" strokeWidth="1.3" />

          <path d="M-100 730C240 610 520 850 900 710S1300 590 1560 690" stroke="url(#curve-line)" strokeWidth="1.3" />
          <path d="M-100 810C260 690 560 930 940 790S1320 670 1560 770" stroke="url(#curve-line)" strokeWidth="1.3" />
        </g>
      </svg>
    </div>
  )
}
