import clsx from 'clsx'

type DividerProps = {
  margin?: string
}

export const Divider = ({ margin }: DividerProps) => (
  // const margin = `my-${gap}`

  <div className={clsx('h-px w-full bg-gray-200', margin)} />
)
