exports.Login= function () {
    browser.get(browser.params.url);
    browser.waitForAngularEnabled(false);
  element(by.id("Username")).sendKeys("rakesh");
  element(by.id("Password")).sendKeys("rakesh");
  element(by.buttonText("Sign In")).click();
  browser.driver.sleep(20000);
  browser.actions().mouseMove(element(by.id('leftscroll'))).perform();
  browser.driver.sleep(10000);
    var value = browser.executeScript("return $('.col-md-3.col-lg-2.leftBar.scrollbar.hidden-sm.hidden-xs').scrollTop(1000);");
    browser.driver.sleep(5000);
  element(by.id('userIdrakesh')).click();
  browser.driver.sleep(20000);
};
exports.Logout = function () {
    element(by.className('fa fa-user-circle dropdown-toggle font3x cur')).click();
    browser.driver.sleep(4000);
    element(by.linkText('Signout from AAIL')).click();
    browser.driver.sleep(4000);
};
exports.TestLogin= function () {
    browser.get(browser.params.url);
    browser.waitForAngularEnabled(false);
  element(by.id("Username")).sendKeys("raheem");
  element(by.id("Password")).sendKeys("raheem");
  element(by.buttonText("Sign In")).click();
  browser.driver.sleep(20000);
  browser.actions().mouseMove(element(by.id('leftscroll'))).perform();
  browser.driver.sleep(10000);
    var value = browser.executeScript("return $('.col-md-3.col-lg-2.leftBar.scrollbar.hidden-sm.hidden-xs').scrollTop(1000);");
    browser.driver.sleep(5000);
  element(by.id('userIdraheem')).click();
  browser.driver.sleep(20000);
};
exports.TestLogout = function () {
    element(by.className('fa fa-user-circle dropdown-toggle font3x cur')).click();
    browser.driver.sleep(4000);
    element(by.linkText('Signout from AAIL')).click();
    browser.driver.sleep(4000);
};