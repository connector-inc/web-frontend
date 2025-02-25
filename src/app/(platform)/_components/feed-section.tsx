import ArrowRepeatAll20RegularIcon from '@fluentui/svg-icons/icons/arrow_repeat_all_20_regular.svg'
import ChatEmpty20RegularIcon from '@fluentui/svg-icons/icons/chat_empty_20_regular.svg'
import Heart20RegularIcon from '@fluentui/svg-icons/icons/heart_20_regular.svg'
import MoreHorizontal20RegularIcon from '@fluentui/svg-icons/icons/more_horizontal_20_regular.svg'
import Send20RegularIcon from '@fluentui/svg-icons/icons/send_20_regular.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function FeedSection() {
  return (
    <div className="translate-y-0 transition-transform duration-200">
      <div className="relative flex flex-col overflow-visible overscroll-y-contain [scrollbar-width:none] perspective-[1px] perspective-origin-top-right transform-3d">
        <div className="relative flex min-h-screen grow flex-col">
          {/* Posts */}
          <div className="flex flex-col">
            <div className="relative">
              <div className="relative">
                <div className="relative cursor-pointer px-[24px] py-[12px] max-[768px]:px-[12px]">
                  <div className="grid grid-cols-[48px_minmax(0,1fr)] grid-rows-[fit-content_19px_max-content_max-content]">
                    <div className="relative col-start-1 row-start-1 row-end-[span_2] pt-[4px]">
                      <div className="relative inline-flex cursor-pointer touch-manipulation flex-row items-stretch rounded-full select-none">
                        <div className="bg-grey-1 relative size-[36px] rounded-[18px]">
                          <div className="bg-barcelona-tertiary-background flex size-[36px] rounded-full select-none">
                            <Image
                              src={'/avatar.png'}
                              width={360}
                              height={360}
                              alt=""
                              className="outline-barcelona-primary-outline size-[36px] touch-none rounded-full object-cover outline-[0.5px] outline-offset-[-0.5px]"
                            />
                          </div>
                        </div>
                        {/* Following status badge */}
                        <div className=""></div>
                      </div>
                    </div>

                    <div className="col-start-2 row-start-1 self-start">
                      <div className="grid h-full grid-cols-[1fr_max-content]">
                        <div className="flex max-w-full items-baseline gap-x-[6px] overflow-hidden leading-[21px] text-ellipsis whitespace-nowrap">
                          <span className="flex flex-row items-center">
                            <div className="">
                              <span className="contents">
                                <div>
                                  <Link
                                    href={'/@powoftech'}
                                    className="inline cursor-pointer touch-manipulation"
                                  >
                                    <span className="relative max-w-full min-w-0 overflow-visible text-start leading-[calc(1.4*1em)] font-semibold text-nowrap whitespace-pre-line transition-opacity duration-200 hover:underline active:opacity-60">
                                      <span className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                                        powoftech
                                      </span>
                                    </span>
                                  </Link>
                                </div>
                              </span>
                            </div>
                            {/* Verified badge */}
                            <span className=""></span>
                          </span>

                          <div className="grid h-full grid-cols-[1fr_max-content] items-baseline gap-x-[6px]">
                            <div className="px-[1px]">
                              <span className="text-barcelona-secondary-text relative max-w-full min-w-0 overflow-visible text-start leading-[calc(1.4*1em)] text-nowrap whitespace-pre-line transition-opacity duration-200 hover:underline active:opacity-60">
                                <span>
                                  <Link
                                    href={'/@powoftech/post/aBcDeFgH'}
                                    className="text-barcelona-secondary-text inline cursor-pointer touch-manipulation"
                                  >
                                    <time
                                      title={new Date().toString()}
                                      dateTime={new Date().toISOString()}
                                      className="inline-block min-w-[24px] text-center whitespace-nowrap"
                                    >
                                      {new Date().toLocaleDateString('en-GB')}
                                      {/* <span>
                                        <abbr>
                                          <span>1m</span>
                                        </abbr>
                                      </span> */}
                                    </time>
                                  </Link>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-start-2 mt-[1px] ml-[10px] flex flex-row items-center gap-x-[16px] self-center leading-[20px]">
                          <div className="group size-[20px] rounded-[1px]">
                            <div className="relative inline-flex min-h-0 min-w-0 cursor-pointer touch-manipulation flex-row items-stretch rounded-full select-none">
                              <div className="relative flex size-[20px] items-center justify-center rounded-full transition-transform duration-200 active:scale-90">
                                <MoreHorizontal20RegularIcon className="fill-barcelona-secondary-icon relative z-10 size-[20px] shrink-0" />
                                <div className="bg-barcelona-tertiary-background absolute size-[36px] [transform:scale(0.85)] rounded-full opacity-0 transition-[opacity,transform] duration-200 [transition-timing-function:ease-out] group-hover:[transform:scale(1)] group-hover:opacity-100"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-start-2 row-start-2 row-end-[span_3]">
                      <div>
                        <div className="mt-[3px] overflow-hidden whitespace-pre-wrap">
                          <span className="relative max-w-full min-w-0 overflow-visible text-start leading-[calc(1.4*1em)] whitespace-pre-line">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Cras et hendrerit felis. Donec vel risus nunc.
                            Donec viverra nec lectus eu efficitur. Duis semper
                            facilisis convallis. Mauris et malesuada quam, eget
                            volutpat lorem. Phasellus quis sem sed lorem
                            ultricies elementum quis finibus elit. Pellentesque
                            ultrices, libero id sagittis lobortis, mi leo
                            lacinia nulla, eget blandit nisl nulla id libero.
                            Cras gravida tempor sagittis. Nam tempus orci at
                            cursus molestie. Ut eget purus quam. Sed sed sapie.
                          </span>
                        </div>

                        <div className="mt-[6px] mb-[-4px] ml-[-8px]">
                          <div className="flex">
                            <div className="flex items-center justify-center">
                              <div className="relative ml-[-4px] inline-flex min-h-0 min-w-0 basis-auto cursor-pointer touch-manipulation flex-row items-stretch px-[4px] select-none">
                                <div
                                  title="Like"
                                  className="group flex size-[36px] [transform:scale(1)] items-center justify-center rounded-full transition-transform duration-200 active:scale-90"
                                >
                                  <div className="bg-barcelona-tertiary-background absolute size-full [transform:scale(0.85)] rounded-full opacity-0 transition-[opacity,transform] duration-200 [transition-timing-function:ease-out] group-hover:[transform:scale(1)] group-hover:opacity-100"></div>
                                  <div className="z-10 flex items-center justify-center">
                                    <Heart20RegularIcon className="fill-barcelona-charcoal-icon stroke-barcelona-charcoal-icon relative size-[20px] shrink-0 stroke-[0.25]" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-center">
                              <div className="relative inline-flex min-h-0 min-w-0 basis-auto cursor-pointer touch-manipulation flex-row items-stretch px-[4px] select-none">
                                <div
                                  title="Reply"
                                  className="group flex size-[36px] [transform:scale(1)] items-center justify-center rounded-full transition-transform duration-200 active:scale-90"
                                >
                                  <div className="bg-barcelona-tertiary-background absolute size-full [transform:scale(0.85)] rounded-full opacity-0 transition-[opacity,transform] duration-200 [transition-timing-function:ease-out] group-hover:[transform:scale(1)] group-hover:opacity-100"></div>
                                  <div className="z-10 flex items-center justify-center">
                                    <ChatEmpty20RegularIcon className="fill-barcelona-charcoal-icon stroke-barcelona-charcoal-icon relative size-[18px] shrink-0 scale-x-[-1] stroke-[0.25]" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-center">
                              <div className="relative inline-flex min-h-0 min-w-0 basis-auto cursor-pointer touch-manipulation flex-row items-stretch px-[4px] select-none">
                                <div
                                  title="Repost"
                                  className="group flex size-[36px] [transform:scale(1)] items-center justify-center rounded-full transition-transform duration-200 active:scale-90"
                                >
                                  <div className="bg-barcelona-tertiary-background absolute size-full [transform:scale(0.85)] rounded-full opacity-0 transition-[opacity,transform] duration-200 [transition-timing-function:ease-out] group-hover:[transform:scale(1)] group-hover:opacity-100"></div>
                                  <div className="z-10 flex items-center justify-center">
                                    <ArrowRepeatAll20RegularIcon className="fill-barcelona-charcoal-icon stroke-barcelona-charcoal-icon relative size-[20px] shrink-0 stroke-[0.25]" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-center">
                              <div className="relative inline-flex min-h-0 min-w-0 basis-auto cursor-pointer touch-manipulation flex-row items-stretch px-[4px] select-none">
                                <div
                                  title="Share"
                                  className="group flex size-[36px] [transform:scale(1)] items-center justify-center rounded-full transition-transform duration-200 active:scale-90"
                                >
                                  <div className="bg-barcelona-tertiary-background absolute size-full [transform:scale(0.85)] rounded-full opacity-0 transition-[opacity,transform] duration-200 [transition-timing-function:ease-out] group-hover:[transform:scale(1)] group-hover:opacity-100"></div>
                                  <div className="z-10 ml-[4px] flex items-center justify-center">
                                    <Send20RegularIcon className="fill-barcelona-charcoal-icon stroke-barcelona-charcoal-icon relative size-[18px] shrink-0 stroke-[0.25]" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
