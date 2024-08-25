"use server";

import { title } from "process";
import { metadata } from "./../../app/layout";
import { nanoid } from "nanoid";
import liveblocks from "../liveblocks";
import { revalidatePath } from "next/cache";
import { parseStringify } from "../utils";
export const createDocument = async (userId: string, email: string) => {
  const roomId = nanoid();
  try {
    const metadata = {
      creatorId: userId,
      email: email,
      title: "Untitled",
    };
    const userAccess: RoomAccesses = {
      [email]: ["room:write"],
    };
    const room = await liveblocks.createRoom(roomId, {
      metadata: metadata,
      defaultAccesses: [],
      usersAccesses: userAccess,
    });
    revalidatePath("/");
    return parseStringify(room);
  } catch (error) {
    console.log(`Error creating document: ${error}`);
  }
};
