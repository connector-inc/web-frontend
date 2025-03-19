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

export default function NavigationMenuDesktop() {
  const pathname = usePathname()
  const [open, setOpen] = useState<boolean>(false)
  const { setActiveMenu } = useCreatePost()
  const { user } = useUser()

  return (
    <div className="flex grow flex-col items-center justify-center gap-y-1">
      <div className="group relative">
        <Link href={'/'} className="relative flex items-center justify-center">
          <div className="flex size-[60px] items-center justify-center transition-transform duration-200 [transition-timing-function:ease-in-out] group-active:scale-90">
            {pathname === '/' ? (
              <Home20FilledIcon className="fill-barcelona-primary-icon stroke-barcelona-primary-icon size-[28px] shrink-0 stroke-[0.5]" />
            ) : (
              <Home20RegularIcon className="fill-barcelona-navigation-icon stroke-barcelona-navigation-icon size-[28px] shrink-0 stroke-[0.5]" />
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
          <div className="flex size-[60px] items-center justify-center transition-transform duration-200 [transition-timing-function:ease-in-out] group-active:scale-90">
            {pathname === '/search' ? (
              <Search20FilledIcon className="fill-barcelona-primary-icon size-[30px] shrink-0" />
            ) : (
              <Search20FilledIcon className="fill-barcelona-navigation-icon size-[30px] shrink-0" />
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
              <div className="flex size-[60px] items-center justify-center transition-transform duration-200 [transition-timing-function:ease-in-out] group-active:scale-90">
                <Add20FilledIcon className="fill-barcelona-secondary-icon group-hover:fill-barcelona-primary-icon stroke-barcelona-secondary-icon group-hover:stroke-barcelona-primary-icon size-[24px] shrink-0 stroke-1 transition-colors duration-200" />
                <div className="bg-barcelona-navigation-item-hover-background absolute top-0 z-0 my-[6px] h-[calc(100%-12px)] w-full rounded-xl"></div>
              </div>
            </button>
          </div>
        </Dialog.Trigger>
        <CreatePostDialog />
      </Dialog.Root>

      <div className="group relative">
        <Link
          href={'/activity'}
          className="relative flex items-center justify-center"
        >
          <div className="flex size-[60px] items-center justify-center transition-transform duration-200 [transition-timing-function:ease-in-out] group-active:scale-90">
            {pathname === '/activity' ? (
              <Heart20FilledIcon className="fill-barcelona-primary-icon size-[28px] shrink-0" />
            ) : (
              <Heart20RegularIcon className="stroke-barcelona-navigation-icon fill-barcelona-navigation-icon size-[28px] shrink-0 stroke-[0.5]" />
            )}
            <div className="bg-barcelona-navigation-item-hover-background absolute top-0 z-0 my-[6px] h-[calc(100%-12px)] w-full [transform:scale(0.85)] rounded-xl opacity-0 transition-[opacity,transform] duration-200 [transition-timing-function:ease-out] group-hover:[transform:scale(1)] group-hover:opacity-100"></div>
          </div>
        </Link>
      </div>

      <div className="group relative">
        <Link
          href={`/@${user?.username}`}
          className="relative flex items-center justify-center"
        >
          <div className="flex size-[60px] items-center justify-center transition-transform duration-200 [transition-timing-function:ease-in-out] group-active:scale-90">
            {pathname.startsWith(`/@${user?.username}`) ? (
              <Person20FilledIcon className="fill-barcelona-primary-icon size-[28px] shrink-0" />
            ) : (
              <Person20RegularIcon className="stroke-barcelona-navigation-icon fill-barcelona-navigation-icon size-[28px] shrink-0 stroke-[0.5]" />
            )}
            <div className="bg-barcelona-navigation-item-hover-background absolute top-0 z-0 my-[6px] h-[calc(100%-12px)] w-full [transform:scale(0.85)] rounded-xl opacity-0 transition-[opacity,transform] duration-200 [transition-timing-function:ease-out] group-hover:[transform:scale(1)] group-hover:opacity-100"></div>
          </div>
        </Link>
      </div>
    </div>
  )
}
