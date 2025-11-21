import { API_ROUTES, buildApiUrl} from "../configs/api"
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

console.log('API_ROUTES', API_ROUTES)

export const authService = {

    async login ({email, password}:LoginProps):Promise<LoginResponse>{
    
        const response = await fetch(buildApiUrl(API_ROUTES?.auth?.login), {
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

        if(!authToken) throw new Error ('Usuário não autenticado.')

        const response = await fetch (buildApiUrl(API_ROUTES?.auth?.me), {
            method: "GET",
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : `bearer ${authToken}`
            }
        })

        return response.json()
    }
}