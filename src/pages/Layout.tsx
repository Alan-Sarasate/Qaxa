import { Sidebar } from "../components/Sidebar/Sidebar"

interface ILayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }:ILayoutProps) => {
    return (
        <section className="w-screen h-screen flex flex-row bg-[#FAFAFA]">
            <Sidebar/>
            <div className="w-full h-full flex flex-row !p-2">
                <div className="w-full h-full flex flex-row !p-2 rounded-md bg-white">
                    { children }
                </div>
            </div>
        </section>
    )
}

export default Layout