describe('User Management Test Cases', function() {
  it('login with correct userid and password', function() {
browser.get(browser.params.url);
    browser.waitForAngularEnabled(false);
  element(by.id("Username")).sendKeys("rakesh");
  element(by.id("Password")).sendKeys("rakesh220");
  browser.driver.sleep(5000);
  var foo = element(by.id('Username'));
  foo.takeScreenshot().then((png) => {
    writeScreenShot(png, 'foo.png');
  });
  element(by.buttonText("Sign In")).click();
  
  var a=element(by.xpath('//*[@id="loginform"]/p'));
  expect(a.isPresent()).toBe(false);
  browser.driver.sleep(20000);
 element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
browser.driver.sleep(10000);
element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[16]/a')).click();
browser.driver.sleep(10000);
  });
 
});
