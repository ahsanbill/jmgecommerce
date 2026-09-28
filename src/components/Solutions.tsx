import { contact, solutionItems } from '../data/site.ts'
import { IconCheck } from './Icons.tsx'

export default function Solutions() {
  return (
    <section id="solutions" className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div>
          <p className="mb-3 text-xs font-bold tracking-[0.22em] text-gold-dark uppercase">
            Our Solutions
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            We Handle the Details, So You Can Focus on Growth
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted">
            We provide end-to-end solutions to make your Amazon journey smooth
            and hassle-free.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {solutionItems.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold-dark">
                  <IconCheck className="h-3.5 w-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <a
            href={contact.fiverr}
            target="_blank"
            rel="noreferrer"
            className="mt-8 flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition hover:border-gold/40"
          >
            <span className="rounded-lg bg-[#1dbf73] px-3 py-1.5 text-sm font-extrabold text-white">
              fiverr
            </span>
            <span>
              <span className="block text-sm font-bold text-navy">Need Expert Opinion?</span>
              <span className="block text-xs text-muted">Contact us on Fiverr</span>
            </span>
          </a>
        </div>

        <div className="relative">
          <img
            src="/solutions-growth.jpg"
            alt="Amazon packages with a rising growth chart"
            className="h-auto w-full rounded-2xl object-cover shadow-xl"
          />
          <p className="absolute right-4 bottom-4 rounded-lg bg-navy/85 px-3 py-2 text-xs font-semibold text-white backdrop-blur">
            Build Your Brand, Grow Globally
          </p>
        </div>
      </div>
    </section>
  )
}
