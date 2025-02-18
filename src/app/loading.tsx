import Logo from '@/app/_assets/logo.svg'
import { ThemeProvider } from 'next-themes'

export default function Loading() {
  return (
    <ThemeProvider attribute="class" storageKey="system-theme">
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="shrink-0 touch-manipulation justify-center overflow-hidden py-[14px] transition-transform duration-200 [transition-timing-function:ease-in-out] select-none">
          <Logo className="fill-barcelona-primary-icon h-[320px] w-[320px] animate-[spin_1.5s_linear_infinite]" />
        </div>
      </div>
    </ThemeProvider>
  )
}
