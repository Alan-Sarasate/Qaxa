import type { User } from "../types/User"

interface LoginProps {
    email: string
    password: string
}

interface LoginResponse {
    authToken: string
}

interface LoginErrorResponse {
    code: string,
    message: string,
    payload: any
}

const baseUrl = import.meta.env.VITE_BACKEND_URL

export const authService = {

    async login ({email, password}:LoginProps):Promise<LoginResponse>{
    
        const loginPath = import.meta.env.VITE_AUTH_LOGIN

        if(!baseUrl) throw new Error("URL do backend não encontrada")

        const response = await fetch(`${baseUrl}/${loginPath}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password})
        })

        if(!response.ok){
            const error:LoginErrorResponse = await response.json()
            throw new Error(error?.message || "Erro ao realizar login")
        }

        return response.json()
    },

    async getme (authToken: string | null):Promise<User> {
        const getmePath = import.meta.env.VITE_AUTH_ME

        if(!baseUrl) throw new Error("URL do backend não encontrada")

        if(!authToken) throw new Error ('Usuário não autenticado.')

        const response = await fetch (`${baseUrl}/${getmePath}`, {
            method: "GET",
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : `bearer ${authToken}`
            }
        })

        return response.json()
    }
}