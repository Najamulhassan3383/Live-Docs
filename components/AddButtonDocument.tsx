"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { createDocument } from "@/lib/actions/room.actions";
import { useRouter } from "next/navigation";

function AddButtonDocument({ userId, email }: AddDocumentBtnProps) {
  const router = useRouter();
  const addDocument = async () => {
    try {
      const room = await createDocument(userId, email);
      if (room) {
        router.push(`/documents/${room.id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button
      type="submit"
      className="gradient-blue flex gap-1 shadow-md"
      onClick={addDocument}
    >
      <Image src="/assets/icons/add.svg" alt="Add" width={24} height={24} />
      <p className="hidden sm:block">Start a new document</p>
    </Button>
  );
}

export default AddButtonDocument;
