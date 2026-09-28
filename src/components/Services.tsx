import { useState } from 'react'
import { serviceDetails } from '../data/serviceDetails.ts'
import { services } from '../data/site.ts'
import { ServiceIcon } from './Icons.tsx'
import ServiceModal from './ServiceModal.tsx'

export default function Services() {
  const [openId, setOpenId] = useState<string | null>(null)
  const openService = services.find((service) => service.id === openId)
  const openDetails = openId ? serviceDetails[openId] : undefined

  return (
    <section id="services" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold tracking-[0.22em] text-gold-dark uppercase">
            Our Services
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Comprehensive Amazon FBA Services
          </h2>
          <p className="mt-4 text-base text-muted">
            From product research to post-launch management, we handle it all.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.id}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-5 flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 text-navy">
                  <ServiceIcon name={service.icon} className="h-5 w-5" />
                </span>
                <span className="text-xs font-bold tracking-widest text-slate-300">
                  {service.id}
                </span>
              </div>
              <h3 className="text-lg font-bold text-navy">{service.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-muted">
                {service.text}
              </p>
              <button
                type="button"
                onClick={() => setOpenId(service.id)}
                className="mt-4 cursor-pointer self-start text-sm font-bold text-gold-dark hover:text-navy"
              >
                Read more
              </button>
            </article>
          ))}
        </div>
      </div>

      {openService && openDetails ? (
        <ServiceModal
          serviceId={openService.id}
          title={openService.title}
          details={openDetails}
          onClose={() => setOpenId(null)}
        />
      ) : null}
    </section>
  )
}
