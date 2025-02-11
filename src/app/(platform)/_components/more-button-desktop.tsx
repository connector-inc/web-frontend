'use client'

import ArrowLeft20FilledIcon from '@fluentui/svg-icons/icons/arrow_left_20_filled.svg'
import ChevronRight20FilledIcon from '@fluentui/svg-icons/icons/chevron_right_20_filled.svg'
import Options20RegularIcon from '@fluentui/svg-icons/icons/options_20_regular.svg'
import WeatherMoon20RegularIcon from '@fluentui/svg-icons/icons/weather_moon_20_regular.svg'
import WeatherSunny20RegularIcon from '@fluentui/svg-icons/icons/weather_sunny_20_regular.svg'
import { AnimatePresence, motion } from 'motion/react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { DropdownMenu } from 'radix-ui'
import { useState } from 'react'

const slideAnimation = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
}

export default function MoreButtonDesktop() {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [activeMenu, setActiveMenu] = useState('main')
  const [direction, setDirection] = useState(0)

  const goToAppearance = () => {
    setDirection(1)
    setActiveMenu('appearance')
  }

  const goToMain = () => {
    setDirection(-1)
    setActiveMenu('main')
  }

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger
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
            <div className="flex h-[54px] w-[54px] items-center justify-center transition-transform duration-200 [transition-timing-function:ease-in-out] group-active:scale-[0.96]">
              <Options20RegularIcon className="fill-barcelona-navigation-icon group-hover:fill-barcelona-primary-icon h-[28px] w-[28px] shrink-0 transition-colors duration-200" />
            </div>
          </button>
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          avoidCollisions
          side={'top'}
          sideOffset={-54}
          align={'start'}
          alignOffset={0}
          className="bg-barcelona-elevated-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 z-10 min-h-fit w-fit min-w-[240px] origin-bottom-left overflow-hidden rounded-[16px] shadow-[0_10.5px_21px_var(--barcelona-box-shadow-08)] transition-all"
          style={{
            outline: '0.5px solid var(--barcelona-primary-column-outline)',
          }}
        >
          <div className="relative">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              {activeMenu === 'main' && (
                <motion.div
                  key="main"
                  custom={direction}
                  variants={slideAnimation}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: 'tween', duration: 0.1 }}
                  className="w-[240px]"
                >
                  <DropdownMenu.Group className="border-barcelona-threadline border-b-[1px] border-solid p-[8px]">
                    <DropdownMenu.Item
                      onSelect={(event) => {
                        event.preventDefault()
                        goToAppearance()
                      }}
                      className="hover:bg-barcelona-hovered-background group relative h-[52px] min-h-[24px] w-full min-w-0 cursor-pointer touch-manipulation items-stretch rounded-[12px] bg-transparent p-[12px] outline-hidden transition-transform duration-200 select-none active:scale-[0.96]"
                    >
                      <div className="relative z-10 flex h-[28px] min-h-[20px] w-[200px] items-center justify-stretch">
                        <span className="relative max-w-full min-w-0 grow overflow-visible text-start leading-[calc(1.4*1em)] font-semibold whitespace-pre-line">
                          Appearance
                        </span>
                        <div className="ml-[8px] flex items-center">
                          <ChevronRight20FilledIcon className="fill-barcelona-secondary-icon h-[20px] w-[20px]" />
                        </div>
                      </div>
                      <div className="ease-fds-animation-fade-out pointer-events-none absolute inset-0 rounded-[12px] bg-transparent opacity-0 transition-opacity duration-200 group-active:opacity-100"></div>
                    </DropdownMenu.Item>

                    <Link href={'/settings'} passHref>
                      <DropdownMenu.Item className="hover:bg-barcelona-hovered-background group relative h-[52px] min-h-[24px] w-full min-w-0 cursor-pointer touch-manipulation items-stretch rounded-[12px] bg-transparent p-[12px] outline-hidden transition-transform duration-200 select-none active:scale-[0.96]">
                        <div className="relative z-10 flex h-[28px] min-h-[20px] w-[200px] items-center justify-stretch">
                          <span className="relative max-w-full min-w-0 grow overflow-visible text-start leading-[calc(1.4*1em)] font-semibold whitespace-pre-line">
                            Settings
                          </span>
                        </div>
                        <div className="ease-fds-animation-fade-out pointer-events-none absolute inset-0 rounded-[12px] bg-transparent opacity-0 transition-opacity duration-200 group-active:opacity-100"></div>
                      </DropdownMenu.Item>
                    </Link>
                  </DropdownMenu.Group>

                  <DropdownMenu.Group className="p-[8px]">
                    <DropdownMenu.Item className="hover:bg-barcelona-hovered-background group relative h-[52px] min-h-[24px] w-full min-w-0 cursor-pointer touch-manipulation items-stretch rounded-[12px] bg-transparent p-[12px] outline-hidden transition-transform duration-200 select-none active:scale-[0.96]">
                      <div className="relative z-10 flex h-[28px] min-h-[20px] w-[200px] items-center justify-stretch">
                        <span className="relative max-w-full min-w-0 grow overflow-visible text-start leading-[calc(1.4*1em)] font-semibold whitespace-pre-line">
                          Report a problem
                        </span>
                      </div>
                      <div className="ease-fds-animation-fade-out pointer-events-none absolute inset-0 rounded-[12px] bg-transparent opacity-0 transition-opacity duration-200 group-active:opacity-100"></div>
                    </DropdownMenu.Item>

                    <DropdownMenu.Item className="hover:bg-barcelona-hovered-background group relative h-[52px] min-h-[24px] w-full min-w-0 cursor-pointer touch-manipulation items-stretch rounded-[12px] bg-transparent p-[12px] outline-hidden transition-transform duration-200 select-none active:scale-[0.96]">
                      <div className="relative z-10 flex h-[28px] min-h-[20px] w-[200px] items-center justify-stretch">
                        <span className="text-barcelona-error-text relative max-w-full min-w-0 grow overflow-visible text-start leading-[calc(1.4*1em)] font-semibold whitespace-pre-line">
                          Log out
                        </span>
                      </div>
                      <div className="ease-fds-animation-fade-out pointer-events-none absolute inset-0 rounded-[12px] bg-transparent opacity-0 transition-opacity duration-200 group-active:opacity-100"></div>
                    </DropdownMenu.Item>
                  </DropdownMenu.Group>
                </motion.div>
              )}

              {activeMenu === 'appearance' && (
                <motion.div
                  key="appearance"
                  custom={direction}
                  variants={slideAnimation}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: 'tween', duration: 0.1 }}
                  className="w-[320px]"
                >
                  <DropdownMenu.Group className="w-[320px]">
                    <DropdownMenu.Item
                      onSelect={(event) => event.preventDefault()}
                      className="flex flex-row items-center justify-between focus-visible:outline-hidden"
                    >
                      <button
                        onClick={() => {
                          goToMain()
                        }}
                        className="relative inline-flex shrink-0 cursor-pointer touch-manipulation items-stretch rounded-tl-[16px] p-[16px] select-none"
                      >
                        <ArrowLeft20FilledIcon className="fill-barcelona-primary-icon h-[16px] w-[16px]" />
                      </button>
                      <span className="relative max-w-full min-w-0 grow overflow-visible text-center leading-[calc(1.4*1em)] font-semibold whitespace-pre-line select-none">
                        Appearance
                      </span>
                      <div className="w-[48px]" />
                    </DropdownMenu.Item>
                    <DropdownMenu.RadioGroup
                      value={theme}
                      onValueChange={setTheme}
                      className="px-[16px] pt-[8px] pb-[16px]"
                    >
                      <div className="bg-barcelona-secondary-background flex h-[44px] flex-row items-stretch rounded-[12px]">
                        <DropdownMenu.RadioItem
                          onSelect={(event) => event.preventDefault()}
                          value="light"
                          className="group relative flex min-w-0 grow basis-0 cursor-pointer touch-manipulation flex-col items-center justify-center px-[18px] select-none focus-visible:outline-hidden"
                        >
                          <DropdownMenu.ItemIndicator className="animate-theme-fade absolute inset-0 z-10 flex h-full w-full items-center justify-center">
                            <div className="border-barcelona-primary-outline bg-barcelona-tertiary-background absolute inset-0 rounded-[12px] border-[0.5px]"></div>
                            <WeatherSunny20RegularIcon className="fill-barcelona-primary-icon z-10 h-[20px] w-[20px]" />
                          </DropdownMenu.ItemIndicator>
                          <WeatherSunny20RegularIcon className="fill-barcelona-secondary-icon h-[20px] w-[20px] group-data-[state=checked]:hidden" />
                        </DropdownMenu.RadioItem>
                        <DropdownMenu.RadioItem
                          onSelect={(event) => event.preventDefault()}
                          value="dark"
                          className="group relative flex min-w-0 grow basis-0 cursor-pointer touch-manipulation flex-col items-center justify-center px-[18px] select-none focus-visible:outline-hidden"
                        >
                          <DropdownMenu.ItemIndicator className="animate-theme-fade absolute inset-0 z-10 flex h-full w-full items-center justify-center">
                            <div className="border-barcelona-primary-outline bg-barcelona-tertiary-background absolute inset-0 rounded-[12px] border-[0.5px]"></div>
                            <WeatherMoon20RegularIcon className="fill-barcelona-primary-icon z-10 h-[20px] w-[20px]" />
                          </DropdownMenu.ItemIndicator>
                          <WeatherMoon20RegularIcon className="fill-barcelona-secondary-icon h-[20px] w-[20px] group-data-[state=checked]:hidden" />
                        </DropdownMenu.RadioItem>
                        <DropdownMenu.RadioItem
                          onSelect={(event) => event.preventDefault()}
                          value="system"
                          className="group relative flex min-w-0 grow basis-0 cursor-pointer touch-manipulation flex-col items-center justify-center px-[18px] select-none focus-visible:outline-hidden"
                        >
                          <DropdownMenu.ItemIndicator className="animate-theme-fade absolute inset-0 z-10 flex h-full w-full items-center justify-center">
                            <div className="border-barcelona-primary-outline bg-barcelona-tertiary-background absolute inset-0 rounded-[12px] border-[0.5px]"></div>
                            <span className="text-barcelona-primary-text relative max-w-full min-w-0 overflow-visible text-start leading-[calc(1.4*1em)] font-semibold whitespace-pre-line">
                              Auto
                            </span>
                          </DropdownMenu.ItemIndicator>
                          <span className="text-barcelona-secondary-text relative max-w-full min-w-0 overflow-visible text-start leading-[calc(1.4*1em)] font-semibold whitespace-pre-line group-data-[state=checked]:hidden">
                            Auto
                          </span>
                        </DropdownMenu.RadioItem>
                      </div>
                    </DropdownMenu.RadioGroup>
                  </DropdownMenu.Group>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
