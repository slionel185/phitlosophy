'use client'

import { useSession } from 'next-auth/react'

import LoaderPage from '@/components/pages/Loader'
import MaxWidthContainer from '@/components/containers/MaxWidthContainer'

export default function DashboardPage() {
    const { data, status } = useSession()

    if(status === 'loading') return <LoaderPage />

    return (
        <MaxWidthContainer className='mb-12 mt-28 sm:mt-40 flex flex-col justify-center items-center text-center bg-background'>
            <div className='flex w-full justify-start items-center'>
                <h1 className='text-2xl'></h1>
            </div>
            
        </MaxWidthContainer>
    )
}