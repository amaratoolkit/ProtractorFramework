let homePage = require("../Pages/home-po");

const fs = require("fs");
let homePagedata = fs.readFileSync("./TestData/testData.json");
let homePageInfo = JSON.parse(homePagedata);

let featureTitle = homePageInfo["homePage"]["featureLabel"];

describe("Home Pgae", () => {
  beforeEach(() => {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 250000;
  });

  afterEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  beforeAll(() => {
    const path = require("path");
    const directory = "/Users/sivareddyk/Documents/ProractorFramework/Report";
    fs.readdir(directory, (err, files) => {
      if (err) throw err;
      for (const file of files) {
        fs.unlink(path.join(directory, file), (err) => {
          if (err) throw err;
        });
      }
    });
  });

  it("Verify Home Page", () => {
    homePage.openApplication();
    //homePage.clickOnlabel();
    expect(homePage.getPageTitle()).toEqual(
      "Angular - Part 1: Getting started with a basic Angular app"
    );
  });

  it("Verify Features Page", () => {
    //homePage.openApplication();
    homePage.clickOnlabel();
    expect(homePage.getTextOfFeature()).toEqual(featureTitle);
  });
});
