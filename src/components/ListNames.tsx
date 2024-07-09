"use client";

import { deleteName } from "@/actions/deleteName";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Delete } from "lucide-react";

export const ListNames = ({ names }: { names: string[] }) => {
  return (
    <section>
      <h2>List of usernames from DB:</h2>
      <ul className="my-4 flex flex-col gap-2">
        {names.map((name, index) => (
          <li
            key={index}
            className="flex items-center justify-between gap-4 rounded border p-4 shadow"
          >
            <span>{name}</span>
            <form
              action={async () => {
                try {
                  await deleteName(name);
                  toast.success("Name deleted");
                } catch (error) {
                  console.error(error);
                  toast.error("Failed to delete name");
                }
              }}
            >
              <Button variant="destructive" type="submit" size="icon">
                <Delete />
              </Button>
            </form>
          </li>
        ))}
      </ul>
    </section>
  );
};
