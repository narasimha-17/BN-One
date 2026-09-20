import { useEffect, useState } from 'react'

export default function RotatingWords({ words, className = '', intervalMs = 2600 }) {
  const [index, setIndex] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    let swap
    const timer = setInterval(() => {
      setLeaving(true)
      swap = setTimeout(() => {
        setIndex((n) => (n + 1) % words.length)
        setLeaving(false)
      }, 300)
    }, intervalMs)

    return () => {
      clearInterval(timer)
      clearTimeout(swap)
    }
  }, [words.length, intervalMs])

  return (
    <span
      key={index}
      aria-label={words[index]}
      className={`inline-block ${leaving ? 'word-out' : 'word-in'} ${className}`}
    >
      {words[index]}
    </span>
  )
}
