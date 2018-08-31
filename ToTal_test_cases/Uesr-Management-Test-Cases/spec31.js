describe('User Management Test Cases', function() {
    it('user status red color ', function() {
      browser.get(browser.params.url);
      browser.waitForAngularEnabled(false);
    element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh221");
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(30000);
    element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
    browser.driver.sleep(10000);
    element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[3]/a')).click();
    browser.driver.sleep(10000);
element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
browser.driver.sleep(10000);
   element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[1]/a')).click();
     browser.driver.sleep(10000);
    
    });

    });