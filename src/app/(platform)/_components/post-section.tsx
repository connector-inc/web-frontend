'use client'

import Link from 'next/link'
import { Dialog } from 'radix-ui'
import { useState } from 'react'

export default function PostSection() {
  const [open, setOpen] = useState(false)

  return (
    <div className="shadow-barcelona-primary-outline px-[24px] shadow-[0_1px_0_0]">
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger
          asChild
          onPointerDown={(event) => event.preventDefault()}
          onKeyDown={(event) => event.preventDefault()}
          className="flex w-fit py-[16px]"
        >
          <div>
            <Link
              href={'/profile'}
              className="inline touch-manipulation rounded-full select-none"
            >
              <div className="bg-barcelona-tertiary-background flex h-[36px] w-[36px] rounded-full select-none">
                {/* <Image
                  src={''}
                  width={36}
                  height={36}
                  alt="Profile picture"
                  className="outline-barcelona-primary-outline aspect-square h-[36px] w-[36px] touch-none rounded-full object-cover outline-[0.5px] outline-offset-[-0.5px]"
                /> */}
              </div>
            </Link>

            <div
              onClick={() => setOpen(true)}
              className="mx-[8px] flex flex-row items-center justify-start pl-[4px]"
            >
              <span className="text-barcelona-secondary-text relative max-w-full min-w-0 overflow-visible leading-[calc(1.4*1em)] whitespace-pre-line">
                What&apos;s new?
              </span>
            </div>

            <button onClick={() => setOpen(true)}></button>
          </div>
        </Dialog.Trigger>
      </Dialog.Root>
    </div>
  )
}
