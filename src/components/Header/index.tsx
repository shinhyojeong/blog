import { mixins } from '~/styles'
import { cn } from '~/utils'

export const Header = () => (
  <div
    className={cn(
      'fixed h-14 w-full border-b border-solid border-gray-200 bg-white',
      mixins.borderGray
    )}>
    <div
      className={cn(
        'm-auto max-w-5xl px-2',
        mixins.sizeFull,
        mixins.flexItemsCenter
      )}>
      <a href="/">
        <span className="text-2xl font-bold">신효정블로그</span>
      </a>
    </div>
  </div>
)
