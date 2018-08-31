//1) Send text message in one-to-one chat
describe('one-to-one chat cases', function() {
    it(' Do not get typing notifications', function() {
      browser.get(browser.params.url);
      browser.waitForAngularEnabled(false);
    element(by.id("Username")).sendKeys("jameelTesting1");
    element(by.id("Password")).sendKeys("Sha03");
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(20000);
    element(by.id(browser.params.userid)).click();
    browser.driver.sleep(10000);
   element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
  browser.driver.sleep(4000);
  element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[17]/a')).click();
  browser.driver.sleep(4000);
    }); 
  });
