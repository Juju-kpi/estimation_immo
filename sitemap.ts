// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://sellmyhome.fr',
      priority: 1,
    },
    {
      url: 'https://sellmyhome.fr/estimation',
      priority: 0.9,
    },
    {
      url: 'https://sellmyhome.fr/contact',
      priority: 0.8,
    },
    {
      url: 'https://sellmyhome.fr/presentation',
      priority: 0.8,
    },
    {
      url: 'https://sellmyhome.fr/nous',
      priority: 0.9,
    },
  ]
}
