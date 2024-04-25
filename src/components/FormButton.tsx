'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { useFormStatus } from 'react-dom'

export function FormButton(props: {
    size?: 'sm' | 'default' | 'icon' | 'lg'
    className?: string
    variant: 'outline' | 'default'
    pendingText: string
    defaultText: string
    isPending?: boolean
}) {
    const { pending } = useFormStatus()
    return (
        <Button
            variant={props.variant}
            size={props.size}
            type="submit"
            disabled={pending || props.isPending}
            className={props.className}
        >
            {pending || props.isPending ? props.pendingText : props.defaultText}
        </Button>
    )
}
