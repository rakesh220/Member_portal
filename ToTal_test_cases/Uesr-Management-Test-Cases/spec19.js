describe('User Management Test Cases', function() {
    it('User can search for other users in the current organization.', function() {
     browser.get(browser.params.url);
      browser.waitForAngularEnabled(false);
    element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh221"); 
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(30000);
    element(by.xpath('//*[@id="leftscroll"]/h4[3]/span[2]/a/i')).click();
    browser.driver.sleep(10000);
element(by.xpath('//*[@id="User"]')).sendKeys("sunil");
browser.driver.sleep(10000); 
//element(by.xpath('//*[@id="leftscroll"]/div/span/button')).click();
//browser.driver.sleep(10000); 
element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
browser.driver.sleep(10000);
element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[17]/a')).click();
browser.driver.sleep(10000);
    });
    });