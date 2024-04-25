import { z } from 'zod'

export const SignUpSchema = z
    .object({
        username: z
            .string()
            .min(2, 'Nome de usuário precisa conter pelo menos 2 carácteres')
            .max(50, 'Nome de usuário não deve mais do que 50 carácteres'),
        email: z.string().email('Email inválido'),
        password: z
            .string()
            .min(8, {
                message: 'A senha precisa conter pelo menos 8 carácteres',
            }),
        confirmPassword: z
            .string()
            .min(8, {
                message: 'A senha precisa conter pelo menos 8 carácteres',
            }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'As senhas não coincidem',
        path: ['confirmPassword'],
    })

export const SignInSchema = z.object({
    username: z
        .string()
        .min(2, 'Nome de usuário precisa conter pelo menos 2 carácteres')
        .max(50, 'Nome de usuário não deve mais do que 50 carácteres'),
    password: z.string(),
})
