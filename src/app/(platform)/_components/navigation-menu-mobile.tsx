'use client'

import {
  HeartFillIcon,
  HeartIcon,
  HomeFillIcon,
  HomeIcon,
  PersonFillIcon,
  PersonIcon,
  PlusIcon,
  SearchIcon,
} from '@primer/octicons-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavigationMenuMobile() {
  const pathname = usePathname()

  return (
    <nav className="bg-barcelona-header-background fixed bottom-0 left-0 right-0 z-10 m-auto grid h-[68px] w-full grid-cols-5 grid-rows-[1fr] items-center backdrop-blur-[28.5px] md:hidden">
      <div className="group relative h-full transition-transform duration-200 active:scale-90">
        <Link
          href={'/'}
          className="m-auto flex h-full min-h-0 min-w-0 cursor-pointer touch-manipulation select-none items-center justify-center rounded-[8px] p-0 transition-transform"
        >
          <div className="z-10">
            {pathname === '/' ? (
              <HomeFillIcon
                size={30}
                className="fill-barcelona-primary-icon relative flex-shrink-0"
              />
            ) : (
              <HomeIcon
                size={30}
                className="fill-barcelona-navigation-icon relative flex-shrink-0"
              />
            )}
          </div>
          {/* <div className="bg-barcelona-navigation-item-hover-background absolute top-0 z-0 m-[4px] h-[60px] w-[calc(100%-8px)] scale-[0.8] rounded-[8px] opacity-0 transition-all duration-100 ease-out group-hover:scale-[1] group-hover:opacity-100"></div> */}
        </Link>
      </div>

      <div className="group relative h-full transition-transform duration-200 active:scale-90">
        <Link
          href={'/search'}
          className="m-auto flex h-full min-h-0 min-w-0 cursor-pointer touch-manipulation select-none items-center justify-center rounded-[8px] p-0 transition-transform"
        >
          <div className="z-10">
            {pathname === '/search' ? (
              <SearchIcon
                size={30}
                className="fill-barcelona-primary-icon relative flex-shrink-0"
              />
            ) : (
              <SearchIcon
                size={30}
                className="fill-barcelona-navigation-icon relative flex-shrink-0"
              />
            )}
          </div>
          {/* <div className="bg-barcelona-navigation-item-hover-background absolute top-0 z-0 m-[4px] h-[60px] w-[calc(100%-8px)] scale-[0.8] rounded-[8px] opacity-0 transition-all duration-100 ease-out group-hover:scale-[1] group-hover:opacity-100"></div> */}
        </Link>
      </div>

      <div className="group relative h-full transition-transform duration-200 active:scale-90">
        <button
          onClick={() => {}}
          className="m-auto flex h-full min-h-0 min-w-0 cursor-pointer touch-manipulation select-none items-center justify-center rounded-[8px] p-0 transition-transform"
        >
          <div className="z-10">
            <PlusIcon
              size={30}
              className="fill-barcelona-secondary-icon group-active:fill-barcelona-primary-icon relative flex-shrink-0 transition-colors duration-100"
            />
          </div>
          <div className="bg-barcelona-navigation-item-hover-background absolute top-0 z-0 m-[4px] h-[60px] w-[calc(100%-8px)] rounded-[8px]"></div>
        </button>
      </div>

      <div className="group relative h-full transition-transform duration-200 active:scale-90">
        <Link
          href={'/activity'}
          className="m-auto flex h-full min-h-0 min-w-0 cursor-pointer touch-manipulation select-none items-center justify-center rounded-[8px] p-0 transition-transform"
        >
          <div className="z-10">
            {pathname === '/activity' ? (
              <HeartFillIcon
                size={30}
                className="fill-barcelona-primary-icon relative flex-shrink-0"
              />
            ) : (
              <HeartIcon
                size={30}
                className="fill-barcelona-navigation-icon relative flex-shrink-0"
              />
            )}
          </div>
          {/* <div className="bg-barcelona-navigation-item-hover-background absolute top-0 z-0 m-[4px] h-[60px] w-[calc(100%-8px)] scale-[0.8] rounded-[8px] opacity-0 transition-all duration-100 ease-out group-hover:scale-[1] group-hover:opacity-100"></div> */}
        </Link>
      </div>

      <div className="group relative h-full transition-transform duration-200 active:scale-90">
        <Link
          href={'/profile'}
          className="m-auto flex h-full min-h-0 min-w-0 cursor-pointer touch-manipulation select-none items-center justify-center rounded-[8px] p-0 transition-transform"
        >
          <div className="z-10">
            {pathname === '/profile' ? (
              <PersonFillIcon
                size={30}
                className="fill-barcelona-primary-icon relative flex-shrink-0"
              />
            ) : (
              <PersonIcon
                size={30}
                className="fill-barcelona-navigation-icon relative flex-shrink-0"
              />
            )}
          </div>
          {/* <div className="bg-barcelona-navigation-item-hover-background absolute top-0 z-0 m-[4px] h-[60px] w-[calc(100%-8px)] scale-[0.8] rounded-[8px] opacity-0 transition-all duration-100 ease-out group-hover:scale-[1] group-hover:opacity-100"></div> */}
        </Link>
      </div>
    </nav>
  )
}
