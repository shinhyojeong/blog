import { Fragment } from 'react'
import { Divider, Preview, Profile } from '~/components'
import { Layout } from '~/layout'
import { formatDate } from '~/utils'
import type { PageProps } from 'gatsby'

type PageContext = {
  posts: {
    id: string
    title: string
    content: string
    createdAt: string
  }[]
}

const main = ({ pageContext }: PageProps<object, PageContext>) => (
  <Layout>
    <div className="fixed h-full w-80 border-r border-solid border-gray-200 p-6 pl-0">
      <Profile />
    </div>
    <div className="ml-80 p-6 pr-0">
      {pageContext.posts?.map(({ id, createdAt, title, content }, idx) => (
        <Fragment key={id}>
          <Preview
            content={content}
            date={formatDate(createdAt)}
            link={`/post/${id}`}
            title={title}
          />
          {idx !== pageContext.posts.length - 1 && <Divider margin="my-12" />}
        </Fragment>
      ))}
    </div>
  </Layout>
)

export default main
