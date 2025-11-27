const configs = {
  preset: "jest-expo",
  setupFilesAfterEnv: [],
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native" +
      "|@react-native" +
      "|@react-navigation" +
      "|@react-native-async-storage" +
      "|expo" +
      "|@expo" +
      "|@expo/vector-icons" +
      "|expo-modules-core" +
      ")/",
  ],
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/android/", "/ios/"],
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/*.style.ts",
    "!src/**/style.ts",

  ],
};
export default configs;
