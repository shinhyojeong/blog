import { Header } from '~/components'
import type { PropsWithChildren } from 'react'

type Props = PropsWithChildren<unknown>

export const Layout = ({ children }: Props) => (
  <main>
    <Header />
    <div className="mx-auto mt-14 max-w-5xl px-2">{children}</div>
  </main>
)
