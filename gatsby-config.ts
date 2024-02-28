import dotenv from 'dotenv'
import type { GatsbyConfig } from 'gatsby'
import { BASE_URLS } from './src/constants'

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: '신효정 개발 블로그',
    description: '웹 프론트엔드 개발자 신효정입니다.',
    image: '/favicon.ico',
    siteUrl: BASE_URLS
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-netlify',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: ['gatsby-remark-prismjs']
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        ootnotes: true,
        gfm: true,
        plugins: []
      }
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: BASE_URLS,
        stripQueryString: true
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: BASE_URLS,
        sitemap: `${BASE_URLS}/sitemap/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
  ]
}

export default config
