describe('User Management Test Cases', function() {
    it('ringtone setting', function() {
      browser.get(browser.params.url);
      browser.waitForAngularEnabled(false);
    element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh221");
   // element(by.xpath('//*[@id="loginform"]/div[3]/button')).click();
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(30000);
    element(by.xpath('//*[@id="navbar"]/ul/li[6]/a')).click();
browser.driver.sleep(10000); 
    element(by.name("messageTone")).$('[value="messageToneName3"]').click();
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