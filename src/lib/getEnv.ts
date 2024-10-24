import z from "zod";

const envSchema = z.object({
  GRAPHQL_URI: z
    .string()
    .url()
    .default("https://spacex-production.up.railway.app/"),
});

export const getEnv = () => {
  return envSchema.parse(process.env);
};
