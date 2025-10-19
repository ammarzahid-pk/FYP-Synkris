"use client";

import { toast } from "sonner";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";

import { FullscreenLoader } from "@/components/fullscreen-loader";

import { getUsers } from "./actions";

type User = { id: string; name: string; avatar: string };

export function Room({ children }: { children: ReactNode }) {
    const params = useParams();

    const [users, setUsers] = useState<User[]>([]);

    const fetchUsers = useMemo(
      () => async () => {
        try {
          const list = await getUsers();
          console.log('Fetched user list in room.tsx:', list);  // Debug: Browser console mein check karo
          setUsers(list || []);
        } catch (error) {
          console.error('Fetch users error:', error);
          toast.error("Failed to fetch users");  // Typo fix
        }
      },
      [],
    );

    useEffect(() => {
      fetchUsers();
    }, [fetchUsers]);

  return (
    <LiveblocksProvider 
      throttle={16}
      authEndpoint="/api/liveblocks-auth"
      resolveUsers={({ userIds }) => {
        // Debug logs
        console.log('Resolving users for IDs:', userIds);
        console.log('Available users in state:', users);

        // Order maintain karo userIds ke hisab se – sirf info objects return (no id/info wrapper)
        const resolved = userIds.map((userId) => {
          const user = users.find((u) => u.id === userId);
          if (!user) {
            console.warn(`No user found for ID: ${userId} – fallback to anonymous`);
            return { name: "Anonymous", avatar: "" };  // Fallback object (optional, undefined bhi chal sakta)
          }
          return {
            name: user.name,  // Direct name/avatar – yeh UserMeta["info"] match karta hai
            avatar: user.avatar,
          };
        });

        console.log('Final resolved users:', resolved);
        return resolved;
      }}
      resolveMentionSuggestions={({ text }) => {
        // Debug log
        console.log('Suggestions called with text:', text);

        let filteredUsers = users;

        if (text) {
          filteredUsers = users.filter((user) =>
            user.name.toLowerCase().includes(text.toLowerCase())
          );
        } else {
          // Agar text empty, sab users return karo (docs ke mutabiq)
          filteredUsers = users;
        }

        // Sirf IDs return karo (strings array) – yeh key fix hai!
        return filteredUsers.map((user) => user.id);
      }}
      resolveRoomsInfo={() => []}
    >
      <RoomProvider id={params.documentId as string}>
        <ClientSideSuspense fallback={<FullscreenLoader label="Room Loading..." />}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}