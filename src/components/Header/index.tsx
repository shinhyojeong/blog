import { useEffect, useRef, useState } from 'react'

export const Header = () => {
  const prevScrollYRef = useRef(0)
  const [visible, setVisible] = useState(true)

  const headerStyle = {
    transition: 'transform 500ms ease-in-out',
    transform: visible ? 'translateY(0)' : 'translateY(-100%)'
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const { current: prevScrollY } = prevScrollYRef

      setVisible(
        (prevScrollY > currentScrollY && currentScrollY > 0) ||
          currentScrollY === 0
      )

      prevScrollYRef.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed left-0 top-0 h-14 w-full transform border-b border-solid border-gray-200 bg-white transition-transform duration-300 ease-in-out ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }
      `}
      style={headerStyle}>
      <div className="m-auto h-full max-w-5xl px-2">
        <a className="flex h-full w-fit items-center" href="/">
          <span className="text-2xl font-bold">신효정블로그🎶</span>
        </a>
      </div>
    </div>
  )
}
