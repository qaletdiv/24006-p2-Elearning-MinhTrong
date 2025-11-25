import Link from 'next/link';
import React from 'react'

const ButtonLink = ({ href, children, variant = "primary", className = "" }) => {
    const baseClass = "w-24 py-3 rounded-sm font-bold text-sm text-center inline-block border";

    const variants = {
        primary: "bg-purple-700 text-white border-purple-600",
        secondary: "text-purple-800 border-purple-600",
    }

    return (
        <Link href={href} className={`${baseClass} ${variants[variant]} ${className}`}>
            {children}
        </Link >
    )
}

export default ButtonLink