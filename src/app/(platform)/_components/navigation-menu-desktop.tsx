'use client'

import PostDialog from '@/app/(platform)/_components/post-dialog'
import { usePostDialog } from '@/app/(platform)/_hooks/post-dialog-context'
import Add20Filled from '@fluentui/svg-icons/icons/add_20_filled.svg'
import Heart20Filled from '@fluentui/svg-icons/icons/heart_20_filled.svg'
import Heart20Regular from '@fluentui/svg-icons/icons/heart_20_regular.svg'
import Home20Filled from '@fluentui/svg-icons/icons/home_20_filled.svg'
import Home20Regular from '@fluentui/svg-icons/icons/home_20_regular.svg'
import Person20Filled from '@fluentui/svg-icons/icons/person_20_filled.svg'
import Person20Regular from '@fluentui/svg-icons/icons/person_20_regular.svg'
import Search20Filled from '@fluentui/svg-icons/icons/search_20_filled.svg'
import Search20Regular from '@fluentui/svg-icons/icons/search_20_regular.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Dialog } from 'radix-ui'
import { useState } from 'react'

export default function NavigationMenuDesktop() {
  const pathname = usePathname()
  const [open, setOpen] = useState<boolean>(false)
  const { setActiveMenu } = usePostDialog()

  return (
    <div className="flex grow flex-col items-center justify-center gap-y-1">
      <div className="group relative">
        <Link href={'/'} className="relative flex items-center justify-center">
          <div className="flex h-[60px] w-[60px] items-center justify-center transition-transform duration-200 [transition-timing-function:ease-in-out] group-active:scale-90">
            {pathname === '/' ? (
              <Home20Filled className="fill-barcelona-primary-icon h-[28px] w-[28px] shrink-0" />
            ) : (
              <Home20Regular className="fill-barcelona-navigation-icon h-[28px] w-[28px] shrink-0" />
            )}
            <div className="bg-barcelona-navigation-item-hover-background absolute top-0 z-0 my-[6px] h-[calc(100%-12px)] w-full [transform:scale(0.85)] rounded-xl opacity-0 transition-[opacity,transform] duration-200 [transition-timing-function:ease-out] group-hover:[transform:scale(1)] group-hover:opacity-100"></div>
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
              <Search20Filled className="fill-barcelona-primary-icon h-[30px] w-[30px] shrink-0" />
            ) : (
              <Search20Regular className="fill-barcelona-navigation-icon h-[30px] w-[30px] shrink-0" />
            )}
            <div className="bg-barcelona-navigation-item-hover-background absolute top-0 z-0 my-[6px] h-[calc(100%-12px)] w-full [transform:scale(0.85)] rounded-xl opacity-0 transition-[opacity,transform] duration-200 [transition-timing-function:ease-out] group-hover:[transform:scale(1)] group-hover:opacity-100"></div>
          </div>
        </Link>
      </div>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger
          asChild
          onPointerDown={(event) => event.preventDefault()}
          onKeyDown={(event) => event.preventDefault()}
          onClick={() => {
            setActiveMenu('main')
            setOpen(true)
          }}
        >
          <div className="group relative">
            <button className="relative flex cursor-pointer items-center justify-center">
              <div className="flex h-[60px] w-[60px] items-center justify-center transition-transform duration-200 [transition-timing-function:ease-in-out] group-active:scale-90">
                <Add20Filled className="fill-barcelona-secondary-icon group-hover:fill-barcelona-primary-icon h-[24px] w-[24px] shrink-0 transition-colors duration-200" />
                <div className="bg-barcelona-navigation-item-hover-background absolute top-0 z-0 my-[6px] h-[calc(100%-12px)] w-full rounded-xl"></div>
              </div>
            </button>
          </div>
        </Dialog.Trigger>
        <PostDialog />
      </Dialog.Root>

      <div className="group relative">
        <Link
          href={'/activity'}
          className="relative flex items-center justify-center"
        >
          <div className="flex h-[60px] w-[60px] items-center justify-center transition-transform duration-200 [transition-timing-function:ease-in-out] group-active:scale-90">
            {pathname === '/activity' ? (
              <Heart20Filled className="fill-barcelona-primary-icon h-[28px] w-[28px] shrink-0" />
            ) : (
              <Heart20Regular className="fill-barcelona-navigation-icon h-[28px] w-[28px] shrink-0" />
            )}
            <div className="bg-barcelona-navigation-item-hover-background absolute top-0 z-0 my-[6px] h-[calc(100%-12px)] w-full [transform:scale(0.85)] rounded-xl opacity-0 transition-[opacity,transform] duration-200 [transition-timing-function:ease-out] group-hover:[transform:scale(1)] group-hover:opacity-100"></div>
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
              <Person20Filled className="fill-barcelona-primary-icon h-[28px] w-[28px] shrink-0" />
            ) : (
              <Person20Regular className="fill-barcelona-navigation-icon h-[28px] w-[28px] shrink-0" />
            )}
            <div className="bg-barcelona-navigation-item-hover-background absolute top-0 z-0 my-[6px] h-[calc(100%-12px)] w-full [transform:scale(0.85)] rounded-xl opacity-0 transition-[opacity,transform] duration-200 [transition-timing-function:ease-out] group-hover:[transform:scale(1)] group-hover:opacity-100"></div>
          </div>
        </Link>
      </div>
    </div>
  )
}
