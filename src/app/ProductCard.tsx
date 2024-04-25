import { Button } from '@/components/ui/button'
import { Dialog,  DialogTrigger } from '@/components/ui/dialog'
import { GetAllProductsQuery } from '@/server/queries/products.queries'
import React from 'react'
import { ProductModal } from './modal/ProductModal'

export function ProductCard(props: {
    product: GetAllProductsQuery[number]
}) {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-950">
            <img
                alt={props.product.name}
                className="w-full h-48 object-cover"
                height="300"
                src={props.product.imageUrl}
                style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                }}
                width="400"
            />
            <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{props.product.name}</h3>
                <p className="overflow-ellipsis line-clamp-2 overflow-hidden text-gray-500 mb-4">{props.product.description}</p>
            </div> 
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="mb-4 ml-4 -mt-4">Ver mais</Button>
                </DialogTrigger>
                <ProductModal product={props.product}/>
            </Dialog>
        </div>
    )
}

