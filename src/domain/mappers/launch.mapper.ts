import { Launch } from "../entities/launch.entity";
import {
  LatestLaunchQuery,
  GetLaunchesQuery,
  GetLaunchDetailQuery,
} from "@/__generated__/graphql";

export const launchMapper = {
  mapLatestLaunch: (data: LatestLaunchQuery["launchLatest"]): Launch | null => {
    if (!data) return null;
    return {
      id: data.id || "",
      missionName: data.mission_name || "",
      launchDateUtc: data.launch_date_utc || "",
      rocketName: "", // Not available in this query
      missionPatchUrl: undefined, // Not available in this query
      videoLink: data.links?.video_link || undefined,
      details: data.details || undefined,
    };
  },

  mapLaunches: (data: GetLaunchesQuery["launches"]): Launch[] => {
    return (
      data
        ?.filter((launch): launch is NonNullable<typeof launch> => !!launch)
        .map((launch) => ({
          id: launch.id || "",
          missionName: launch.mission_name || "",
          launchDateUtc: launch.launch_date_utc || "",
          rocketName: launch.rocket?.rocket_name || "",
          missionPatchUrl: launch.links?.mission_patch || undefined,
          videoLink: launch.links?.video_link || undefined,
        })) || []
    );
  },

  mapLaunchDetail: (data: GetLaunchDetailQuery["launch"]): Launch | null => {
    if (!data) return null;
    return {
      id: data.id || "",
      missionName: data.mission_name || "",
      launchDateUtc: data.launch_date_utc || "",
      rocketId: data.rocket?.rocket?.id || "",
      missionPatchUrl: data.links?.mission_patch || undefined,
      videoLink: data.links?.video_link || undefined,
      details: data.details || undefined,
      launchSuccess: data.launch_success || undefined,
      launchSite: data.launch_site
        ? {
            siteId: data.launch_site.site_id || "",
            siteName: data.launch_site.site_name || "",
            siteNameLong: data.launch_site.site_name_long || "",
          }
        : undefined,
    };
  },
};
