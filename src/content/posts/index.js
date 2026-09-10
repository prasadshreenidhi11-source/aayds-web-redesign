// Blog index. Listing data lives in postsMeta.js (eager, small); each post's
// HTML body is its own lazy chunk, loaded only when that article is opened.
import { postsMeta } from '../postsMeta'

const bodyLoaders = import.meta.glob('./*.js', { import: 'html' })

export const posts = [...postsMeta].sort((a, b) => b.date.localeCompare(a.date))

export const postBySlug = (slug) => posts.find((p) => p.slug === slug)

export const loadPostHtml = (post) => bodyLoaders[`./${post.slug}.js`]()

export const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })
