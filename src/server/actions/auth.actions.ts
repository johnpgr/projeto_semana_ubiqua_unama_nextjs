'use server'

import { SignInSchema, SignUpSchema } from '@/lib/schemas'
import { generateId } from 'lucia'
import { db } from '@/server/db'
import { users } from '@/server/db/schema'
import { lucia, authedRequest } from '@/server/auth'
import { cookies } from 'next/headers'
import { eq } from 'drizzle-orm'
import * as argon2 from 'argon2'
import { SESSION_DURATION_SECONDS } from '@/consts'

export const signUpAction = async (values: {
    username: string
    email: string
    password: string
}) => {
    const res = SignUpSchema.safeParse(values)
    if (res.error) {
        return {
            error: res.error.message,
        }
    }
    const hashedPassword = await argon2.hash(values.password)
    const userId = generateId(24)

    try {
        await db
            .insert(users)
            .values({
                id: userId,
				email: values.email,
                username: values.username,
                hashedPassword,
            })
            .returning({
                id: users.id,
                username: users.username,
            })

        const session = await lucia.createSession(userId, {
            expiresIn: SESSION_DURATION_SECONDS,
        })

        const sessionCookie = lucia.createSessionCookie(session.id)

        cookies().set(
            sessionCookie.name,
            sessionCookie.value,
            sessionCookie.attributes,
        )

        return {
            data: {
                userId,
            },
        }
    } catch (error: any) {
        return {
            error: error?.message as string,
        }
    }
}

export const signInAction = async (values: {
    username: string
    password: string
}) => {
    const res = SignInSchema.safeParse(values)
    if (res.error) {
        return {
            error: res.error.message,
        }
    }

    const existingUser = await db.query.users.findFirst({
        where: (table) => eq(table.username, values.username),
    })

    if (!existingUser || !existingUser.hashedPassword) {
        return {
            error: 'Usuário não encontrado',
        }
    }

    const passwordMatches = await argon2.verify(
        existingUser.hashedPassword,
        values.password,
    )

    if (!passwordMatches) {
        return {
            error: 'Usuário ou senha incorreto.',
        }
    }

    const session = await lucia.createSession(existingUser.id, {
        expiresIn: 60 * 60 * 24 * 30,
    })

    const sessionCookie = lucia.createSessionCookie(session.id)

    cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes,
    )

    return {
        success: true,
    }
}

export const signOutAction = async () => {
    try {
        const { session } = await authedRequest()

        if (!session) {
            return {
                error: 'Unauthorized',
            }
        }

        await lucia.invalidateSession(session.id)

        const sessionCookie = lucia.createBlankSessionCookie()

        cookies().set(
            sessionCookie.name,
            sessionCookie.value,
            sessionCookie.attributes,
        )
    } catch (error: any) {
        return {
            error: error?.message,
        }
    }
}
