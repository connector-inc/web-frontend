'use client'

import { Dialog } from 'radix-ui'

import { usePostDialog } from '@/app/(platform)/_hooks/post-dialog-context'
import ArchiveMultiple20RegularIcon from '@fluentui/svg-icons/icons/archive_multiple_20_regular.svg'
import ArrowLeft20FilledIcon from '@fluentui/svg-icons/icons/arrow_left_20_filled.svg'
import Gif20RegularIcon from '@fluentui/svg-icons/icons/gif_20_regular.svg'
import ImageMultiple20RegularIcon from '@fluentui/svg-icons/icons/image_multiple_20_regular.svg'
import Location20RegularIcon from '@fluentui/svg-icons/icons/location_20_regular.svg'
import MoreCircle20RegularIcon from '@fluentui/svg-icons/icons/more_circle_20_regular.svg'
import NumberSymbol20RegularIcon from '@fluentui/svg-icons/icons/number_symbol_20_regular.svg'
import PollHorizontal20RegularIcon from '@fluentui/svg-icons/icons/poll_horizontal_20_regular.svg'
import Placeholder from '@tiptap/extension-placeholder'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import { useState } from 'react'

const slideAnimation = {
  enter: (direction: number) => ({
    x: direction > 0 ? '310px' : '-310px',
    opacity: 0,
    // scale: 0.96,
  }),
  center: {
    x: 0,
    opacity: 1,
    // scale: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? '-310px' : '310px',
    opacity: 0,
    // scale: 0.96,
  }),
}

const RichTextEditor = ({ className }: { className?: string }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        paragraph: {
          HTMLAttributes: {
            class: 'custom-paragraph placeholder:text-barcelona-secondary-text',
          },
        },
      }),
      Placeholder.configure({
        placeholder: "What's new?",
      }),
    ],
    editorProps: {
      attributes: {
        class:
          '[outline-style:none_!important] select-text whitespace-[pre-wrap_!important] overflow-auto text-primary-text relative ',
      },
    },
    autofocus: true,
    // content: '<p></p>',
  })

  return <EditorContent editor={editor} className={className} />
}

