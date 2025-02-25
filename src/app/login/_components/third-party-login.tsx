'use client'

import GitHubLogo from '@/app//login/_assets/github-logo.svg'
import GoogleLogo from '@/app//login/_assets/google-logo.svg'
import { cn } from '@/lib/utils'
import ChevronRight20FilledIcon from '@fluentui/svg-icons/icons/chevron_right_20_filled.svg'
import { toast } from 'sonner'

export default function ThirdPartyLogin({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-col gap-y-[8px]', className)}>
      {/* Google */}
      <button
        onClick={() =>
          toast.custom(() => (
            <div className="leading-system-15-line-height box-border flex grow flex-col p-[6px]">
              <div className="text-toast-text font-semibold">Coming soon.</div>
            </div>
          ))
        }
        className="border-barcelona-primary-outline relative flex min-h-0 min-w-0 cursor-pointer touch-manipulation items-center rounded-[16px] border-[1px] py-[20px] pr-[12px] pl-[20px] text-start transition-transform duration-200 ease-in-out select-none active:scale-90"
      >
        <GoogleLogo className="inline-block h-[45px] w-[45px] bg-no-repeat" />
        <div className="flex grow justify-center">
          <span className="text-system-16-font-size relative max-w-full min-w-0 overflow-visible text-start leading-[calc(1.3125*1em)] font-bold whitespace-pre-line">
            Continue with Google
          </span>
        </div>
        <div className="flex items-center p-[8px]">
          <span className="inline-block">
            <ChevronRight20FilledIcon className="fill-barcelona-secondary-icon relative h-[16px] w-[16px] shrink-0" />
          </span>
        </div>
      </button>

      {/* GitHub */}
      <button
        onClick={() =>
          toast.custom(() => (
            <div className="leading-system-15-line-height box-border flex grow flex-col p-[6px]">
              <div className="text-toast-text font-semibold">Coming soon.</div>
            </div>
          ))
        }
        className="border-barcelona-primary-outline relative flex min-h-0 min-w-0 cursor-pointer touch-manipulation items-center rounded-[16px] border-[1px] py-[20px] pr-[12px] pl-[20px] text-start transition-transform duration-200 ease-in-out select-none active:scale-90"
      >
        <GitHubLogo className="inline-block h-[45px] w-[45px] bg-no-repeat fill-[#24292f] dark:fill-white" />
        <div className="flex grow justify-center">
          <span className="text-system-16-font-size relative max-w-full min-w-0 overflow-visible text-start leading-[calc(1.3125*1em)] font-bold whitespace-pre-line">
            Continue with GitHub
          </span>
        </div>
        <div className="flex items-center p-[8px]">
          <span className="inline-block">
            <ChevronRight20FilledIcon className="fill-barcelona-secondary-icon relative h-[16px] w-[16px] shrink-0" />
          </span>
        </div>
      </button>
    </div>
  )
}
