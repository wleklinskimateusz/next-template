"use server";

import { db } from "@/drizzle/drizzle";
import { users } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function deleteName(name: string) {
  await db.delete(users).where(eq(users.name, name));
  revalidatePath("/");
  return;
}
