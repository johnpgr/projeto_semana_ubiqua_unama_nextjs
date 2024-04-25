'use server'

import { AddRatingSchema } from "@/lib/schemas"
import { authedRequest } from "../auth"
import { db } from "../db"
import { ratings } from "../db/schema"
import { generateId } from "lucia"

export async function addRatingAction(values: {
    productId: string,
    value: number
}) {
    const { user } = await authedRequest()
    if (!user) {
        return {
            error: 'Unauthorized'
        }
    }

    const res = AddRatingSchema.safeParse(values)
    if (res.error) {
        return {
            error: res.error.message
        }
    }

    try {
        await db.insert(ratings).values({
            id: generateId(24),
            userId: user.id,
            productId: res.data.productId,
            value: res.data.value,
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
