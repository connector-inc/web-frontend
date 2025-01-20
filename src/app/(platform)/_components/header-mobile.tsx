import MoreButtonMobile from '@/app/(platform)/_components/more-button-mobile'
import Link from 'next/link'

export default function HeaderMobile() {
  return (
    <header className="bg-barcelona-header-background fixed inset-0 z-10 grid h-[60px] max-w-full grid-cols-[1fr_32px_1fr] grid-rows-[1fr] items-center backdrop-blur-[28.5px] md:hidden">
      <div className="col-start-2 m-auto flex-shrink-0 touch-manipulation select-none justify-center overflow-hidden transition-transform duration-200 [transition-timing-function:ease-in-out] hover:scale-[1.05] active:scale-[0.95]">
        <Link href={'/'}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            viewBox="0 0 512 512"
            className="fill-barcelona-primary-icon h-[32px] w-[32px]"
          >
            <path d="M379.608 289.121c15.433-57.597-10.993-116.548-60.629-144.554l33.652-125.59C470.505 66.86 536.995 196.173 503.216 322.241c-9.114 34.011-24.665 64.577-44.992 90.739l-91.965-91.964a128 128 0 0 0 13.349-31.895m-58.616 77.115c-28.548 16.829-63.574 22.626-98.113 13.372-34.466-9.235-61.857-31.694-78.179-60.455L19.067 352.816c29.255 71.443 90.367 128.877 170.692 150.4 80.395 21.541 162.11 2.306 223.184-45.029zm-188.6-143.357a128 128 0 0 0-4.385 34.506l-125.6 33.654c-4.559-32.882-2.755-67.2 6.377-101.28C42.564 63.691 164.803-15.052 290.827 2.417l-33.652 125.589c-56.989-.563-109.35 37.277-124.783 94.873" />
          </svg>
        </Link>
      </div>

      <MoreButtonMobile />

      <div className="col-start-3 row-start-1 ml-auto mr-[12px] flex flex-col items-center">
        <Link
          download
          href={'#'}
          className="border-barcelona-primary-button-background bg-barcelona-primary-button-background text-barcelona-primary-button-text  relative inline-flex h-[36px] min-h-0 min-w-0 max-w-full flex-shrink-0 basis-auto touch-manipulation select-none flex-row items-center justify-center rounded-[10px] border-[1px] px-[16px] py-0 font-semibold transition-transform duration-100 ease-in-out active:scale-[0.96]"
        >
          <div className="overflow-hidden text-ellipsis">Open app</div>
        </Link>
      </div>
    </header>
  )
}
