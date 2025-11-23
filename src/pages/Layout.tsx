import { Breadcrumbs } from "../components/Breadcrumbs"
import { Sidebar } from "../components/Sidebar/Sidebar"

interface ILayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }:ILayoutProps) => {
    return (
        <section className="w-screen h-screen flex flex-row bg-[#FAFAFA]">
            <Sidebar/>
            <div className="w-full h-full flex flex-row !pl-2 !pt-2">
                <div className="w-full h-full flex flex-col !p-4 rounded-md bg-white border-l border-t border-gray-100">
                    <Breadcrumbs nos={['Home', 'Dashboards']}/>
                    { children }
                </div>
            </div>
        </section>
    )
}

export default Layout