import { Lucia } from 'lucia'
import { cookies } from 'next/headers'
import { cache } from 'react'
import { Session, User } from 'lucia'
import { adapter } from './adapter'

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			secure: process.env.NODE_ENV === 'production',
		},
	},
	getUserAttributes: (attributes) => {
		return {
			username: attributes.username,
		}
	},
})

export const authedRequest = cache(
	async () => {
		const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null

		if (!sessionId) {
			return {
				session: null,
				user: null,
			}
		}

		const result = await lucia.validateSession(sessionId)
		// next.js throws when you attempt to set cookie when rendering page
		try {
			if (result.session && result.session.fresh) {
				const sessionCookie = lucia.createSessionCookie(
					result.session.id,
				)
				cookies().set(
					sessionCookie.name,
					sessionCookie.value,
					sessionCookie.attributes,
				)
			}
			if (!result.session) {
				const sessionCookie = lucia.createBlankSessionCookie()
				cookies().set(
					sessionCookie.name,
					sessionCookie.value,
					sessionCookie.attributes,
				)
			}
		} catch { }

		return result
	},
)

declare module 'lucia' {
	interface Register {
		Lucia: typeof lucia
		DatabaseUserAttributes: DatabaseUserAttributes
	}
}

interface DatabaseUserAttributes {
	username: string
}
