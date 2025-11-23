import { RiLogoutBoxLine } from "react-icons/ri";
import useAuth from "../../hooks/useAuth"

interface IUserSidebarCardProps {
    isSidebarOpen: boolean;
}

export const UserSidebarCard = ({ isSidebarOpen }:IUserSidebarCardProps) => {

    const { user, logout} = useAuth()

    return (
        <div className="flex flex-row w-full h-[36px] gap-2">
            <div className=" flex flex-row shrink-0 w-[36px] h-full justify-center items-center rounded-md bg-[#F0F0F0]">
                <span className="text-base font-semibold">{user?.name?.[0] || '&'}</span>
            </div>
            {
                isSidebarOpen && 
                    <>
                        <div className="flex flex-row w-full gap-4 justify-between items-center">
                            <div className="flex flex-col justify-center">
                                <span className="leading-none text-sm font-semibold">{user?.name}</span>
                                <span className="leading-none text-xs font-semibold text-gray-500">Owner</span>
                            </div>
                            <div 
                                className="cursor-pointer"
                                onClick={logout}>
                                <RiLogoutBoxLine size={'20px'} />
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}
