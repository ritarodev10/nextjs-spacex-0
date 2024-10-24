import { Launches } from "@/presentation/components/Launches";
import { RevalidationInfo } from "@/presentation/components/RevalidationInfo";
import React from "react";

export const revalidate = 15 * 60;

export default function LaunchesPage() {
  return (
    <>
      <RevalidationInfo revalidationInterval={revalidate} />
      <Launches />
    </>
  );
}
