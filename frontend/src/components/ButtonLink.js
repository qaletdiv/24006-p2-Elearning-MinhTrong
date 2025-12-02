import Link from 'next/link';
import React from 'react'

const ButtonLink = ({ href, children, variant = "primary", className = "" }) => {
    const baseClass = "w-24 py-3 rounded-sm font-bold text-sm text-center inline-block border";

    const variants = {
        primary: "bg-[#6d28d2] text-white border-[#6d28d2]",
        secondary: "text-[#6d28d2] border-[#6d28d2]",
    }

    return (
        <Link href={href} className={`${baseClass} ${variants[variant]} ${className}`}>
            {children}
        </Link >
    )
}

export default ButtonLink