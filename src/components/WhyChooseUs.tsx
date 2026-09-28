import { whyItems } from '../data/site.ts'
import { ServiceIcon } from './Icons.tsx'

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <p className="mb-3 text-xs font-bold tracking-[0.22em] text-gold-dark uppercase">
          Why Choose Us
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Your Success is Our Priority
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {whyItems.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-6"
            >
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-gold-dark shadow-sm">
                <ServiceIcon name={item.icon} className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-bold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
