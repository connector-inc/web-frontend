'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

type MenuType = 'main' | 'archive'

interface PostDialogContextType {
  // open: boolean
  // setOpen: (open: boolean) => void
  activeMenu: MenuType
  setActiveMenu: (menu: MenuType) => void
}

const initialContext: PostDialogContextType = {
  // open: false,
  // setOpen: () => null,
  activeMenu: 'main',
  setActiveMenu: () => null,
}

const PostDialogContext = createContext<PostDialogContextType>(initialContext)

interface PostDialogProviderProps {
  children: ReactNode
}

export function PostDialogProvider({ children }: PostDialogProviderProps) {
  // const [open, setOpen] = useState<boolean>(false)
  const [activeMenu, setActiveMenu] = useState<MenuType>('main')

  const value = {
    // open,
    // setOpen,
    activeMenu,
    setActiveMenu,
  } as const

  return (
    <PostDialogContext.Provider value={value}>
      {children}
    </PostDialogContext.Provider>
  )
}

export const usePostDialog = (): PostDialogContextType => {
  const context = useContext(PostDialogContext)

  if (!context) {
    throw new Error('usePostDialog must be used within PostDialogProvider')
  }

  return context
}
