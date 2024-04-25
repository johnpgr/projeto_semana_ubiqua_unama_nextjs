import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { db } from '@/server/db'
import { CommentSelect } from '@/server/db/schema'
import React from 'react'

export async function ProductComment(props: {
    comment: Pick<CommentSelect, "content" | "userId" | "createdAt">
}) {
    const user = await db.query.users.findFirst({
        where: ({ id }, { eq }) => eq(id, props.comment.userId)
    })

    if(!user) return null

    return (
        <div className="flex gap-4 p-2 border-t last:border-b last:pb-6">
            <div className="grid gap-1">
                <div className="flex items-center gap-2">
                    <div className="font-semibold text-sm">{user.username}</div>
                    <div className="text-xs text-foreground/50">{props.comment.createdAt.toLocaleDateString()}</div>
                </div>
                <p className="text-sm leading-relaxed">
                    {props.comment.content}
                </p>
            </div>
        </div>
    )
}

