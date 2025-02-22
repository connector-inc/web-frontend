import HeaderMobile from '@/app/(platform)/_components/header-mobile'
import LoginButtonDesktop from '@/app/(platform)/_components/login-button-desktop'
import NavigationMenuMobile from '@/app/(platform)/_components/navigation-menu-mobile'
import SidebarDesktop from '@/app/(platform)/_components/sidebar-desktop'
import { PostDialogProvider } from '@/app/(platform)/_hooks/post-dialog-context'
import { ThemeProvider } from 'next-themes'
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
    const response = await fetch(
      `${process.env.API_URL}/users/check-user-created`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Cookie: `session_id=${sessionId.value}`,
        },
      },
    )

    if (!response.ok) {
      // throw new Error('Failed to check if user is created')
      redirect('/login')
    }

    const data = await response.json()
    const created = data.created

    if (!created) {
      redirect('/new-profile')
    }
  }

  return (
    <ThemeProvider attribute="class">
      <PostDialogProvider>
        <SidebarDesktop />
        <LoginButtonDesktop />
        <HeaderMobile />
        {children}
        <NavigationMenuMobile />
      </PostDialogProvider>
    </ThemeProvider>
  )
}
