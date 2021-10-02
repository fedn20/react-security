module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
      "src/**/*.{js,jsx}",
      "!src/reportWebVitals.js",
    ],
    coveragePathIgnorePatterns: ["src/index.js", "src/reportWebVitals.js"],
    coverageReporters: ["json", "text", "html", "lcov"],
  };