import HeaderMobile from '@/app/(platform)/_components/header-mobile'
import LoginButtonDesktop from '@/app/(platform)/_components/login-button-desktop'
import NavigationMenuMobile from '@/app/(platform)/_components/navigation-menu-mobile'
import SidebarDesktop from '@/app/(platform)/_components/sidebar-desktop'
import { PostDialogProvider } from '@/app/(platform)/_hooks/post-dialog-context'
import { ThemeProvider } from 'next-themes'
import ClientRedirect from './_components/client-redirect'

export default async function PlatformLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ClientRedirect />
      <ThemeProvider attribute="class">
        <PostDialogProvider>
          <SidebarDesktop />
          <LoginButtonDesktop />
          <HeaderMobile />
          {children}
          <NavigationMenuMobile />
        </PostDialogProvider>
      </ThemeProvider>
    </>
  )
}
