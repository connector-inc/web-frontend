'use client'

import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MoonIcon,
  SunIcon,
  ThreeBarsIcon,
} from '@primer/octicons-react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useState } from 'react'

export default function MoreButtonMobile() {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [activeMenu, setActiveMenu] = useState('main')

  return (
    <div className="relative col-start-1 row-start-1">
      <div className="absolute top-0 flex h-full w-[60px] items-center justify-center">
        <DropdownMenu.Root open={open} onOpenChange={setOpen}>
          <DropdownMenu.Trigger
            onPointerDown={(event) => event.preventDefault()}
            onKeyDown={(event) => event.preventDefault()}
            onClick={() => {
              setActiveMenu('main')
              setOpen(true)
            }}
            asChild
          >
            <div className="group relative">
              <button className="relative flex items-center justify-center">
                <div className="flex h-[48px] w-[48px] scale-100 items-center justify-center transition-transform duration-200 [transition-timing-function:ease-in-out] group-active:scale-90">
                  <ThreeBarsIcon
                    size={28}
                    className="fill-barcelona-navigation-icon group-hover:fill-barcelona-primary-icon flex-shrink-0 transition-colors duration-200"
                  />
                </div>
              </button>
            </div>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              avoidCollisions
              side={'bottom'}
              sideOffset={-8}
              align={'start'}
              alignOffset={8}
              className="bg-barcelona-elevated-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 z-10 min-h-fit w-fit min-w-[240px] origin-top-left overflow-hidden rounded-[16px] shadow-[0_10.5px_21px_var(--barcelona-box-shadow-08)] transition-all"
              style={{
                outline: '0.5px solid var(--barcelona-primary-column-outline)',
              }}
            >
              {activeMenu === 'main' && (
                <div className="animate-slide-in-left">
                  <DropdownMenu.Group className="border-barcelona-threadline border-b-[1px] border-solid p-[8px]">
                    <DropdownMenu.Item
                      onSelect={(event) => {
                        event.preventDefault()
                        setActiveMenu('appearance')
                      }}
                      className="hover:bg-barcelona-hovered-background group relative h-[44px] min-h-[24px] w-full min-w-0 cursor-pointer touch-manipulation select-none items-stretch rounded-[12px] bg-transparent p-[12px] outline-none transition-transform duration-100 active:scale-[0.98]"
                    >
                      <div className="relative z-10 flex h-[20px] min-h-[20px] w-[200px] items-center justify-stretch">
                        <span className="relative min-w-0 max-w-full flex-grow overflow-visible whitespace-pre-line text-start font-semibold leading-[calc(1.4*1em)]">
                          Appearance
                        </span>
                        <div className="ml-[8px] flex items-center">
                          <ChevronRightIcon
                            size={20}
                            className="fill-barcelona-secondary-icon"
                          />
                        </div>
                      </div>
                      <div className="duration-fds-duration-extra-extra-short-out ease-fds-animation-fade-out pointer-events-none absolute inset-0 rounded-[12px] bg-transparent opacity-0 transition-opacity group-active:opacity-100"></div>
                    </DropdownMenu.Item>

                    <Link href={'/settings'} passHref>
                      <DropdownMenu.Item className="hover:bg-barcelona-hovered-background group relative h-[44px] min-h-[24px] w-full min-w-0 cursor-pointer touch-manipulation select-none items-stretch rounded-[12px] bg-transparent p-[12px] outline-none transition-transform duration-100 active:scale-[0.98]">
                        <div className="relative z-10 flex h-[20px] min-h-[20px] w-[200px] items-center justify-stretch">
                          <span className="relative min-w-0 max-w-full flex-grow overflow-visible whitespace-pre-line text-start font-semibold leading-[calc(1.4*1em)]">
                            Settings
                          </span>
                        </div>
                        <div className="duration-fds-duration-extra-extra-short-out ease-fds-animation-fade-out pointer-events-none absolute inset-0 rounded-[12px] bg-transparent opacity-0 transition-opacity group-active:opacity-100"></div>
                      </DropdownMenu.Item>
                    </Link>
                  </DropdownMenu.Group>

                  <DropdownMenu.Group className="p-[8px]">
                    <DropdownMenu.Item className="hover:bg-barcelona-hovered-background group relative h-[44px] min-h-[24px] w-full min-w-0 cursor-pointer touch-manipulation select-none items-stretch rounded-[12px] bg-transparent p-[12px] outline-none transition-transform duration-100 active:scale-[0.98]">
                      <div className="relative z-10 flex h-[20px] min-h-[20px] w-[200px] items-center justify-stretch">
                        <span className="relative min-w-0 max-w-full flex-grow overflow-visible whitespace-pre-line text-start font-semibold leading-[calc(1.4*1em)]">
                          Report a problem
                        </span>
                      </div>
                      <div className="duration-fds-duration-extra-extra-short-out ease-fds-animation-fade-out pointer-events-none absolute inset-0 rounded-[12px] bg-transparent opacity-0 transition-opacity group-active:opacity-100"></div>
                    </DropdownMenu.Item>

                    <DropdownMenu.Item className="hover:bg-barcelona-hovered-background group relative h-[44px] min-h-[24px] w-full min-w-0 cursor-pointer touch-manipulation select-none items-stretch rounded-[12px] bg-transparent p-[12px] outline-none transition-transform duration-100 active:scale-[0.98]">
                      <div className="relative z-10 flex h-[20px] min-h-[20px] w-[200px] items-center justify-stretch">
                        <span className="text-barcelona-error-text relative min-w-0 max-w-full flex-grow overflow-visible whitespace-pre-line text-start font-semibold leading-[calc(1.4*1em)]">
                          Log out
                        </span>
                      </div>
                      <div className="duration-fds-duration-extra-extra-short-out ease-fds-animation-fade-out pointer-events-none absolute inset-0 rounded-[12px] bg-transparent opacity-0 transition-opacity group-active:opacity-100"></div>
                    </DropdownMenu.Item>
                  </DropdownMenu.Group>
                </div>
              )}

              {activeMenu === 'appearance' && (
                <div className="animate-slide-in-right">
                  <DropdownMenu.Group className="w-[320px]">
                    <DropdownMenu.Item
                      onSelect={(event) => event.preventDefault()}
                      className="flex flex-row items-center justify-between focus-visible:outline-none"
                    >
                      <button
                        onClick={() => {
                          setActiveMenu('main')
                        }}
                        className="relative inline-flex flex-shrink-0 cursor-pointer touch-manipulation select-none items-stretch rounded-tl-[16px] p-[14px]"
                      >
                        <ArrowLeftIcon
                          size={20}
                          className="fill-barcelona-primary-icon flex-shrink-0"
                        />
                      </button>
                      <span className="relative min-w-0 max-w-full flex-grow select-none overflow-visible whitespace-pre-line text-center font-semibold leading-[calc(1.4*1em)]">
                        Appearance
                      </span>
                      <div className="w-[48px]" />
                    </DropdownMenu.Item>
                    <DropdownMenu.RadioGroup
                      value={theme}
                      onValueChange={setTheme}
                      className="px-[16px] pb-[16px] pt-[8px]"
                    >
                      <div className="bg-barcelona-secondary-background flex h-[44px] flex-row items-stretch rounded-[12px]">
                        <DropdownMenu.RadioItem
                          onSelect={(event) => event.preventDefault()}
                          value="light"
                          className="group relative flex min-w-0 flex-grow basis-0 cursor-pointer touch-manipulation select-none flex-col items-center justify-center px-[18px] focus-visible:outline-none"
                        >
                          <DropdownMenu.ItemIndicator className="animate-theme-fade absolute inset-0 z-10 flex h-full w-full items-center justify-center">
                            <div className="border-barcelona-primary-outline bg-barcelona-tertiary-background absolute inset-0 rounded-[12px] border-[0.5px]"></div>
                            <SunIcon
                              size={20}
                              className="fill-barcelona-primary-icon z-10"
                            />
                          </DropdownMenu.ItemIndicator>
                          <SunIcon
                            size={20}
                            className="fill-barcelona-secondary-icon group-data-[state=checked]:hidden"
                          />
                        </DropdownMenu.RadioItem>
                        <DropdownMenu.RadioItem
                          onSelect={(event) => event.preventDefault()}
                          value="dark"
                          className="group relative flex min-w-0 flex-grow basis-0 cursor-pointer touch-manipulation select-none flex-col items-center justify-center px-[18px] focus-visible:outline-none"
                        >
                          <DropdownMenu.ItemIndicator className="animate-theme-fade absolute inset-0 z-10 flex h-full w-full items-center justify-center">
                            <div className="border-barcelona-primary-outline bg-barcelona-tertiary-background absolute inset-0 rounded-[12px] border-[0.5px]"></div>
                            <MoonIcon
                              size={20}
                              className="fill-barcelona-primary-icon z-10"
                            />
                          </DropdownMenu.ItemIndicator>
                          <MoonIcon
                            size={20}
                            className="fill-barcelona-secondary-icon group-data-[state=checked]:hidden"
                          />
                        </DropdownMenu.RadioItem>
                        <DropdownMenu.RadioItem
                          onSelect={(event) => event.preventDefault()}
                          value="system"
                          className="group relative flex min-w-0 flex-grow basis-0 cursor-pointer touch-manipulation select-none flex-col items-center justify-center px-[18px] focus-visible:outline-none"
                        >
                          <DropdownMenu.ItemIndicator className="animate-theme-fade absolute inset-0 z-10 flex h-full w-full items-center justify-center">
                            <div className="border-barcelona-primary-outline bg-barcelona-tertiary-background absolute inset-0 rounded-[12px] border-[0.5px]"></div>
                            <span className="text-barcelona-primary-text relative min-w-0 max-w-full overflow-visible whitespace-pre-line text-start font-semibold leading-[calc(1.4*1em)]">
                              Auto
                            </span>
                          </DropdownMenu.ItemIndicator>
                          <span className="text-barcelona-secondary-text relative min-w-0 max-w-full overflow-visible whitespace-pre-line text-start font-semibold leading-[calc(1.4*1em)] group-data-[state=checked]:hidden">
                            Auto
                          </span>
                        </DropdownMenu.RadioItem>
                      </div>
                    </DropdownMenu.RadioGroup>
                  </DropdownMenu.Group>
                </div>
              )}
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </div>
  )
}
