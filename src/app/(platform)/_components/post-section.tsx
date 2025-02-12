'use client'

import { usePostDialog } from '@/app/(platform)/_hooks/post-dialog-context'
import Image from 'next/image'
import Link from 'next/link'
import { Dialog } from 'radix-ui'
import { useState } from 'react'
import PostDialog from './post-dialog'

export default function PostSection() {
  const [open, setOpen] = useState<boolean>(false)
  const { setActiveMenu } = usePostDialog()

  return (
    <div className="shadow-barcelona-primary-outline px-[24px] shadow-[0_1px_0_0]">
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger
          asChild
          onPointerDown={(event) => event.preventDefault()}
          onKeyDown={(event) => event.preventDefault()}
          className="flex w-full py-[16px]"
        >
          <div>
            <Link
              href={'/profile'}
              className="inline touch-manipulation rounded-full select-none"
            >
              <div className="bg-barcelona-tertiary-background flex size-[36px] rounded-full select-none">
                <Image
                  src={'/avatar.png'}
                  width={36}
                  height={36}
                  alt="Profile picture"
                  className="outline-barcelona-primary-outline aspect-square size-[36px] touch-none rounded-full object-cover outline-[0.5px] outline-offset-[-0.5px]"
                />
              </div>
            </Link>

            <div
              onClick={() => {
                setActiveMenu('main')
                setOpen(true)
              }}
              className="mx-[8px] flex w-full cursor-text touch-manipulation flex-row items-center justify-start pl-[4px] select-none"
            >
              <span className="text-barcelona-secondary-text relative max-w-full min-w-0 overflow-visible leading-[calc(1.4*1em)] whitespace-pre-line">
                What&apos;s new?
              </span>
            </div>

            <button
              onClick={() => {
                setActiveMenu('main')
                setOpen(true)
              }}
              className="border-barcelona-primary-outline text-barcelona-primary-text relative inline-flex h-[36px] min-h-0 max-w-full min-w-0 shrink-0 basis-auto cursor-pointer touch-manipulation flex-row items-center justify-center rounded-[10px] border-[1px] px-[16px] font-semibold transition-transform duration-200 ease-in-out select-none active:scale-[0.96]"
            >
              <div className="overflow-hidden text-ellipsis">Post</div>
            </button>
          </div>
        </Dialog.Trigger>
        <PostDialog />
      </Dialog.Root>
    </div>
  )
}
