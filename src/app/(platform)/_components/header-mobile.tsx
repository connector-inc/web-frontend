import MessagesButtonMobile from '@/app/(platform)/_components/messages-button-mobile'
import MoreButtonMobile from '@/app/(platform)/_components/more-button-mobile'
import Logo from '@/app/_assets/logo.svg'
import Link from 'next/link'

export default function HeaderMobile() {
  return (
    <>
      <div className="bg-barcelona-header-background fixed inset-0 z-10 max-w-full items-center backdrop-blur-[28.5px] md:hidden">
        <div className="grid h-[56px] max-w-full grid-cols-[1fr_32px_1fr] grid-rows-[1fr] items-center">
          <div className="col-start-2 m-auto shrink-0 touch-manipulation justify-center overflow-hidden transition-transform duration-200 [transition-timing-function:ease-in-out] select-none hover:scale-[1.05] active:scale-[0.95]">
            <Link href={'/'}>
              <Logo className="fill-barcelona-primary-icon h-[32px] w-[32px]" />
            </Link>
          </div>

          <MoreButtonMobile className="relative col-start-1 row-start-1" />

          <MessagesButtonMobile className="group relative col-start-3 row-start-1" />
        </div>

        {/* <div className="col-start-3 row-start-1 mr-[12px] ml-auto flex flex-col items-center">
        <Link
        download
        href={'#'}
        className="border-barcelona-primary-button-background bg-barcelona-primary-button-background text-barcelona-primary-button-text relative inline-flex h-[36px] min-h-0 max-w-full min-w-0 shrink-0 basis-auto touch-manipulation flex-row items-center justify-center rounded-[10px] border-[1px] px-[16px] py-0 font-semibold transition-transform duration-100 ease-in-out select-none active:scale-[0.96]"
        >
        <div className="overflow-hidden text-ellipsis">Open app</div>
        </Link>
        </div> */}
        <div className="grid grid-cols-[1fr_1fr] gap-x-[12px] px-[12px] pb-[12px]">
          <Link
            href={'/login'}
            className="border-barcelona-primary-outline text-barcelona-primary-text relative inline-flex h-[34px] min-h-0 max-w-full min-w-0 shrink-0 basis-auto touch-manipulation flex-row items-center justify-center rounded-[10px] border-[1px] bg-transparent px-[16px] py-0 font-semibold transition-transform duration-100 ease-in-out select-none active:scale-[0.96]"
          >
            <div className="overflow-hidden text-ellipsis">Log in</div>
          </Link>
          <Link
            download
            href={'#'}
            className="border-barcelona-primary-button-background bg-barcelona-primary-button-background text-barcelona-primary-button-text relative inline-flex h-[34px] min-h-0 max-w-full min-w-0 shrink-0 basis-auto touch-manipulation flex-row items-center justify-center rounded-[10px] border-[1px] px-[16px] py-0 font-semibold transition-transform duration-100 ease-in-out select-none active:scale-[0.96]"
          >
            <div className="overflow-hidden text-ellipsis">Get app</div>
          </Link>
        </div>
      </div>
    </>
  )
}
