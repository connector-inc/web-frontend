'use client'

import CreatePostDialog from '@/app/(platform)/_components/create-post-dialog'
import { useCreatePost } from '@/app/(platform)/_contexts/create-post-context'
import { useUser } from '@/app/(platform)/_contexts/user-context'
import Add20FilledIcon from '@fluentui/svg-icons/icons/add_20_filled.svg'
import Heart20FilledIcon from '@fluentui/svg-icons/icons/heart_20_filled.svg'
import Heart20RegularIcon from '@fluentui/svg-icons/icons/heart_20_regular.svg'
import Home20FilledIcon from '@fluentui/svg-icons/icons/home_20_filled.svg'
import Home20RegularIcon from '@fluentui/svg-icons/icons/home_20_regular.svg'
import Person20FilledIcon from '@fluentui/svg-icons/icons/person_20_filled.svg'
import Person20RegularIcon from '@fluentui/svg-icons/icons/person_20_regular.svg'
import Search20FilledIcon from '@fluentui/svg-icons/icons/search_20_filled.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Dialog } from 'radix-ui'
import { useState } from 'react'

export default function NavigationMenuMobile() {
  const pathname = usePathname()
  const [open, setOpen] = useState<boolean>(false)
  const { setActiveMenu } = useCreatePost()
  const { user } = useUser()

  return (
    <nav className="bg-barcelona-header-background fixed right-0 bottom-0 left-0 z-10 m-auto grid h-[50px] w-full grid-cols-5 grid-rows-[1fr] items-center backdrop-blur-[28.5px] md:hidden">
      <div className="group relative h-full transition-transform duration-200 active:scale-90">
        <Link
          href={'/'}
          className="m-auto flex h-full min-h-0 min-w-0 cursor-pointer touch-manipulation items-center justify-center rounded-[8px] p-0 transition-transform select-none"
        >
          <div className="z-10">
            {pathname === '/' ? (
              <Home20FilledIcon className="fill-barcelona-primary-icon stroke-barcelona-primary-icon size-[28px] shrink-0 stroke-[0.5]" />
            ) : (
              <Home20RegularIcon className="fill-barcelona-navigation-icon stroke-barcelona-navigation-icon size-[28px] shrink-0 stroke-[0.5]" />
            )}
          </div>
          <div className="bg-barcelona-navigation-item-hover-background absolute top-0 my-[4px] h-[calc(100%-8px)] w-[calc(100%-8px)] [transform:scale(0.85)] rounded-[8px] opacity-0 transition-[opacity,transform] duration-200 [transition-timing-function:ease-out] group-hover:[transform:scale(1)] group-hover:opacity-100"></div>
        </Link>
      </div>

      <div className="group relative h-full transition-transform duration-200 active:scale-90">
        <Link
          href={'/search'}
          className="m-auto flex h-full min-h-0 min-w-0 cursor-pointer touch-manipulation items-center justify-center rounded-[8px] p-0 transition-transform select-none"
        >
          <div className="z-10">
            {pathname === '/search' ? (
              <Search20FilledIcon className="fill-barcelona-primary-icon size-[30px] shrink-0" />
            ) : (
              <Search20FilledIcon className="fill-barcelona-navigation-icon size-[30px] shrink-0" />
            )}
          </div>
          <div className="bg-barcelona-navigation-item-hover-background absolute top-0 my-[4px] h-[calc(100%-8px)] w-[calc(100%-8px)] [transform:scale(0.85)] rounded-[8px] opacity-0 transition-[opacity,transform] duration-200 [transition-timing-function:ease-out] group-hover:[transform:scale(1)] group-hover:opacity-100"></div>
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
          <div className="group relative h-full transition-transform duration-200 active:scale-90">
            <button
              onClick={() => {}}
              className="m-auto flex h-full min-h-0 min-w-0 cursor-pointer touch-manipulation items-center justify-center rounded-[8px] p-0 transition-transform select-none"
            >
              <div className="z-10">
                <Add20FilledIcon className="fill-barcelona-navigation-icon stroke-barcelona-navigation-icon relative size-[24px] shrink-0 stroke-1" />
              </div>
              <div className="bg-barcelona-navigation-item-hover-background absolute top-0 m-[4px] h-[calc(100%-8px)] w-[calc(100%-8px)] rounded-[8px]"></div>
            </button>
          </div>
        </Dialog.Trigger>
        <CreatePostDialog />
      </Dialog.Root>

      <div className="group relative h-full transition-transform duration-200 active:scale-90">
        <Link
          href={'/activity'}
          className="m-auto flex h-full min-h-0 min-w-0 cursor-pointer touch-manipulation items-center justify-center rounded-[8px] p-0 transition-transform select-none"
        >
          <div className="z-10">
            {pathname === '/activity' ? (
              <Heart20FilledIcon className="fill-barcelona-primary-icon size-[28px] shrink-0" />
            ) : (
              <Heart20RegularIcon className="stroke-barcelona-navigation-icon fill-barcelona-navigation-icon size-[28px] shrink-0 stroke-[0.5]" />
            )}
          </div>
          <div className="bg-barcelona-navigation-item-hover-background absolute top-0 my-[4px] h-[calc(100%-8px)] w-[calc(100%-8px)] [transform:scale(0.85)] rounded-[8px] opacity-0 transition-[opacity,transform] duration-200 [transition-timing-function:ease-out] group-hover:[transform:scale(1)] group-hover:opacity-100"></div>
        </Link>
      </div>

      <div className="group relative h-full transition-transform duration-200 active:scale-90">
        <Link
          href={`/@${user?.username}`}
          className="m-auto flex h-full min-h-0 min-w-0 cursor-pointer touch-manipulation items-center justify-center rounded-[8px] p-0 transition-transform select-none"
        >
          <div className="z-10">
            {pathname.startsWith(`/@${user?.username}`) ? (
              <Person20FilledIcon className="fill-barcelona-primary-icon size-[28px] shrink-0" />
            ) : (
              <Person20RegularIcon className="stroke-barcelona-navigation-icon fill-barcelona-navigation-icon size-[28px] shrink-0 stroke-[0.5]" />
            )}
          </div>
          <div className="bg-barcelona-navigation-item-hover-background absolute top-0 my-[4px] h-[calc(100%-8px)] w-[calc(100%-8px)] [transform:scale(0.85)] rounded-[8px] opacity-0 transition-[opacity,transform] duration-200 [transition-timing-function:ease-out] group-hover:[transform:scale(1)] group-hover:opacity-100"></div>
        </Link>
      </div>
    </nav>
  )
}
