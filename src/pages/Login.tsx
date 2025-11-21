import { Label } from "@radix-ui/react-label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { FiLoader } from "react-icons/fi";
import { Checkbox } from "../components/ui/checkbox";
import { useNavigate } from "react-router-dom";
import RouterPaths from "../configs/routerPaths";


export default function Login () {

    const navigate = useNavigate()
    
    const {login, isAuthenticated, isLoading} = useAuth();
    
    const [showPassword, setShowPassord] = useState(false)
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    useEffect(() => {
        if(isAuthenticated) navigate(RouterPaths?.homePath || '/home', {replace: true})
    },[isAuthenticated])

    const handleShowPassword = () => {
        setShowPassord(showPassword => !showPassword)
    }

    const handleChangeText = (text:string, setFunction: (value:string) => void) => {
        setFunction(text)
    }

    return (
         <div className="flex w-full h-full">
            <div className="flex flex-col h-auto gap-6 justify-center">
                <div className="flex flex-col gap-4 w-full">
                    <span className="text-sm font-semibold">Crescer muito. Organizar tudo.</span>
                    <span className="text-sm text-gray-400">Faça login em sua conta Qaxa.</span>
                </div>
                <div className="flex flex-col gap-3 w-full">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="email">E-mail</Label>
                        <Input 
                            id="email"
                            value={email}
                            onChange={(event) => handleChangeText(event?.target?.value ?? '', setEmail)}
                            className="w-[500px]" 
                            placeholder="Digite o seu e-mail" 
                            type="email"/>
                    </div>
                    <div className="flex flex-col gap-2 justify-end">
                        <Label htmlFor="password">Senha</Label>
                        <Input 
                            id="password" 
                            value={password}
                            onChange={(event) => handleChangeText(event?.target?.value ?? '', setPassword)}
                            className="w-[500px]"
                            placeholder="Digite a sua senha"
                            type={showPassword ? 'text' : 'password'}/>

                        <div 
                            className="flex flex-row gap-2 items-center cursor-pointer"
                            onClick={handleShowPassword}
                            >
                            <Checkbox className='!text-white cursor-pointer' id="show-password" value={String(!showPassword)}/>
                            <Label id="show-password cursor-pointer">Mostrar senha</Label>
                        </div>
                    </div>
                    <Button
                        type="submit"
                        className="w-fit cursor-pointer"
                        onClick={() => login(email, password)}>
                            <span className="!text-white">Login</span>
                            {isLoading ?? <FiLoader />}
                            
                    </Button>
                </div>
            </div>
        </div>
    )
}