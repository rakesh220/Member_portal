
describe('User Management Test Cases', function() {
    it('cannot change password with old password enter wrong', function() {
        browser.get(browser.params.url);
        browser.waitForAngularEnabled(false);
        element(by.id("Username")).clear();
  element(by.id("Password")).clear();
      element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
      element(by.id("Password")).sendKeys("rakesh");
      element(by.buttonText("Sign In")).click();
      browser.driver.sleep(30000);
      element(by.xpath('//*[@id="navbar"]/ul/li[6]/a')).click();
    browser.driver.sleep(10000);   
    element(by.xpath('//*[@id="prefSettings"]/div/div/div[2]/div/div/div/div[1]/ul/li[3]/a')).click();
    browser.driver.sleep(10000);    
      element(by.xpath('//*[@id="oldPassword"]')).sendKeys("rakeshk");
      element(by.xpath('//*[@id="newPassword"]')).sendKeys("rakesh221");
      element(by.xpath('//*[@id="confirmPassword"]')).sendKeys("rakesh221");
      element(by.xpath('//*[@id="prefSettings"]/div/div/div[3]/button[2]')).click();
       browser.driver.sleep(10000); 
       var a=element(by.xpath('//*[@id="prefSettings"]/div/div/div[3]/div'));
       expect(a.getText()).toBe('Oops! Old password seems incorrect');
       browser.driver.sleep(5000);
       element(by.xpath('//*[@id="prefSettings"]/div/div/div[3]/button[1]')).click();
       browser.driver.sleep(5000); 
       element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
       browser.driver.sleep(5000);
       element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[16]/a')).click();
       browser.driver.sleep(5000);
         });
});
    
