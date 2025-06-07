import { defineCollection, defineContentConfig } from '@nuxt/content'
import { asSeoCollection } from '@nuxtjs/seo/content'

export default defineContentConfig({
  collections: {
    content: defineCollection(
      // adds the robots frontmatter key to the collection
      asSeoCollection({
        type: 'page',
        source: '**/*.md',
      }),
    ),
  },
})
