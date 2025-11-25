import Navbar from '@/components/Navbar'
import React from 'react'

const MainLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="mx-auto p-4 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
                {children}
            </div>

        </>
    )
}

export default MainLayout