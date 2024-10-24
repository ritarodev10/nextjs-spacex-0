"use client";

import React, { useState } from "react";
import { launchRepository } from "@/domain/repositories/launch.repository";
import { rocketRepository } from "@/domain/repositories/rocket.repository";
import styles from "./LaunchDetail.module.scss";
import Image from "next/image";

interface LaunchDetailProps {
  launch: Awaited<ReturnType<typeof launchRepository.getLaunchDetail>>;
}

export const LaunchDetail = async ({ launch }: LaunchDetailProps) => {
  const [rocketDetails, setRocketDetails] = useState<Awaited<
    ReturnType<typeof rocketRepository.getRocket>
  > | null>(null);

  const fetchRocketDetails = async () => {
    if (launch?.rocketId) {
      const rocket = await rocketRepository.getRocket(launch.rocketId);
      setRocketDetails(rocket);
    }
  };

  if (!launch) {
    return <div>Launch not found</div>;
  }

  return (
    <div className={styles.launchDetail}>
      <h1 className={styles.title}>{launch.missionName}</h1>
      <p className={styles.date}>
        Launch Date: {new Date(launch.launchDateUtc).toLocaleDateString()}
      </p>
      {launch.missionPatchUrl && (
        <Image
          src={launch.missionPatchUrl}
          alt="Mission Patch"
          className={styles.missionPatch}
        />
      )}
      <p className={styles.details}>{launch.details}</p>
      <div className={styles.launchInfo}>
        <p>Launch Success: {launch.launchSuccess ? "Yes" : "No"}</p>
        <p>Launch Site: {launch.launchSite?.siteNameLong}</p>
      </div>
      {launch.videoLink && (
        <a
          href={launch.videoLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.videoLink}
        >
          Watch Launch Video
        </a>
      )}
      <button onClick={fetchRocketDetails} className={styles.rocketButton}>
        Show Rocket Details
      </button>
      {rocketDetails && (
        <div className={styles.rocketDetails}>
          <h2>Rocket: {rocketDetails.name}</h2>
          <p>Type: {rocketDetails.type}</p>
          <p>Company: {rocketDetails.company}</p>
          <p>First Flight: {rocketDetails.firstFlight}</p>
          <p>Description: {rocketDetails.description}</p>
        </div>
      )}
    </div>
  );
};
