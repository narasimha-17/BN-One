import { useEffect, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function Typewriter({ phrases, className = '', typeMs = 75, deleteMs = 38, holdMs = 1800 }) {
  const reduce = prefersReducedMotion()
  const [index, setIndex] = useState(0)
  const [text, setText] = useState(reduce ? phrases[0] : '')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduce) return undefined
    const full = phrases[index]

    if (!deleting && text === full) {
      const t = setTimeout(() => setDeleting(true), holdMs)
      return () => clearTimeout(t)
    }
    if (deleting && text === '') {
      const t = setTimeout(() => {
        setDeleting(false)
        setIndex((n) => (n + 1) % phrases.length)
      }, 250)
      return () => clearTimeout(t)
    }
    const t = setTimeout(
      () => setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1)),
      deleting ? deleteMs : typeMs,
    )
    return () => clearTimeout(t)
  }, [text, deleting, index, phrases, reduce, typeMs, deleteMs, holdMs])

  return (
    <>
      <span className={className} aria-label={phrases[index]}>
        {text || ' '}
      </span>
      <span aria-hidden="true" className="typewriter-caret" />
    </>
  )
}
