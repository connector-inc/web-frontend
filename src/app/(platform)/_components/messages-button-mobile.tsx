'use client'

import ChatMultiple20FilledIcon from '@fluentui/svg-icons/icons/chat_multiple_20_filled.svg'
import ChatMultiple20RegularIcon from '@fluentui/svg-icons/icons/chat_multiple_20_regular.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MessagesButtonMobile({
  className,
}: {
  className?: string
}) {
  const pathname = usePathname()

  return (
    <div className={className}>
      <Link
        href={'/messages'}
        className="absolute top-0 right-0 flex h-full w-[60px] items-center justify-center"
      >
        <div className="flex h-[48px] w-[48px] items-center justify-center transition-transform duration-200 [transition-timing-function:ease-in-out] group-active:scale-90">
          {pathname === '/messages' ? (
            <ChatMultiple20FilledIcon className="fill-barcelona-primary-icon h-[28px] w-[28px] shrink-0" />
          ) : (
            <ChatMultiple20RegularIcon className="fill-barcelona-navigation-icon h-[28px] w-[28px] shrink-0" />
          )}
        </div>
      </Link>
    </div>
  )
}
