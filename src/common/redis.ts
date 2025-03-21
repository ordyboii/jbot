import Redis, { type RedisOptions } from "ioredis";
import { env } from "@common/env";

export const connection: RedisOptions = {
  host: env.REDIS_HOST,
  port: env.REDIS_PORT,
  password: env.REDIS_PASSWORD,
};

export const redis = new Redis(connection);
