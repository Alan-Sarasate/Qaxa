import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface User {
    id: string
    name:string
    email: string,
}

interface useAuthSchema {
    authToken: string | null
    user: User | null
    getUser: () => void;
    login: () => void;
    getMe: () => void
}

function getuser () {
    const userId = localStorage.getItem('@user')
    console.log(userId)
}

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

function useAuth<useAuthSchema> () {

    const baseUrl = import.meta.env.VITE_BACKEND_URL

    const [user, setUser] = useState<User | null>(null)
    const navigate = useNavigate()
    const [authToken, setAuthToken] = useState<string | null>(null)


    async function login ({email, password}:LoginProps){
    
        const loginPath = import.meta.env.VITE_AUTH_LOGIN
        if(!baseUrl) {
            throw new Error("URL do backend não encontrada")
        }
        const response = await fetch(`${baseUrl}/${loginPath}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password})
        })
        console.log(response)
        if(!response.ok){
            const data:LoginErrorResponse = await response.json()
            throw new Error(data?.message || "Erro ao realizar login")
        }

        const data:LoginResponse = await response.json()
        localStorage.setItem('@authToken', data?.authToken || '')
        console.log(data)
        return {
            data,
            response
        }
    }

    async function getme (authToken: string | null) {
        const getmePath = import.meta.env.VITE_AUTH_ME
        if(!baseUrl) {
            throw new Error("URL do backend não encontrada")
        }

        if(!authToken) throw new Error ('Usuário não autenticado.')
        const response = await fetch (`${baseUrl}/${getmePath}`, {
            method: "GET",
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : `bearer ${authToken}`
            }
        })
        console.log("GET ME RESPONSE", response)
        const data:User = await response.json()
        console.log("GET ME DATA", data)
        setUser(data)
    }

    return {
        getme,
        user,
        getuser,
        login
    }
}



export default useAuth;