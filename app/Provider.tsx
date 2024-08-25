"use client";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import Loader from "@/components/Loader";
function Provider({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {" "}
      <LiveblocksProvider authEndpoint={"/api/liveblocks-auth"}>
        <ClientSideSuspense fallback={<Loader />}>
          {children}
        </ClientSideSuspense>
      </LiveblocksProvider>
    </div>
  );
}

export default Provider;
