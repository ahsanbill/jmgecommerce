import { scrollToId } from '../lib/scroll.ts'
import { IconArrow } from './Icons.tsx'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(240,180,41,0.12),transparent_32%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-20">
        <div className="max-w-xl">
          <p className="mb-4 text-xs font-bold tracking-[0.22em] text-gold uppercase">
            Your Amazon Success Partner
          </p>
          <h1 className="text-4xl leading-[1.1] font-extrabold text-white sm:text-5xl lg:text-[3.4rem]">
            JMG ecommerce Amazon FBA Private Label Services
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
            With over 5 years of experience and a proven track record of success,
            we specialize in providing end-to-end Amazon FBA private label
            services. Let us help you grow, develop, and scale your brand on
            Amazon and beyond.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => scrollToId('contact')}
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-navy transition hover:bg-gold-dark"
            >
              Get Started
              <IconArrow />
            </button>
            <button
              type="button"
              onClick={() => scrollToId('services')}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/5"
            >
              Our Services
            </button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-white/80">
            <AmazonWordmark />
            <TikTokWordmark />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <p className="absolute top-2 right-2 z-10 hidden max-w-[8rem] text-right text-xs font-semibold text-white/90 sm:block">
            Your Brand, Our Expertise
          </p>
          <img
            src="/hero-amazon.jpg"
            alt="Amazon FBA packages and a laptop showing the Amazon storefront"
            className="h-auto w-full rounded-2xl object-cover shadow-2xl shadow-black/40"
          />
          <div className="absolute right-3 bottom-3 flex items-center gap-3 rounded-xl bg-navy/90 px-3 py-2.5 text-white shadow-lg ring-1 ring-white/10 backdrop-blur sm:right-5 sm:bottom-5 sm:px-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg font-black text-[#FF9900]">
              a
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-black text-navy">
              ♪
            </span>
            <p className="max-w-[10.5rem] text-[11px] leading-4 font-medium sm:text-xs">
              We also provide Amazon Private Label & TikTok Private Label Services
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function AmazonWordmark() {
  return (
    <div className="flex flex-col items-start">
      <span className="text-2xl font-semibold tracking-tight lowercase">amazon</span>
      <svg viewBox="0 0 80 12" className="mt-[-4px] h-3 w-20" aria-hidden="true">
        <path d="M4 3c22 12 50 12 72 0" fill="none" stroke="#FF9900" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  )
}

function TikTokWordmark() {
  return (
    <div className="flex items-center gap-2 text-sm font-semibold">
      <span className="text-lg font-black">♪</span>
      TikTok Shop
    </div>
  )
}
