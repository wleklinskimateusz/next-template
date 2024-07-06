import { ClientComponent } from "@/components/ClientComponent";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  return (
    <div>
      <h1>Next.js + Clerk</h1>
      {user && <p>Hello {user?.firstName}</p>}
      <ClientComponent />
    </div>
  );
}
