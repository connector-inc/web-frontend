'use client'

import { toastCustom } from '@/app/(platform)/_components/toaster'
import api from '@/lib/api'
import { removeAllToasts } from '@/lib/utils'
import { HttpStatusCode } from 'axios'
import { Loader } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useSonner } from 'sonner'
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
  const { toasts } = useSonner()

  async function onSubmit(values: z.infer<typeof formSchema>) {
    removeAllToasts(toasts)

    try {
      formSchema.parse(values)

      const response = await api.post('/auth/login', {
        email: values.email,
      })

      if (response.status !== HttpStatusCode.Ok) {
        throw new Error('Failed to send verification email.')
      }

      toastCustom('Please check your inbox for a verification link.')
    } catch (error) {
      if (error instanceof z.ZodError) {
        toastCustom(error.errors[0].message)
      } else {
        console.error(error)
        toastCustom('Request failed. Please try again.')
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
        className="focus:border-barcelona-primary-outline bg-barcelona-tertiary-background w-full touch-manipulation rounded-[12px] border-[1px] border-transparent p-[16px] text-start leading-[140%] outline-none"
        {...form.register('email', { required: true })}
      />

      <button
        type="submit"
        disabled={
          form.formState.isLoading ||
          form.formState.isValidating ||
          !form.formState.isValid ||
          form.formState.isSubmitting
        }
        className={`text-barcelona-secondary-button bg-barcelona-primary-button relative mt-[8px] flex h-[56px] min-h-0 w-full min-w-0 shrink-0 basis-auto touch-manipulation flex-row items-stretch justify-between rounded-[12px] p-[16px] transition-transform duration-200 ease-in-out outline-none select-none ${form.formState.isLoading || form.formState.isValidating || !form.formState.isValid ? 'cursor-not-allowed' : form.formState.isSubmitting ? '' : 'cursor-pointer active:scale-90'}`}
      >
        <div
          className={`flex h-full w-full items-center justify-center ${form.formState.isLoading || form.formState.isValidating || !form.formState.isValid || form.formState.isSubmitting ? 'opacity-40' : ''}`}
        >
          {form.formState.isSubmitting ? (
            <div className="text-barcelona-secondary-button inline-block size-[18px]">
              <Loader className="size-[18px] animate-[spin_1.5s_linear_infinite]" />
            </div>
          ) : (
            <div className="grid w-full grid-cols-[24px_1fr_24px] items-center justify-center">
              <div className="col-start-2 font-semibold">Login</div>
            </div>
          )}
        </div>
      </button>
    </form>
  )
}
