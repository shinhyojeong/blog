export const BASE_URLS = 'https://www.shinhyojeong.dev'

export const PAGE_URLS = {
  MAIN: '/',
  POST: (tag: string, title: string) => `/posts/${tag}/${title}`
} as const
