import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"

function Login () {
    return (
        <div className="flex w-full h-full bg-orange-100">
            <div className="flex flex-col h-auto bg-red-100 justify-center">
                <div className="flex flex-col gap-6 w-full">
                    <span className="text-sm font-semibold">Crescer muito. Organizar tudo.</span>
                    <span className="text-sm font-semibold ">Crescer muito. Organizar tudo.</span>
                </div>
                <div className="flex flex-col gap-3 w-full">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="email">E-mail</Label>
                        <Input 
                            id="email" 
                            className="w-[500px]" 
                            placeholder="Digite o seu e-mail" 
                            type="email"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="password">Senha</Label>
                        <Input 
                            id="password" 
                            className="w-[500px]"
                            placeholder="Digite a sua senha"
                            type="password"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login