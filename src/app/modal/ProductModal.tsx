import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { ProductRating } from "./ProductRating"
import { ProductComment } from "./ProductComment"
import { DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { GetAllProductsQuery } from "@/server/queries/products.queries"
import { ProductCommentArea } from "./ProductCommentArea"

export function ProductModal(props: {
    product: GetAllProductsQuery[number]
}) {
    return (
        <>
            <DialogContent className="w-full max-w-4xl">
                <DialogHeader>
                    <DialogTitle className="text-4xl">{props.product.name}</DialogTitle>
                </DialogHeader>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <img
                            alt={props.product.name}
                            className="aspect-video overflow-hidden rounded-lg"
                            height="400"
                            src={props.product.imageUrl}
                            width="600"
                        />
                    </div>
                    <div className="grid gap-6">
                        <div className="grid gap-2">
                            <div className="flex items-center gap-1 text-sm">
                                <span className="font-bold text-2xl">R$ {props.product.price / 10}</span>
                            </div>
                            <ProductRating rating={props.product.rating} />
                        </div>
                        <div className="grid gap-4">
                            <p>
                                {props.product.description}
                            </p>
                            <div className="flex gap-4">
                                <Button variant="outline">Adicionar ao carrinho</Button>
                                <Button>Comprar agora</Button>
                            </div>
                       </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-xl font-semibold mb-2">Comentários ({props.product.comments.length})</h2>
                    <div className="flex flex-col gap-4 max-h-[200px] h-full overflow-y-scroll overflow-x-hidden">
                        {props.product.comments.map((comment) => <ProductComment comment={comment} />)}
                    </div>
                    <div className="grid gap-2 mt-2">
                        <Label className="text-base" htmlFor="comment">
                            Deixe um comentário
                        </Label>
                        <ProductCommentArea productId={props.product.id} />
                    </div>
                </div>
            </DialogContent>
        </>
    )
}
