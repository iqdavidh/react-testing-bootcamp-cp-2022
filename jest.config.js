

// Add any custom config to be passed to Jest
const customJestConfig = {

  coverageThreshold: {
    global: {
      lines: 80,
    },
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = customJestConfig;
