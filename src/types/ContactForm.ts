import { z } from 'zod'

export const ContactFormSchema = z.object({
    email: z.string().email().min(1, { message: 'Email is required.' }),
    phone: z.string().min(1, { message: 'Phone is required.' }),
    name: z.string().min(1, { message: 'Name is required' }),
    preferredContact: z.enum(['email', 'call', 'text'])
})

export type ContactFormType = z.infer<typeof ContactFormSchema>