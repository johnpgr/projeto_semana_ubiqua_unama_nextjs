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

export const NewCommentSchema = z.object({
    productId: z.string().min(1),
    content: z.string().min(1).max(500, 'Limite de carácteres atingido, limite seu comentário em 500 carácteres')
})

export const AddRatingSchema = z.object({
    productId: z.string().min(1),
    value: z.number().refine((it) => [1, 2, 3, 4, 5].includes(it), "Numero de estrelas avaliadas inválido.")
})
