import dotenv from 'dotenv'
import type { GatsbyConfig } from 'gatsby'

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`
})
const SITE_URL = 'https://shinhyojeong.netlify.app'

const config: GatsbyConfig = {
  siteMetadata: {
    title: `blog`,
    siteUrl: SITE_URL
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
        siteUrl: SITE_URL,
        stripQueryString: true
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: SITE_URL,
        sitemap: `${SITE_URL}/sitemap/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
  ]
}

export default config
