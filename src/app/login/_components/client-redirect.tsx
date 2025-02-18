'use client'

import api from '@/lib/api'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ClientRedirect() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true)

  useEffect(() => {
    api
      .get('/auth/me')
      .then((response) => {
        if (response.data.message === 'User found') {
          router.push('/')
        } else if (response.data.message === 'User not found') {
          router.push('/new-profile')
        }
      })
      .catch(() => {
        api
          .post('/auth/refresh')
          .then(() => router.push('/'))
          .catch(() => setIsAuthenticated(false))
      })
  }, [router])

  if (isAuthenticated) {
    return <div className="z-50 h-screen w-screen"></div>
  } else {
    return null
  }
}
