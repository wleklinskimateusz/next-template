import { db } from "@/drizzle/drizzle";
import { users } from "@/drizzle/schema";

export async function getNames() {
  return await db
    .select({ name: users.name })
    .from(users)
    .then((rows) => rows.map((row) => row.name));
}
