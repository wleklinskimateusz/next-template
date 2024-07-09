"use server";

export async function modifyName(name: string) {
  return name.toUpperCase();
}
