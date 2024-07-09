"use client";

import { addName } from "@/actions/addName";
import { toast } from "sonner";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRef } from "react";
import { useFormStatus } from "react-dom";

export const NameForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={formRef}
      className="flex gap-4"
      action={async (formData) => {
        const name = formData.get("name");
        if (typeof name !== "string") {
          throw new Error("Name is not a string");
        }
        try {
          //   await new Promise((resolve) => setTimeout(resolve, 1000));
          await addName(name);
          toast.success("Name modified");
          formRef.current?.reset();
        } catch (error) {
          console.error(error);
          toast.error("Failed to modify name");
        }
      }}
    >
      <Input id="name" name="name" type="text" />
      <SubmitButton />
    </form>
  );
};

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      Add new username
    </Button>
  );
};
