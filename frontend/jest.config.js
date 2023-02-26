// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleDirectories: ["node_modules", "<rootDir>/", "src"],
  transform: {
    // Use babel-jest to transpile tests with the below presets
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    "^.+\\.(js|jsx|ts|tsx)$": [
      "babel-jest",
      {
        presets: [
          "@babel/preset-env",
          [
            "@babel/preset-react",
            {
              runtime: "automatic",
            },
          ],
        ],
      },
    ],
  },
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^uuid$": require.resolve("uuid"),
    "^@fontsource/roboto$": "identity-obj-proxy",
    "\\.(css)$": "identity-obj-proxy",
    "\\.(png|pdf|svg|jpg|jpeg)$": "<rootDir>/__tests__/__mocks__/fileMock.js",
  },
  testPathIgnorePatterns: ["<rootDir>/cypress/"],
};

module.exports = customJestConfig;
