import { ReactNode } from 'react'
import { useSiteMetadata } from '~/hooks'

export type SEOProps = {
  pathname?: string
  title?: string
  description?: string
  children?: ReactNode
}

export const SEO = ({
  title,
  description,
  pathname = '/',
  children
}: SEOProps) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}, ${pathname}`,
    icon: image
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <link rel="icon" href={seo.icon} />
      {children}
    </>
  )
}
