"use server";

import { db } from "@/drizzle/drizzle";
import { users } from "@/drizzle/schema";
import { revalidatePath } from "next/cache";

export async function addName(name: string) {
  await db.insert(users).values({ name }).execute();
  revalidatePath("/");
  return;
}
