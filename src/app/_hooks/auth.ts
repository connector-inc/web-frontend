'use client'

import api from '@/lib/api'
import { useEffect, useState } from 'react'

// export const getAuthRequest = async () => await api.get('/auth/me')

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  useEffect(() => {
    api
      .get('/auth/me')
      .then(() => setIsAuthenticated(true))
      .catch(() => {
        api
          .post('/auth/refresh')
          .then(() => setIsAuthenticated(true))
          .catch(() => setIsAuthenticated(false))
      })
  }, [])

  return isAuthenticated
}
