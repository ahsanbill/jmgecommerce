type IconProps = {
  className?: string
}

export function LogoMark({ className = 'h-8 w-8' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="8" className="fill-gold" />
      <path
        d="M8 22V14.5M13.5 22V10M19 22V13M24 22V16.5"
        stroke="#0b1f3a"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function IconSearch({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16.5 16.5 21 21" strokeLinecap="round" />
    </svg>
  )
}

export function IconList({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path d="M9 7h11M9 12h11M9 17h11" strokeLinecap="round" />
      <circle cx="5" cy="7" r="1.2" fill="currentColor" />
      <circle cx="5" cy="12" r="1.2" fill="currentColor" />
      <circle cx="5" cy="17" r="1.2" fill="currentColor" />
    </svg>
  )
}

export function IconImage({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="5" width="17" height="14" rx="2" />
      <circle cx="9" cy="10" r="1.6" />
      <path d="m3.8 16.2 4.6-3.8 3.2 2.6 3.4-3.4 5.2 4.6" strokeLinejoin="round" />
    </svg>
  )
}

export function IconStore({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 10 5.2 5.6A1 1 0 0 1 6.2 5h11.6a1 1 0 0 1 .99.8L20 10" />
      <path d="M4 10h16v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" />
      <path d="M9 20v-6h6v6" />
    </svg>
  )
}

export function IconAds({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 10v4a2 2 0 0 0 2 2h2l6 4V4L8 8H6a2 2 0 0 0-2 2Z" strokeLinejoin="round" />
      <path d="M17 9.5a3.5 3.5 0 0 1 0 5" strokeLinecap="round" />
    </svg>
  )
}

export function IconShield({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3.5 5 6.2v6.1c0 4.1 2.8 7.1 7 8.2 4.2-1.1 7-4.1 7-8.2V6.2z" strokeLinejoin="round" />
      <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconSeo({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 17V7M10 17V4M16 17v-7M21 17H3" strokeLinecap="round" />
    </svg>
  )
}

export function IconRocket({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path d="M14 4c3.5 1 6 4.5 6 8-3.5 0-7-2.5-8-6Z" />
      <path d="M12.5 7.5 7 13l-1.8 5.8L11 17l5.5-5.5" />
      <path d="M7 13 4.5 15.5" strokeLinecap="round" />
    </svg>
  )
}

export function IconStar({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="m12 3.2 2.3 5.4 5.9.6-4.4 3.9 1.3 5.8L12 15.9 6.9 18.9l1.3-5.8-4.4-3.9 5.9-.6z" />
    </svg>
  )
}

export function IconLayers({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path d="m12 4 8 4-8 4-8-4z" strokeLinejoin="round" />
      <path d="m4 12 8 4 8-4M4 16l8 4 8-4" strokeLinejoin="round" />
    </svg>
  )
}

export function IconBadge({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="10" r="5.5" />
      <path d="m8.5 14.5-1 6 4.5-2.2 4.5 2.2-1-6" strokeLinejoin="round" />
    </svg>
  )
}

export function IconGlobe({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.4 2.4 3.7 5.4 3.7 8.5s-1.3 6.1-3.7 8.5c-2.4-2.4-3.7-5.4-3.7-8.5s1.3-6.1 3.7-8.5Z" />
    </svg>
  )
}

export function IconCheck({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.4">
      <path d="m5 12 5 5 9-10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconArrow({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconPhone({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path
        d="M7.2 3.8h2.4c.6 0 1.1.4 1.2 1l.6 3a1.2 1.2 0 0 1-.3 1.1L9.6 10.4a12 12 0 0 0 4 4l1.5-1.5a1.2 1.2 0 0 1 1.1-.3l3 .6c.6.1 1 .6 1 1.2v2.4c0 .7-.6 1.3-1.3 1.2C10.6 17.3 6.7 13.4 6 6.1c-.1-.7.5-1.3 1.2-1.3Z"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconMail({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

export function IconFiverr({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="7.5" width="17" height="12" rx="2" />
      <path d="M8 7.5V6.4A2.4 2.4 0 0 1 10.4 4h3.2A2.4 2.4 0 0 1 16 6.4v1.1M3.5 12h17" strokeLinecap="round" />
    </svg>
  )
}

export function IconBlog({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <rect x="5" y="3.5" width="14" height="17" rx="2" />
      <path d="M8.5 8h7M8.5 12h7M8.5 16h4.5" strokeLinecap="round" />
    </svg>
  )
}

export function IconMenu({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  )
}

export function IconClose({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
    </svg>
  )
}

export function IconUsers({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M16 14.2a4.5 4.5 0 0 1 4.5 4.8" />
    </svg>
  )
}

export function IconCalendar({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 10h17M8 3.5v3.5M16 3.5v3.5" strokeLinecap="round" />
    </svg>
  )
}

export function IconDownload({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 4v11M8 11.5 12 16l4-4.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 19h14" strokeLinecap="round" />
    </svg>
  )
}

export function IconSync({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path d="M4.5 12a7.5 7.5 0 0 1 12.7-5.4L19 4.5V9h-4.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19.5 12a7.5 7.5 0 0 1-12.7 5.4L5 19.5V15h4.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const serviceIcons = {
  search: IconSearch,
  list: IconList,
  image: IconImage,
  store: IconStore,
  ads: IconAds,
  shield: IconShield,
  seo: IconSeo,
  rocket: IconRocket,
  star: IconStar,
  layers: IconLayers,
  badge: IconBadge,
  globe: IconGlobe,
  users: IconUsers,
  calendar: IconCalendar,
  download: IconDownload,
  sync: IconSync,
}

export function ServiceIcon({
  name,
  className,
}: {
  name: keyof typeof serviceIcons
  className?: string
}) {
  const Icon = serviceIcons[name]
  return <Icon className={className} />
}
