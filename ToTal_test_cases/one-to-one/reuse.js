exports.Login= function () {
    browser.get(browser.params.url);
    browser.waitForAngularEnabled(false);
  element(by.id("Username")).sendKeys("jameelTesting1");
  element(by.id("Password")).sendKeys("Sha03");
  element(by.buttonText("Sign In")).click();
  browser.driver.sleep(20000);
  element(by.xpath('//*[@id="leftscroll"]/ul[4]/li[110]/div/a')).click();
  browser.driver.sleep(10000);
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
  element(by.id("Username")).sendKeys("roja");
  element(by.id("Password")).sendKeys("roja");
  element(by.buttonText("Sign In")).click();
  browser.driver.sleep(50000);
  element(by.id(browser.params.testuserid)).click();
  browser.driver.sleep(30000);
};
exports.TestLogout = function () {
    element(by.className('fa fa-user-circle dropdown-toggle font3x cur')).click();
    browser.driver.sleep(4000);
    element(by.linkText('Signout from AAIL')).click();
    browser.driver.sleep(4000);
};