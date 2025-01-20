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

export default function NavigationMenuDesktop() {
  const pathname = usePathname()

  return (
    <div className="flex grow flex-col items-center justify-center gap-y-1">
      <div className="group relative">
        <Link href={'/'} className="relative flex items-center justify-center">
          <div className="flex h-[60px] w-[60px] items-center justify-center transition-transform duration-200 [transition-timing-function:ease-in-out] group-active:scale-90">
            {pathname === '/' ? (
              <HomeFillIcon
                size={28}
                className="fill-barcelona-primary-icon flex-shrink-0"
              />
            ) : (
              <HomeIcon
                size={28}
                className="fill-barcelona-navigation-icon flex-shrink-0"
              />
            )}
            <div className="bg-barcelona-navigation-item-hover-background absolute top-0 z-0 my-[6px] h-[calc(100%-12px)] w-full rounded-xl opacity-0 transition-[opacity,transform] duration-100 [transform:scale(0.85)] [transition-timing-function:ease-out] group-hover:opacity-100 group-hover:[transform:scale(1)]"></div>
          </div>
        </Link>
      </div>
      <div className="group relative">
        <Link
          href={'/search'}
          className="relative flex items-center justify-center"
        >
          <div className="flex h-[60px] w-[60px] items-center justify-center transition-transform duration-200 [transition-timing-function:ease-in-out] group-active:scale-90">
            {pathname === '/search' ? (
              <SearchIcon
                size={28}
                className="fill-barcelona-primary-icon flex-shrink-0"
              />
            ) : (
              <SearchIcon
                size={28}
                className="fill-barcelona-navigation-icon flex-shrink-0"
              />
            )}
            <div className="bg-barcelona-navigation-item-hover-background absolute top-0 z-0 my-[6px] h-[calc(100%-12px)] w-full rounded-xl opacity-0 transition-[opacity,transform] duration-100 [transform:scale(0.85)] [transition-timing-function:ease-out] group-hover:opacity-100 group-hover:[transform:scale(1)]"></div>
          </div>
        </Link>
      </div>
      <div className="group relative">
        <button
          onClick={() => {}}
          className="relative flex items-center justify-center"
        >
          <div className="flex h-[60px] w-[60px] items-center justify-center transition-transform duration-200 [transition-timing-function:ease-in-out] group-active:scale-90">
            <PlusIcon
              size={28}
              className="fill-barcelona-secondary-icon group-hover:fill-barcelona-primary-icon flex-shrink-0 transition-colors duration-100"
            />
            <div className="bg-barcelona-navigation-item-hover-background absolute top-0 z-0 my-[6px] h-[calc(100%-12px)] w-full rounded-xl"></div>
          </div>
        </button>
      </div>
      <div className="group relative">
        <Link
          href={'/activity'}
          className="relative flex items-center justify-center"
        >
          <div className="flex h-[60px] w-[60px] items-center justify-center transition-transform duration-200 [transition-timing-function:ease-in-out] group-active:scale-90">
            {pathname === '/activity' ? (
              <HeartFillIcon
                size={28}
                className="fill-barcelona-primary-icon flex-shrink-0"
              />
            ) : (
              <HeartIcon
                size={28}
                className="fill-barcelona-navigation-icon flex-shrink-0"
              />
            )}
            <div className="bg-barcelona-navigation-item-hover-background absolute top-0 z-0 my-[6px] h-[calc(100%-12px)] w-full rounded-xl opacity-0 transition-[opacity,transform] duration-100 [transform:scale(0.85)] [transition-timing-function:ease-out] group-hover:opacity-100 group-hover:[transform:scale(1)]"></div>
          </div>
        </Link>
      </div>
      <div className="group relative">
        <Link
          href={'/profile'}
          className="relative flex items-center justify-center"
        >
          <div className="flex h-[60px] w-[60px] items-center justify-center transition-transform duration-200 [transition-timing-function:ease-in-out] group-active:scale-90">
            {pathname === '/profile' ? (
              <PersonFillIcon
                size={28}
                className="fill-barcelona-primary-icon flex-shrink-0"
              />
            ) : (
              <PersonIcon
                size={28}
                className="fill-barcelona-navigation-icon flex-shrink-0"
              />
            )}
            <div className="bg-barcelona-navigation-item-hover-background absolute top-0 z-0 my-[6px] h-[calc(100%-12px)] w-full rounded-xl opacity-0 transition-[opacity,transform] duration-100 [transform:scale(0.85)] [transition-timing-function:ease-out] group-hover:opacity-100 group-hover:[transform:scale(1)]"></div>
          </div>
        </Link>
      </div>
    </div>
  )
}
