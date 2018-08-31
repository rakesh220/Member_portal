describe('User Management Test Cases', function() {
    it('timezone setting', function() {
      browser.get(browser.params.url);
      browser.waitForAngularEnabled(false) 
    element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh221");
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(30000);
    element(by.xpath('//*[@id="navbar"]/ul/li[6]/a')).click();
    browser.driver.sleep(10000);
element(by.xpath('//*[@id="prefSettings"]/div/div/div[2]/div/div/div/div[1]/ul/li[3]/a')).click();
 browser.driver.sleep(10000);  
    element(by.id("timezone")).$('[value="(GMT -6:00) Central Time (US & Canada), Mexico City"]').click();
    browser.driver.sleep(10000);
    element(by.xpath('//*[@id="prefSettings"]/div/div/div[3]/button[2]')).click();
     browser.driver.sleep(10000);  
     element(by.xpath('//*[@id="prefSettings"]/div/div/div[3]/button[1]')).click();
     browser.driver.sleep(10000); 
     element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
     browser.driver.sleep(4000);
     element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[17]/a')).click();
     browser.driver.sleep(4000);
       });
    
    });