import { create } from 'zustand'

interface PostState {
  newPostAdded: boolean
  setNewPostAdded: () => void
  resetNewPostAdded: () => void
}

export const usePostStore = create<PostState>((set) => ({
  newPostAdded: false,
  setNewPostAdded: () => set({ newPostAdded: true }),
  resetNewPostAdded: () => set({ newPostAdded: false }),
}))
