import path from 'path'
import type { CreatePagesArgs } from 'gatsby'

type AllContentFulPostRes = {
  allContentfulPost: {
    edges: {
      node: {
        id: string
        title: string
        createdAt: string
        content: {
          content: string
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
            id
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

  result.data?.allContentfulPost.edges.forEach(({ node }) => {
    const { title, createdAt, content } = node
    actions.createPage({
      path: `/post/${node.id}`,
      component: path.resolve('./src/templates/post.tsx'),
      context: {
        post: { title, createdAt, content: content.content }
      }
    })
  })
}
