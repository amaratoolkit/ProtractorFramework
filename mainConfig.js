var HtmlReporter = require("protractor-beautiful-reporter");

exports.config = {
  framework: "jasmine2",
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 3000000,
    print: function () {},
  },
  seleniumAddress: "http://localhost:4444/wd/hub",
  directConnect: true,
  browserName: "chrome",
  allScriptsTimeout: 2500000,
  defaultTimeoutInterval: 3000000,
  chromeOptions: ["--disable-browser-side-navigation"],
  baseUrl: "https://angular.io/start",

  //specs: ["./TestScripts/home-spec.js", "./TestScripts/hero-spec.js"],
  specs: ["./TestScripts/hero-spec.js"],

  onPrepare: function () {
    var AllureReporter = require("jasmine-allure-reporter");
    jasmine.getEnv().addReporter(
      new AllureReporter({
        resultsDir: "/Users/sivareddyk/Documents/ProractorFramework/Report",
      })
    );

    jasmine.getEnv().afterEach(function (done) {
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment(
          "Screenshot",
          function () {
            return new Buffer(png, "base64");
          },
          "image/png"
        )();
        done();
      });
    });
  },
};
