let actionKey = require("../CommonActions/KeywordFunctions");

let featureLabel = by.xpath('//*[text()="Features"]');
let featureTitle = by.css("#features--benefits");

let openApplication = () => {
  //browser.waitForAngularEnabled(false);
  browser.get(browser.baseUrl);
  browser.driver.manage().window().maximize();
};

let clickOnlabel = () => {
  actionKey.clickOnElement(featureLabel);
  //element(featureLabel).click();
  browser.sleep(3000);
};

let getPageTitle = () => {
  return browser.getTitle();
};

let getTextOfFeature = () => {
  return actionKey.getTextOfElement(featureTitle);
};

module.exports = {
  clickOnlabel,
  openApplication,
  getPageTitle,
  getTextOfFeature,
};
