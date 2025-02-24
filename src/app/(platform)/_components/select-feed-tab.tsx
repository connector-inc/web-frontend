'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Tabs } from 'radix-ui'

export default function SelectFeedTab({ className }: { className?: string }) {
  const pathname = usePathname()

  return (
    <Tabs.Root
      onPointerDown={(event) => event.preventDefault()}
      onKeyDown={(event) => event.preventDefault()}
      defaultValue={
        pathname === '/' || pathname === '/for-you' ? 'for-you' : 'following'
      }
      className={className}
    >
      <Tabs.List className="grid w-full grid-cols-[repeat(2,1fr)] items-center">
        <Tabs.Trigger asChild value="for-you">
          <div className="border-barcelona-primary-outline group relative border-b-[1px] text-center">
            <Link
              href={'/'}
              className="flex h-[48px] cursor-pointer touch-manipulation flex-col items-center justify-center text-center select-none"
            >
              <span className="text-barcelona-primary-text group-data-[state=inactive]:text-barcelona-secondary-text relative max-w-full min-w-0 overflow-visible text-start leading-[calc(1.4*1em)] font-semibold whitespace-pre-line group-active:opacity-60">
                For you
              </span>
            </Link>
            <div className="border-barcelona-primary-text absolute right-0 bottom-[-1px] left-0 border-b-[1px] will-change-transform group-data-[state=active]:block"></div>
          </div>
        </Tabs.Trigger>
        <Tabs.Trigger asChild value="following">
          <div className="border-barcelona-primary-outline group relative border-b-[1px] text-center">
            <Link
              href={'/following'}
              className="flex h-[48px] cursor-pointer touch-manipulation flex-col items-center justify-center text-center select-none"
            >
              <span className="text-barcelona-primary-text group-data-[state=inactive]:text-barcelona-secondary-text relative max-w-full min-w-0 overflow-visible text-start leading-[calc(1.4*1em)] font-semibold whitespace-pre-line group-active:opacity-60">
                Following
              </span>
            </Link>
            <div className="border-barcelona-primary-text absolute right-0 bottom-[-1px] left-0 hidden border-b-[1px] will-change-transform group-data-[state=active]:block"></div>
          </div>
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  )
}
