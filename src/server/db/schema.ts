import { relations } from 'drizzle-orm'
import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('user', {
    id: text('id').primaryKey(),
    email: text('email').unique(),
    username: text('name').unique(),
    hashedPassword: text('hashed_password'),
})

export const sessions = sqliteTable('session', {
    id: text('id').notNull().primaryKey(),
    userId: text('user_id')
        .notNull()
        .references(() => users.id),
    expiresAt: integer('expires_at').notNull(),
})

export const products = sqliteTable('product', {
    id: text('id').primaryKey(),
    name: text('name').notNull(),
    description: text('description').notNull(),
    imageUrl: text('image_url').notNull(),
    price: integer('price').notNull(),
})

export type ProductSelect = typeof products.$inferSelect
export type ProductInsert = typeof products.$inferInsert

export const productsRelations = relations(products, ({ many }) => ({
    ratings: many(ratings),
    comments: many(comments),
}))

export const ratings = sqliteTable('rating', {
    id: text('id').primaryKey(),
    userId: text('user_id').notNull().references(() => users.id),
    productId: text('product_id').notNull().references(() => products.id),
    value: integer('value').notNull().default(0),
})

export const ratingsRelations = relations(ratings, ({ one }) => ({
    product: one(products, {
        fields: [ratings.productId],
        references: [products.id]
    })
}))

export const comments = sqliteTable('comment', {
    id: text('id').primaryKey(),
    userId: text('user_id').notNull().references(() => users.id),
    productId: text('product_id').notNull().references(() => products.id),
    content: text('content').notNull(),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date())
})

export type CommentSelect = typeof comments.$inferSelect
export type CommentInsert = typeof comments.$inferInsert

export const commentsRelations = relations(comments, ({ one }) => ({
    product: one(products, {
        fields: [comments.productId],
        references: [products.id]
    })
}))
