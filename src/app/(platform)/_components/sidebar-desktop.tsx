'use client'

import MoreButtonDesktop from '@/app/(platform)/_components/more-button-desktop'
import NavigationMenuDesktop from '@/app/(platform)/_components/navigation-menu-desktop'
import ChatMultiple20RegularIcon from '@fluentui/svg-icons/icons/chat_multiple_20_regular.svg'
import Link from 'next/link'

export default function SidebarDesktop() {
  return (
    <div className="bg-barcelona-side-navigation-background fixed top-0 left-0 z-10 hidden h-screen min-h-[480px] w-[76px] flex-col items-center justify-between overflow-visible backdrop-blur-[15px] md:flex">
      <div className="shrink-0 touch-manipulation justify-center overflow-hidden py-[14px] transition-transform duration-200 [transition-timing-function:ease-in-out] select-none hover:scale-[1.05] active:scale-[0.98]">
        <Link href={'/'}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            viewBox="0 0 512 512"
            className="fill-barcelona-primary-icon h-[32px] w-[32px]"
          >
            <path d="M379.608 289.121c15.433-57.597-10.993-116.548-60.629-144.554l33.652-125.59C470.505 66.86 536.995 196.173 503.216 322.241c-9.114 34.011-24.665 64.577-44.992 90.739l-91.965-91.964a128 128 0 0 0 13.349-31.895m-58.616 77.115c-28.548 16.829-63.574 22.626-98.113 13.372-34.466-9.235-61.857-31.694-78.179-60.455L19.067 352.816c29.255 71.443 90.367 128.877 170.692 150.4 80.395 21.541 162.11 2.306 223.184-45.029zm-188.6-143.357a128 128 0 0 0-4.385 34.506l-125.6 33.654c-4.559-32.882-2.755-67.2 6.377-101.28C42.564 63.691 164.803-15.052 290.827 2.417l-33.652 125.589c-56.989-.563-109.35 37.277-124.783 94.873" />
          </svg>
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
