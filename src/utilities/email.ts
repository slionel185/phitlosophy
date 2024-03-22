'use server'

import { Resend } from 'resend'

import { env } from '@/utilities/env'
import { ContactFormType} from '@/types/ContactForm'

const resend = new Resend(env.RESEND_API_KEY)

export const sendContactEmail = async (
    values: ContactFormType
) => {
    const email = 'slionel1850@gmail.com'

    await resend.emails.send({
        from: 'storrence@titansoftware.dev',
        to: [email],
        subject: 'New Contact Request!',
        html: `
            <p>${values.name}</p>
            <p>${values.email}</p>
            <p>${values.phone}</p>
            <p>Contact via -> ${values.preferredContact}</p>
        `
    })
}