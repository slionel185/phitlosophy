'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { LogIn, SunMoon } from 'lucide-react'

import { Button, buttonVariants } from '@/components/ui/button'
import MaxWidthContainer from '@/components/containers/MaxWidthContainer'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem } from '@/components/ui/dropdown-menu'

export default function Navbar() {
    const { setTheme } = useTheme()

    const [radioTheme, setRadioTheme] = useState('SYSTEM')

    useEffect(() => {
        if(radioTheme === 'SYSTEM') {
            setTheme('system')
        } else if(radioTheme === 'LIGHT') {
            setTheme('light')
        } else if(radioTheme === 'DARK') {
            setTheme('dark')
        }
    }, [radioTheme])

    return (
        <nav className='sticky h-20 inset-x-0 top-0 z-30 w-full border-b bg-background/75 backdrop-blur-lg transition-all'>
            <MaxWidthContainer>
                <div className='flex h-20 items-center justify-between border-b borer-zinc-200'>
                    <Link href={'/'} className='flex z-40 font-semibold'>
                        <span className='text-2xl scroll-m-20font-extrabold tracking-tight'>Phitlosophy</span>
                    </Link>

                    {/* TODO: Add mobile navbar later. */}

                    <div className='flex items-center space-x-4 sm:flex'>
                        <>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button size={'icon'} variant={'ghost'}>
                                        <SunMoon className='h-5 w-5' />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuRadioGroup value={radioTheme} onValueChange={setRadioTheme}>
                                        <DropdownMenuRadioItem value='SYSTEM'>System</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value='DARK'>Dark Theme</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value='LIGHT'>Light Theme</DropdownMenuRadioItem>
                                    </DropdownMenuRadioGroup>        
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <Link href={'/auth/login'} className={`${buttonVariants({
                                variant: 'default',
                                size: 'sm'
                            })}`}>
                                Login <LogIn className='ml-2 h-5 w-5' />
                            </Link>
                        </>
                    </div>
                </div>
            </MaxWidthContainer>
        </nav>
    )
}