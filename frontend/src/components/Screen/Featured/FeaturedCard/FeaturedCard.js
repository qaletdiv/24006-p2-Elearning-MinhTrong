import React from 'react'

const FeaturedCard = ({ children, className = "" }) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default FeaturedCard