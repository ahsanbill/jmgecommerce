export function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return

  const header = document.querySelector('header')
  const headerH = header instanceof HTMLElement ? header.offsetHeight : 76
  const extra = window.matchMedia('(max-width: 1023px)').matches ? 16 : 8
  const top = window.scrollY + el.getBoundingClientRect().top - headerH - extra

  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
}
