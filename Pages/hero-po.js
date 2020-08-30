let actionKey = require("../CommonActions/KeywordFunctions");

let dragAndDropLink = by.xpath('//*[text()="Drag and Drop"]');
let featureTitle = by.xpath("//h3");
let boxa = by.xpath('//*[@id="cloumna"]');
let boxb = by.xpath('//*[@id="cloumnb"]');
let dropDownLink = by.xpath('//*[text()="Dropdown"]');
let dropDownList = by.css("#dropdown");
let listOptions = by.css("#dropdown > option");

let openApplication = async () => {
  await browser.waitForAngularEnabled(false);
  await browser.get("http://the-internet.herokuapp.com/");
  await browser.driver.manage().window().maximize();
};

let clickOnlabel = async () => {
  actionKey.clickOnElement(dragAndDropLink);
  await browser.sleep(3000);
};

let getPageTitle = async () => {
  return await browser.getTitle();
};

let getTextOfFeature = async () => {
  return await actionKey.getTextOfElement(featureTitle);
};

let dragAndDropInWebPage = async () => {
  //await actions.dragAndDrop(boxa, boxb);
  await browser.sleep(5000);

  //await browser.actions().dragAndDrop(boxa, boxb).perform();
  //browser.actions().mouseDown(boxa).mouseMove(boxb).mouseUp().perform();

  await browser.actions().mouseDown(boxa).mouseMove(boxb).mouseUp().perform();

  await browser.sleep(30000);
};

let selectElementFromDropDown = async () => {
  await actionKey.clickOnElement(dropDownLink).then(() => {
    element
      .all(listOptions)
      .count()
      .then((total) => {
        console.log(total);
      });
  });
  // let totalOptions = element.all(listOptions).count();
  // await element
  //   .all(listOptions)
  //   .count()
  //   .then(() => {
  //     console.log("totalOptions=======" + totalOptions);
  //   });

  let totalOptions = await element.all(listOptions).count();
  console.log("total options =======" + totalOptions);

  let optionsValue = await element.all(listOptions).getAttribute("value");
  console.log("all options======" + optionsValue);
  
  await actionKey.selectTextFromDropDown("#dropdown > option", "Option 1");
};

module.exports = {
  clickOnlabel,
  openApplication,
  getPageTitle,
  getTextOfFeature,
  dragAndDropInWebPage,
  selectElementFromDropDown,
};
