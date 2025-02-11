'use client'

import { useForm } from 'react-hook-form'
import { Toaster, toast } from 'sonner'
import { z } from 'zod'

const formSchema = z.object({
  email: z
    .string()
    .email({ message: 'Enter a valid email address.' })
    .nonempty(),
})

export default function EmailLoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    // resolver: zodResolver(formSchema),
    // defaultValues: {
    //   email: '',
    // },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      formSchema.parse(values)
      console.log(values)
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.custom(() => (
          <div className="leading-system-15-line-height box-border flex grow flex-col p-[6px]">
            <div className="text-toast-text font-semibold">
              {error.formErrors.fieldErrors.email}
            </div>
          </div>
        ))
      } else {
        console.error(error)
      }
    }
  }

  return (
    <>
      <Toaster
        offset={0}
        mobileOffset={0}
        position="bottom-left"
        expand={false}
        theme="system"
        visibleToasts={1}
        duration={3000}
        gap={0}
        pauseWhenPageIsHidden={true}
        toastOptions={{
          className: 'custom-toast',
        }}
      />

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col items-center"
      >
        <input
          type="text"
          autoComplete="email"
          autoCapitalize="none"
          placeholder="Email address"
          className="focus:border-barcelona-primary-outline text-barcelona-primary-text bg-barcelona-tertiary-background w-full touch-manipulation rounded-[12px] border-[1px] border-transparent p-[16px] text-start leading-[140%] outline-none"
          {...form.register('email', { required: true })}
        />

        <button
          type="submit"
          // disabled={
          //   form.formState.isLoading ||
          //   form.formState.isValidating ||
          //   !form.formState.isValid
          // }
          className={`text-barcelona-secondary-button bg-barcelona-primary-button relative mt-[8px] flex h-[56px] min-h-0 w-full min-w-0 shrink-0 basis-auto touch-manipulation flex-row items-stretch justify-between rounded-[12px] p-[16px] transition-transform duration-200 ease-in-out outline-none select-none ${form.formState.isLoading || form.formState.isValidating || !form.formState.isValid ? 'cursor-not-allowed' : 'cursor-pointer active:scale-[0.96]'}`}
        >
          <div
            className={`flex h-full w-full items-center justify-center ${form.formState.isLoading || form.formState.isValidating || !form.formState.isValid ? 'opacity-[.4]' : ''}`}
          >
            <div className="grid w-full grid-cols-[24px_1fr_24px] items-center justify-center">
              <div className="col-start-2 font-semibold">Log in</div>
            </div>
          </div>
        </button>
      </form>
    </>
  )
}
