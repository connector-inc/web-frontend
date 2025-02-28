import CreatePostSection from '@/app/(platform)/_components/create-post-section'
import FeedSection from '@/app/(platform)/_components/feed-section'
import SelectFeedDropdown from '@/app/(platform)/_components/select-feed-dropdown'
import SelectFeedTab from '@/app/(platform)/_components/select-feed-tab'
import Link from 'next/link'

export default function FeedPage() {
  return (
    <main className="">
      <div className="relative">
        <div className="relative flex flex-col">
          <div className="relative top-[60px] flex min-h-[calc(100vh-60px)] flex-col md:top-0 md:min-h-screen">
            <div className="relative flex min-h-[inherit] flex-col">
              <div className="md:bg-barcelona-secondary-background bg-barcelona-primary-background flex w-full grow content-center justify-center px-0 md:grow-0 md:px-[20px]">
                <div className="flex max-[800px]:max-w-[calc(100%-1.5*76px)] max-[768px]:w-full max-[768px]:max-w-full">
                  <div className="mb-[50px] flex w-full grow flex-col md:mb-0 md:w-[640px] md:max-w-[640px]">
                    {/* Desktop */}
                    {/* Header */}
                    <div className="sticky top-0 z-10 hidden min-h-[60px] w-full items-center md:flex">
                      <div className="absolute top-[48px] left-[-12px] z-10 h-[36px] w-[36px] overflow-hidden">
                        <div className="border-barcelona-primary-column-outline absolute top-[12px] left-[12px] h-[48px] w-[48px] rounded-[24px] border-[0.5px] shadow-[0_0_12px_0_var(--barcelona-box-shadow-04),0_0_0_48px_var(--barcelona-secondary-background)]"></div>
                      </div>

                      <div className="border-barcelona-primary-column-outline absolute top-[48.5px] left-[24px] z-10 h-[12px] w-[calc(100%-48px)] overflow-hidden border-b-[0.5px]">
                        <div className="relative top-full h-full w-full shadow-[0_0_12px_0_0000000a]"></div>
                      </div>

                      <div className="absolute top-[48px] right-[-12px] z-10 h-[36px] w-[36px] overflow-hidden">
                        <div className="border-barcelona-primary-column-outline absolute top-[12px] right-[12px] h-[48px] w-[48px] rounded-[24px] border-[0.5px] shadow-[0_0_12px_0_var(--barcelona-box-shadow-04),0_0_0_48px_var(--barcelona-secondary-background)]"></div>
                      </div>

                      <div className="bg-barcelona-secondary-background absolute top-0 right-[-12px] left-[-12px] grid h-[60px] touch-none grid-cols-[1fr_minmax(auto,65%)_1fr] content-center justify-center gap-x-[16px] px-[16px]">
                        <div className="flex items-center justify-start pl-[8px]"></div>
                        <div className="flex items-center justify-center gap-x-[8px]">
                          <div className="w-[24px]"></div>

                          <Link
                            href={'#'}
                            className="relative flex min-h-0 max-w-full min-w-0 shrink-0 basis-auto touch-manipulation flex-col items-center justify-center p-[8px] transition-transform duration-200 select-none active:scale-90"
                          >
                            <span className="relative max-w-full min-w-0 overflow-visible leading-[calc(1.4*1em)] font-semibold whitespace-pre-line">
                              <span className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                                For you
                              </span>
                            </span>
                          </Link>

                          <SelectFeedDropdown />
                        </div>
                        <div className="flex items-center justify-start pr-[8px]"></div>
                      </div>
                    </div>

                    {/* Feed */}
                    <div className="border-barcelona-primary-outline bg-barcelona-primary-background md:bg-barcelona-elevated-background relative flex min-h-0 w-full shrink grow basis-full flex-col overflow-x-hidden overflow-y-auto overscroll-y-auto will-change-[transform,scroll-position] [scrollbar-width:none] perspective-[1px] perspective-origin-top-right transform-3d md:border-[0.5px] md:border-t-0 md:pt-[8px] md:shadow-[0_0_12px_0_var(--barcelona-box-shadow-04)]">
                      <div className="relative flex grow flex-col">
                        <CreatePostSection className="hidden md:block" />

                        <SelectFeedTab className="md:hidden" />

                        <hr className="bg-barcelona-primary-outline m-0 h-[0.5px] w-full border-none outline-none [background:var(--color-barcelona-primary-outline)]" />

                        <div className="translate-y-0 transition-transform duration-200">
                          <div className="relative flex flex-col overflow-visible overscroll-y-contain [scrollbar-width:none] perspective-[1px] perspective-origin-top-right transform-3d">
                            <div className="relative flex min-h-0 grow flex-col md:min-h-[calc(100vh-60px-68px-8px-1.5px)]">
                              <FeedSection />
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
    </main>
  )
}
