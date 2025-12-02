import ButtonLink from '@/components/ButtonLink'
import React from 'react'

const HomePage = () => {
    return (
        <div className="bg-[url('/hero.jpg')] h-[400px] w-full bg-cover bg-center flex items-start">
            <div className='max-w-md bg-white rounded-lg shadow-lg ml-[72px] mt-[72px] '>
                <div className='p-4'>
                    <h1 className='text-3xl font-bold '>
                        Learn more, spend less — Black Friday Sale from ₫199,000
                    </h1>
                    <p className='text-[#2a2b3f] my-4'>
                        Sitewide savings on thousands of courses. Ends Nov 28.
                    </p>
                    <ButtonLink href={'/sign-in'} variant="primary">
                        Save now
                    </ButtonLink>
                </div>
            </div>
        </div>
    )
}

export default HomePage