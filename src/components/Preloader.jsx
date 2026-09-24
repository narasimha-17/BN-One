import { useEffect, useState } from 'react'
import { useTheme } from '../lib/theme.js'

export default function Preloader() {
  const [visible, setVisible] = useState(() => localStorage.getItem('seenIntro') !== 'true')
  const [dismissed, setDismissed] = useState(false)
  const theme = useTheme()

  useEffect(() => {
    if (!visible) return

    document.body.style.overflow = 'hidden'

    const dismiss = () => {
      localStorage.setItem('seenIntro', 'true')
      setDismissed(true)
      document.body.style.overflow = 'auto'
      document.body.style.overflowX = 'hidden'
      setTimeout(() => setVisible(false), 700)
    }

    const timeout = setTimeout(dismiss, 2000)
    return () => clearTimeout(timeout)
  }, [visible])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 w-screen h-[100dvh] bg-volcanoBlack z-[9999] flex flex-col items-center justify-center gap-8 transition-opacity duration-700 ease-in-out"
      style={dismissed ? { opacity: 0, pointerEvents: 'none' } : undefined}
    >
      <img
        src={theme === 'dark' ? '/logo-on-dark.svg' : '/logo.svg'}
        alt="Agentosys"
        className="w-64 sm:w-80 h-auto object-contain"
      />
      <div className="relative h-[3px] w-56 overflow-hidden rounded-full bg-black/10">
        <div className="absolute inset-y-0 left-0 w-full origin-left animate-[load_2s_ease-in-out_forwards] bg-gradient-to-r from-volcanoCrimson to-volcanoOrange" />
      </div>
    </div>
  )
}
