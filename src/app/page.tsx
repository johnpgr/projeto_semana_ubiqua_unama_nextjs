import { getAllProducts } from "@/server/queries/products.queries"
import React from "react"
import { ProductCard } from "./ProductCard"
import Image from "next/image"

export const dynamic = "force-dynamic"

export default async function Home() {
    const products = await React.cache(getAllProducts)()

    return (
        <div className="flex flex-col min-h-[100dvh]">
            <section className="w-full py-6 md:py-12 lg:py-16 border-y">
                <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
                    <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
                        <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter text-green-700 sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                            Sabores da Amazônia
                        </h1>
                        <h2 className="mx-auto mt-6 max-w-[700px] text-gray-500 text-lg md:text-2xl dark:text-foreground/70">
                            Mercado virtual de comidas típicas do Pará
                        </h2>
                    </div>
                    <Image
                        alt="Hero"
                        className="mx-auto aspect-[3/1] overflow-hidden rounded-xl object-cover"
                        height="720"
                        quality={100}
                        src="https://www.essemundoenosso.com.br/wp-content/uploads/2015/11/mercado-ver-o-peso-bel%C3%A9m-1.jpg"
                        width="1280"
                    />
                </div>
            </section>
            <section className="w-full py-6 md:py-12 lg:py-16">
                <div className="container space-y-12 px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                Produtos em destaque
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore os nossos melhores pratos</h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Explore nossa seleção selecionada de refeições de dar água na boca, cada uma preparada com os melhores ingredientes e feita
                                para deliciar o seu paladar.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.map((product) => <ProductCard product={product} />)}
                    </div>
                </div>
            </section>
        </div>
    )
}
