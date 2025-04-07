import {LOGGER_LEVEL_ENUM} from "@/logger";
import {APP_ENV_ENUM} from "@/types";
import {CommonConfig} from "../types";

const {LOG_LEVEL = LOGGER_LEVEL_ENUM.INFO, APP_ENV = APP_ENV_ENUM.TEST, PORT = "8888", SERVICE_NAME} = process.env;

//* Validate required environment variables
if (!SERVICE_NAME) {
  console.log(process.env);
  //throw new Error("No 'SERVICE_NAME' env variable provided");
}

//* Create the common config object
export const commonConfig: CommonConfig = {
  logLevel: LOG_LEVEL as LOGGER_LEVEL_ENUM,
  env: APP_ENV as APP_ENV_ENUM,
  port: parseInt(PORT),
  serviceName: SERVICE_NAME ?? ""
};
