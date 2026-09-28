type LogoProps = {
  className?: string
  markClassName?: string
  wordmarkClassName?: string
  showWordmark?: boolean
}

export default function Logo({
  className = '',
  markClassName = 'h-11 w-11',
  wordmarkClassName = 'text-[1.05rem] font-extrabold tracking-tight text-navy',
  showWordmark = false, 
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/logo-2.jpeg"
        alt=""
        className={`bg-black object-cover shadow-sm ring-1 ring-black/10 ${markClassName}`}
      />
      {showWordmark ? (
        <span className={wordmarkClassName}>
          JMG<span className="font-semibold">ecommerce</span>
        </span>
      ) : null}
    </span>
  )
}
