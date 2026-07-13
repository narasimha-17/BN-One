import { useEffect, useRef, useState } from 'react'

export default function Preloader() {
  const [visible, setVisible] = useState(() => localStorage.getItem('seenIntro') !== 'true')
  const [dismissed, setDismissed] = useState(false)
  const playerRef = useRef(null)

  useEffect(() => {
    if (!visible) return

    document.body.style.overflow = 'hidden'

    const dismiss = () => {
      localStorage.setItem('seenIntro', 'true')
      setDismissed(true)
      document.body.style.overflow = 'auto'
      document.body.style.overflowX = 'hidden'
      setTimeout(() => setVisible(false), 1000)
    }

    const player = playerRef.current
    const handleCanPlay = () => {
      player?.classList.remove('opacity-0')
      player?.play().catch(() => {})
    }
    player?.addEventListener('canplaythrough', handleCanPlay)
    player?.addEventListener('ended', dismiss)

    const timeout = setTimeout(dismiss, 6000)

    return () => {
      player?.removeEventListener('canplaythrough', handleCanPlay)
      player?.removeEventListener('ended', dismiss)
      clearTimeout(timeout)
    }
  }, [visible])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 w-screen h-[100dvh] bg-volcanoBlack z-[9999] flex items-center justify-center transition-all duration-1000 ease-in-out"
      style={dismissed ? { opacity: 0, pointerEvents: 'none' } : undefined}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1212_1px,transparent_1px),linear-gradient(to_bottom,#1f1212_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none z-10" />
      <video
        ref={playerRef}
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover select-none pointer-events-none opacity-100 transition-opacity duration-700"
      >
        <source src="/logovideo.mp4" type="video/mp4" />
      </video>
    </div>
  )
}
