import { db } from "../db"
import { UserSelect } from "../db/schema"

export async function getUserById(userId: string): Promise<UserSelect | undefined> {
	return await db.query.users.findFirst({
		where: ({ id }, { eq }) => eq(id, userId)
	})
}
