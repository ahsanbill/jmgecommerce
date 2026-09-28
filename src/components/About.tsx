import { scrollToId } from '../lib/scroll.ts'
import { IconArrow, IconGlobe, IconStar, IconUsers } from './Icons.tsx'

const stats = [
  { value: '5+', label: 'Years of Experience', icon: IconStar },
  { value: '100%', label: 'Client Satisfaction', icon: IconUsers },
  { value: 'Global', label: 'Amazon marketplace', icon: IconGlobe },
]

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-24">
        <div>
          <p className="mb-3 text-xs font-bold tracking-[0.22em] text-gold-dark uppercase">
            About Us
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Your Trusted Amazon FBA Partner
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted">
            At JMG ecommerce, we specialize in providing end-to-end Amazon FBA
            private label services. With over 5 years of experience and a proven
            track record of success, we are your trusted partner in navigating
            the complexities of Amazon marketplaces.
          </p>
          <button
            type="button"
            onClick={() => scrollToId('services')}
            className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-navy"
          >
            Learn More
            <IconArrow />
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 px-5 py-5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-gold-dark shadow-sm">
                <stat.icon className="h-6 w-6" />
              </span>
              <div>
                <p className="text-2xl font-extrabold text-navy">{stat.value}</p>
                <p className="text-sm text-muted">{stat.label}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
