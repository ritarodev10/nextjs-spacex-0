import { launchRepository } from "@/domain/repositories/launch.repository";
import styles from "./page.module.scss"; // Ensure styles are imported
import { RevalidationInfo } from "@/presentation/components/RevalidationInfo";

export const revalidate = 900; // revalidate at most every 15 minutes

export default async function Page() {
  const launch = await launchRepository.getLatestLaunch();

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to the Homepage</h1>
        <p className={styles.paragraph}>
          This is a generic homepage with some information about SpaceX&apos;s
          latest launch.
        </p>

        <h2 className={styles.subtitle}>Latest SpaceX Launch</h2>
        {launch ? (
          <div key={launch.id} className={styles.launchDetails}>
            <h3 className={styles.subheading}>{launch.missionName}</h3>
            <p className={styles.paragraph}>{launch.details}</p>
            <p className={styles.paragraph}>
              <strong>Date:</strong>{" "}
              {new Date(launch.launchDateUtc).toLocaleDateString()}
            </p>
            {launch.videoLink && (
              <a
                href={launch.videoLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.launchDetailsLink}
              >
                Watch the launch
              </a>
            )}
          </div>
        ) : (
          <p className={styles.paragraph}>Loading latest launch...</p>
        )}
        <RevalidationInfo revalidationInterval={revalidate} />
      </div>
    </div>
  );
}
