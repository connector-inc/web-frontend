'use client'

import Post from '@/app/(platform)/_components/post'
import api from '@/lib/api'
import { usePostStore } from '@/lib/store/post-store'
import { useInfiniteQuery } from '@tanstack/react-query'
import { Loader } from 'lucide-react'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

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

const FETCH_LIMIT = 10
const initialData: PostProps[] = []

const fetchPosts = async ({ pageParam = 0 }) => {
  const response = await api.get(
    `/api/posts/?limit=${FETCH_LIMIT}&offset=${pageParam}`,
  )
  return response.data
}

export default function FeedSection() {
  const { ref, inView } = useInView()
  const { newPostAdded, resetNewPostAdded } = usePostStore()

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === FETCH_LIMIT
        ? allPages.length * FETCH_LIMIT
        : undefined
    },
    initialPageParam: 0,
    staleTime: 30000,
    refetchOnWindowFocus: false,
  })

  // Fetch next page when scrolled to bottom
  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

  // Revalidate data when a new post is added
  useEffect(() => {
    if (newPostAdded) {
      refetch()
      resetNewPostAdded()
    }
  }, [newPostAdded, refetch, resetNewPostAdded])

  // Flatten posts from all pages
  const allPosts = data?.pages.flatMap((page) => page) || initialData

  return (
    <>
      {isLoading ? (
        <div className="flex w-full justify-center pt-[33px] pb-[8px]">
          <div className="text-barcelona-secondary-text inline-block size-[24px]">
            <Loader className="flex animate-[spin_1.5s_linear_infinite]" />
          </div>
        </div>
      ) : (
        <>
          {allPosts.map((post: PostProps) => (
            <Post key={post.id} post={post} />
          ))}

          {hasNextPage && (
            <div ref={ref} className="">
              {isFetchingNextPage && (
                <div className="flex w-full justify-center pt-[33px] pb-[8px]">
                  <div className="text-barcelona-secondary-text inline-block size-[24px]">
                    <Loader className="flex animate-[spin_1.5s_linear_infinite]" />
                  </div>
                </div>
              )}
            </div>
          )}

          {!hasNextPage && allPosts.length > 0 && (
            <div className="flex w-full justify-center py-[24px]">
              <div className="text-barcelona-secondary-text">
                No more posts to load
              </div>
            </div>
          )}
        </>
      )}
    </>
  )
}
