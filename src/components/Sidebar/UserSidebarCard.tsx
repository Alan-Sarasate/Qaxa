import useAuth from "../../hooks/useAuth"

export const UserSidebarCard = () => {

    const { user } = useAuth()

    return (
        <div className="flex flex-row w-full h-[36px]">
            <div className="w-[36px] h-full justify-center items-center rounded-md bg-[#F0F0F0]">
                <span>{user?.name[0]}</span>
            </div>
        </div>
    )
}
