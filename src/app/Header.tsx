import { FormButton } from '@/components/FormButton'
import { Button, buttonVariants } from '@/components/ui/button'
import { signOutAction } from '@/server/actions/auth.actions'
import { authedRequest } from '@/server/auth'
import { UserIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import IconBW from '@/assets/icon_bw.png'

export const Header = async () => {
    const { user } = await authedRequest()

    return (
        <header className="flex items-center border-b h-16 px-4 md:px-6 w-full shrink-0">
            <Link href="/">
                <div className="h-10 w-12">
                    <Image src={IconBW} alt="Logo" width={IconBW.width} height={IconBW.height} quality={100} />
                </div>
                <span className="sr-only">Sabores da amazônia</span>
            </Link>
            <nav className="flex flex-1 justify-center gap-4 md:gap-6 lg:gap-8">
            </nav>
            {user ? (
                <form action={signOutAction} className="flex items-center space-x-2">
                    <Button type="button" className="ml-auto" size="sm">
                        <UserIcon className="w-4 h-4 mr-2" />
                        {user.username}
                    </Button>
                    <FormButton
                        variant="outline"
                        size='sm'
                        defaultText="Sair"
                        pendingText="Saindo..."
                    />
                </form>
            ) : (
                <div className="flex items-center space-x-2">
                    <Link
                        href="/signin"
                        className={buttonVariants({ size: 'sm' })}
                    >
                        Login
                    </Link>
                    <Link
                        href="/signup"
                        className={buttonVariants({
                            size: 'sm',
                            variant: 'outline',
                        })}
                    >
                        Cadastre-se
                    </Link>
                </div>
            )}
        </header>
    )
}
