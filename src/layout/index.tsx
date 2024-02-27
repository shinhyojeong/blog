import { Helmet } from 'react-helmet'
import { Header } from '~/components'
import type { PropsWithChildren } from 'react'

type Props = PropsWithChildren<unknown>

export const Layout = ({ children }: Props) => (
  <>
    <Helmet>
      <html lang="ko" />
      <title>shinhyojeong.dev</title>
      <meta content={`Shinhyojeong's Dev Blog`} name="description" />
      <link href="/favicon.ico" rel="shortcut icon" />
    </Helmet>
    <main>
      <Header />
      <div className="mx-auto my-14 max-w-5xl px-2">{children}</div>
    </main>
  </>
)
