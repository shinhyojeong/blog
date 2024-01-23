import path from 'path'
import type { CreatePagesArgs } from 'gatsby'

type AllContentFulPostRes = {
  allContentfulPost: {
    edges: {
      node: {
        // eslint-disable-next-line camelcase
        contentful_id: string
        title: string
        tag: string
        createdAt: string
        content: {
          childMarkdownRemark: {
            html: string
          }
        }
      }
    }[]
  }
}

export const createMainPage = async ({
  actions,
  graphql
}: Pick<CreatePagesArgs, 'actions' | 'graphql'>) => {
  const result = await graphql<AllContentFulPostRes>(`
    {
      allContentfulPost {
        edges {
          node {
            contentful_id
            title
            tag
            createdAt
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

  const posts =
    result.data?.allContentfulPost.edges.map(
      ({ node: { contentful_id: id, content, ...post } }) => ({
        ...post,
        id,
        content: content.childMarkdownRemark.html
      })
    ) || []

  actions.createPage({
    path: '/',
    component: path.resolve('./src/templates/main.tsx'),
    context: {
      posts
    }
  })
}