export default function PostDialog() {
  const { activeMenu, setActiveMenu } = usePostDialog()
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
      <Dialog.Overlay className="md:bg-barcelona-dark-backdrop-background bg-barcelona-elevated-background data-[state=open]:animate-in data-[state=open]:fade-in data-[state=closed]:animate-out data-[state=closed]:fade-out fixed inset-0 z-10 origin-center touch-manipulation transition-all duration-200 ease-in-out"></Dialog.Overlay>

      <Dialog.Content className="data-[state=open]:animate-in md:data-[state=open]:fade-in max-[768px]:data-[state=open]:slide-in-from-bottom data-[state=closed]:animate-out md:data-[state=closed]:fade-out max-[768px]:data-[state=closed]:slide-out-to-bottom md:data-[state=closed]:zoom-out-95 md:data-[state=open]:zoom-in-95 border-barcelona-primary-outline bg-barcelona-elevated-background fixed top-[50%] left-[50%] z-10 h-dvh w-screen origin-center -translate-x-1/2 -translate-y-1/2 touch-manipulation overflow-hidden transition-all duration-200 ease-in-out focus:outline-none md:h-auto md:max-h-[calc(100dvh-50px)] md:w-[620px] md:max-w-[calc(100vw-32px)] md:rounded-[16px] md:border-[0.5px] md:shadow-[0_12px_24px_0_var(--barcelona-box-shadow-08)]">
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
                      <button className="relative inline-flex h-[34px] min-h-0 max-w-full min-w-0 basis-auto cursor-pointer touch-manipulation flex-row items-center justify-center rounded-[10px] text-[1.0625rem] transition-transform duration-200 ease-in-out outline-none select-none active:scale-90">
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
                      className="cursor-pointer touch-manipulation py-[6px] transition-transform duration-200 ease-in-out outline-none select-none active:scale-90"
                    >
                      <ArchiveMultiple20RegularIcon className="fill-barcelona-primary-icon relative h-[25px] w-[25px] shrink-0" />
                    </button>

                    <button className="cursor-pointer touch-manipulation py-[6px] transition-transform duration-200 ease-in-out outline-none select-none active:scale-90">
                      <MoreCircle20RegularIcon className="fill-barcelona-primary-icon relative h-[24px] w-[24px] shrink-0" />
                    </button>
                  </div>
                </div>
              </Dialog.Title>

              <Dialog.Description asChild>
                <div className="max-h-[calc(100svh-56px-64px)] overflow-y-auto md:max-h-[calc(100svh-128px-50px)]">
                  <div>
                    <div className="grid grid-cols-[var(--barcelona-threadline-column-width)_minmax(0,1fr)] grid-rows-[21px_19px_max-content_max-content] overflow-visible px-[24px] pt-[16px] pb-[5px]">
                      <div className="relative col-start-1 row-start-1 pt-[4px]">
                        <div className="bg-barcelona-tertiary-background flex size-[36px] rounded-full select-none">
                          <Image
                            src={'/avatar.png'}
                            alt=""
                            width={360}
                            height={360}
                            className="outline-barcelona-primary-outline size-[36px] touch-none rounded-full object-cover outline-[0.5px] outline-offset-[-0.5px]"
                          />
                        </div>
                      </div>

                      <div className="col-start-2 row-start-1 flex items-center self-end">
                        <div className="flex grow items-center">
                          <span className="text-barcelona-primary-text relative max-w-full min-w-0 overflow-visible text-start leading-[calc(1.4*1em)] font-semibold whitespace-pre-line">
                            Administrator
                          </span>
                        </div>
                      </div>

                      <div className="col-start-2 row-start-2 row-end-[span_2]">
                        <RichTextEditor className="relative" />

                        <div className="mt-[4px] ml-[-8px] flex h-[36px] items-center">
                          <button className="relative flex size-[36px] min-h-0 min-w-0 shrink-0 basis-auto cursor-pointer touch-manipulation flex-row items-center justify-center rounded-[50%] outline-none select-none">
                            <div className="transition-transform duration-200 active:scale-90">
                              <ImageMultiple20RegularIcon className="fill-barcelona-secondary-icon relative size-[25px] shrink-0" />
                            </div>
                          </button>

                          <button className="relative flex size-[36px] min-h-0 min-w-0 shrink-0 basis-auto cursor-pointer touch-manipulation flex-row items-center justify-center rounded-[50%] outline-none select-none">
                            <div className="transition-transform duration-200 active:scale-90">
                              <Gif20RegularIcon className="fill-barcelona-secondary-icon relative size-[25px] shrink-0" />
                            </div>
                          </button>

                          <button className="relative flex size-[36px] min-h-0 min-w-0 shrink-0 basis-auto cursor-pointer touch-manipulation flex-row items-center justify-center rounded-[50%] outline-none select-none">
                            <div className="transition-transform duration-200 active:scale-90">
                              <NumberSymbol20RegularIcon className="fill-barcelona-secondary-icon relative size-[22px] shrink-0" />
                            </div>
                          </button>

                          <button className="relative flex size-[36px] min-h-0 min-w-0 shrink-0 basis-auto cursor-pointer touch-manipulation flex-row items-center justify-center rounded-[50%] outline-none select-none">
                            <div className="transition-transform duration-200 active:scale-90">
                              <PollHorizontal20RegularIcon className="fill-barcelona-secondary-icon relative size-[22px] shrink-0" />
                            </div>
                          </button>

                          <button className="relative flex size-[36px] min-h-0 min-w-0 shrink-0 basis-auto cursor-pointer touch-manipulation flex-row items-center justify-center rounded-[50%] outline-none select-none">
                            <div className="transition-transform duration-200 active:scale-90">
                              <Location20RegularIcon className="fill-barcelona-secondary-icon relative size-[22px] shrink-0" />
                            </div>
                          </button>
                        </div>
                      </div>

                      <div className="relative col-start-1 row-start-2 row-end-[span_2] flex">
                        <div className="absolute top-[31px] bottom-0 left-[17px]">
                          <div className="bg-barcelona-threadline h-full w-[2px] rounded-[2px]"></div>
                        </div>
                      </div>

                      <div className="col-start-1 col-end-[span_2] row-start-4 flex items-center pt-[10px] opacity-40">
                        <div className="w-[var(--barcelona-threadline-column-width)] pl-[10px]">
                          <div className="bg-barcelona-tertiary-background flex size-[16px] touch-manipulation rounded-full select-none">
                            <Image
                              src={'/avatar.png'}
                              alt=""
                              width={80}
                              height={80}
                              className="outline-barcelona-primary-outline size-[16px] rounded-full object-cover outline-[0.5px] outline-offset-[-0.5px]"
                            />
                          </div>
                        </div>

                        <div className="relative inline-flex basis-auto cursor-not-allowed touch-manipulation flex-row items-stretch select-none">
                          <span className="text-barcelona-secondary-text relative min-w-0 overflow-visible text-start leading-[calc(1.4*1em)] whitespace-pre-line">
                            Add to thread
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Description>

              <div className="max-[768px]:fixed max-[768px]:right-0 max-[768px]:bottom-0 max-[768px]:left-0 max-[768px]:z-10 max-[768px]:m-auto">
                <div className="flex h-[64px] w-full flex-row-reverse items-center justify-between p-[24px] md:h-[84px]">
                  <div className="ml-[12px] shrink-0">
                    <button className="border-barcelona-primary-outline text-barcelona-primary-text relative inline-flex h-[36px] min-h-0 max-w-full min-w-0 cursor-not-allowed touch-manipulation flex-row items-center justify-center rounded-[10px] border-[1px] font-semibold whitespace-nowrap opacity-40 transition-transform duration-200 ease-in-out select-none active:scale-90">
                      <div className="flex items-center justify-center overflow-hidden px-[16px] text-ellipsis">
                        Post
                      </div>
                    </button>
                  </div>

                  <div className="grow">
                    <div className="relative ml-[-8px] inline-flex min-h-0 min-w-0 cursor-pointer touch-manipulation flex-row items-stretch p-[8px] transition-opacity select-none active:opacity-60">
                      <span className="text-barcelona-secondary-text relative min-w-0 overflow-visible text-start leading-[calc(1.4*1em)] whitespace-pre-line">
                        Anyone can reply & quote
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeMenu === 'archive' && (
            <motion.div
              key="archive"
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
                      className="relative inline-flex h-[34px] min-h-0 max-w-full min-w-0 basis-auto cursor-pointer touch-manipulation flex-row items-center justify-center rounded-[10px] text-[1.0625rem] transition-transform duration-200 ease-in-out outline-none select-none active:scale-90"
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
                <div className="flex h-[calc(100svh-96px)] w-full flex-col items-center justify-start overflow-y-auto rounded-[12px] md:max-h-[600px]">
                  <div className="my-auto flex flex-col items-center justify-center">
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
                  {/* <div className="w-full flex-col">
                    <div className="h-[100px] w-full bg-white px-[24px] py-[16px]"></div>
                    <div className="h-[100px] w-full bg-black px-[24px] py-[16px]"></div>
                    <div className="h-[100px] w-full bg-white px-[24px] py-[16px]"></div>
                    <div className="h-[100px] w-full bg-black px-[24px] py-[16px]"></div>
                    <div className="h-[100px] w-full bg-white px-[24px] py-[16px]"></div>
                    <div className="h-[100px] w-full bg-black px-[24px] py-[16px]"></div>
                    <div className="h-[100px] w-full bg-white px-[24px] py-[16px]"></div>
                    <div className="h-[100px] w-full bg-black px-[24px] py-[16px]"></div>
                  </div> */}
                </div>
              </Dialog.Description>
            </motion.div>
          )}
        </AnimatePresence>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
