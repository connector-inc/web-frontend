'use client'

import { Dialog } from 'radix-ui'

import ArchiveMultiple20RegularIcon from '@fluentui/svg-icons/icons/archive_multiple_20_regular.svg'
import ArrowLeft20FilledIcon from '@fluentui/svg-icons/icons/arrow_left_20_filled.svg'
import MoreCircle20RegularIcon from '@fluentui/svg-icons/icons/more_circle_20_regular.svg'
import { AnimatePresence, motion } from 'motion/react'
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

export default function PostDialog() {
  const [activeMenu, setActiveMenu] = useState('main')
  const [direction, setDirection] = useState(0)

  const goToMain = () => {
    setDirection(-1)
    setActiveMenu('main')
  }

  const goToArchive = () => {
    setDirection(1)
    setActiveMenu('archive')
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-barcelona-dark-backdrop-background data-[state=open]:animate-in data-[state=open]:fade-in data-[state=closed]:animate-out data-[state=closed]:fade-out fixed inset-0 z-40 origin-center transition-all duration-200 ease-in-out"></Dialog.Overlay>

      <Dialog.Content className="data-[state=open]:animate-in md:data-[state=open]:fade-in data-[state=open]:slide-in-from-bottom data-[state=closed]:animate-out md:data-[state=closed]:fade-out data-[state=closed]:slide-out-to-bottom md:data-[state=closed]:zoom-out-95 md:data-[state=open]:zoom-in-95 border-barcelona-primary-outline bg-barcelona-elevated-background fixed top-[50%] left-[50%] z-50 h-screen w-screen origin-center -translate-x-1/2 -translate-y-1/2 overflow-visible transition-all duration-200 ease-in-out focus:outline-none md:h-auto md:w-[620px] md:max-w-[calc(100vw-32px)] md:rounded-[16px] md:border-[0.5px] md:shadow-[0_12px_24px_0_var(--barcelona-box-shadow-08)]">
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
                transition={{ type: 'tween', duration: 0.2 }}
              >
                <Dialog.Title asChild>
                  <div className="border-barcelona-primary-outline grid h-[56px] w-screen grid-cols-[minmax(64px,100px)_minmax(0,1fr)_minmax(64px,100px)] items-center md:w-[620px] md:max-w-[calc(100vw-32px)] md:border-b-[0.5px]">
                    <div className="col-start-1 flex h-full items-center pl-[24px]">
                      <Dialog.Close asChild>
                        <button className="relative inline-flex h-[34px] min-h-0 max-w-full min-w-0 basis-auto cursor-pointer touch-manipulation flex-row items-center justify-center rounded-[10px] text-[1.0625rem] transition-transform duration-200 ease-in-out outline-none select-none active:scale-[0.96]">
                          <div className="overflow-hidden text-ellipsis">
                            Cancel
                          </div>
                        </button>
                      </Dialog.Close>
                    </div>

                    <div className="col-start-2 flex w-full flex-row items-center justify-center">
                      <span className="text-system-16-font-size relative max-w-full min-w-0 overflow-visible text-center leading-[calc(1.3125*1em)] font-bold whitespace-pre-line">
                        <span className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                          New thread
                        </span>
                      </span>
                    </div>

                    <div className="col-start-3 flex flex-row items-center justify-end gap-x-[16px] pr-[24px]">
                      <button
                        onClick={goToArchive}
                        className="cursor-pointer touch-manipulation py-[6px] transition-transform duration-200 ease-in-out outline-none select-none active:scale-[0.90]"
                      >
                        <ArchiveMultiple20RegularIcon className="fill-barcelona-primary-icon relative h-[25px] w-[25px] shrink-0" />
                      </button>
                      <div className="cursor-pointer touch-manipulation py-[6px] transition-transform duration-200 ease-in-out outline-none select-none active:scale-[0.90]">
                        <MoreCircle20RegularIcon className="fill-barcelona-primary-icon relative h-[24px] w-[24px] shrink-0" />
                      </div>
                    </div>
                  </div>
                </Dialog.Title>

                <Dialog.Description asChild>
                  <div className="h-[134px] w-screen overflow-auto bg-green-500 px-[24px] pt-[16px] pb-[5px] md:w-[620px]"></div>
                </Dialog.Description>

                <div className="fixed bottom-0 h-[64px] w-screen bg-blue-500 p-[24px] md:h-[84px] md:w-[620px]"></div>
              </motion.div>
            )}

            {activeMenu === 'archive' && (
              <motion.div
                key="appearance"
                custom={direction}
                variants={slideAnimation}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'tween', duration: 0.2 }}
              >
                <Dialog.Title asChild>
                  <div className="border-barcelona-primary-outline grid h-[56px] w-screen grid-cols-[minmax(64px,100px)_minmax(0,1fr)_minmax(64px,100px)] items-center md:w-[620px] md:max-w-[calc(100vw-32px)] md:border-b-[0.5px]">
                    <div className="col-start-1 flex h-full items-center pl-[24px]">
                      <button
                        onClick={goToMain}
                        className="relative inline-flex h-[34px] min-h-0 max-w-full min-w-0 basis-auto cursor-pointer touch-manipulation flex-row items-center justify-center rounded-[10px] text-[1.0625rem] transition-transform duration-200 ease-in-out outline-none select-none active:scale-[0.96]"
                      >
                        <ArrowLeft20FilledIcon className="fill-barcelona-primary-icon relative h-[24px] w-[24px] shrink-0" />
                      </button>
                    </div>

                    <div className="col-start-2 flex w-full flex-row items-center justify-center">
                      <span className="text-system-16-font-size relative max-w-full min-w-0 overflow-visible text-center leading-[calc(1.3125*1em)] font-bold whitespace-pre-line">
                        <span className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                          Drafts
                        </span>
                      </span>
                    </div>
                  </div>
                </Dialog.Title>

                <Dialog.Description asChild>
                  <div className="flex h-[calc(100dvh-56px)] max-h-full w-full flex-row items-center justify-center overflow-y-auto rounded-[12px] md:h-[600px] md:max-h-[600px]">
                    <div className="flex flex-col items-center justify-center md:py-[167px]">
                      <ArchiveMultiple20RegularIcon className="fill-barcelona-secondary-icon relative h-[96px] w-[96px] shrink-0" />

                      <div className="mt-[24px] flex flex-col">
                        <span className="text-barcelona-secondary-text relative max-w-full overflow-visible text-center leading-[calc(1.4*1em)] font-semibold whitespace-pre-line">
                          No drafts yet
                        </span>
                        <span className="text-barcelona-secondary-text relative max-w-full overflow-visible text-center leading-[calc(1.4*1em)] whitespace-pre-line">
                          Your drafts will appear here.
                        </span>
                      </div>
                    </div>
                  </div>
                </Dialog.Description>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
