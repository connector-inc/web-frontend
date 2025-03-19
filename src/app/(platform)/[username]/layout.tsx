import { cookies } from 'next/headers'
import { notFound, redirect } from 'next/navigation'

type Props = {
  username: string
}

export default async function UserProfileLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Props }>) {
  const cookieStore = await cookies()
  const sessionId = cookieStore.get('session_id')

  if (!sessionId) {
    redirect('/login')
  }

  const { username } = await params
  let usernameDecoded = decodeURIComponent(username)

  console.log(usernameDecoded)

  if (usernameDecoded.startsWith('@')) {
    usernameDecoded = usernameDecoded.slice(1)
  }

  const userExistedResponse = await fetch(
    `${process.env.API_URL}/accounts/user-existed?username=${usernameDecoded}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Cookie: `session_id=${sessionId.value}`,
      },
    },
  )

  const data = await userExistedResponse.json()
  console.log(data)
  if (!data.existed) {
    // FIXME:
    notFound()
  }

  return <>{children}</>
}
