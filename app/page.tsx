import Image from 'next/image'
import Link from 'next/link'
import { ArticleCard } from '@/components/ArticleCard'
import { Section } from '@/components/Section'
import { hero, infos, sports, musique, evenements, interviews } from '@/lib/data'

export default function HomePage() {
  return (
    <div className="space-y-10">
      {/* Top layout like major news sites: big hero + sidebar list */}
      <section className="grid gap-6 md:grid-cols-3">
        <article className="md:col-span-2 card overflow-hidden">
          <div className="relative h-72 w-full md:h-[420px]">
            <Image src={hero.image} alt={hero.title} fill className="object-cover" />
          </div>
          <div className="p-5 space-y-3">
            <span className="badge">{hero.category}</span>
            <h1 className="text-2xl md:text-3xl font-bold leading-tight">{hero.title}</h1>
            <p className="text-stone">{hero.excerpt}</p>
            <p className="text-xs text-stone">{hero.time}</p>
          </div>
        </article>
        <aside className="space-y-4">
          {infos.map((a) => (
            <div key={a.id} className="grid grid-cols-[96px_1fr] gap-3">
              <div className="relative h-20 w-24 rounded-lg overflow-hidden">
                <Image src={a.image} alt={a.title} fill className="object-cover" />
              </div>
              <div>
                <span className="badge">{a.category}</span>
                <h3 className="font-semibold leading-snug"><Link href="#">{a.title}</Link></h3>
                <p className="text-xs text-stone">{a.time}</p>
              </div>
            </div>
          ))}
        </aside>
      </section>

      <Section title="Sports" items={sports} />
      <Section title="Musique" items={musique} />
      <Section title="Événements" items={evenements} />
      <Section title="Interviews" items={interviews} />
    </div>
  )
}
