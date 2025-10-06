"use client"

import React from "react"
import { Button } from "./ui/button"

function Sidebar () {

    const [isOpen, setIsOpen] = React.useState(true)

    const sidebarHandleClick = () => {
        setIsOpen(open => !open)
    }

    return (
        <nav className={`flex flex-row h-full ${isOpen ? 'w-[30%]' : 'w-[10%]'} bg-red-500`}>
            <div className="flex w-full bg-blue-300">
                <p>Aqui</p>
            </div>
            <Button onClick={sidebarHandleClick}>Sidebar {isOpen ? "Abrido" : "Fechado"}</Button>
        </nav>
    )
}

export default Sidebar