import { GeneralToaster } from '@/app/(platform)/_components/toaster'
import Logo from '@/app/_assets/logo.svg'
import NewProfileForm from '@/app/new-profile/_components/new-profile-form'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function NewProfilePage() {
  const cookieStore = await cookies()
  const sessionId = cookieStore.get('session_id')

  if (!sessionId) {
    redirect('/login')
  } else {
    const response = await fetch(
      `${process.env.API_URL}/users/check-user-created`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Cookie: `session_id=${sessionId.value}`,
        },
      },
    )

    if (!response.ok) {
      // throw new Error('Failed to check if user is created')
      redirect('/login')
    }

    const data = await response.json()
    const created = data.created

    if (created) {
      redirect('/')
    }
  }

  return (
    <div>
      <GeneralToaster />
      <div>
        <div className="relative">
          <div className="relative flex min-h-screen flex-col">
            <div className="bg-barcelona-primary-background relative flex min-h-[inherit] w-full flex-grow-1 flex-col items-center justify-center overflow-hidden">
              <div className="mt-[24px] shrink-0 touch-manipulation justify-center overflow-hidden transition-transform duration-200 [transition-timing-function:ease-in-out] select-none hover:scale-105 active:scale-90">
                <Link href={'/'}>
                  <Logo className="fill-barcelona-primary-icon h-[60px] w-[60px]" />
                </Link>
              </div>

              <div className="mb-[52px] box-content w-full max-w-[370px] p-[24px]">
                <div>
                  <div className="flex w-full flex-col px-[16px] sm:px-[0px]">
                    <div className="mb-[32px] flex flex-col">
                      <span className="text-system-24-font-size relative max-w-full min-w-0 overflow-visible pb-[12px] text-center leading-[calc(1.25*1em)] font-bold whitespace-pre-line">
                        Create a new profile
                      </span>
                      <span className="text-barcelona-secondary-text relative m-auto max-w-[336px] min-w-0 overflow-visible text-center leading-[calc(1.4*1em)] font-normal text-pretty whitespace-pre-line">
                        It&apos;s quick and easy.
                      </span>
                    </div>

                    <NewProfileForm />
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
