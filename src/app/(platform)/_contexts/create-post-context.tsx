'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

type MenuType = 'main' | 'archive'

interface CreatePostContextType {
  // open: boolean
  // setOpen: (open: boolean) => void
  activeMenu: MenuType
  setActiveMenu: (menu: MenuType) => void
}

const initialContext: CreatePostContextType = {
  // open: false,
  // setOpen: () => null,
  activeMenu: 'main',
  setActiveMenu: () => null,
}

const CreatePostContext = createContext<CreatePostContextType>(initialContext)

interface CreatePostProviderProps {
  children: ReactNode
}

export function CreatePostProvider({ children }: CreatePostProviderProps) {
  // const [open, setOpen] = useState<boolean>(false)
  const [activeMenu, setActiveMenu] = useState<MenuType>('main')

  const value = {
    // open,
    // setOpen,
    activeMenu,
    setActiveMenu,
  } as const

  return (
    <CreatePostContext.Provider value={value}>
      {children}
    </CreatePostContext.Provider>
  )
}

export const useCreatePost = (): CreatePostContextType => {
  const context = useContext(CreatePostContext)

  if (!context) {
    throw new Error('useCreatePost must be used within CreatePostProvider')
  }

  return context
}
