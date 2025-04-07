export enum LOGGER_LEVEL_ENUM {
  ERROR = "ERROR",
  WARN = "WARN",
  INFO = "INFO",
  DEBUG = "DEBUG"
}

export interface ILoggerConfig {
  level: string;
  isGcpEnv: boolean;
  logName: string;
}

export type LogMeta = Record<string, string | number | boolean | null | undefined>;
