import { ListNames } from "@/components/ListNames";
import { NameForm } from "@/components/NameForm";
import { db } from "@/drizzle/drizzle";
import { users } from "@/drizzle/schema";

export default async function Home() {
  const names = await getNames();
  return (
    <main>
      <h1>Hello World!</h1>
      <NameForm />
      <ListNames names={names} />
    </main>
  );
}

async function getNames() {
  return await db
    .select({ name: users.name })
    .from(users)
    .then((rows) => rows.map((row) => row.name));
}
