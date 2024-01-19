import { createMainPage } from './pagination/create-main'
import type { CreatePagesArgs } from 'gatsby'

export const createPages = async ({ graphql, actions }: CreatePagesArgs) => {
  await createMainPage({ graphql, actions })
}
