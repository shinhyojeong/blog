import path from 'path'
import type { CreatePagesArgs } from 'gatsby'
import { PAGE_URLS } from '../../src/constants'

type AllContentFulPostRes = {
  allContentfulPost: {
    edges: {
      node: {
        title: string
        createdAt: string
        tag: string
        content: {
          childMarkdownRemark: {
            html: string
          }
        }
      }
    }[]
  }
}

export const createPostsPage = async ({
  graphql,
  actions
}: Pick<CreatePagesArgs, 'actions' | 'graphql'>) => {
  const result = await graphql<AllContentFulPostRes>(`
    {
      allContentfulPost {
        edges {
          node {
            title
            createdAt
            tag
            content {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  `)

  result.data?.allContentfulPost.edges.forEach(({ node }) => {
    const { title, content, tag, ...post } = node

    actions.createPage({
      path: PAGE_URLS.POST(tag, title),
      component: path.resolve('./src/templates/post.tsx'),
      context: {
        post: {
          ...post,
          title,
          tag,
          content: content.childMarkdownRemark.html
        }
      }
    })
  })
}
