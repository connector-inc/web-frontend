import HeaderMobile from '@/app/(platform)/_components/header-mobile'
import NavigationMenuMobile from '@/app/(platform)/_components/navigation-menu-mobile'
import SidebarDesktop from '@/app/(platform)/_components/sidebar-desktop'
import { PlatformToaster } from '@/app/(platform)/_components/toaster'
import { Providers } from '@/app/(platform)/providers'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function PlatformLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies()
  const sessionId = cookieStore.get('session_id')

  if (!sessionId) {
    redirect('/login')
  } else {
    const response = await fetch(`${process.env.API_URL}/auth/user-created`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Cookie: `session_id=${sessionId.value}`,
      },
    })

    if (!response.ok) {
      redirect('/login')
    }

    const data = await response.json()
    const created = data.created

    if (!created) {
      redirect('/new-profile')
    }
  }

  return (
    <Providers>
      <PlatformToaster />
      <HeaderMobile />
      <SidebarDesktop />
      {/* <LoginButtonDesktop /> */}
      {children}
      <NavigationMenuMobile />
    </Providers>
  )
}
