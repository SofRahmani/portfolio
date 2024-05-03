import { MetadataRoute } from 'next'

const host = 'https://sofiane-rahmani.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/fr', '/en', ''],
      disallow: '/private/',
    },
    sitemap: `${host}/sitemap.xml`,
  }
}