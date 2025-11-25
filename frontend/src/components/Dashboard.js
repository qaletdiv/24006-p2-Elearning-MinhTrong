import React from 'react'
import { currentUser } from '@clerk/nextjs/server'

const Dashboard = async () => {
    const user = await currentUser();

    return (
        <div>
            <h1 className='text-3xl font-bold mb-4'>My Learning</h1>
            <p>Welcome, {user?.firstName || 'User'}!</p>
        </div>
    )
}

export default Dashboard