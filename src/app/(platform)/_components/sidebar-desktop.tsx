'use client'

import MoreButtonDesktop from '@/app/(platform)/_components/more-button-desktop'
import NavigationMenuDesktop from '@/app/(platform)/_components/navigation-menu-desktop'
import Logo from '@/app/_assets/logo.svg'
import ChatMultiple20RegularIcon from '@fluentui/svg-icons/icons/chat_multiple_20_regular.svg'
import Link from 'next/link'

export default function SidebarDesktop() {
  return (
    <div className="bg-barcelona-side-navigation-background fixed top-0 left-0 z-10 hidden h-screen min-h-[480px] w-[76px] flex-col items-center justify-between overflow-visible backdrop-blur-[15px] md:flex">
      <div className="shrink-0 touch-manipulation justify-center overflow-hidden py-[14px] transition-transform duration-200 [transition-timing-function:ease-in-out] select-none hover:scale-[1.05] active:scale-[0.98]">
        <Link href={'/'}>
          <Logo className="fill-barcelona-primary-icon h-[32px] w-[32px]" />
        </Link>
      </div>

      <NavigationMenuDesktop />

      <div className="mb-[22px] h-fit">
        {/* Messaging Button */}
        <div className="group relative">
          <Link
            href={'/messages'}
            className="relative flex items-center justify-center"
          >
            <div className="flex h-[54px] w-[54px] items-center justify-center transition-transform duration-200 [transition-timing-function:ease-in-out] group-active:scale-90">
              <ChatMultiple20RegularIcon className="fill-barcelona-navigation-icon group-hover:fill-barcelona-primary-icon h-[28px] w-[28px] shrink-0 transition-colors duration-200" />
            </div>
          </Link>
        </div>

        <MoreButtonDesktop />
      </div>
    </div>
  )
}
