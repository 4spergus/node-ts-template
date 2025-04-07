import {LOGGER_LEVEL_ENUM} from "@/logger";
import {APP_ENV_ENUM} from "@/types";
import {APP_CONFIG_ENTRY_ENUM} from "./constants";

export type CommonConfig = {
  logLevel: LOGGER_LEVEL_ENUM;
  env: APP_ENV_ENUM;
  port: number;
  serviceName: string;
};

export type AppConfig = {
  [APP_CONFIG_ENTRY_ENUM.COMMON]: CommonConfig;
};
