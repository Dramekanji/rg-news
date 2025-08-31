import Image from 'next/image'
import Link from 'next/link'

export type Article = {
  id: string
  title: string
  excerpt?: string
  image: string
  category: string
  href?: string
  time?: string
}

export function ArticleCard({ a, compact=false }: { a: Article, compact?: boolean }) {
  return (
    <article className="card flex flex-col">
      <div className="relative h-48 w-full">
        <Image src={a.image} alt={a.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
      </div>
      <div className="p-4 space-y-2">
        <span className="badge">{a.category}</span>
        <h3 className="text-lg font-semibold leading-snug">
          <Link href={a.href ?? '#'}>{a.title}</Link>
        </h3>
        {!compact && a.excerpt && <p className="text-sm text-stone">{a.excerpt}</p>}
        {a.time && <p className="text-xs text-stone">{a.time}</p>}
      </div>
    </article>
  )
}
