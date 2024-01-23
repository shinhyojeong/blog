import { Divider, Tag } from '~/components'
import { Layout } from '~/layout'
import { formatDate } from '~/utils'
import type { PageProps } from 'gatsby'

type PageContext = {
  post: {
    title: string
    content: string
    tag: string
    createdAt: string
  }
}

const post = ({ pageContext }: PageProps<object, PageContext>) => (
  <Layout>
    <div className="pb-8 pt-12">
      <h1>{pageContext.post.title}</h1>
      <p className="mt-4 text-gray-500">
        {formatDate(pageContext.post.createdAt)}
      </p>
    </div>
    <Divider margin="my-2" />
    <div className="mb-8 mt-2">
      <div
        className="markdown-wrapper"
        dangerouslySetInnerHTML={{ __html: pageContext.post.content }}
      />
    </div>
    <div className="mt-8">
      <Tag>{pageContext.post.tag}</Tag>
    </div>
  </Layout>
)

export default post
