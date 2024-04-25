'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { useFormStatus } from 'react-dom'

export function FormButton(props: {
    variant: 'outline' | 'default'
    pendingText: string
    defaultText: string
    isPending?: boolean
}) {
    const { pending } = useFormStatus()
    return (
        <Button variant={props.variant} type="submit" disabled={pending || props.isPending}>
            {pending || props.isPending ? props.pendingText : props.defaultText}
        </Button>
    )
}
