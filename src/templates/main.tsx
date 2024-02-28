import { Fragment } from 'react'
import { Divider, Preview, Profile } from '~/components'
import { Layout } from '~/layout'
import { formatDate } from '~/utils'
import type { PageProps } from 'gatsby'

type PageContext = {
  posts: {
    id: string
    title: string
    tag: string
    content: string
    createdAt: string
  }[]
}

const main = ({ pageContext }: PageProps<object, PageContext>) => (
  <Layout className="h-screen overflow-hidden">
    <div className="fixed h-full w-80 border-r border-solid border-gray-200 p-6 pl-0">
      <Profile />
    </div>
    <section className="ml-80 h-screen overflow-hidden pb-14 pl-6 pr-0">
      <div className="h-full overflow-scroll pr-3 pt-6">
        <h1>게시글 목록</h1>
        <div className="mt-3 flex flex-col gap-4">
          {pageContext.posts?.map(
            ({ id, createdAt, tag, title, content }, idx) => (
              <Fragment key={id}>
                <Preview
                  content={content}
                  date={formatDate(createdAt)}
                  link={`/posts/${tag}/${title}`}
                  tag={tag}
                  title={title}
                />
                {idx !== pageContext.posts.length - 1 && (
                  <Divider margin="my-12" />
                )}
              </Fragment>
            )
          )}
        </div>
      </div>
    </section>
  </Layout>
)

export default main
