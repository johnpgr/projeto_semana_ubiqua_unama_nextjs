import { Config } from 'drizzle-kit'

import dotenv from "dotenv"
dotenv.config()

export default {
    schema: './src/server/db/schema.ts',
    driver: 'turso',
    dbCredentials: {
        url: process.env.DB_URL!,
        authToken: process.env.DB_TOKEN!,
    },
    out: './drizzle',
} satisfies Config
