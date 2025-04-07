import {BaseLogger} from "./base-logger";
import {LOGGER_NAME_ENUM} from "./constants";
import {LOGGER_LEVEL_ENUM, LogMeta} from "./types";

class Logger extends BaseLogger {
  private readonly _name: LOGGER_NAME_ENUM;

  constructor(name: LOGGER_NAME_ENUM) {
    super();
    this._name = name;
  }

  error(message: string | Record<string, unknown>, meta?: LogMeta): void {
    console.error(this.formatMessage(LOGGER_LEVEL_ENUM.ERROR, this._name, message, meta));
  }
  warn(message: string | Record<string, unknown>, meta?: LogMeta): void {
    console.warn(this.formatMessage(LOGGER_LEVEL_ENUM.WARN, this._name, message, meta));
  }
  info(message: string | Record<string, unknown>, meta?: LogMeta): void {
    console.info(this.formatMessage(LOGGER_LEVEL_ENUM.INFO, this._name, message, meta));
  }
  debug(message: string | Record<string, unknown>, meta?: LogMeta): void {
    console.debug(this.formatMessage(LOGGER_LEVEL_ENUM.DEBUG, this._name, message, meta));
  }
}

export const getLogger = (name: LOGGER_NAME_ENUM) => new Logger(name);
