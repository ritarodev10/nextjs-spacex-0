import { gql } from "@/__generated__";

export const LATEST_LAUNCH_QUERY = gql(`
  query LatestLaunch {
    launchLatest {
      id
      mission_name
      details
      launch_date_utc
      links {
        video_link
      }
    }
  }
`);

export const GET_LAUNCHES = gql(`
  query GetLaunches {
    launches {
      id
      mission_name
      launch_date_utc
      rocket {
        rocket_name
      }
      links {
        mission_patch
        video_link
      }
    }
  }
`);

export const GET_LAUNCH_DETAIL = gql(`
  query GetLaunchDetail($id: ID!) {
    launch(id: $id) {
      mission_name
      launch_date_utc
      rocket {
        rocket {
          id
        }
      }
      links {
        mission_patch
        video_link
      }
      details
      id
      is_tentative
      launch_date_local
      launch_date_unix
      launch_site {
        site_id
        site_name
        site_name_long
      }
      launch_success
      launch_year
      mission_id
      upcoming
      tentative_max_precision
      static_fire_date_utc
      static_fire_date_unix
    }
  }
`);
