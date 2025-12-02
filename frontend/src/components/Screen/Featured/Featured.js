import FeaturedCard from '@/components/Screen/Featured/FeaturedCard/FeaturedCard'
import { ArrowRight, Users } from 'lucide-react'
import React from 'react'

const Featured = () => {
    return (
        <div className='flex items-center mt-10 gap-6'>
            <div className='flex-[0.6]'>
                <h3>
                    Learn essential career and life skills
                </h3>

                <p>
                    Udemy helps you build in-demand skills fast and advance your career in a changing job market.
                </p>
            </div>

            <div className='flex-2 flex gap-6'>
                <FeaturedCard className="flex-1 bg-feature-1 bg-cover bg-center bg-no-repeat p-[0.8rem] bg-[oklch(93.86%_0.0108_280.47deg)] flex flex-col justify-end min-h-88 rounded-2xl">
                    <div className='bg-white py-4 pl-4 rounded-lg'>
                        <div className='flex items-center gap-2 border rounded w-fit p-1 border-[oklch(48.09%_0.0371_279.08deg)]'>
                            <Users width={12} height={12} />
                            <span className='font-light text-[oklch(48.09%_0.0371_279.08deg)] text-[0.7rem]'>1,7Tr+</span>
                        </div>

                        <p className='font-light mt-4 text-[oklch(48.09%_0.0371_279.08deg)] text-[0.9rem]'>Gernerate AI</p>

                        <ArrowRight width={20} height={20} className='ml-auto mr-4 text-[oklch(48.09%_0.0371_279.08deg)]' />
                    </div>
                </FeaturedCard>

                <FeaturedCard className="flex-1 bg-feature-2 bg-cover bg-center bg-no-repeat p-[0.8rem] bg-[oklch(93.86%_0.0108_280.47deg)] flex flex-col justify-end min-h-88 rounded-2xl">
                    <div className='bg-white py-4 pl-4 rounded-lg'>
                        <div className='flex items-center gap-2 border rounded w-fit p-1 border-[oklch(48.09%_0.0371_279.08deg)]'>
                            <Users width={12} height={12} />
                            <span className='font-light text-[oklch(48.09%_0.0371_279.08deg)] text-[0.7rem]'>1,7Tr+</span>
                        </div>

                        <p className='font-light mt-4 text-[oklch(48.09%_0.0371_279.08deg)] text-[0.9rem]'>Gernerate AI</p>

                        <ArrowRight width={20} height={20} className='ml-auto mr-4 text-[oklch(48.09%_0.0371_279.08deg)]' />
                    </div>
                </FeaturedCard>

                <FeaturedCard className="flex-1 bg-feature-3 bg-cover bg-center bg-no-repeat p-[0.8rem] bg-[oklch(93.86%_0.0108_280.47deg)] flex flex-col justify-end min-h-88 rounded-2xl">
                    <div className='bg-white py-4 pl-4 rounded-lg'>
                        <div className='flex items-center gap-2 border rounded w-fit p-1 border-[oklch(48.09%_0.0371_279.08deg)]'>
                            <Users width={12} height={12} />
                            <span className='font-light text-[oklch(48.09%_0.0371_279.08deg)] text-[0.7rem]'>1,7Tr+</span>
                        </div>

                        <p className='font-light mt-4 text-[oklch(48.09%_0.0371_279.08deg)] text-[0.9rem]'>Gernerate AI</p>

                        <ArrowRight width={20} height={20} className='ml-auto mr-4 text-[oklch(48.09%_0.0371_279.08deg)]' />
                    </div>
                </FeaturedCard>
            </div>

        </div>
    )
}

export default Featured