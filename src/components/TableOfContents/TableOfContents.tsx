'use client'

import useHeadingsData from '@/hooks/useHeadingsData'
import useIsLargeScreen from '@/hooks/useIsLargeScreen'
import { ChevronRightIcon } from '@/utils/icons'
import { useEffect, useState } from 'react'

// 1. Define the Heading Structure (DevSecOps: Explicit over Implicit)
interface HeadingItem {
  id: string
  title: string
  items: HeadingItem[] // Recursive type for nested headings
}

const TableOfContents = () => {
  const headings = useHeadingsData() as HeadingItem[] // Cast to ensure safety
  const isLargeScreen = useIsLargeScreen(1024)
  const [isVisible, setIsVisible] = useState(isLargeScreen)

  useEffect(() => {
    setIsVisible(isLargeScreen)
  }, [isLargeScreen])

  return (
    <nav className="bg-secondary text-primary-content border-border rounded-2xl p-4 pl-8 lg:my-6 lg:pl-4">
      <div
        onClick={isLargeScreen ? undefined : () => setIsVisible(!isVisible)}
        className="flex cursor-pointer items-center gap-2 text-lg font-semibold"
      >
        {!isLargeScreen && (
          <ChevronRightIcon className={`size-6 ${isVisible ? 'rotate-90' : ''}`} />
        )}
        Table of Contents
      </div>

      {isVisible && (
        <ul
          onClick={isLargeScreen ? undefined : () => setIsVisible(false)}
          className="mt-4 list-outside list-[square] space-y-3 ps-6 lg:ps-4"
        >
          {headings.map(({ id, title, items }) => (
            <li key={id}>
              <a href={`#${id}`} className="hover:text-neutral transition-colors duration-200">
                {title}
              </a>
              {/* Nested Items Check */}
              {items && items.length > 0 && (
                <ul className="list-outside list-[circle] space-y-3 ps-4 pt-3">
                  {/* Fixed: TypeScript now knows 'child' structure */}
                  {items.map((child: HeadingItem) => (
                    <li key={child.id}>
                      <a
                        href={`#${child.id}`}
                        className="hover:text-neutral transition-colors duration-200"
                      >
                        {child.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default TableOfContents