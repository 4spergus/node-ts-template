import {APP_CONFIG_ENTRY_ENUM} from "./constants";
import {commonConfig} from "./entries";
import {AppConfig} from "./types";

const config: AppConfig = {
  [APP_CONFIG_ENTRY_ENUM.COMMON]: commonConfig
};

/**
 * Get configuration values by key
 * @param key - The configuration key to retrieve
 * @returns The configuration object for the specified key
 */
export function getConfig<T extends APP_CONFIG_ENTRY_ENUM>(key: T): AppConfig[T] {
  return config[key];
}
