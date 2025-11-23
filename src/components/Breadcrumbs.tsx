import { MdKeyboardArrowRight } from "react-icons/md";

interface IBreadcrumbsProps {
    nos: string[]
}

export const Breadcrumbs = ({ nos }:IBreadcrumbsProps) => {
    return (
        <div className="flex flex-row w-full gap-2 items-center">
            <span className="leading-none text-xs text-gray-500 cursor-pointer">Minha aplicação</span>
            {
                nos.length > 0 && nos.map((no, index) => (
                    <>
                        <MdKeyboardArrowRight className="text-gray-500" size={'10px'} />
                        {(index + 1) === nos.length ? 
                            <span className="leading-none text-xs font-semibold cursor-pointer">{no}</span> : 
                            <span className="leading-none text-xs text-gray-500 cursor-pointer">{no}</span>}
                    </>
                ))
                    
            }
        </div>
    )
}