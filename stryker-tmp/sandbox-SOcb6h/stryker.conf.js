/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
// @ts-nocheck

module.exports = {
  mutate: ["src/**/*.js"],
  testRunner: "jest",
  jest: {
    projectType: "custom",
    config: require("./jest.config.js"),
  },
  reporters: ["html", "clear-text", "progress"],
  coverageAnalysis: "off",
  tempDirName: "stryker-tmp",
};
