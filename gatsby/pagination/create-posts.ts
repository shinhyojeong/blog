import path from 'path'
import type { CreatePagesArgs } from 'gatsby'

type AllContentFulPostRes = {
  allContentfulPost: {
    edges: {
      node: {
        title: string
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
    const { title, createdAt, content } = node

    actions.createPage({
      path: `/posts/${title}`,
      component: path.resolve('./src/templates/post.tsx'),
      context: {
        post: {
          title,
          createdAt,
          content: content.childMarkdownRemark.html
        }
      }
    })
  })
}
