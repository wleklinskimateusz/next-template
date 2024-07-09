"use client";

import { modifyName } from "@/actions/modifyName";
import { toast } from "sonner";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRef } from "react";

export const NameForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={formRef}
      action={async (formData) => {
        const name = formData.get("name");
        if (typeof name !== "string") {
          throw new Error("Name is not a string");
        }
        try {
          await modifyName("name");
          toast.success("Name modified");
          formRef.current?.reset();
        } catch (error) {
          console.error(error);
          toast.error("Failed to modify name");
        }
      }}
    >
      <Label htmlFor="name">Name:</Label>
      <Input id="name" name="name" type="text" />
      <Button type="submit">Submit</Button>
    </form>
  );
};
