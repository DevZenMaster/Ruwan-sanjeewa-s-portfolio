'use client'

import { Heading } from '@/lib/types'
import { getNestedHeadings } from '@/utils'
import { useEffect, useState } from 'react'

const useHeadingsData = () => {
  // We initialize with the Heading type to ensure data integrity
  const [nestedHeadings, setNestedHeadings] = useState<Heading[]>([])

  useEffect(() => {
    // 1. Target headings only within the 'main' tag for security/accuracy
    // 2. Convert NodeList to an Array of Elements
    const headingElements = Array.from(document.querySelectorAll('main h2, main h3'))

    // 3. Generate nested structure
    const newNestedHeadings = getNestedHeadings(headingElements)
    
    setNestedHeadings(newNestedHeadings)
  }, [])

  return nestedHeadings
}

export default useHeadingsData