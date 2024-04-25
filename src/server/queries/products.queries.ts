import { db } from "../db";
import { CommentSelect, ProductSelect } from "../db/schema";

export type GetAllProductsQuery = (ProductSelect & { comments: Pick<CommentSelect, "content" | "userId" | "createdAt">[], rating: number })[]

export async function getAllProducts(): Promise<GetAllProductsQuery> {
	const productsRaw = await db.query.products.findMany({
		with: {
			comments: {
				columns: {
					content: true,
					userId: true,
					createdAt: true
				}
			},
			ratings: true,
		}
	})

	const products: GetAllProductsQuery = []

	for (const p of productsRaw) {
		const ratings = p.ratings.map((r) => r.value)
		const avgRating = ratings.reduce((a, b) => a + b, 0) / ratings.length === 0 ? 1 : ratings.length

		products.push({
			id: p.id,
			name: p.name,
			description: p.description,
			price: p.price,
			imageUrl: p.imageUrl,
			comments: p.comments,
			rating: avgRating,
		})
	}

	return products
}
