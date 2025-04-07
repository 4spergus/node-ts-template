import "@/config/load-env";
import {getLogger} from "@/logger";
import {LOGGER_NAME_ENUM} from "@/logger/constants";
import {API_VERSION_ENUM} from "@/types";
import express from "express";
import {ROUTER} from "../api/v1";
import {APP_CONFIG_ENTRY_ENUM, getConfig} from "../config";

const logger = getLogger(LOGGER_NAME_ENUM.SERVER);
const {port} = getConfig(APP_CONFIG_ENTRY_ENUM.COMMON);

export const createServer = () => {
  const app = express();

  //* Add routes
  app.use(API_VERSION_ENUM.V1, ROUTER);

  return {
    start: () =>
      app.listen(port, () => {
        logger.info(JSON.stringify({port, message: "Server successfully started"}));
      })
  };
};
