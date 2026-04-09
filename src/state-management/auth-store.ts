import { create } from "zustand"
import type { UserData } from "../model/UserData"

type UserDataStore = {
    username: string | null,
    role: string | null,
    setUserData: (userData: UserData) => void,
    resetUserData: () => void
}

export const useUserData = create<UserDataStore>(set => ({
    username: null,
    role: null,
    setUserData: (userData => set(state => state.username === userData.username? state: {
        username: userData.username, role: userData.role
    })),
    resetUserData: () => set(() => ({username: null, role: null}))
}))
