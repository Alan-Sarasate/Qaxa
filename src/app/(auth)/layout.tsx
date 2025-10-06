interface AuthLayoutProps {
    children: React.ReactNode
}

function AuthLayout ({ children }:AuthLayoutProps) {
    return (
        <div className="flex w-screen h-screen bg-gray-300 overflow-auto px-[32px]">
            {children}
        </div>
    )
}

export default AuthLayout