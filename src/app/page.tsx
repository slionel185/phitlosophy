import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Phone } from 'lucide-react'

import Navbar from '@/components/nav/Navbar'
import { buttonVariants } from '@/components/ui/button'
import MaxWidthContainer from '@/components/containers/MaxWidthContainer'

import DoubleFlex from '@/assets/landing/double_flex.png'

export default function HomePage() {
    return (
        <>
            <Navbar />

            <MaxWidthContainer className='mb-12 mt-20 sm:mt-40 flex flex-col justify-center items-center text-center bg-background'>
                <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border bg-white px-7 py-2 shadow-md backdrop-blue transition-all hover:bg-white/50'>
                    <p className='text-sm font-semibold text-gray-900'>Phitlosophy coming soon!</p>
                </div>

                <h1 className='max-w-4xl text-5xl font-bold md:text-6xl text-foreground lg:text-7xl'>
                    All in one <span className='text-primary'>personal</span> training services.
                </h1>
                <p className='mt-5 max-w-prose text-muted-foreground sm:text-lg'>
                If you&apos;re looking to get in shape with some help from friends, then you need Phitlosophy&apos;s Personal Training Team! With our team of experts by your side, you&apos;ll be able to achieve your fitness goals in no time. So what are you waiting for?
                </p>
                <div className='mt-8'>
                    <Link href={'https://cal.com/sethtorrence/consult-call'} target='_blank' className={buttonVariants({
                        variant: 'default',
                        size: 'lg'
                    })}>
                        Book a call <Phone className='ml-2 h-5 w-5' />
                    </Link>
                </div>
            </MaxWidthContainer>


            <div>
                <div className='relative isolate'>
                    <div>
                        <div className='mx-auto max-w-6xl px-6 lg:px-8'>
                            <div className='mt-16 flow-root sm:mt-24'>
                                <div className='-m-2 rounded-xl bg-foreground/5 p-2 ring-1 ring-inset ring-foreground/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                                    <Image className='rounded-md bg-background shadow-2xl ring-1 ring-foreground/10' quality={100} src={DoubleFlex} alt={'Picture of Rich/Jamie giving queues'} width={3024} height={1903} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mx-auto mb-32 mt-32 max-w-5xl sm:mt-56'>
                <div className='mb-12 px-6 lg:px-8'>
                    <div className='mx-auto max-w-2xl sm:text-center'>
                        <h2 className='mt-2 font-bold text-4xl text-foreground sm:text-5xl'>Book your consultation now</h2>
                        <p className='mt-4 text-lg text-muted-foreground'>Getting on track with your fitness goals has never been easier.</p>
                    </div>
                </div>

                <ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0'>
                    <li className='md:flex-1'>
                        <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
                            <span className='text-sm font-medium text-primary'>Step 1</span>
                            <span className='text-xl font-semibold'>Book your consultation</span>
                            <span className='mt-2 text-muted-foreground'>Fill out our contact form or book through our Cal links now!</span>
                        </div>
                    </li>

                    <li className='md:flex-1'>
                        <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
                            <span className='text-sm font-medium text-primary'>Step 2</span>
                            <span className='text-xl font-semibold'>Pick your plan</span>
                            <span className='mt-2 text-muted-foreground'>After we meet and discuss potential options, pick what suits you best.</span>
                        </div>
                    </li>

                    <li className='md:flex-1'>
                        <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
                            <span className='text-sm font-medium text-primary'>Step 3</span>
                            <span className='text-xl font-semibold'>Kick A**</span>
                            <span className='mt-2 text-muted-foreground'>Now we put the plan into action and crush your goals!</span>
                        </div>
                    </li>
                </ol>

                <div className='mx-auto flex flex-col lg:flex-row w-2/3 mt-24 justify-center items-center gap-4 lg:gap-8'>
                        <Link href={'https://cal.com/sethtorrence/consult-session'} target='_blank' className={`w-full ${buttonVariants({
                            variant: 'default',
                            size: 'lg'
                        })}`}>
                            Book with Rich <Calendar className='ml-2 h-5 w-5' />
                        </Link>

                        <div className='border rounded-full flex justify-center items-center p-2 lg:p-8'>
                            <h1>OR</h1>
                        </div>

                        <Link href={'https://cal.com/sethtorrence/consult-call'} target='_blank' className={`w-full ${buttonVariants({
                            variant: 'default',
                            size: 'lg'
                        })}`}>
                            Book with Jamie <Calendar className='ml-2 h-5 w-5' />
                        </Link>
                </div>
            </div>
        </>
    )
}