import { Header } from '~/components'
import type { PropsWithChildren } from 'react'

type Props = PropsWithChildren<unknown> & {
  className?: string
}

export const Layout = ({ children, className }: Props) => (
  <main className={className}>
    <Header />
    <div className="mx-auto my-14 max-w-5xl px-2">{children}</div>
  </main>
)
