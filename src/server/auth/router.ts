import { router } from '@/server/trpc'
import { createUser } from '@/server/auth/postUser'

export const authRouter = router({
    createUser
})