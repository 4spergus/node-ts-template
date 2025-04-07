import {LOGGER_NAME_ENUM, getLogger} from "@/logger";
import dotenv from "dotenv";

const logger = getLogger(LOGGER_NAME_ENUM.CONFIG);

//* Load environment variables
const initResult = dotenv.config();

if (initResult.error) {
  logger.error(JSON.stringify({message: "Error loading .env file: ", error: initResult.error}));
}
