export interface Launch {
  id: string;
  missionName: string;
  launchDateUtc: string;
  launchDateLocal?: string;
  launchDateUnix?: number;
  rocketName?: string;
  rocketId?: string;
  missionPatchUrl?: string;
  videoLink?: string;
  details?: string;
  launchSuccess?: boolean;
  launchSite?: LaunchSite;
  isTentative?: boolean;
  launchYear?: string;
  missionId?: string[];
  upcoming?: boolean;
  tentativeMaxPrecision?: string;
  staticFireDateUtc?: string;
  staticFireDateUnix?: number;
}

export interface LaunchSite {
  siteId: string;
  siteName: string;
  siteNameLong: string;
}
