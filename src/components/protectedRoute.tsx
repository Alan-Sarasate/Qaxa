import { Navigate, Outlet } from "react-router-dom"
import RouterPaths from "../configs/routerPaths"
import { useAuthStore } from "../stores/useAuthStore"

const ProtectedRoute = () => {
    const { isAuthenticated, isLoading } = useAuthStore()

    console.log('⏰ [TEMPO ?] ProtectedRoute renderizou:', { isAuthenticated, isLoading })

    if(isLoading) {
       console.log('⏰ Mostrando Carregando...') 
       return <div>Carregando...</div>
    } 

    if(!isAuthenticated) {
        console.log('⏰ Redirecionando pro login')
        return <Navigate to={RouterPaths?.loginPath} replace/>
    }

    console.log('⏰ Liberando acesso')
    return <Outlet/>
}

export default ProtectedRoute