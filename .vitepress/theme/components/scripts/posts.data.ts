// posts.data.ts
import { createContentLoader } from 'vitepress'
import type { CardData } from 'ebrain-ui-vue'

export default createContentLoader('posts/**/*.md', {
  excerpt: true,
  transform(rawData): CardData[] {
    return rawData
      .filter(({ url }) => !url.endsWith('/index.md'))
      .map(({ url, frontmatter, excerpt }) => {
        const md_url = url.replace(/^\/posts\//, '').replace(/\.html$/, '')
        
        return {
          id: frontmatter.id || md_url,
          md_url: md_url,
          title: frontmatter.title || '未命名文章',
          summary: frontmatter.summary || frontmatter.excerpt || excerpt || '',
          image_url: frontmatter.image_url || frontmatter.imageUrl || '',
          class: frontmatter.class || frontmatter.category || '',
          tags: frontmatter.tags || [],
          created_at: frontmatter.created_at || frontmatter.date || frontmatter.createdAt || new Date().toISOString(),
          top: frontmatter.top || false
        }
      })
      .sort((a, b) => {
        if (a.top && !b.top) return -1
        if (!a.top && b.top) return 1
        const dateA = new Date(a.created_at).getTime()
        const dateB = new Date(b.created_at).getTime()
        return dateB - dateA
      })
  }
})