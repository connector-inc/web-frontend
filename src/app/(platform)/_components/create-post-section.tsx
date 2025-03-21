'use client'

import CreatePostDialog from '@/app/(platform)/_components/create-post-dialog'
import { useCreatePost } from '@/app/(platform)/_contexts/create-post-context'
import { useUser } from '@/app/(platform)/_contexts/user-context'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { Dialog } from 'radix-ui'
import { useState } from 'react'

export default function CreatePostSection({
  className,
}: {
  className?: string
}) {
  const [open, setOpen] = useState<boolean>(false)
  const { setActiveMenu } = useCreatePost()
  const { user } = useUser()

  return (
    <div className={cn('px-[24px]', className)}>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger
          asChild
          onPointerDown={(event) => event.preventDefault()}
          onKeyDown={(event) => event.preventDefault()}
          className="flex w-full py-[16px]"
        >
          <div>
            <Link
              href={`/@${user?.username}`}
              className="inline touch-manipulation rounded-full select-none"
            >
              <div className="bg-barcelona-tertiary-background flex size-[36px] rounded-full select-none">
                <Image
                  src={'/avatar.png'}
                  width={360}
                  height={360}
                  alt="Profile picture"
                  className="outline-barcelona-primary-outline size-[36px] touch-none rounded-full object-cover outline-[0.5px] outline-offset-[-0.5px]"
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
              className="border-barcelona-primary-outline relative inline-flex h-[36px] min-h-0 max-w-full min-w-0 shrink-0 basis-auto cursor-pointer touch-manipulation flex-row items-center justify-center rounded-[10px] border-[1px] px-[16px] font-semibold transition-transform duration-200 ease-in-out select-none active:scale-90"
            >
              <div className="overflow-hidden text-ellipsis">Post</div>
            </button>
          </div>
        </Dialog.Trigger>

        <CreatePostDialog />
      </Dialog.Root>
    </div>
  )
}
