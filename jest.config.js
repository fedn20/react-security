module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/reportWebVitals.ts"],
  coveragePathIgnorePatterns: ["src/index.tsx", "src/reportWebVitals.ts"],
  coverageReporters: ["json", "text", "html", "lcov"],
};
