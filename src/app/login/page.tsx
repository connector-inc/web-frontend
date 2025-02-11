import GitHubLogo from '@/app//login/_assets/github-logo.svg'
import GoogleLogo from '@/app//login/_assets/google-logo.svg'
import Logo from '@/app/_assets/logo.svg'
import EmailLoginForm from '@/app/login/_components/email-login-form'
import ChevronRight20FilledIcon from '@fluentui/svg-icons/icons/chevron_right_20_filled.svg'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div>
      <div>
        <div className="relative">
          <div className="relative flex min-h-screen flex-col">
            <div className="bg-barcelona-primary-background relative flex min-h-[inherit] w-full flex-grow-1 flex-col items-center justify-center overflow-hidden">
              <div className="shrink-0 touch-manipulation justify-center overflow-hidden transition-transform duration-200 [transition-timing-function:ease-in-out] select-none hover:scale-[1.05] active:scale-[0.96]">
                <Link href={'/'}>
                  <Logo className="fill-barcelona-primary-icon h-[60px] w-[60px]" />
                </Link>
              </div>

              <div className="mb-[52px] box-content w-full max-w-[370px] p-[24px]">
                <div>
                  <div className="flex w-full flex-col px-[16px] sm:px-[0px]">
                    <span className="text-barcelona-primary-text text-system-16-font-size relative mb-[16px] max-w-full min-w-0 overflow-visible text-center leading-[calc(1.3125*1em)] font-bold whitespace-pre-line">
                      Log in to Connector
                    </span>
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

                      <div className="flex flex-col gap-y-[8px]">
                        {/* Google */}
                        <button className="border-barcelona-primary-outline relative flex min-h-0 min-w-0 cursor-pointer touch-manipulation items-center rounded-[16px] border-[1px] py-[20px] pr-[12px] pl-[20px] text-start transition-transform duration-200 ease-in-out select-none active:scale-[0.96]">
                          <GoogleLogo className="inline-block h-[45px] w-[45px] bg-no-repeat" />
                          <div className="flex grow justify-center">
                            <span className="text-barcelona-primary-text text-system-16-font-size relative max-w-full min-w-0 overflow-visible text-start leading-[calc(1.3125*1em)] font-bold whitespace-pre-line">
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
                        <button className="border-barcelona-primary-outline relative flex min-h-0 min-w-0 cursor-pointer touch-manipulation items-center rounded-[16px] border-[1px] py-[20px] pr-[12px] pl-[20px] text-start transition-transform duration-200 ease-in-out select-none active:scale-[0.96]">
                          <GitHubLogo className="inline-block h-[45px] w-[45px] bg-no-repeat fill-[#24292f] dark:fill-white" />
                          <div className="flex grow justify-center">
                            <span className="text-barcelona-primary-text text-system-16-font-size relative max-w-full min-w-0 overflow-visible text-start leading-[calc(1.3125*1em)] font-bold whitespace-pre-line">
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
