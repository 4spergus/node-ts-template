module.exports = {
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest"
  },
  testEnvironment: "node",
  testMatch: ["**/_tests_/**/*.ts"],
  testPathIgnorePatterns: ["/node_modules/", "\\.d\\.ts$"],
  collectCoverage: false,
  collectCoverageFrom: ["src/**/*.ts", "!src/**/*.d.ts", "!src/**/index.ts"],
  coverageDirectory: "<rootDir>/.reports",
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  },
  coverageReporters: ["json", "lcov", "text", "clover", "html"],
  roots: ["<rootDir>"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  }
};
