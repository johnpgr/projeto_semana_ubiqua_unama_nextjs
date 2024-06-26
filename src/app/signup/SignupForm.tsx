'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { SignUpSchema } from '@/lib/schemas'
import { signUpAction } from '@/server/actions/auth.actions'
import { toast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FormButton } from '@/components/FormButton'
import { Button } from '@/components/ui/button'

export function SignUpForm() {
    const [isPending, setIsPending] = useState(false)
    const router = useRouter()

    const form = useForm<z.infer<typeof SignUpSchema>>({
        resolver: zodResolver(SignUpSchema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    })

    async function onSubmit(values: z.infer<typeof SignUpSchema>) {
        setIsPending(true)
        const res = await signUpAction(values)
        if (res.error) {
            setIsPending(false)
            toast({
                variant: 'destructive',
                description: res.error,
            })
        } else if (res.data) {
            toast({
                variant: 'default',
                description: 'Account created successfully',
            })
            setTimeout(() => {
                setIsPending(false)
                router.push('/')
            }, 5000)
        }
    }
    return (
        <Form {...form}>
            <form
                autoComplete="off"
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
            >
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nome de usuário</FormLabel>
                            <FormControl>
                                <Input
                                    autoComplete="off"
                                    placeholder="Alguém"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    autoComplete="off"
                                    type="email"
                                    placeholder="seuemail@dominio.com"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Senha</FormLabel>
                            <FormControl>
                                <Input
                                    autoComplete="current-password"
                                    placeholder="*****"
                                    type="password"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Confirme a senha</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="*****"
                                    type="password"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormButton
                    isPending={isPending}
                    variant="default"
                    defaultText="Realizar cadastro"
                    pendingText="Aguarde..."
                    className="mt-4 w-full"
                />
            </form>
        </Form>
    )
}
