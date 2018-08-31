describe('User Management Test Cases', function() {
    it('user cannot login with new password', function() {
      browser.get(browser.params.url);
    element(by.id("Username")).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh221");
    element(by.buttonText("Sign In")).click();
   browser.driver.sleep(30000);  
    });
   
  });