import { getNames } from "@/actions/getNames";
import { ListNames } from "@/components/ListNames";
import { NameForm } from "@/components/NameForm";

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
