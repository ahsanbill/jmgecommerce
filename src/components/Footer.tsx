import { contact } from '../data/site.ts'
import { scrollToId } from '../lib/scroll.ts'
import { IconBlog, IconMail, IconPhone, LogoMark } from './Icons.tsx'

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <button
            type="button"
            onClick={() => scrollToId('home')}
            className="flex items-center gap-2.5"
          >
            <LogoMark className="h-9 w-9" />
            <span className="text-base font-extrabold tracking-tight text-navy">
              JMG<span className="font-semibold">ecommerce</span>
            </span>
          </button>
          <p className="mt-3 max-w-xs text-sm leading-6 text-muted">
            Amazon FBA private label services. Your growth, our mission.
          </p>
        </div>

        <div>
          <p className="text-sm font-bold text-navy">Contact</p>
          <a
            href={contact.phoneHref}
            className="mt-3 flex items-center gap-2.5 text-sm text-muted hover:text-navy"
          >
            <IconPhone className="h-4 w-4 text-gold-dark" />
            {contact.phone}
          </a>
          <a
            href={contact.emailHref}
            className="mt-2 flex items-center gap-2.5 text-sm text-muted hover:text-navy"
          >
            <IconMail className="h-4 w-4 text-gold-dark" />
            {contact.email}
          </a>
          <a
            href={contact.blogUrl || ''}
            target="_blank"
            rel="noreferrer"
            className="mt-2 flex items-center gap-2.5 text-sm text-muted hover:text-navy"
          >
            <IconBlog className="h-4 w-4 text-gold-dark" />
            Read Blog: Amazon Tips & Tricks
          </a>
        </div>

        <div>
          <p className="text-sm font-bold text-navy">Contact us on WhatsApp</p>
          <p className="mt-3 text-sm leading-6 text-muted">
            Message us on WhatsApp for a quick conversation about your Amazon
            or TikTok Shop plan.
          </p>
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#1ebe5d]"
          >
            WhatsApp Us
          </a>
        </div>
      </div>

      <div className="border-t border-slate-100">
        <p className="mx-auto max-w-7xl px-4 py-4 text-xs text-muted sm:px-6 lg:px-8">
          © {new Date().getFullYear()} JMG ecommerce. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
