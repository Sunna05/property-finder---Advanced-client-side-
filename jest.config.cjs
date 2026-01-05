module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  // Let Jest understand JSX/JS
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },

  // Handle CSS + image imports
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/test/__mocks__/fileMock.js",
  },

  testMatch: ["**/?(*.)+(test).[jt]s?(x)"],
};
