import React from "react";
import styles from "./RevalidationInfo.module.scss";

interface RevalidationInfoProps {
  revalidationInterval: number;
}

export const RevalidationInfo: React.FC<RevalidationInfoProps> = ({
  revalidationInterval,
}) => {
  const lastRevalidationTime = new Date().toISOString();

  const revalidationIntervalInMinutes = revalidationInterval / 60;
  return (
    <div className={styles.revalidationInfo}>
      <p>
        Last revalidation: {new Date(lastRevalidationTime).toLocaleString()}
      </p>
      <p>This page revalidates every {revalidationIntervalInMinutes} minutes</p>
    </div>
  );
};
