<template>
  <div class="pt-16 lg:pt-0">
    <!-- Hero Section -->
    <section class="py-20 bg-[var(--color-secondary)]">
      <div class="max-w-6xl mx-auto px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold text-[var(--color-text-primary)] mb-6">
            My <span class="gradient-text">Blog</span>
          </h1>
          <p class="text-[var(--color-text-secondary)] text-lg md:text-xl mb-8">
            Thoughts, tutorials, and insights on web development, technology, and software engineering.
          </p>

          <!-- Search and Filter -->
          <div class="max-w-2xl mx-auto">
            <div class="flex flex-col md:flex-row gap-4 mb-8">
              <div class="relative flex-1">
                <Icon
                  name="heroicons:magnifying-glass"
                  class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--color-text-secondary)]"
                />
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search articles..."
                  class="w-full pl-10 pr-4 py-3 bg-[var(--color-accent)] border border-[var(--color-border)] rounded-lg text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-primary)] transition-colors duration-300"
                >
              </div>
              <select
                v-model="selectedTag"
                class="px-4 py-3 bg-[var(--color-accent)] border border-[var(--color-border)] rounded-lg text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-primary)] transition-colors duration-300"
              >
                <option value="">
                  All Categories
                </option>
                <option
                  v-for="tag in allTags"
                  :key="tag"
                  :value="tag"
                >
                  {{ tag }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Posts -->
    <section class="py-20">
      <div class="max-w-6xl mx-auto px-8">
        <!-- Featured Posts -->
        <div
          v-if="featuredPosts.length > 0 && !searchQuery && !selectedTag"
          class="mb-20"
        >
          <h2 class="text-3xl font-bold text-[var(--color-text-primary)] mb-12">
            Featured <span class="gradient-text">Articles</span>
          </h2>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <article
              v-for="post in featuredPosts"
              :key="post._path"
              class="group bg-[var(--color-secondary)] rounded-xl overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-all duration-300 card-hover"
            >
              <div class="relative overflow-hidden">
                <NuxtImg
                  :src="post.image"
                  :alt="post.title"
                  class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div class="absolute top-4 left-4">
                  <span class="bg-[var(--color-primary)] text-[var(--color-surface)] px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>

              <div class="p-6">
                <div class="flex items-center space-x-4 mb-4 text-sm text-[var(--color-text-secondary)]">
                  <span>{{ formatDate(post.publishedAt) }}</span>
                  <span>•</span>
                  <span>{{ calculateReadTime(post.body) }} min read</span>
                </div>

                <h3 class="text-xl font-semibold text-[var(--color-text-primary)] mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
                </h3>

                <p class="text-[var(--color-text-secondary)] mb-4 line-clamp-3">
                  {{ post.description }}
                </p>

                <div class="flex flex-wrap gap-2 mb-4">
                  <span
                    v-for="tag in post.tags"
                    :key="tag"
                    class="px-2 py-1 bg-[var(--color-accent)] text-[var(--color-text-secondary)] text-xs rounded"
                  >
                    {{ tag }}
                  </span>
                </div>

                <NuxtLink
                  :to="post._path"
                  class="inline-flex items-center text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors duration-300 font-medium"
                >
                  Read More
                  <Icon
                    name="heroicons:arrow-right"
                    class="ml-2 w-4 h-4"
                  />
                </NuxtLink>
              </div>
            </article>
          </div>
        </div>

        <!-- All Posts Grid -->
        <div>
          <h2 class="text-3xl font-bold text-[var(--color-text-primary)] mb-12">
            {{ searchQuery || selectedTag ? 'Search Results' : 'All Articles' }}
          </h2>

          <div
            v-if="filteredPosts.length === 0"
            class="text-center py-20"
          >
            <Icon
              name="heroicons:document-text"
              class="w-16 h-16 text-[var(--color-text-secondary)] mx-auto mb-4"
            />
            <h3 class="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
              No articles found
            </h3>
            <p class="text-[var(--color-text-secondary)]">
              Try adjusting your search terms or filters.
            </p>
          </div>

          <div
            v-else
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <article
              v-for="post in filteredPosts"
              :key="post._path"
              class="group bg-[var(--color-secondary)] rounded-xl overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-all duration-300 card-hover"
            >
              <div class="relative overflow-hidden">
                <NuxtImg
                  :src="post.image"
                  :alt="post.title"
                  class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              <div class="p-6">
                <div class="flex items-center space-x-4 mb-4 text-sm text-[var(--color-text-secondary)]">
                  <span>{{ formatDate(post.publishedAt) }}</span>
                  <span>•</span>
                  <span>{{ calculateReadTime(post.body) }} min read</span>
                </div>

                <h3 class="text-lg font-semibold text-[var(--color-text-primary)] mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
                </h3>

                <p class="text-[var(--color-text-secondary)] text-sm mb-4 line-clamp-2">
                  {{ post.description }}
                </p>

                <div class="flex flex-wrap gap-2 mb-4">
                  <span
                    v-for="tag in post.tags.slice(0, 2)"
                    :key="tag"
                    class="px-2 py-1 bg-[var(--color-accent)] text-[var(--color-text-secondary)] text-xs rounded"
                  >
                    {{ tag }}
                  </span>
                  <span
                    v-if="post.tags.length > 2"
                    class="px-2 py-1 bg-[var(--color-primary)]/20 text-[var(--color-primary)] text-xs rounded"
                  >
                    +{{ post.tags.length - 2 }}
                  </span>
                </div>

                <NuxtLink
                  :to="post._path"
                  class="inline-flex items-center text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors duration-300 font-medium text-sm"
                >
                  Read More
                  <Icon
                    name="heroicons:arrow-right"
                    class="ml-2 w-4 h-4"
                  />
                </NuxtLink>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Fetch all blog posts
const { data: posts } = await queryContent('/blog').sort({ publishedAt: -1 }).find()

const searchQuery = ref('')
const selectedTag = ref('')

// Get all unique tags
const allTags = computed(() => {
  const tags = new Set()
  posts.forEach((post) => {
    post.tags?.forEach(tag => tags.add(tag))
  })
  return Array.from(tags).sort()
})

// Featured posts
const featuredPosts = computed(() => {
  return posts.filter(post => post.featured).slice(0, 2)
})

// Filtered posts based on search and tag
const filteredPosts = computed(() => {
  let filtered = posts

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(post =>
      post.title.toLowerCase().includes(query)
      || post.description.toLowerCase().includes(query)
      || post.tags?.some(tag => tag.toLowerCase().includes(query)),
    )
  }

  if (selectedTag.value) {
    filtered = filtered.filter(post => post.tags?.includes(selectedTag.value))
  }

  // Remove featured posts from regular listing if no filters applied
  if (!searchQuery.value && !selectedTag.value) {
    filtered = filtered.filter(post => !post.featured)
  }

  return filtered
})

// Helper functions
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const calculateReadTime = (content) => {
  if (!content) return 0
  const wordsPerMinute = 200
  const words = content.split(' ').length
  return Math.ceil(words / wordsPerMinute)
}

// SEO
useSeoMeta({
  title: 'Blog - Nethsara Elvitigala | Web Development Insights',
  description: 'Read my latest thoughts and tutorials on web development, JavaScript, Vue.js, and modern software engineering practices.',
})
</script>
