describe('User Management Test Cases', function() {
    it('user can see status icon scroll up and down', function() {
      browser.get(browser.params.url);
      browser.waitForAngularEnabled(false);
    element(by.id("Username")).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh221");
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(30000);
    element(by.xpath('//*[@id="userId17"]')).click();
    browser.actions().mouseMove(element(by.id('default'))).perform();
    browser.driver.sleep(10000);
      var value = browser.executeScript("return $('.midContent.scrollbar').scrollTop(1000);");
   element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
  browser.driver.sleep(4000);
  element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[17]/a')).click();
  browser.driver.sleep(4000);
  
    });
   
  });