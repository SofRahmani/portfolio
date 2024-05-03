import { MetadataRoute } from 'next'

const host = 'https://sofiane-rahmani.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: host,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${host}/fr`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${host}/en`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
  ]
}