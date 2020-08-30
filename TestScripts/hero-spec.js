let heroPage = require("../Pages/hero-po");

const fs = require("fs");
let homePagedata = fs.readFileSync("./TestData/testData.json");
let homePageInfo = JSON.parse(homePagedata);

let featureTitle = homePageInfo["homePage"]["dragAndDrop"];

//describe("Before Suite", () => {});

describe("Hero Pgae", () => {
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

  it("Verify Hero Page", async () => {
    await heroPage.openApplication();
    //homePage.clickOnlabel();
    expect(heroPage.getPageTitle()).toEqual("The Internet");
  });

  xit("Verify Drag and Drop Page", async () => {
    await heroPage.clickOnlabel();
    expect(heroPage.getTextOfFeature()).toEqual(featureTitle);
    await heroPage.dragAndDropInWebPage();
  });

  it("Verify Drop Down Page", async () => {
    await heroPage.selectElementFromDropDown();
    await browser.sleep(10000);
  });
});
