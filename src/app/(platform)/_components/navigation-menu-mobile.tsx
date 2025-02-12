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

export default function NavigationMenuMobile() {
  const pathname = usePathname()
  const [open, setOpen] = useState<boolean>(false)
  const { setActiveMenu } = usePostDialog()

  return (
    <nav className="bg-barcelona-header-background fixed right-0 bottom-0 left-0 z-10 m-auto grid h-[50px] w-full grid-cols-5 grid-rows-[1fr] items-center backdrop-blur-[28.5px] md:hidden">
      <div className="group relative h-full transition-transform duration-200 active:scale-[0.96]">
        <Link
          href={'/'}
          className="m-auto flex h-full min-h-0 min-w-0 cursor-pointer touch-manipulation items-center justify-center rounded-[8px] p-0 transition-transform select-none"
        >
          <div className="z-10">
            {pathname === '/' ? (
              <Home20Filled className="fill-barcelona-primary-icon relative h-[28px] w-[28px] shrink-0" />
            ) : (
              <Home20Regular className="fill-barcelona-navigation-icon h-[28px] w-[28px] shrink-0" />
            )}
          </div>
        </Link>
      </div>

      <div className="group relative h-full transition-transform duration-200 active:scale-[0.96]">
        <Link
          href={'/search'}
          className="m-auto flex h-full min-h-0 min-w-0 cursor-pointer touch-manipulation items-center justify-center rounded-[8px] p-0 transition-transform select-none"
        >
          <div className="z-10">
            {pathname === '/search' ? (
              <Search20Filled className="fill-barcelona-primary-icon h-[30px] w-[30px] shrink-0" />
            ) : (
              <Search20Regular className="fill-barcelona-navigation-icon h-[30px] w-[30px] shrink-0" />
            )}
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
          <div className="group relative h-full transition-transform duration-200 active:scale-[0.96]">
            <button
              onClick={() => {}}
              className="m-auto flex h-full min-h-0 min-w-0 cursor-pointer touch-manipulation items-center justify-center rounded-[8px] p-0 transition-transform select-none"
            >
              <div className="z-10">
                <Add20Filled className="fill-barcelona-secondary-icon group-hover:fill-barcelona-primary-icon h-[24px] w-[24px] shrink-0 transition-colors duration-200" />
              </div>
              <div className="bg-barcelona-navigation-item-hover-background absolute top-0 z-0 m-[4px] h-[calc(100%-8px)] w-[calc(100%-8px)] rounded-[8px]"></div>
            </button>
          </div>
        </Dialog.Trigger>
        <PostDialog />
      </Dialog.Root>

      {/* <div className="group relative h-full transition-transform duration-200 active:scale-[0.96]">
        <button
          onClick={() => {}}
          className="m-auto flex h-full min-h-0 min-w-0 cursor-pointer touch-manipulation items-center justify-center rounded-[8px] p-0 transition-transform select-none"
        >
          <div className="z-10">
            <Add20Filled className="fill-barcelona-secondary-icon group-hover:fill-barcelona-primary-icon h-[24px] w-[24px] shrink-0 transition-colors duration-200" />
          </div>
          <div className="bg-barcelona-navigation-item-hover-background absolute top-0 z-0 m-[4px] h-[calc(100%-8px)] w-[calc(100%-8px)] rounded-[8px]"></div>
        </button>
      </div> */}

      <div className="group relative h-full transition-transform duration-200 active:scale-[0.96]">
        <Link
          href={'/activity'}
          className="m-auto flex h-full min-h-0 min-w-0 cursor-pointer touch-manipulation items-center justify-center rounded-[8px] p-0 transition-transform select-none"
        >
          <div className="z-10">
            {pathname === '/activity' ? (
              <Heart20Filled className="fill-barcelona-primary-icon h-[28px] w-[28px] shrink-0" />
            ) : (
              <Heart20Regular className="fill-barcelona-navigation-icon h-[28px] w-[28px] shrink-0" />
            )}
          </div>
        </Link>
      </div>

      <div className="group relative h-full transition-transform duration-200 active:scale-[0.96]">
        <Link
          href={'/profile'}
          className="m-auto flex h-full min-h-0 min-w-0 cursor-pointer touch-manipulation items-center justify-center rounded-[8px] p-0 transition-transform select-none"
        >
          <div className="z-10">
            {pathname === '/profile' ? (
              <Person20Filled className="fill-barcelona-primary-icon h-[28px] w-[28px] shrink-0" />
            ) : (
              <Person20Regular className="fill-barcelona-navigation-icon h-[28px] w-[28px] shrink-0" />
            )}
          </div>
        </Link>
      </div>
    </nav>
  )
}
