import { Loader2 } from 'lucide-react'

import MaxWidthContainer from '@/components/containers/MaxWidthContainer'

export default function LoaderPage() {
    return (
        <MaxWidthContainer className='mb-12 mt-28 sm:mt-40 flex flex-col justify-center items-center text-center bg-background'>
            <h1 className='py-4 text-2xl text-foreground'>Grabbing your data!</h1>
            <Loader2 className='h-16 w-16 text-muted-foreground animate-spin' />
        </MaxWidthContainer>
    )
}