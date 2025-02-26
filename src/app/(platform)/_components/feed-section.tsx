import Post from '@/app/(platform)/_components/post'
import { cookies } from 'next/headers'

interface UserProps {
  profile_picture: string
  username: string
  name: string
  bio: string
}

export interface PostProps {
  id: string
  created_at: Date
  updated_at: Date
  content: string
  media: string[]
  edited: boolean
  likes: number
  user: UserProps
}

export default async function FeedSection() {
  const cookieStore = await cookies()
  const sessionId = cookieStore.get('session_id')

  const response = await fetch(
    `${process.env.API_URL}/posts/?limit=10&offset=0`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Cookie: `session_id=${sessionId?.value}`,
      },
    },
  )

  if (!response.ok) {
    return null
  }

  const data = await response.json()

  return (
    <div className="translate-y-0 transition-transform duration-200">
      <div className="relative flex flex-col overflow-visible overscroll-y-contain [scrollbar-width:none] perspective-[1px] perspective-origin-top-right transform-3d">
        <div className="relative flex min-h-screen grow flex-col">
          {data.map((post: PostProps) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}
