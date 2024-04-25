'use server'

import { NewCommentSchema } from "@/lib/schemas"
import { authedRequest } from "../auth"
import { db } from "../db"
import { comments } from "../db/schema"
import { generateId } from "lucia"

export async function commentAction(values: {
    productId: string,
    content: string
}) {
    const { user } = await authedRequest()
    if (!user) {
        return {
            error: 'Unauthorized'
        }
    }

    const res = NewCommentSchema.safeParse(values)
    if (res.error) {
        return {
            error: res.error.message
        }
    }

    try {
        await db.insert(comments).values({
            id: generateId(24),
            userId: user.id,
            productId: res.data.productId,
            content: res.data.content,
        })

        return {
            success: true
        }
    } catch (error: any) {
        return {
            error: error.message
        }
    }
}
