import { contact, socialLinks } from '../data/site.ts'
import { IconFiverr, IconMail, IconPhone } from './Icons.tsx'

export default function Contact() {
  return (
    <section id="contact" className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
        <div>
          <p className="mb-3 text-xs font-bold tracking-[0.22em] text-gold uppercase">
            Get in Touch
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Let&apos;s Build Your Amazon Success Together
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-6 text-slate-300">
            Ready to take your Amazon business to the next level? Contact JMG
            ecommerce today and let us help you achieve your goals.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-sm font-bold">Contact</p>
            <a
              href={contact.phoneHref}
              className="mt-3 flex items-center gap-3 text-sm text-slate-200 hover:text-gold"
            >
              <IconPhone className="h-4 w-4 text-gold" />
              {contact.phone}
            </a>
            <a
              href={contact.emailHref}
              className="mt-2 flex items-center gap-3 text-sm text-slate-200 hover:text-gold"
            >
              <IconMail className="h-4 w-4 text-gold" />
              {contact.email}
            </a>
            <a
              href={contact.fiverr}
              target="_blank"
              rel="noreferrer"
              className="mt-2 flex items-start gap-3 text-sm text-slate-200 hover:text-gold"
            >
              <IconFiverr className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <div className="flex flex-row items-center gap-2">
                <span className="block">Fiverr</span>
                <span className="mt-0.5 block text-xs text-slate-400">
                  (Get expert opinion)
                </span>
              </div>
            </a>
          </div>

          <div>
            <p className="text-sm font-bold">Follow Us</p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-slate-300 hover:text-gold"
                  >
                    {link.href.replace('https://', '')}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
