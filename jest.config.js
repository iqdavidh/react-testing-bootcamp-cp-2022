

// Add any custom config to be passed to Jest
const customJestConfig = {

  coverageThreshold: {
    global: {
      lines: 80,
    },
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  
  moduleNameMapper:{
    "\\.(css|less|sass|scss)$": "<rootDir>/src/CssModuleForJest.js",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/src/CssModuleForJest"
  }
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = customJestConfig;
