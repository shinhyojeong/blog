import path from 'path'
import type { CreatePagesArgs } from 'gatsby'

type AllContentFulPostRes = {
  allContentfulPost: {
    edges: {
      node: {
        // eslint-disable-next-line camelcase
        contentful_id: string
        title: string
        createdAt: string
        content: {
          content: string
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
            createdAt
            content {
              content
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
        content: content.content
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
