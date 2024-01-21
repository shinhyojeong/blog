import { createMainPage, createPostsPage } from './pagination'
import type { CreatePagesArgs } from 'gatsby'

export const createPages = async ({ graphql, actions }: CreatePagesArgs) => {
  await createMainPage({ graphql, actions })
  await createPostsPage({ graphql, actions })
}
