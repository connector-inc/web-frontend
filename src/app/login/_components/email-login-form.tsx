'use client'

import { Loader } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const formSchema = z.object({
  email: z
    .string()
    .nonempty()
    .email({ message: 'Enter a valid email address.' }),
})

export default function EmailLoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    // resolver: zodResolver(formSchema),
    // defaultValues: {
    //   email: '',
    // },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      formSchema.parse(values)

      const response = await fetch('auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: values.email }),
      })

      if (!response.ok) {
        throw new Error('Request failed. Please try again.')
      }

      toast.custom(() => (
        <div className="leading-system-15-line-height box-border flex grow flex-col p-[6px]">
          <div className="text-toast-text font-semibold">
            Verification email sent successfully.
          </div>
        </div>
      ))
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.custom(() => (
          <div className="leading-system-15-line-height box-border flex grow flex-col p-[6px]">
            <div className="text-toast-text font-semibold">
              {error.errors[0].message}
            </div>
          </div>
        ))
      } else {
        console.error(error)
        toast.custom(() => (
          <div className="leading-system-15-line-height box-border flex grow flex-col p-[6px]">
            <div className="text-toast-text font-semibold">
              Request failed. Please try again.
            </div>
          </div>
        ))
      }
    }
  }

  return (
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
        className={`text-barcelona-secondary-button bg-barcelona-primary-button relative mt-[8px] flex h-[56px] min-h-0 w-full min-w-0 shrink-0 basis-auto touch-manipulation flex-row items-stretch justify-between rounded-[12px] p-[16px] transition-transform duration-200 ease-in-out outline-none select-none ${form.formState.isLoading || form.formState.isValidating || !form.formState.isValid ? 'cursor-not-allowed' : form.formState.isSubmitting ? '' : 'cursor-pointer active:scale-[0.96]'}`}
      >
        <div
          className={`flex h-full w-full items-center justify-center ${form.formState.isLoading || form.formState.isValidating || !form.formState.isValid || form.formState.isSubmitting ? 'opacity-[0.4]' : ''}`}
        >
          <div className="grid w-full grid-cols-[24px_1fr_24px] items-center justify-center">
            <div className="col-start-2 font-semibold">
              {form.formState.isSubmitting ? (
                <Loader className="stroke-barcelona-secondary-button flex h-[24px] w-full animate-[spin_1.5s_linear_infinite]" />
              ) : (
                'Log in'
              )}
            </div>
          </div>
        </div>
      </button>
    </form>
  )
}
