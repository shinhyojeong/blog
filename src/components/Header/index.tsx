import { useScrollVisible } from '~/hooks'

export const Header = () => {
  const isVisible = useScrollVisible()

  const headerStyle = {
    transition: 'transform 500ms ease-in-out',
    transform: isVisible ? 'translateY(0)' : 'translateY(-100%)'
  }

  return (
    <div
      className={`fixed left-0 top-0 z-50 h-14 w-full transform border-b border-solid  border-gray-200 bg-white transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }
      `}
      style={headerStyle}>
      <div className="m-auto h-full max-w-5xl px-2">
        <a className="flex h-full w-fit items-center" href="/">
          <span className="text-2xl font-bold">shinhyojeong.dev</span>
        </a>
      </div>
    </div>
  )
}
