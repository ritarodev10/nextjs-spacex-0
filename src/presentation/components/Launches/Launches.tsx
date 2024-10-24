import { launchRepository } from "@/domain/repositories/launch.repository";
import styles from "./Launches.module.scss";
import Image from "next/image";

export const Launches = async () => {
  const launches = await launchRepository.getLaunches();

  if (!launches) {
    return <div>No launches found</div>;
  }

  return (
    <div className={styles.launchesContainer}>
      {launches
        .filter((launch): launch is NonNullable<typeof launch> =>
          Boolean(launch)
        )
        .map((launch) => (
          <div key={launch.id} className={styles.launchCard}>
            {launch.missionPatchUrl && (
              <Image
                src={launch.missionPatchUrl}
                alt={`${launch.missionName} mission patch`}
                className={styles.missionPatch}
              />
            )}
            <h3 className={styles.launchTitle}>{launch.missionName}</h3>
            <p className={styles.launchDate}>
              {new Date(launch.launchDateUtc).toLocaleDateString()}
            </p>
            <p className={styles.rocketName}>{launch.rocketName}</p>
            <div className={styles.linksContainer}>
              {launch.videoLink && (
                <a
                  href={launch.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Watch Launch
                </a>
              )}
              <a href={`/launches/${launch.id}`} className={styles.link}>
                View Details
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};
