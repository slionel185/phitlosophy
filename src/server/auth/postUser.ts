import bcrypt from 'bcrypt'

import { prisma } from '@/utilities/prisma'
import { procedure } from '@/server/trpc'
import { RegisterFormSchema } from '@/types/auth/RegisterForm'

export const createUser = procedure
    .input(RegisterFormSchema)
    .mutation(async (opts) => {
        const { email, username, password, confirmPassword } = opts.input

        if(password !== confirmPassword) return { status: 400, message: 'Passwords do not match.' }

        const exists = await prisma.user.findFirst({
            where: {
                email: {
                    equals: email,
                    mode: 'insensitive'
                }
            }
        })

        if(exists) return { status: 400, message: 'User already exists.' }

        const hash = await bcrypt.hash(password, 10)
        
        const newUser = await prisma.user.create({
            data: {
                email: email,
                username: username,
                password: hash,
            }
        })

        console.log(newUser)
        if(newUser) return { status: 201, message: 'User created.' }
        return { status: 400, message: 'Unknown error occurred.' }
    })