import Link from 'next/link'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/utilities/auth'
import { Button } from '@/components/ui/button'
import RegisterForm from '@/components/forms/RegisterForm'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default async function RegisterPage() {
    const session = await getServerSession(authOptions)

    if(session) return redirect('/dashboard')

    return (
        <div className='flex flex-col min-h-screen justify-center items-center px-4 gap-6'>
            <h1 className='scroll-m-20 font-extrabold tracking-tight text-5xl uppercase'>Phitlosophy</h1>
            <Card className='w-full border-none sm:border-solid sm:w-[400px] relative sm:shadow'>
                <div className='absolute top-4 right-4'>
                    <Button asChild variant={'ghost'} size={'sm'}>
                        <Link href={'/'}>
                            Home
                        </Link>
                    </Button>
                </div>
                <CardHeader className='pb-2'>
                    <CardTitle className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>Register</CardTitle>
                </CardHeader>
                <CardContent>
                    <RegisterForm />
                </CardContent>
            </Card>
        </div>
    )
}