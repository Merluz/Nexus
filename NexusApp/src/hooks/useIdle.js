import { useEffect, useState } from 'react'

export default function useIdle(timeout = 3000) {
  const [isIdle, setIsIdle] = useState(false)

  useEffect(() => {
    let timer = setTimeout(() => setIsIdle(true), timeout)

    const reset = () => {
      clearTimeout(timer)
      setIsIdle(false)
      timer = setTimeout(() => setIsIdle(true), timeout)
    }

    const events = ['touchstart', 'keydown']
    events.forEach((e) => document.addEventListener(e, reset))

    return () => {
      clearTimeout(timer)
      events.forEach((e) => document.removeEventListener(e, reset))
    }
  }, [timeout])

  return isIdle
}
