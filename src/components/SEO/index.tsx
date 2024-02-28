import { ReactNode } from 'react'
import { useSiteMetadata } from '~/hooks'

export type SEOProps = {
  pathname?: string
  title?: string
  description?: string
  image?: string
  children?: ReactNode
}

export const SEO = ({
  title,
  description,
  pathname = '/',
  children,
  image
}: SEOProps) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image: defaultImage,
    siteUrl
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image || `${siteUrl}${defaultImage}`,
    url: `${siteUrl}/${pathname}`
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:url" content={seo.url} data-gatsby-head="true" />
      <meta property="og:type" content="website" data-gatsby-head="true" />
      <meta
        property="og:site_name"
        content={seo.title}
        data-gatsby-head="true"
      />
      <meta property="og:title" content={seo.title} data-gatsby-head="true" />
      <meta
        property="og:description"
        content={seo.description}
        data-gatsby-head="true"
      />
      <meta property="og:image" content={seo.image} data-gatsby-head="true" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      {children}
    </>
  )
}
