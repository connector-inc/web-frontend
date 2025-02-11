'use client'

import { ThemeProvider } from 'next-themes'
import Link from 'next/link'

export default function NotFound() {
  return (
    <ThemeProvider attribute="class" storageKey="system-theme">
      <div className="">
        <div className="relative z-0">
          <div className="relative z-0">
            <div className="relative z-0 flex flex-col">
              <div className="relative top-0 flex min-h-screen flex-col">
                <div className="z-10 mx-auto flex min-h-screen w-full max-w-full grow flex-col md:max-w-[620px] md:px-[24px]">
                  <div className="mx-auto box-content grid max-w-[360px] grow items-center justify-items-center px-[64px]">
                    <div className="box-content">
                      <span className="text-barcelona-primary-text text-system-16-font-size relative block max-w-full min-w-0 items-center overflow-visible text-center leading-[calc(1.3125*1em)] font-bold whitespace-pre-line">
                        Sorry, this page is not available
                      </span>

                      <span className="text-barcelona-secondary-text relative mt-[12px] block max-w-full min-w-0 items-center overflow-visible text-center leading-[calc(1.4*1em)] font-normal text-balance whitespace-pre-line">
                        The link you followed may be broken, or the page may
                        have been removed.
                      </span>

                      <div className="mt-[16px] flex w-full justify-center">
                        <Link
                          href={"/"}
                          className="border-barcelona-primary-button-background bg-barcelona-primary-button-background text-barcelona-primary-button-text relative inline-flex h-[36px] min-h-0 max-w-full min-w-0 shrink-0 basis-auto cursor-pointer touch-manipulation flex-row items-center justify-center rounded-[10px] border-[1px] px-[16px] py-0 font-semibold transition-transform duration-100 ease-in-out select-none active:scale-[0.96]"
                        >
                          <div>Back</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}
