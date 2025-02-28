import { Toaster, toast } from 'sonner'

export function PlatformToaster() {
  return (
    <Toaster
      offset={0}
      mobileOffset={0}
      position="bottom-left"
      expand={false}
      theme="system"
      visibleToasts={1}
      duration={3000}
      gap={0}
      toastOptions={{
        className: 'platform-toast',
      }}
      swipeDirections={[]}
    />
  )
}

export function GeneralToaster() {
  return (
    <Toaster
      offset={0}
      mobileOffset={0}
      position="bottom-left"
      expand={false}
      theme="system"
      visibleToasts={1}
      duration={3000}
      gap={0}
      toastOptions={{
        className: 'general-toast',
      }}
      swipeDirections={['bottom']}
    />
  )
}

export const toastCustom = (message: React.ReactNode) => {
  toast.custom(() => (
    <div className="leading-system-15-line-height flex grow flex-col p-[6px]">
      <div className="text-toast-text font-semibold">{message}</div>
    </div>
  ))
}
