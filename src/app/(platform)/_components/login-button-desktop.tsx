import Link from 'next/link'

export default function LoginButtonDesktop() {
  return (
    <div className="fixed top-[12px] right-[24px] z-10 hidden md:flex">
      <Link
        href={'/login'}
        className="border-barcelona-primary-button-background bg-barcelona-primary-button-background text-barcelona-primary-button-text relative m-0 inline-flex h-[36px] min-h-0 max-w-full min-w-0 shrink-0 basis-auto touch-manipulation flex-row items-center justify-center rounded-[10px] border-[1px] px-[16px] py-0 font-semibold transition-transform duration-200 ease-in-out select-none active:scale-[0.96]"
      >
        <div className="overflow-hidden text-ellipsis">Log in</div>
      </Link>
    </div>
  )
}
