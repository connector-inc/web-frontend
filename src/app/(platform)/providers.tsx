'use client'

import { CreatePostProvider } from '@/app/(platform)/_contexts/create-post-context'
import { UserProvider } from '@/app/(platform)/_contexts/user-context'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThemeProvider } from 'next-themes'
import { useState } from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
  // Create a new QueryClient instance for each session to avoid shared state between users
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 60 * 1000, // 5 minutes
          },
        },
      }),
  )

  return (
    <ThemeProvider attribute="class">
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <CreatePostProvider>{children}</CreatePostProvider>
        </UserProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}
