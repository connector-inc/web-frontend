'use client'

import { toastCustom } from '@/app/(platform)/_components/toaster'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function ErrorToast() {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const error = searchParams.get('error')
    if (error === 'invalid_or_expired_token') {
      toastCustom('Invalid or expired token.')
    }
  })

  useEffect(() => {
    if (window.history.pushState) {
      const newUrl = window.location.pathname
      window.history.pushState({ path: newUrl }, '', newUrl)
      router.refresh()
    }
  }, [router])

  return null
}
