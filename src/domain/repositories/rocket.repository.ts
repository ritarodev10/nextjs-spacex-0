import client from "@/lib/apolloClient";
import { GET_ROCKET } from "@/infrastructure/graphql";
import {
  GetRocketQuery,
  GetRocketQueryVariables,
} from "@/__generated__/graphql";
import { rocketMapper } from "../mappers/rocket.mapper";
import { Rocket } from "../entities/rocket.entity";

export const rocketRepository = {
  getRocket: async (id: string): Promise<Rocket | null> => {
    const { data } = await client.query<
      GetRocketQuery,
      GetRocketQueryVariables
    >({
      query: GET_ROCKET,
      variables: { id },
    });
    return rocketMapper.mapRocket(data.rocket);
  },
};
