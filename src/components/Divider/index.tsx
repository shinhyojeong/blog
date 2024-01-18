import clsx from 'clsx'

type DividerProps = {
  gap: number
}

export const Divider = ({ gap }: DividerProps) => (
  <div className={clsx('my-6 h-px w-full bg-gray-200', `my-${gap}`)} />
)
