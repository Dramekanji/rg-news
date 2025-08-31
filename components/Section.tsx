import { Article, ArticleCard } from './ArticleCard'

export function Section({ title, items }: { title: string, items: Article[] }) {
  return (
    <section className="my-10">
      <h2 className="section-title">{title}</h2>
      <div className="grid gap-5 md:grid-cols-3">
        {items.map(a => <ArticleCard key={a.id} a={a} />)}
      </div>
    </section>
  )
}
