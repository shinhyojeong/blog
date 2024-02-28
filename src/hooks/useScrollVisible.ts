import { useEffect, useRef, useState } from 'react'

export const useScrollVisible = () => {
  const prevScrollYRef = useRef(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const { current: prevScrollY } = prevScrollYRef

      setIsVisible(
        (prevScrollY > currentScrollY && currentScrollY > 0) ||
          currentScrollY === 0
      )

      prevScrollYRef.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.addEventListener('scroll', handleScroll)
  }, [])

  return isVisible
}
