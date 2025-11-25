"use client"

import ButtonLink from '@/components/ButtonLink';
import { UserButton, useUser } from '@clerk/nextjs';
import { Search } from 'lucide-react';
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    const { isSignedIn, user } = useUser();

    return (
        <nav className='px-6 py-4 flex items-center'>
            <Image src='/logo.svg' alt='logo' width={140} height={100} />

            <div className='border rounded-4xl flex items-center grow py-3'>
                <form className='flex gap-3 items-center'>
                    <button className='pl-3'>
                        <Search />
                    </button>
                    <input placeholder='Search for anything' />
                </form>
            </div>

            <div className='ml-5 flex gap-6'>
                {!isSignedIn && (
                    <>
                        <ButtonLink href={'/sign-in'} variant="secondary">
                            Log in
                        </ButtonLink>

                        <ButtonLink href={'/sign-up'} variant='primary'>
                            Sign up
                        </ButtonLink></>
                )}

                {isSignedIn && (
                    <div className='flex items-center gap-4 justify-center'>
                        <p className='font-bold'>My Course</p>

                        <div className='scale-[1.5]'>
                            <UserButton afterSignOutUrl='/' />
                        </div>
                    </div>
                )}
            </div>

        </nav >
    )
}

export default Navbar