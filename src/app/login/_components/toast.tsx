'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { Toaster, toast } from 'sonner'

export default function Toast() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const error = searchParams.get('error')
    console.log(error)
    if (error === 'invalid-token') {
      toast.custom(() => (
        <div className="leading-system-15-line-height box-border flex grow flex-col p-[6px]">
          <div className="text-toast-text font-semibold">
            Invalid or expired token.
          </div>
        </div>
      ))
    }
  })

  useEffect(() => {
    if (window.history.pushState) {
      const newUrl = window.location.pathname
      window.history.pushState({ path: newUrl }, '', newUrl)
    }
  }, [])

  return (
    <Toaster
      offset={0}
      mobileOffset={0}
      position="bottom-left"
      expand={false}
      theme="system"
      visibleToasts={1}
      duration={5000}
      gap={0}
      pauseWhenPageIsHidden={true}
      toastOptions={{
        className: 'custom-toast',
      }}
    />
  )
}
