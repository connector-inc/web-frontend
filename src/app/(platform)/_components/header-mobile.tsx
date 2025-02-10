import MoreButtonMobile from '@/app/(platform)/_components/more-button-mobile'
import Logo from '@/app/_assets/logo.svg'
import Link from 'next/link'

export default function HeaderMobile() {
  return (
    <header className="bg-barcelona-header-background fixed inset-0 z-10 grid h-[60px] max-w-full grid-cols-[1fr_32px_1fr] grid-rows-[1fr] items-center backdrop-blur-[28.5px] md:hidden">
      <div className="col-start-2 m-auto shrink-0 touch-manipulation justify-center overflow-hidden transition-transform duration-200 [transition-timing-function:ease-in-out] select-none hover:scale-[1.05] active:scale-[0.95]">
        <Link href={'/'}>
          <Logo className="fill-barcelona-primary-icon h-[32px] w-[32px]" />
        </Link>
      </div>

      <MoreButtonMobile />

      <div className="col-start-3 row-start-1 mr-[12px] ml-auto flex flex-col items-center">
        <Link
          download
          href={'#'}
          className="border-barcelona-primary-button-background bg-barcelona-primary-button-background text-barcelona-primary-button-text relative inline-flex h-[36px] min-h-0 max-w-full min-w-0 shrink-0 basis-auto touch-manipulation flex-row items-center justify-center rounded-[10px] border-[1px] px-[16px] py-0 font-semibold transition-transform duration-100 ease-in-out select-none active:scale-[0.96]"
        >
          <div className="overflow-hidden text-ellipsis">Open app</div>
        </Link>
      </div>
    </header>
  )
}
