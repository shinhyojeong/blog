import { cn } from '~/utils/cn'
import type { HTMLAttributes } from 'react'

export type BoxProps = HTMLAttributes<HTMLDivElement>

export const Box = ({ children, className, ...props }: BoxProps) => (
  <div className={cn('rounded-2xl bg-gray-50 p-4', className)} {...props}>
    {children}
  </div>
)
