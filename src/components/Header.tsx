import { useEffect, useRef, useState } from 'react'
import { navItems } from '../data/site.ts'
import { scrollToId } from '../lib/scroll.ts'
import Logo from '../components/Logo.tsx'
import { IconClose, IconMenu } from './Icons.tsx'

function headerLine() {
  const header = document.querySelector('header')
  return (header instanceof HTMLElement ? header.offsetHeight : 76) + 20
}

type NavId = (typeof navItems)[number]['id']

function sectionFromScroll() {
  const line = headerLine()
  let current: NavId = navItems[0].id

  for (const item of navItems) {
    const el = document.getElementById(item.id)
    if (!el) continue
    if (el.getBoundingClientRect().top <= line) current = item.id
  }

  const doc = document.documentElement
  if (window.innerHeight + window.scrollY >= doc.scrollHeight - 8) {
    current = navItems[navItems.length - 1].id
  }

  return current
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const spyLocked = useRef(false)
  const lockTimer = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
      if (!spyLocked.current) setActive(sectionFromScroll())
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    return () => window.clearTimeout(lockTimer.current)
  }, [])

  function go(id: string) {
    setActive(id)
    spyLocked.current = true
    window.clearTimeout(lockTimer.current)
    setOpen(false)
    window.setTimeout(() => scrollToId(id), open ? 50 : 0)
    lockTimer.current = window.setTimeout(() => {
      spyLocked.current = false
      setActive(sectionFromScroll())
    }, 1100)
  }

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-shadow ${
        scrolled ? 'shadow-md shadow-navy/5' : 'shadow-sm'
      }`}
    >
      <div className="mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => go('home')}
          className="flex cursor-pointer items-center gap-2.5"
        >
          <Logo showWordmark={false} markClassName="h-16 w-16" />
          <span className="text-[1.05rem] font-extrabold tracking-tight text-navy">
            JMG<span className="font-semibold">ecommerce</span>
          </span>
        </button>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => go(item.id)}
              className={`cursor-pointer rounded-full px-2.5 py-2 text-[0.86rem] font-medium transition-colors xl:px-3 xl:text-[0.92rem] ${
                active === item.id
                  ? 'text-gold-dark'
                  : 'text-ink/75 hover:text-navy'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => go('contact')}
            className="hidden cursor-pointer rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-navy transition hover:bg-gold-dark sm:inline-flex"
          >
            Get in Touch
          </button>
          <button
            type="button"
            className="inline-flex cursor-pointer rounded-lg p-2 text-navy lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="absolute inset-x-0 top-full border-t border-slate-100 bg-white shadow-lg lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6" aria-label="Mobile">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => go(item.id)}
                className={`cursor-pointer rounded-lg px-3 py-3 text-left text-base font-medium ${
                  active === item.id ? 'bg-gold/15 text-gold-dark' : 'text-ink/80'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => go('contact')}
              className="mt-2 cursor-pointer rounded-full bg-gold px-5 py-3 text-sm font-bold text-navy"
            >
              Get in Touch
            </button>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
