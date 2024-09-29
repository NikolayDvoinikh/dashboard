import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: "https://correct-parakeet-24319.upstash.io",
  token: process.env.REDIS_KEY!,
});
