import { useEffect } from 'react'
import type { ServiceBlock, ServiceDetails } from '../data/serviceDetails.ts'
import { IconCheck, IconClose } from './Icons.tsx'

type ServiceModalProps = {
  serviceId: string
  title: string
  details: ServiceDetails
  onClose: () => void
}

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*[^*]+\*)/g)
  return (
    <>
      {parts.map((part, index) =>
        part.startsWith('*') && part.endsWith('*') ? (
          <em key={index} className="font-medium text-navy italic">
            {part.slice(1, -1)}
          </em>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </>
  )
}

function Block({ block }: { block: ServiceBlock }) {
  if (block.kind === 'p') {
    return (
      <p className="text-sm leading-7 text-muted">
        <RichText text={block.text} />
      </p>
    )
  }

  if (block.kind === 'h') {
    return (
      <h4 className="pt-2 text-base font-bold tracking-tight text-navy">
        {block.text}
      </h4>
    )
  }

  if (block.kind === 'ul') {
    return (
      <ul className="grid gap-2 sm:grid-cols-2">
        {block.items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-ink">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold-dark">
              <IconCheck className="h-3 w-3" />
            </span>
            {item}
          </li>
        ))}
      </ul>
    )
  }

  if (block.kind === 'price') {
    return (
      <p className="inline-flex rounded-full bg-navy px-4 py-2 text-sm font-bold text-gold">
        {block.text}
      </p>
    )
  }

  if (block.kind === 'note') {
    return (
      <p className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm leading-6 text-muted">
        {block.text}
      </p>
    )
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {block.items.map((pack) => (
        <article
          key={pack.name}
          className="rounded-2xl border border-slate-100 bg-slate-50 p-5"
        >
          <div className="flex items-start justify-between gap-3">
            <h5 className="font-bold text-navy">{pack.name}</h5>
            {pack.price ? (
              <span className="shrink-0 text-sm font-extrabold text-gold-dark">
                {pack.price}
              </span>
            ) : null}
          </div>
          <ul className="mt-3 space-y-1.5">
            {pack.items.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {item}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}

export default function ServiceModal({
  serviceId,
  title,
  details,
  onClose,
}: ServiceModalProps) {
  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-navy/55 p-0 sm:items-center sm:p-6"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
        className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl mx-4 sm:mx-0 sm:max-h-[86vh] sm:rounded-3xl"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="flex items-start justify-between gap-4 border-b border-slate-100 bg-navy px-5 py-5 text-white sm:px-8">
          <div>
            <p className="text-xs font-bold tracking-[0.22em] text-gold uppercase">
              Service {serviceId}
            </p>
            <h3
              id="service-modal-title"
              className="mt-1 text-xl font-extrabold tracking-tight sm:text-2xl"
            >
              {title}
            </h3>
            <p className="mt-2 text-sm text-slate-300">{details.subtitle}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Close service details"
          >
            <IconClose className="h-5 w-5" />
          </button>
        </header>

        <div className="space-y-5 overflow-y-auto px-5 py-6 sm:px-8">
          {details.blocks.map((block, index) => (
            <Block key={`${block.kind}-${index}`} block={block} />
          ))}
        </div>
      </div>
    </div>
  )
}
