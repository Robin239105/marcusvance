import { useEffect, useState } from 'react'

const DEFAULT_INITIAL = 4 * 3600 + 12 * 60 + 9

export function useCountdown(initialSeconds = DEFAULT_INITIAL) {
  const [totalSec, setTotalSec] = useState(initialSeconds)

  useEffect(() => {
    const id = window.setInterval(() => {
      setTotalSec((t) => (t <= 1 ? initialSeconds : t - 1))
    }, 1000)
    return () => window.clearInterval(id)
  }, [initialSeconds])

  const h = Math.floor(totalSec / 3600)
  const m = Math.floor((totalSec % 3600) / 60)
  const s = totalSec % 60
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}
