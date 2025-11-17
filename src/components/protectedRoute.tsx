import { useEffect, useState } from "react"
import { Navigate, Outlet } from "react-router-dom"
import RouterPaths from "../configs/routerPaths"
import useAuth from "../hooks/useAuth"

const ProtectedRoute = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const { getme} = useAuth()

    useEffect(() => {
        const authToken = localStorage.getItem('@authToken')
        console.log("AQUI", authToken)
        console.log(!!authToken)
        setIsLoggedIn(!!authToken)
        console.log("OU AQUI", isLoggedIn)
        if(isLoggedIn) getme(authToken)
    },[])

    if(!isLoggedIn) {
        return <Navigate to={RouterPaths?.loginPath}/>
    }

    return <Outlet/>

}

export default ProtectedRoute