import MoreButtonMobile from '@/app/(platform)/_components/more-button-mobile'
import Logo from '@/app/_assets/logo.svg'
import Link from 'next/link'

export default function HeaderMobile() {
  // const MAX_TRANSLATE = -44
  // const SCROLL_RANGE = 44

  // const [translateY, setTranslateY] = useState(0)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY
  //     if (scrollY >= SCROLL_RANGE) {
  //       setTranslateY(MAX_TRANSLATE)
  //     } else {
  //       setTranslateY(0)
  //     }
  //   }

  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [MAX_TRANSLATE])

  return (
    <header
      className="bg-barcelona-header-background fixed top-0 right-0 left-0 z-10 m-auto h-fit w-full max-w-full items-center backdrop-blur-[28.5px] transition-transform duration-200 ease-[cubic-bezier(0,0,0,1)] md:hidden"
      // style={{ transform: `translateY(${translateY}px)` }}
    >
      <div className="grid h-[60px] max-w-full grid-cols-[1fr_32px_1fr] grid-rows-[1fr] items-center">
        <div className="col-start-2 m-auto shrink-0 touch-manipulation justify-center overflow-hidden transition-transform duration-200 [transition-timing-function:ease-in-out] select-none hover:scale-105 active:scale-90">
          <Link href={'/'}>
            <Logo className="fill-barcelona-primary-icon h-[32px] w-[32px]" />
          </Link>
        </div>

        <MoreButtonMobile className="relative col-start-1 row-start-1" />

        {/* <MessagesButtonMobile className="group relative col-start-3 row-start-1" /> */}

        <div className="col-start-3 row-start-1 mr-[13px] ml-auto flex flex-col items-center">
          <Link
            download
            href={'#'}
            className="border-barcelona-primary-button-background bg-barcelona-primary-button-background text-barcelona-primary-button-text relative inline-flex h-[36px] min-h-0 max-w-full min-w-0 shrink-0 basis-auto touch-manipulation flex-row items-center justify-center rounded-[10px] border-[1px] px-[16px] py-0 font-semibold whitespace-nowrap transition-transform duration-200 ease-in-out select-none active:scale-90"
          >
            <div className="overflow-hidden text-ellipsis">Open app</div>
          </Link>
        </div>
      </div>

      {/* <div className="grid grid-cols-[1fr_1fr] gap-x-[12px] px-[12px] pb-[12px]">
          <Link
            href={'/login'}
            className="border-barcelona-primary-outline relative inline-flex h-[34px] min-h-0 max-w-full min-w-0 shrink-0 basis-auto touch-manipulation flex-row items-center justify-center rounded-[10px] border-[1px] bg-transparent px-[16px] py-0 font-semibold transition-transform duration-200 ease-in-out select-none active:scale-90"
          >
            <div className="overflow-hidden text-ellipsis">Log in</div>
          </Link>
          <Link
            download
            href={'#'}
            className="border-barcelona-primary-button-background bg-barcelona-primary-button-background text-barcelona-primary-button-text relative inline-flex h-[34px] min-h-0 max-w-full min-w-0 shrink-0 basis-auto touch-manipulation flex-row items-center justify-center rounded-[10px] border-[1px] px-[16px] py-0 font-semibold transition-transform duration-200 ease-in-out select-none active:scale-90"
          >
            <div className="overflow-hidden text-ellipsis">Get app</div>
          </Link>
        </div> */}
    </header>
  )
}
