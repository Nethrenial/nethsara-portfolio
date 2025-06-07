export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  const searchTerm = query.search as string || ''
  const tag = query.tag as string || ''
  const page = parseInt(query.page as string || '1', 10)
  const limit = parseInt(query.limit as string || '12', 10)
  const skip = (page - 1) * limit

  try {
    // Get all posts first, then apply filters manually
    // This is necessary because SQL operators don't support array operations like array-contains
    const allPosts = await queryCollection(event, 'blog').all()

    let filteredPosts = allPosts

    // Apply tag filter manually
    if (tag) {
      filteredPosts = filteredPosts.filter((post) => {
        return post.tags && Array.isArray(post.tags) && post.tags.includes(tag)
      })
    }

    // Apply search filter manually
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase()
      filteredPosts = filteredPosts.filter((post) => {
        const searchableContent = [
          post.title || '',
          post.description || '',
          post.author || '',
          ...(post.tags || []),
        ].join(' ').toLowerCase()

        return searchableContent.includes(searchLower)
      })
    }

    // Sort by publishedAt descending
    const sortedPosts = filteredPosts
      .sort((a, b) => new Date(b.publishedAt || 0).getTime() - new Date(a.publishedAt || 0).getTime())

    // Apply pagination
    const paginatedPosts = sortedPosts.slice(skip, skip + limit)

    return {
      posts: paginatedPosts,
      total: filteredPosts.length,
      page,
      limit,
      hasMore: skip + limit < filteredPosts.length,
    }
  }
  catch (error) {
    console.error('Failed to fetch blog posts:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch blog posts',
    })
  }
})
