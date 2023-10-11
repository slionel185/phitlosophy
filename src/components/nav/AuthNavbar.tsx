import Link from 'next/link'
import { User } from 'lucide-react'
import { getServerSession } from 'next-auth'

import { buttonVariants } from '@/components/ui/button'
import MaxWidthContainer from '@/components/containers/MaxWidthContainer'

export default async function AuthNavbar() {
    const session = await getServerSession()

    return (
        <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
            <MaxWidthContainer>
                <div className='flex h-14 items-center justify-between border-b borer-zinc-200'>
                    <Link href={'/'} className='flex z-40 font-semibold'>
                        <span className='text-2xl scroll-m-20font-extrabold tracking-tight'>Phitlosophy</span>
                    </Link>

                    {/* TODO: Add mobile navbar later. */}

                    <div className='hidden items-center space-x-4 sm:flex'>
                        {session!.user.username}
                    </div>
                </div>
            </MaxWidthContainer>
        </nav>
    )
}