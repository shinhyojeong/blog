import { Fragment } from 'react'
import { Preview, Profile, SEO } from '~/components'
import { PAGE_URLS } from '~/constants'
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
  <Layout className="h-screen flex-col overflow-hidden max-md:overflow-auto">
    <div className="max-md:border-r-none max-md:pt- fixed h-full w-80 border-r border-solid border-gray-200 p-6 pl-0 max-md:relative max-md:h-auto max-md:w-full max-md:border-b max-md:border-r-0 max-md:border-solid max-md:border-gray-200">
      <Profile />
    </div>
    <section className="ml-80 h-screen overflow-hidden pb-14 pl-6 pr-0 max-md:relative max-md:m-0 max-md:h-auto max-md:pl-0">
      <div className="h-full overflow-scroll pr-3 pt-6 max-md:pr-0">
        <h1>게시글 목록</h1>
        <div className="mt-3 flex flex-col gap-6">
          {pageContext.posts?.map(({ id, createdAt, tag, title, content }) => (
            <Fragment key={id}>
              <Preview
                content={content}
                date={formatDate(createdAt)}
                link={PAGE_URLS.POST(tag, title)}
                tag={tag}
                title={title}
              />
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  </Layout>
)

export const Head = () => <SEO />

export default main
