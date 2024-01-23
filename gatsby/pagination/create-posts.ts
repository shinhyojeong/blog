import path from 'path'
import type { CreatePagesArgs } from 'gatsby'

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
      path: `/posts/${tag}/${title}`,
      component: path.resolve('./src/templates/post.tsx'),
      context: {
        post: {
          ...post,
          title,
          content: content.childMarkdownRemark.html
        }
      }
    })
  })
}
