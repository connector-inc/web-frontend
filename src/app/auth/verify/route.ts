import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const token = searchParams.get('token')

  const res = await fetch(`${process.env.API_URL}/auth/verify`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token: token }),
  })

  if (res.ok) {
    const { access_token, refresh_token } = await res.json()
    const cookieStore = await cookies()
    cookieStore.set('access_token', access_token, {
      secure: true,
      sameSite: 'strict',
      httpOnly: true,
      maxAge: 60 * 60, // 1 hour
    })
    cookieStore.set('refresh_token', refresh_token, {
      secure: true,
      sameSite: 'strict',
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })

    redirect('/')
  } else {
    console.log(res)
    redirect('/login?error=invalid-token')
  }
}
