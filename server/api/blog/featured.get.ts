export default defineEventHandler(async (event) => {
  try {
    const posts = await queryCollection(event, 'blog')
      .where('featured', '=', true)
      .all()

    // Sort by publishedAt descending and limit to 6
    const featuredPosts = posts
      .sort((a, b) => new Date(b.publishedAt || 0).getTime() - new Date(a.publishedAt || 0).getTime())
      .slice(0, 6)

    return featuredPosts
  }
  catch (error) {
    console.error('Failed to fetch featured posts:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch featured posts',
    })
  }
})
