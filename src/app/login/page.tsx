import Logo from '@/app/_assets/logo.svg'
import EmailLoginForm from '@/app/login/_components/email-login-form'
import Toast from '@/app/login/_components/toast'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { Suspense } from 'react'
import { Toaster } from 'sonner'
import ThirdPartyLogin from './_components/third-party-login'
export default async function LoginPage() {
  const cookieStore = await cookies()
  const sessionId = cookieStore.get('session_id')

  if (sessionId) {
    const response = await fetch(
      `${process.env.API_URL}/auth/check-user-logged-in`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Cookie: `session_id=${sessionId.value}`,
        },
      },
    )

    if (response.ok) {
      redirect('/')
    }
  }

  return (
    <div>
      <Suspense
        fallback={
          <Toaster
            offset={0}
            mobileOffset={0}
            position="bottom-left"
            expand={false}
            theme="system"
            visibleToasts={1}
            duration={5000}
            gap={0}
            pauseWhenPageIsHidden={true}
            toastOptions={{
              className: 'custom-toast',
            }}
          />
        }
      >
        <Toast />
      </Suspense>
      <div>
        <div className="relative">
          <div className="relative flex min-h-screen flex-col">
            <div className="bg-barcelona-primary-background relative flex min-h-[inherit] w-full flex-grow-1 flex-col items-center justify-center overflow-hidden">
              <div className="mt-[24px] shrink-0 touch-manipulation justify-center overflow-hidden transition-transform duration-200 [transition-timing-function:ease-in-out] select-none hover:scale-[1.05] active:scale-90">
                <Link href={'/'}>
                  <Logo className="fill-barcelona-primary-icon h-[60px] w-[60px]" />
                </Link>
              </div>

              <div className="mb-[52px] box-content w-full max-w-[370px] p-[24px]">
                <div>
                  <div className="flex w-full flex-col px-[16px] sm:px-[0px]">
                    <div className="mb-[32px] flex flex-col">
                      <span className="text-barcelona-primary-text text-system-24-font-size relative max-w-full min-w-0 overflow-visible pb-[12px] text-center leading-[calc(1.25*1em)] font-bold whitespace-pre-line">
                        Say more with Connector
                      </span>
                      <span className="text-barcelona-secondary-text text-system-15-font-size relative m-auto max-w-[336px] min-w-0 overflow-visible text-center leading-[calc(1.4*1em)] font-normal text-pretty whitespace-pre-line">
                        Join Connector to share thoughts, find out what&apos;s
                        going on, follow your people and more.
                      </span>
                    </div>

                    <EmailLoginForm />

                    <div>
                      <div className="flex flex-col items-center">
                        <div className="flex h-[64px] items-center">
                          <div className="border-t-barcelona-primary-outline h-0 w-[27px] border-t-[0.5px] border-solid"></div>
                          <div className="px-[16px]">
                            <span className="text-barcelona-secondary-text relative max-w-full min-w-0 overflow-visible text-start leading-[calc(1.4*1em)] font-normal whitespace-pre-line">
                              or
                            </span>
                          </div>
                          <div className="border-t-barcelona-primary-outline border-sold h-0 w-[27px] border-t-[0.5px]"></div>
                        </div>
                      </div>

                      <ThirdPartyLogin />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 w-full">
                <footer className="absolute bottom-0 flex h-[70px] w-full items-center self-center px-[16px] text-center">
                  <ul className="mx-auto">
                    <li className="inline-block">
                      <span className="text-system-12-font-size text-barcelona-secondary-text relative max-w-full min-w-0 overflow-visible text-start leading-[calc(1.4*1em)] font-normal whitespace-pre-line">
                        © {new Date().getFullYear()} Connector
                      </span>
                    </li>
                    <li className="ml-[12px] inline-block">
                      <span className="text-system-12-font-size text-barcelona-secondary-text relative max-w-full min-w-0 overflow-visible text-start leading-[calc(1.4*1em)] font-normal whitespace-pre-line hover:underline">
                        <Link
                          href={'/terms-of-service'}
                          className="cursor-pointer touch-manipulation"
                        >
                          <span className="inline max-w-0 min-w-0 leading-[1.4]">
                            Terms of Service
                          </span>
                        </Link>
                      </span>
                    </li>
                    <li className="ml-[12px] inline-block">
                      <span className="text-system-12-font-size text-barcelona-secondary-text relative max-w-full min-w-0 overflow-visible text-start leading-[calc(1.4*1em)] font-normal whitespace-pre-line hover:underline">
                        <Link
                          href={'/privacy-policy'}
                          className="cursor-pointer touch-manipulation"
                        >
                          <span className="inline max-w-0 min-w-0 leading-[1.4]">
                            Privacy Policy
                          </span>
                        </Link>
                      </span>
                    </li>
                    <li className="ml-[12px] inline-block">
                      <span className="text-system-12-font-size text-barcelona-secondary-text relative max-w-full min-w-0 overflow-visible text-start leading-[calc(1.4*1em)] font-normal whitespace-pre-line hover:underline">
                        <Link
                          href={'/cookie-policy'}
                          className="cursor-pointer touch-manipulation"
                        >
                          <span className="inline max-w-0 min-w-0 leading-[1.4]">
                            Cookie Policy
                          </span>
                        </Link>
                      </span>
                    </li>
                    <li className="ml-[12px] inline-block">
                      <button
                        // onClick={() => {}}
                        className="relative inline-flex shrink-0 basis-auto cursor-pointer touch-manipulation flex-row items-stretch"
                      >
                        <span className="text-system-12-font-size text-barcelona-secondary-text relative max-w-full min-w-0 overflow-visible text-start leading-[calc(1.4*1em)] font-normal whitespace-pre-line hover:underline">
                          Report a problem
                        </span>
                      </button>
                    </li>
                  </ul>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* QR code */}
      <div></div>
    </div>
  )
}
