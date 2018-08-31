//1) send code 
describe(' channel test cases', function() {
    it('test send cod eother use', function() {
      browser.get(browser.params.url);
      browser.waitForAngularEnabled(false);
   element(by.id("Username")).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh");
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(20000);
    element(by.linkText(browser.params.testuserid)).click();
    browser.driver.sleep(30000);
    element(by.className('fa fa-user-circle dropdown-toggle font3x cur')).click();
   browser.driver.sleep(5000);
   element(by.linkText('Signout from AAIL')).click();
   browser.driver.sleep(5000);
  
    }); 
  });