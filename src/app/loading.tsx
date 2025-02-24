import Logo from '@/app/_assets/logo.svg'
import { ThemeProvider } from 'next-themes'

export default function Loading() {
  return (
    <ThemeProvider attribute="class" storageKey="system-theme">
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="shrink-0 touch-manipulation justify-center overflow-hidden py-[14px] transition-transform duration-200 [transition-timing-function:ease-in-out] select-none">
          <Logo className="fill-barcelona-primary-icon h-[120px] w-[120px] animate-[spin_1.5s_linear_infinite] sm:h-[150px] sm:w-[150px] md:h-[180px] md:w-[180px] lg:h-[240px] lg:w-[240px]" />
        </div>
      </div>
    </ThemeProvider>
  )
}
