'use client'

import api from '@/lib/api'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ClientRedirect() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  useEffect(() => {
    api
      .get('/auth/me')
      .then((response) => {
        if (response.data.message === 'User not found') {
          setIsAuthenticated(true)
        } else {
          router.push('/')
        }
      })
      .catch(() => {
        api
          .post('/auth/refresh')
          .then(() => router.refresh())
          .catch(() => router.push('/login'))
      })
  }, [router])

  if (!isAuthenticated) {
    return <div className="z-50 h-screen w-screen"></div>
  } else {
    return null
  }
}
