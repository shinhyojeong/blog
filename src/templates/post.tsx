import { Divider } from '~/components'
import { Layout } from '~/layout'
import { formatDate } from '~/utils'
import type { PageProps } from 'gatsby'

type PageContext = {
  post: {
    title: string
    content: string
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
    <div>
      <div
        className="markdown-wrapper"
        dangerouslySetInnerHTML={{ __html: pageContext.post.content }}
      />
    </div>
  </Layout>
)

export default post
