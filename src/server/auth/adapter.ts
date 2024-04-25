import { db } from '@/server/db'
import { users, sessions } from '@/server/db/schema'
import { DrizzleSQLiteAdapter } from '@lucia-auth/adapter-drizzle'

export const adapter = new DrizzleSQLiteAdapter(db, sessions, users)
