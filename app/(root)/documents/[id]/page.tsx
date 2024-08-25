import React from "react";
import { Editor } from "@/components/editor/Editor";
import Header from "@/components/Header";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import CollaborativeRoom from "@/components/CollaborativeRoom";
function DocumentPage() {
  return (
    <main className="flex items-center w-full flex-col">
      <CollaborativeRoom />
    </main>
  );
}

export default DocumentPage;
