//1) Send any file in Channel chat
describe('channel chat cases', function() {
    it('Test Send any type of file to other users', function() {
      browser.get(browser.params.url);
      browser.waitForAngularEnabled(false);
    element(by.id("Username")).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh");
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(20000);
    element(by.id(browser.params.userid)).click();
    browser.driver.sleep(10000);
    var a=element(by.xpath('//*[@id="default"]/div[1]/ul/li[2]/aadhya-chat-message/div/div/div'));
    browser.driver.sleep(20000);
    expect(a.isPresent()).toBe(true);
    browser.driver.sleep(5000);
    element(by.className('fa fa-user-circle dropdown-toggle font3x cur')).click();
   browser.driver.sleep(5000);
   element(by.linkText('Signout from AAIL')).click();
   browser.driver.sleep(5000);

    }); 
  });