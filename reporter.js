const reporter = require("cucumber-html-reporter");

var options = {
  theme: "bootstrap",
  jsonFile: "./reports/cucumber_report.json", // Path to the generated JSON report
  output: "./reports/cucumber_report.html", // Output file location
  reportSuiteAsScenarios: true,
  launchReport: true
};

reporter.generate(options);
