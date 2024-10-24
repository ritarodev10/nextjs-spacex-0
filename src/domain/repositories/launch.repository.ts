import client from "@/lib/apolloClient";
import {
  LATEST_LAUNCH_QUERY,
  GET_LAUNCHES,
  GET_LAUNCH_DETAIL,
} from "@/domain/graphql";
import {
  LatestLaunchQuery,
  GetLaunchesQuery,
  GetLaunchDetailQuery,
  LatestLaunchQueryVariables,
  GetLaunchesQueryVariables,
  GetLaunchDetailQueryVariables,
} from "@/__generated__/graphql";
import { launchMapper } from "../mappers/launch.mapper";
import { Launch } from "../entities/launch.entity";

export const launchRepository = {
  getLatestLaunch: async (): Promise<Launch | null> => {
    const { data } = await client.query<
      LatestLaunchQuery,
      LatestLaunchQueryVariables
    >({
      query: LATEST_LAUNCH_QUERY,
    });
    return launchMapper.mapLatestLaunch(data.launchLatest);
  },

  getLaunches: async (): Promise<Launch[]> => {
    const { data } = await client.query<
      GetLaunchesQuery,
      GetLaunchesQueryVariables
    >({
      query: GET_LAUNCHES,
    });
    return launchMapper.mapLaunches(data.launches);
  },

  getLaunchDetail: async (id: string): Promise<Launch | null> => {
    const { data } = await client.query<
      GetLaunchDetailQuery,
      GetLaunchDetailQueryVariables
    >({
      query: GET_LAUNCH_DETAIL,
      variables: { id },
    });
    return launchMapper.mapLaunchDetail(data.launch);
  },
};
