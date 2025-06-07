export default defineEventHandler(async (event) => {
  try {
    const posts = await queryCollection(event, 'blog').all()

    const tags = new Set<string>()
    posts.forEach((post) => {
      if (post.tags && Array.isArray(post.tags)) {
        post.tags.forEach(tag => tags.add(tag))
      }
    })

    return Array.from(tags).sort()
  }
  catch (error) {
    console.error('Failed to fetch tags:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch blog tags',
    })
  }
})
