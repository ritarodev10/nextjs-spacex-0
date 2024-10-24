import { from, HttpLink } from "@apollo/client";
import {
  ApolloClient,
  InMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support";
import { getEnv } from "./getEnv";

const { GRAPHQL_URI } = getEnv();

const httpLink = new HttpLink({
  uri: GRAPHQL_URI,
  fetchOptions: {
    next: { revalidate: 15 * 60 },
  },
});

const client = new ApolloClient({
  link:
    typeof window === "undefined"
      ? from([
          new SSRMultipartLink({
            stripDefer: true,
          }),
          httpLink,
        ])
      : from([httpLink]),

  cache: new InMemoryCache(),
});

export default client;
