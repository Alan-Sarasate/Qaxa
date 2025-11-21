import { useState } from "react"
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarRightCollapse }from "react-icons/tb";
import { UserSidebarCard } from "./UserSidebarCard";

export const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(true)

    const handleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className={`${isOpen? 'w-[300px]' : 'w-[60px]'} h-full flex flex-col !p-2`}>
            <div className="flex flex-col justify-between h-full w-full">
                <div className="flex flex-col gap-1 bg-red-200">3
                    <div 
                        className="w-full flex flex-row cursor-pointer"
                        onClick={() => handleSidebar()}>
                        {isOpen? <TbLayoutSidebarLeftCollapse/> : <TbLayoutSidebarRightCollapse />}
                    </div>
                    <div className="w-full cursor-pointer hover:bg-[#EAEAEA]">Opção 1</div>
                </div>
                <UserSidebarCard/>
            </div>
            
        </nav>
    )
}