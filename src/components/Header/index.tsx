import { mixins } from '~/styles'
import { cn } from '~/utils'

export const Header = () => (
  <div
    className={cn(
      'fixed left-0 top-0 h-14 w-full border-b border-solid border-gray-200 bg-white',
      mixins.borderGray
    )}>
    <div className="m-auto h-full max-w-5xl px-2">
      <a className={cn('h-full', mixins.flexItemsCenter)} href="/">
        <span className="text-2xl font-bold">신효정블로그</span>
      </a>
    </div>
  </div>
)
