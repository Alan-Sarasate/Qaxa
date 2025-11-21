import useAuth from "../hooks/useAuth"

interface IAuthInitialize {
    children: React.ReactNode
}

const AuthInitialize = ({children}:IAuthInitialize) => {

    useAuth()
    return <>{children}</>
}

export default AuthInitialize