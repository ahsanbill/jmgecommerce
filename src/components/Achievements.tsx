import { contact } from '../data/site.ts'

export default function Achievements() {
  return (
    <section id="achievements" className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="mb-3 text-xs font-bold tracking-[0.22em] text-gold uppercase">
          Our Achievements
        </p>
        <h2 className="max-w-lg text-3xl font-extrabold tracking-tight sm:text-4xl">
          Results That Speak for Themselves
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <article>
            <p className="text-5xl font-extrabold text-gold">50+</p>
            <h3 className="mt-2 text-lg font-bold">Products Launched</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Successfully launched more than 34 products on Amazon in the US,
              UK, and Canada marketplaces.
            </p>
          </article>
          <article>
            <p className="text-5xl font-extrabold text-gold">71%</p>
            <h3 className="mt-2 text-lg font-bold">Success Rate</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              We take pride in a high success rate of product launches, built
              on quality and excellence.
            </p>
          </article>
          <article>
            <h3 className="text-lg font-bold">Our Project Demonstrations</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Review selected work and live marketplace examples through our
              portfolios.
            </p>
            <div className="mt-4 flex flex-col items-start gap-2">
              <a
                href={contact.fiverrPortfolio}
                target="_blank"
                rel="noreferrer"
                className="inline-flex text-sm font-semibold text-gold underline-offset-4 hover:underline"
              >
                Fiverr Portfolio
              </a>
              <a
                href={contact.upworkPortfolio}
                target="_blank"
                rel="noreferrer"
                className="inline-flex text-sm font-semibold text-gold underline-offset-4 hover:underline"
              >
                Upwork Portfolio
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
