describe('User Management Test Cases', function() {
  it('login with valid userid and invalid password', function() {
    browser.get(browser.params.url);
    browser.waitForAngularEnabled(false);
  element(by.id("Username")).sendKeys("rakesh");
  element(by.id("Password")).sendKeys("rakesh1");
  element(by.buttonText("Sign In")).click();
  browser.driver.sleep(10000);
  var a=element(by.xpath('//*[@id="loginform"]/p'));
  expect(a.isPresent()).toBe(true);
  browser.driver.sleep(5000);
  
  
  });
 
});
