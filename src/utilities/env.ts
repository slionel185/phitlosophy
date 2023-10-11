import { z } from 'zod'
import { createEnv } from '@t3-oss/env-nextjs'

export const env = createEnv({
    client: {},
    server: {
        DATABASE_URL: z.string(),

        NEXTAUTH_URL: z.string().url(),
        NEXTAUTH_SECRET: z.string(),

        RESEND_API_KEY: z.string()
    },
    experimental__runtimeEnv: {}
})