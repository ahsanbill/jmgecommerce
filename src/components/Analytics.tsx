import { analyticsFeatures } from '../data/site.ts'
import { ServiceIcon } from './Icons.tsx'

export default function Analytics() {
  return (
    <section id="analytics" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div>
          <p className="mb-3 text-xs font-bold tracking-[0.22em] text-gold-dark uppercase">
            Amazon Analytics Platform
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            See every Amazon number that matters, in one place
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            A seller dashboard built for Amazon brands. Connect your account
            securely, review sales, ads, inventory, and keywords, then
            download the reports your team already uses.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {analyticsFeatures.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 text-navy">
                <ServiceIcon name={feature.icon} className="h-5 w-5" />
              </span>
              <h3 className="text-base font-bold text-navy">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
