describe('User Management Test Cases', function() {
    it('user can see other user information', function() {
      browser.get(browser.params.url);
      browser.waitForAngularEnabled(false);
    element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh221"); 
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(30000);
    element(by.xpath('//*[@id="userId76"]')).click();
browser.driver.sleep(20000);    
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-topbar-innerleft/div/div/div[1]/div/div/div[1]/a/img')).click();
     browser.driver.sleep(20000);  
     element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
     browser.driver.sleep(4000);
     element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[17]/a')).click();
     browser.driver.sleep(4000);
       });
    });