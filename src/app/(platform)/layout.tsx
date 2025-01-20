import HeaderMobile from '@/app/(platform)/_components/header-mobile'
import LoginButtonDesktop from '@/app/(platform)/_components/login-button-desktop'
import NavigationMenuMobile from '@/app/(platform)/_components/navigation-menu-mobile'
import SidebarDesktop from '@/app/(platform)/_components/sidebar-desktop'
import { ThemeProvider } from 'next-themes'

export default function PlatformLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider attribute="class">
      <SidebarDesktop />

      <LoginButtonDesktop />

      <HeaderMobile />

      {children}

      <NavigationMenuMobile />
    </ThemeProvider>
  )
}
