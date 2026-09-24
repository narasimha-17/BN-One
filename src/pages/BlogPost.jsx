import { Link, Navigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import SiteFooter from '../components/SiteFooter.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import { posts, formatDate } from '../data/blogPosts.js'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)
  usePageTitle(post ? `${post.title} — Agentosys` : 'Blog — Agentosys', post?.excerpt)

  if (!post) return <Navigate to="/blog" replace />

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2)

  return (
    <div className="relative min-h-[100dvh] overflow-x-clip bg-transparent font-sans text-volcanoWhite antialiased selection:bg-volcanoCrimson/30">
      <Navbar />

      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-8 pt-32 sm:px-6 md:pt-40">
        <article className="mx-auto max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-volcanoCrimson hover:underline">
            <span aria-hidden="true">←</span> All articles
          </Link>

          <header className="mt-6 space-y-5">
            <span className="inline-block rounded-full bg-[#F3EEFA] px-3 py-1 text-xs font-semibold text-volcanoCrimson">
              {post.category}
            </span>
            <h1 className="text-3xl font-black leading-[1.1] tracking-tighter sm:text-5xl">{post.title}</h1>
            <p className="text-lg leading-relaxed text-zinc-400">{post.excerpt}</p>
            <p className="flex flex-wrap items-center gap-x-3 text-sm text-zinc-500">
              <span>{post.author}</span>
              <span aria-hidden="true">·</span>
              <span>{formatDate(post.date)}</span>
              <span aria-hidden="true">·</span>
              <span>{post.readTime} min read</span>
            </p>
            <div className="accent-line h-1 w-24 rounded-full" />
          </header>

          <div className="mt-10 space-y-6 text-base leading-[1.8] text-volcanoWhite">
            {post.body.map((block, i) => {
              if (block.type === 'h2') {
                return (
                  <h2 key={i} className="pt-4 text-2xl font-extrabold tracking-tight">
                    {block.text}
                  </h2>
                )
              }
              if (block.type === 'ul') {
                return (
                  <ul key={i} className="space-y-3">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-volcanoCrimson" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )
              }
              return (
                <p key={i} className="text-zinc-400">
                  {block.text}
                </p>
              )
            })}
          </div>
        </article>

        <section className="mx-auto mt-16 max-w-3xl border-t border-zinc-900/60 pt-10">
          <h2 className="mb-6 text-xl font-bold">Keep reading</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {related.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="hud-card group rounded-2xl p-6 hover:-translate-y-1">
                <span className="text-xs font-semibold text-volcanoCrimson">{p.category}</span>
                <h3 className="mt-2 text-lg font-bold leading-snug transition-colors group-hover:text-volcanoCrimson">{p.title}</h3>
                <p className="mt-2 text-xs text-zinc-500">{p.readTime} min read</p>
              </Link>
            ))}
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  )
}
