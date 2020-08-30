let EC = ExpectedConditions;

let clickOnElement = async (objElement) => {
  try {
    let condition = EC.elementToBeClickable(element(objElement));
    await browser.wait(condition, 30000);
    await browser.sleep(1000);
    await element(objElement).click();
  } catch (e) {
    e.message;
  }
};

let typeValue = async (objElement, value) => {
  try {
    let condition = EC.visibilityOf(element(objElement));
    await browser.wait(condition, 30000);
    await element(objElement).clear().sendKeys(value);
  } catch (e) {
    e.message;
  }
};

let switchToNewWindow = async (windowId) => {
  let winHandles = browser.getAllWindowHandles();
  await winHandles.then(function (handles) {
    var parentWindow = handles[0];
    var popUpWindow = handles[windowId];
    browser.switchTo().window(popUpWindow);
  });
};

let switchToParentWindow = async () => {
  let winHandles = browser.getAllWindowHandles();
  await winHandles.then(function (handles) {
    var parentWindow = handles[0];
    var popUpWindow = handles[1];
    browser.switchTo().window(parentWindow);
  });
};

//temp fix
async function switchToNewTab() {
  let winHandles = browser.getAllWindowHandles();
  await winHandles.then(function (handles) {
    var parentWindow = handles[0];
    var popUpWindow = handles[1];
    browser.switchTo().window(popUpWindow);
    //browser.switchTo().window(parentWindow);
  });
}

let selectTextFromDropDown = async (objElement, value) => {
  try {
    let condition = EC.visibilityOf(element(objElement));
    await browser.wait(condition, 30000);
    await element(by.cssContainingText(objElement, value)).click();
  } catch (e) {
    e.message;
  }
};

let waitForVisibilityOfElement = async (locator) => {
  const condition = EC.visibilityOf(element(locator));
  browser.wait(condition, 60000);
};

let waitForPresenceOfElement = async (locator) => {
  const condition = EC.presenceOf(element(locator));
  browser.wait(condition, 60000);
};

let waitForPageload = () => {
  browser.sleep(5000);
};

let getTextOfElement = async (objElement) => {
  try {
    let condition = EC.elementToBeClickable(element(objElement));
    await browser.wait(condition, 30000);
    return element(objElement).getText();
  } catch (e) {
    e.message;
  }
};

let dragAndDrop = async (sourceElement, destinationElement) => {
  await browser
    .actions()
    .mouseDown(sourceElement)
    .mouseMove(destinationElement)
    .mouseUp()
    .perform();
};

module.exports = {
  waitForVisibilityOfElement,
  waitForPresenceOfElement,
  waitForPageload,
  clickOnElement,
  switchToNewWindow,
  typeValue,
  selectTextFromDropDown,
  switchToNewTab,
  switchToParentWindow,
  getTextOfElement,
  dragAndDrop,
};
