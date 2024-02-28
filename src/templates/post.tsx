import Prism from 'prismjs'
import { useEffect } from 'react'
import { Divider, SEO, Tag } from '~/components'
import { Layout } from '~/layout'
import { formatDate, formatMetaDescription } from '~/utils'
import type { HeadProps, PageProps } from 'gatsby'
import '~/styles/markdown.css'
import { PAGE_URLS } from '../constants'

type PageContext = {
  post: {
    title: string
    content: string
    tag: string
    createdAt: string
  }
}

const post = ({ pageContext }: PageProps<object, PageContext>) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <Layout>
      <div className="mx-auto max-w-3xl">
        <div className="pb-3 pt-12">
          <h1>{pageContext.post.title}</h1>
          <p className="mt-4 text-gray-500">
            {formatDate(pageContext.post.createdAt)}
          </p>
          <div className="mt-4">
            <Tag>{pageContext.post.tag}</Tag>
          </div>
        </div>
        <Divider margin="my-4" />
        <div className="mb-8 mt-12">
          <div
            className="markdown"
            dangerouslySetInnerHTML={{ __html: pageContext.post.content }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const Head = ({ pageContext }: HeadProps<object, PageContext>) => (
  <SEO
    title={pageContext.post.title}
    description={formatMetaDescription(pageContext.post.content)}
    pathname={PAGE_URLS.POST(pageContext.post.tag, pageContext.post.title)}
  />
)

export default post
