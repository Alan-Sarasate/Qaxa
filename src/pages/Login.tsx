import { Label } from "@radix-ui/react-label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { FiLoader } from "react-icons/fi";
import { Checkbox } from "../components/ui/checkbox";
import { useNavigate } from "react-router-dom";


export default function Login () {

    const navigate = useNavigate()

    const [isSubmiting, setIsSubmiting] = useState(false)
    const [showPassword, setShowPassord] = useState(false)
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {user, getuser, login, getme} = useAuth();

    useEffect(() => {
        getuser();
    },[])

    const handleShowPassword = () => {
        setShowPassord(showPassword => !showPassword)
    }

    const handleChangeText = (text:string, setFunction: (value:string) => void) => {
        setFunction(text)
    }

    const handleSubmit = async (email:string, password:string) => {
        setIsSubmiting(submit => !submit)
        try {
            const loginResponse = await login({email, password})
            getme(loginResponse?.data?.authToken || null)
            navigate('/home')

        } catch {
            console.log("deu ruim")
        } finally{
            setIsSubmiting(submit => !submit)
        }
        
    }

    return (
         <div className="flex w-full h-full">
            <div className="flex flex-col h-auto gap-6 justify-center">
                <div className="flex flex-col gap-4 w-full">
                    <span className="text-sm font-semibold">Crescer muito. Organizar tudo.</span>
                    <span className="text-sm text-gray-400">Faça login em sua conta Qaxa.</span>
                </div>
                <div className="flex flex-col gap-3 w-full">
                    {!!user ? <div className="text-black">{user?.name || "Xereca"}</div> : null}
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="email">E-mail {` ${email}`}</Label>
                        <Input 
                            id="email"
                            value={email}
                            onChange={(event) => handleChangeText(event?.target?.value ?? '', setEmail)}
                            className="w-[500px]" 
                            placeholder="Digite o seu e-mail" 
                            type="email"/>
                    </div>
                    <div className="flex flex-col gap-2 justify-end">
                        <Label htmlFor="password">Senha {` ${password}`}</Label>
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
                        onClick={() => handleSubmit(email, password)}>
                            <span className="!text-white">Login</span>
                            {isSubmiting ?? <FiLoader />}
                            
                    </Button>
                </div>
            </div>
        </div>
    )
}