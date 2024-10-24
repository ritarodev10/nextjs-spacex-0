import { Launches } from "@/presentation/components/Launches";
import { RevalidationInfo } from "@/presentation/components/RevalidationInfo";
import React from "react";

export const revalidate = 900; // revalidate at most every 15 minutes

export default function LaunchesPage() {
  return (
    <>
      <RevalidationInfo revalidationInterval={revalidate} />
      <Launches />
    </>
  );
}
