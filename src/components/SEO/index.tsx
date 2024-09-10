import { useSiteMetadata } from '~/hooks'
import type { ReactNode } from 'react'

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
      <meta content={seo.description} name="description" />
      <meta content={seo.image} name="image" />

      <meta content={seo.url} property="og:url" />
      <meta content="website" property="og:type" />
      <meta content={seo.title} property="og:site_name" />
      <meta content={seo.title} property="og:title" />
      <meta content={seo.description} property="og:description" />
      <meta content="ko" property="og:locale" />
      <meta content={seo.image} property="og:image" />
      <meta content="1200" property="og:image:width" />
      <meta content="630" property="og:image:height" />

      <meta content="summary_large_image" name="twitter:card" />
      <meta content={seo.title} name="twitter:title" />
      <meta content={seo.url} name="twitter:url" />
      <meta content={seo.description} name="twitter:description" />
      <meta content={seo.image} name="twitter:image" />
      {children}
    </>
  )
}
