describe('User Management Test Cases', function() {
    it('user can see contact list scroll up and down', function() {
      browser.get(browser.params.url);
      browser.waitForAngularEnabled(false);
    element(by.id("Username")).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh221");
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(30000);
    browser.actions().mouseMove(element(by.id('leftscroll'))).perform();
    browser.driver.sleep(10000);
      var value = browser.executeScript("return $('.col-md-3.col-lg-2.leftBar.scrollbar.hidden-sm.hidden-xs').scrollTop(1000);");
   element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
  browser.driver.sleep(4000);
  element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[17]/a')).click();
  browser.driver.sleep(4000);
  
    });
   
  });
