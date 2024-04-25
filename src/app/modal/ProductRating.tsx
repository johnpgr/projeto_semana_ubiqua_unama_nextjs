import clsx from 'clsx'
import { StarIcon } from 'lucide-react'
import React from 'react'

export function ProductRating(props: {
    rating: number
}) {
    return (
        <div className="flex items-center gap-1">
            <StarIcon className={clsx("w-4 h-4", {
                "fill-primary": props.rating >= 1,
                "fill-muted stroke-muted-foreground": props.rating <= 0
            })}
            />
            <StarIcon className={clsx("w-4 h-4", {
                "fill-primary": props.rating >= 2,
                "fill-muted stroke-muted-foreground": props.rating <= 2
            })}
            />
            <StarIcon className={clsx("w-4 h-4", {
                "fill-primary": props.rating >= 3,
                "fill-muted stroke-muted-foreground": props.rating <= 3
            })}
            />
            <StarIcon className={clsx("w-4 h-4", {
                "fill-primary": props.rating >= 4,
                "fill-muted stroke-muted-foreground": props.rating <= 4
            })}
            />
            <StarIcon className={clsx("w-4 h-4", {
                "fill-primary": props.rating >= 5,
                "fill-muted stroke-muted-foreground": props.rating <= 5
            })}
            />
            <span className="text-foreground/50">{props.rating} avaliações</span>
        </div>
    )
}

