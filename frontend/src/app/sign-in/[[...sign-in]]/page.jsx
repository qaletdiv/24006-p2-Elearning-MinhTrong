import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const SignInPage = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] items-center max-w-[1500px] w-full'>
                <div className='flex justify-center'>
                    <Image src="/image-1.svg" alt="image" width={800} height={100} className="w-full max-w-md lg:max-w-2xl" />
                </div>

                <div className='flex justify-center scale-[1.1]'>
                    <SignIn appearance={{ elements: { formButtonPrimary: "bg-purple-700 text-white" } }} />

                </div>
            </div>
        </div>
    )
}

export default SignInPage