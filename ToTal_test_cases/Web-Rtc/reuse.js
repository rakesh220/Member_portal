exports.Login= function () {
    browser.get(browser.params.url);
    browser.waitForAngularEnabled(false);
  element(by.name("user")).sendKeys("rakesh");
  element(by.name("pwd")).sendKeys("rakesh");
  element(by.buttonText("Sign In")).click();
  browser.driver.sleep(40000);
  element(by.id('userId61')).click();
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
  element(by.id("Username")).sendKeys("rakesh");
  element(by.id("Password")).sendKeys("rakesh220");
  element(by.buttonText("Sign In")).click();
  browser.driver.sleep(30000);
  element(by.xpath('//*[@id="leftscroll"]/ul[4]/li[115]/div/a')).click();
  browser.driver.sleep(800000);
};
exports.TestLogout = function () {
    element(by.className('fa fa-user-circle dropdown-toggle font3x cur')).click();
    browser.driver.sleep(4000);
    element(by.linkText('Signout from AAIL')).click();
    browser.driver.sleep(4000);
};
