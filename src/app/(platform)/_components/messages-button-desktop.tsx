'use client'

import ChatMultiple20FilledIcon from '@fluentui/svg-icons/icons/chat_multiple_20_filled.svg'
import ChatMultiple20RegularIcon from '@fluentui/svg-icons/icons/chat_multiple_20_regular.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MessagesButtonDesktop({
  className,
}: {
  className?: string
}) {
  const pathname = usePathname()

  return (
    <div className={className}>
      <Link
        href={'/messages'}
        className="relative flex items-center justify-center"
      >
        <div className="flex h-[54px] w-[54px] items-center justify-center transition-transform duration-200 [transition-timing-function:ease-in-out] group-active:scale-90">
          {pathname === '/messages' ? (
            <ChatMultiple20FilledIcon className="fill-barcelona-primary-icon stroke-barcelona-primary-icon size-[28px] shrink-0 stroke-[0.0]" />
          ) : (
            <ChatMultiple20RegularIcon className="group-hover:fill-barcelona-primary-icon fill-barcelona-navigation-icon group-hover:stroke-barcelona-primary-icon stroke-barcelona-navigation-icon size-[28px] shrink-0 stroke-[0.25] transition-colors duration-200" />
          )}
        </div>
      </Link>
    </div>
  )
}
