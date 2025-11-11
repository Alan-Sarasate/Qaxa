import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface User {
    name:string
    lastName: string
    email: string,
    password: string
}

interface useAuthSchema {
    user: User | null
    getUser: () => void;
    login: () => void;
}

function getuser () {
    const userId = localStorage.getItem('@user')
    console.log(userId)
}

interface LoginProps {
    email: string
    password: string
}

function useAuth<useAuthSchema> () {

    const [user, setUser] = useState<User | null>(null)
    const navigate = useNavigate()

    async function login ({email, password}:LoginProps){
    const baseUrl = import.meta.env.VITE_BACKEND_URL
    const login_path = import.meta.env.VITE_AUTH_LOGIN
    if(!baseUrl) {
        throw new Error("URL do backend não encontrada")
    }

    const response = await fetch(`${baseUrl}/${login_path}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password})
    })
    console.log(response)
    const data = await response.json()
    console.log("RESPONSE", data)
} 

    return {
        user,
        getuser,
        login
    }
}



export default useAuth;