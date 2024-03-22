'use client'

import { ContactFormType, ContactFormSchema } from '@/types/ContactForm'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Form, FormControl, FormField, FormItem, FormLabel} from '@/components/ui/form'
import { sendContactEmail } from '@/utilities/email'

export default function ContactForm() {
    const [submitButtonText, setSubmitButtonText] = useState('Submit')

    const form = useForm<ContactFormType>({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            preferredContact: 'call'
        }
    })

    function onSubmit(values: ContactFormType) {
        sendContactEmail(values).then(() => {
            setSubmitButtonText('Sent!')
            form.reset()
        })
    }
    
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-2 max-w-lg mx-auto'>
                <FormField control={form.control} name='name' render={({ field }) => (
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input className='w-full' placeholder='John Doe' {...field} />
                        </FormControl>
                    </FormItem>
                )} />

                <FormField control={form.control} name='email' render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input className='w-full' placeholder='johndoe@gmail.com' {...field} />
                        </FormControl>
                    </FormItem>
                )} />
                
                <FormField control={form.control} name='phone' render={({ field }) => (
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input className='w-full' placeholder='(302) 895 - 4185' {...field} />
                        </FormControl>
                    </FormItem>
                )} />

                <FormField control={form.control} name='preferredContact' render={({ field }) => (
                    <FormItem>
                        <FormLabel>Preferred Contact Method</FormLabel>
                        <RadioGroup defaultValue={field.value} onValueChange={field.onChange}>
                            <div className='flex gap-4 items-center'>
                                <RadioGroupItem value='call' />
                                <span>Call</span>
                            </div>

                            <div className='flex gap-4 items-center'>
                                <RadioGroupItem value='text' />
                                <span>Text</span>
                            </div>

                            <div className='flex gap-4 items-center'>
                                <RadioGroupItem value='email' />
                                <span>Email</span>
                            </div>
                        </RadioGroup>
                    </FormItem>
                )} />


                <Button className='w-full mt-4' type='submit'>{submitButtonText}</Button>
            </form>
        </Form>
    )
}