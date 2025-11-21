import { create } from 'zustand'
import type { User } from '../types/User'

interface IUseAuthStore {
    user: User | null,
    authToken: string | null
    isLoading: boolean
    isAuthenticated: boolean

    setAuth: (user:User, token: string) => void
    clearAuth: () => void
    setIsLoading: (loading: boolean) => void
}

export const useAuthStore = create<IUseAuthStore>((set) => {

    const token = localStorage.getItem('@authToken')

    return {
        user: null,
        authToken: token,
        isLoading: !!token,
        isAuthenticated: false,
    
        setAuth: (user, token) => {
            localStorage.setItem('@authToken', token)
            set({user, authToken: token, isAuthenticated: true})
        },
    
        clearAuth: () => {
            localStorage.removeItem('@authToken')
            set({user: null, authToken: null, isAuthenticated: false})
        },
    
        setIsLoading: (loading) => set({isLoading: loading}),
    }
})