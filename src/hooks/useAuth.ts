import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/useAuthStore";
import { useEffect } from "react";
import { authService } from "../services/authService";
import RouterPaths from "../configs/routerPaths";


function useAuth () {

    const navigate = useNavigate()
    const { user, authToken, clearAuth, isAuthenticated, isLoading, setAuth, setIsLoading } = useAuthStore()

    useEffect(() => {
        if(authToken && !user) loadUser()
    }, [authToken, user])

    async function loadUser () {
        setIsLoading(true)
        try{
            const userData = await authService?.getme(authToken!)
            setAuth(userData, authToken!)
        }catch(error) {
            clearAuth()
        }finally{
            setIsLoading(false)
        }
    }


    async function login (email: string, password: string){
        try{
            setIsLoading(true)

            const {authToken: token} = await authService?.login({email, password})

            const userData = await authService?.getme(token)

            setAuth(userData, token)

            navigate(RouterPaths?.homePath ?? '/home')
        }catch(error) {
            throw error
        }finally {
            setIsLoading(false)
        }
    }

    function logout () {
        clearAuth()
        navigate(RouterPaths?.loginPath ?? '/')
    }


    return {
        user, 
        authToken,
        isAuthenticated,
        isLoading,
        login,
        logout
    }
}



export default useAuth;