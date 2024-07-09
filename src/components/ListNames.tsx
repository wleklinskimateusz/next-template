"use client";

import { deleteName } from "@/actions/deleteName";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Delete } from "lucide-react";

export const ListNames = ({ names }: { names: string[] }) => {
  return (
    <section>
      <h2>List of usernames from DB:</h2>
      <ul className="my-4">
        {names.map((name, index) => (
          <li
            key={index}
            className="p-4 shadow border rounded flex gap-4  justify-between items-center"
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
