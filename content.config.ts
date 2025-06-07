import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import { asSeoCollection } from '@nuxtjs/seo/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection(
      asSeoCollection({
        type: 'page',
        source: 'blog/*.md',
        schema: z.object({
          tags: z.array(z.string()),
          featured: z.boolean(),
          image: z.string(),
          alt: z.string(),
          publishedAt: z.string().datetime(),
          author: z.string(),
        }),
      }),
    ),
  },
})
