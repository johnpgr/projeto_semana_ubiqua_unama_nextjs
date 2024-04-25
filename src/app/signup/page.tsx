import { authedRequest } from '@/server/auth'
import { redirect } from 'next/navigation'
import { SignUpForm } from './SignupForm'
import LogoImage from '@/assets/icon.jpg'
import Image from 'next/image'

export default async function SignUpPage() {
    const { user } = await authedRequest()

    if (user) {
        return redirect('/')
    }

    return (
        <div
            className="flex flex-col items-center justify-center w-full h-full"
        >
            <Image src={LogoImage.src} width={120} height={120} quality={100} className="rounded-full" alt="Logo" />
            <h1 className="text-4xl my-2 font-bold text-green-500">Sabores da amazônia</h1>
            <div className="w-full max-w-xl space-y-4 rounded-lg bg-background p-6 shadow-lg sm:p-8 mx-2">
                <h2 className="text-2xl font-bold text-foreground dark:text-white">
                    Cadastre sua conta
                </h2>
                <SignUpForm />
            </div>
        </div>
    )
}
