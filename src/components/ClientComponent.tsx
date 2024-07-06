"use client";

import { useUser } from "@clerk/nextjs";

export const ClientComponent = () => {
  const { user } = useUser();
  return <div>Hello from the client component {user?.firstName}</div>;
};
