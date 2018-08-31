exports.Login= function () {
    browser.get(browser.params.url);
    browser.waitForAngularEnabled(false);
  element(by.id("Username")).sendKeys("raheem");
  element(by.id("Password")).sendKeys("raheem");
  element(by.buttonText("Sign In")).click();
  browser.driver.sleep(10000);
  element(by.linkText(browser.params.userid)).click();
  browser.driver.sleep(10000);
};
exports.Logout = function () {
    element(by.className('fa fa-user-circle dropdown-toggle font3x cur')).click();
    browser.driver.sleep(4000);
    element(by.linkText('Signout from AAIL')).click();
    browser.driver.sleep(4000);
};