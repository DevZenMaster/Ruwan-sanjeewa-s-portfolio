import Link from 'next/link'

interface Breadcrumb {
  label: string
  href: string
}

export default function Breadcrumbs({ breadcrumbs }: { breadcrumbs: Breadcrumb[] }) {
  return (
    /* SPACE FIX: Changed my-4 to mt-2 mb-4 for a tighter fit. */
    <nav aria-label="Breadcrumb" className="mt-2 mb-4 inline-block">
      <ol className="flex items-center flex-wrap text-[10px] md:text-xs uppercase tracking-[0.15em] font-medium">
        {breadcrumbs.map(({ label, href }, idx) => {
          const isLast = idx === breadcrumbs.length - 1;
          
          return (
            <li key={href} className="flex items-center">
              <Link
                href={href}
                className={`transition-all duration-300 ${
                  isLast 
                    ? 'text-accent cursor-default font-bold' 
                    : 'text-neutral/40 hover:text-white'
                }`}
              >
                {label}
              </Link>
              
              {!isLast && (
                /* SPACE FIX: Reduced mx-3 to mx-2 and used a thinner divider */
                <span className="mx-2 text-neutral/20 select-none">/</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  )
}


