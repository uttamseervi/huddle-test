"use client";

import { HuddleClient, HuddleProvider as Huddle01Provider } from "@huddle01/react";
import { ReactNode } from "react";

const huddleClient = new HuddleClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
  options: {
    activeSpeakers: {
      size: 12,
    },
  },
});

export function HuddleProvider({ children }: { children: ReactNode }) {
  return <Huddle01Provider client={huddleClient}>{children}</Huddle01Provider>;
}
