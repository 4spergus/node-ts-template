import {LOGGER_NAME_ENUM} from "./constants";
import {LogMeta} from "./types";

export abstract class BaseLogger<T = LOGGER_NAME_ENUM> {
  abstract error(message: string | Record<string, unknown>, meta?: LogMeta): void;
  abstract warn(message: string | Record<string, unknown>, meta?: LogMeta): void;
  abstract info(message: string | Record<string, unknown>, meta?: LogMeta): void;
  abstract debug(message: string | Record<string, unknown>, meta?: LogMeta): void;

  protected formatMessage(
    logLevel: string,
    name: T,
    message: string | Record<string, unknown>,
    meta?: LogMeta
  ): string {
    const timestamp = new Date().toISOString();

    return `${timestamp} [${logLevel}] [${name}] ${JSON.stringify(message)} ${meta ? JSON.stringify(meta) : ""}`;
  }
}
