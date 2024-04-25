'use client'
import { Textarea } from '@/components/ui/textarea'
import { useForm } from 'react-hook-form'
import React from 'react'
import { useRouter } from 'next/navigation'
import { z } from 'zod'
import { NewCommentSchema } from '@/lib/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { commentAction } from '@/server/actions/comments.actions'
import { toast } from '@/components/ui/use-toast'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { FormButton } from '@/components/FormButton'

export function ProductCommentArea(props: { productId: string }) {
    const [isPending, setIsPending] = React.useState(false)
    const router = useRouter()
    const form = useForm<z.infer<typeof NewCommentSchema>>({
        resolver: zodResolver(NewCommentSchema),
        defaultValues: {
            productId: props.productId,
            content: '',
        }
    })

    async function onSubmit(values: z.infer<typeof NewCommentSchema>) {
        setIsPending(true)
        const res = await commentAction(values)
        if (res.error) {
            toast({
                variant: 'destructive',
                description: res.error
            })
            setIsPending(false)
        } else if (res.success) {
            setIsPending(false)
            form.reset()
            router.refresh()
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2">
                <FormField control={form.control}
                    name="content"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Textarea className="min-h-[100px]" id="comment" placeholder="Deixe o seu feedback com o produto aqui..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormButton isPending={isPending}
                    variant="default"
                    defaultText="Comentar"
                    pendingText="Aguarde..."
                    className="mr-auto"
                />
            </form>
        </Form>
    )
}

