'use client'

import Checkmark20FilledIcon from '@fluentui/svg-icons/icons/checkmark_20_filled.svg'
import ChevronDown20FilledIcon from '@fluentui/svg-icons/icons/chevron_down_20_filled.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { DropdownMenu } from 'radix-ui'
import { useState } from 'react'

export default function SelectFeedDropdown() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger
        asChild
        onPointerDown={(event) => event.preventDefault()}
        onKeyDown={(event) => event.preventDefault()}
        onClick={() => {
          setOpen(true)
        }}
      >
        <button className="bg-barcelona-elevated-background border-barcelona-primary-outline relative flex h-[24px] min-h-0 w-[24px] min-w-0 shrink-0 basis-auto cursor-pointer touch-manipulation flex-row items-center justify-center rounded-full border-[0.5px] transition-transform duration-200 outline-none select-none hover:scale-[1.05] active:scale-90">
          <ChevronDown20FilledIcon className="fill-barcelona-primary-icon h-[12px] w-[12px]" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          side={'bottom'}
          sideOffset={6}
          align={'center'}
          //   alignOffset={100}
          className="bg-barcelona-elevated-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 z-10 min-h-fit w-fit min-w-[240px] origin-top overflow-hidden rounded-[16px] shadow-[0_10.5px_21px_var(--barcelona-box-shadow-08)] transition-all duration-200"
          style={{
            outline: '0.5px solid var(--barcelona-primary-column-outline)',
          }}
        >
          <div className="w-[240px]">
            <DropdownMenu.Group className="border-barcelona-threadline border-solid p-[8px]">
              <Link href={'/for-you'} passHref>
                <DropdownMenu.Item className="hover:bg-barcelona-hovered-background group relative h-[52px] min-h-[24px] w-full min-w-0 cursor-pointer touch-manipulation items-stretch rounded-[12px] bg-transparent p-[12px] outline-hidden transition-transform duration-200 select-none active:scale-90">
                  <div className="relative z-10 flex h-[28px] min-h-[20px] w-[200px] items-center justify-stretch">
                    <span className="relative max-w-full min-w-0 grow overflow-visible text-start leading-[calc(1.4*1em)] font-semibold whitespace-pre-line">
                      For you
                    </span>
                    {(pathname === '/' || pathname === '/for-you') && (
                      <div className="ml-[8px] flex items-center">
                        <Checkmark20FilledIcon className="fill-barcelona-primary-icon h-[16px] w-[16px]" />
                      </div>
                    )}
                  </div>
                  <div className="ease-fds-animation-fade-out pointer-events-none absolute inset-0 rounded-[12px] bg-transparent opacity-0 transition-opacity duration-200 group-active:opacity-100"></div>
                </DropdownMenu.Item>
              </Link>

              <Link href={'/following'} passHref>
                <DropdownMenu.Item className="hover:bg-barcelona-hovered-background group relative h-[52px] min-h-[24px] w-full min-w-0 cursor-pointer touch-manipulation items-stretch rounded-[12px] bg-transparent p-[12px] outline-hidden transition-transform duration-200 select-none active:scale-90">
                  <div className="relative z-10 flex h-[28px] min-h-[20px] w-[200px] items-center justify-stretch">
                    <span className="relative max-w-full min-w-0 grow overflow-visible text-start leading-[calc(1.4*1em)] font-semibold whitespace-pre-line">
                      Following
                    </span>
                    {pathname === '/settings' && (
                      <div className="ml-[8px] flex items-center">
                        <Checkmark20FilledIcon className="fill-barcelona-primary-icon h-[16px] w-[16px]" />
                      </div>
                    )}
                  </div>
                  <div className="ease-fds-animation-fade-out pointer-events-none absolute inset-0 rounded-[12px] bg-transparent opacity-0 transition-opacity duration-200 group-active:opacity-100"></div>
                </DropdownMenu.Item>
              </Link>
            </DropdownMenu.Group>
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
