'use client'

import api from '@/lib/api'
import { cn } from '@/lib/utils'
import CheckmarkCircle20FilledIcon from '@fluentui/svg-icons/icons/checkmark_circle_20_filled.svg'
import ChevronDown20FilledIcon from '@fluentui/svg-icons/icons/chevron_down_20_filled.svg'
import { HttpStatusCode } from 'axios'
import { Loader } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Select } from 'radix-ui'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const formSchema = z.object({
  name: z.string().nonempty().min(2, { message: 'Name is too short.' }),
  username: z
    .string()
    .nonempty()
    .min(2, { message: 'Username is too short.' })
    .max(30, { message: 'Username is too long.' })
    .regex(/^[a-zA-Z0-9_-]+$/, {
      message:
        'Username can only contain letters, numbers, underscores, and hyphens.',
    }),
  gender: z.enum(['female', 'male', 'prefer_not_to_say'], {
    message: 'Select a gender.',
  }),
})

export default function NewProfileForm() {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    // resolver: zodResolver(formSchema),
    // defaultValues: {
    //   email: '',
    // },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      checkUsername(values.username)
      formSchema.parse(values)
      const response = await api.post('/api/users', {
        name: values.name,
        username: values.username,
        gender: values.gender,
      })

      if (response.status !== HttpStatusCode.Created) {
        throw new Error('Failed to create profile.')
      }

      toast.custom(() => (
        <div className="leading-system-15-line-height box-border flex grow flex-col p-[6px]">
          <div className="text-toast-text font-semibold">
            You will be redirected to the home page soon.
          </div>
        </div>
      ))

      // Simulate a 3 second delay
      await new Promise((resolve) => setTimeout(resolve, 3000))

      router.push('/')
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

  async function checkUsername(username: string) {
    try {
      const response = await api.post('/api/users/check-username', {
        username: username,
      })

      if (response.status !== HttpStatusCode.Ok) {
        throw new Error('Failed to check username.')
      }

      const usernameAvailable = response.data.available

      if (!usernameAvailable) {
        form.setError('username', {
          type: 'manual',
          message: 'Username already taken.',
        })
      } else {
        form.clearErrors('username')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex w-full flex-col items-center gap-y-[8px]"
    >
      <input
        type="name"
        autoComplete="name"
        autoCapitalize="words"
        placeholder="Name"
        className="focus:border-barcelona-primary-outline text-barcelona-primary-text bg-barcelona-tertiary-background w-full touch-manipulation rounded-[12px] border-[1px] border-transparent p-[16px] text-start leading-[140%] outline-none"
        {...form.register('name', { required: true })}
      />

      <input
        type="username"
        autoComplete="username"
        autoCapitalize="none"
        placeholder="Username"
        className={cn(
          'focus:border-barcelona-primary-outline text-barcelona-primary-text bg-barcelona-tertiary-background w-full touch-manipulation rounded-[12px] border-[1px] border-transparent p-[16px] text-start leading-[140%] outline-none',
          form.formState.errors.username &&
            'border-[var(--barcelona-error-text)_!important]',
        )}
        {...form.register('username', {
          required: true,
          onBlur: (e) => checkUsername(e.target.value),
        })}
      />

      {form.formState.errors.username && (
        <div className="flex w-full shrink-0 grow-0 flex-col items-stretch justify-start overflow-visible">
          <span className="text-system-12-font-size text-barcelona-error-text relative max-w-full overflow-visible leading-[calc(1.4*1em)] font-normal whitespace-pre-line">
            {form.formState.errors.username.message}
          </span>
        </div>
      )}

      <Select.Root
        open={open}
        onOpenChange={setOpen}
        value={form.watch('gender')}
        onValueChange={(value: 'female' | 'male' | 'prefer_not_to_say') =>
          form.setValue('gender', value)
        }
      >
        <Select.Trigger
          className={cn(
            'text-barcelona-primary-text bg-barcelona-tertiary-background data-[placeholder]:text-barcelona-primary-text/50 hover:border-barcelona-primary-outline inline-flex w-full cursor-pointer touch-manipulation justify-between rounded-[12px] border-[1px] border-transparent p-[16px] text-start leading-[140%] outline-none select-none',
            open ? 'border-barcelona-primary-outline' : '',
            form.formState.errors.gender ? 'border-barcelona-' : '',
          )}
        >
          <Select.Value
            placeholder="Gender"
            className="cursor-pointer touch-manipulation select-none"
          />
          <Select.Icon className="SelectIcon">
            <ChevronDown20FilledIcon className="fill-barcelona-secondary-icon h-[20px] w-[20px]" />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content
            align={'end'}
            position={'popper'}
            className="bg-barcelona-elevated-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 max-h-[calc(var(--radix-select-content-available-height))] w-[calc(var(--radix-select-trigger-width))] origin-top rounded-[16px] shadow-[0_10.5px_21px_var(--barcelona-box-shadow-08)] transition-all duration-200"
          >
            <Select.Viewport>
              <Select.Group className="w-full py-[10px]">
                {(formSchema.shape.gender.options as string[]).map((value) => (
                  <Select.Item
                    key={value}
                    value={value}
                    className="hover:bg-barcelona-hovered-background w- flex w-full shrink-0 cursor-pointer touch-manipulation flex-row flex-nowrap items-center justify-between p-[16px] transition-colors duration-200 outline-none select-none"
                  >
                    <Select.ItemText className="w-full min-w-0 shrink grow basis-auto">
                      {value.charAt(0).toUpperCase() +
                        value.slice(1).replaceAll('_', ' ')}
                    </Select.ItemText>
                    <div className="border-barcelona-primary-outline relative ml-[12px] inline-flex h-[24px] w-[24px] max-w-full min-w-0 shrink-0 items-center justify-center self-center rounded-[50%] border-[1.5px]">
                      <Select.ItemIndicator className="absolute inset-0 top-[-4.5px] left-[-4.5px] z-10 flex shrink-0">
                        <CheckmarkCircle20FilledIcon className="fill-barcelona-primary-button h-[30px] w-[30px] shrink-0" />
                      </Select.ItemIndicator>
                    </div>
                  </Select.Item>
                ))}
              </Select.Group>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>

      <div className="flex w-full shrink-0 grow-0 flex-col items-stretch justify-start overflow-visible">
        <span className="text-system-12-font-size text-barcelona-secondary-text relative max-w-full overflow-visible leading-[calc(1.4*1em)] font-normal whitespace-pre-line">
          This won&apos;t be part of your public profile.
        </span>
      </div>

      <button
        type="submit"
        disabled={
          form.formState.isLoading ||
          form.formState.isValidating ||
          !form.formState.isValid ||
          form.formState.disabled
        }
        className={`text-barcelona-secondary-button bg-barcelona-primary-button relative flex h-[56px] min-h-0 w-full min-w-0 shrink-0 basis-auto touch-manipulation flex-row items-stretch justify-between rounded-[12px] p-[16px] transition-transform duration-200 ease-in-out outline-none select-none ${form.formState.isLoading || form.formState.isValidating || !form.formState.isValid ? 'cursor-not-allowed' : form.formState.isSubmitting ? '' : 'cursor-pointer active:scale-[0.96]'}`}
      >
        <div
          className={`flex h-full w-full items-center justify-center ${form.formState.isLoading || form.formState.isValidating || !form.formState.isValid || form.formState.isSubmitting ? 'opacity-[0.4]' : ''}`}
        >
          <div className="grid w-full grid-cols-[24px_1fr_24px] items-center justify-center">
            <div className="col-start-2 font-semibold">
              {form.formState.isSubmitting ? (
                <Loader className="stroke-barcelona-secondary-button flex h-[24px] w-full animate-[spin_1.5s_linear_infinite]" />
              ) : (
                'Submit'
              )}
            </div>
          </div>
        </div>
      </button>
    </form>
  )
}
