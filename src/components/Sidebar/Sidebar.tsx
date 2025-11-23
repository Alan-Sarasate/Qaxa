import { useState } from "react"
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarRightCollapse }from "react-icons/tb";
import { UserSidebarCard } from "./UserSidebarCard";

export const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(true)

    const handleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className={`${isOpen? 'w-[300px]' : 'w-auto'} h-full flex flex-col !p-2 ${!isOpen && '!pr-0'}`}>
            <div className="flex flex-col justify-between h-full w-full">
                <div className="flex flex-col gap-1 bg-red-200">
                    Teste
                </div>
                <div className="flex flex-col w-full">
                    <div 
                        className={`flex flex-row w-full items-center cursor-pointer gap-2 ${isOpen && '!px-2 justify-start'} !py-4 justify-center`}
                        onClick={() => handleSidebar()}>
                        {!isOpen? <TbLayoutSidebarRightCollapse size={'20px'}/> : 
                            <>
                                <TbLayoutSidebarLeftCollapse size={'20px'}/>
                                <span className="text-sm leading-none">Recolher</span>
                            </>}
                    </div>
                    <UserSidebarCard isSidebarOpen={isOpen}/>
                </div>
            </div>
            
        </nav>
    )
}