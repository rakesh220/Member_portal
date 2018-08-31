//1) Edit message
describe('channel chat cases', function() {
    it('test channel Edit message.', function() {
      browser.get(browser.params.url);
      browser.waitForAngularEnabled(false);
    element(by.id("Username")).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh");
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(20000);
    element(by.linkText(browser.params.userid)).click();
    browser.driver.sleep(50000);
    var a=element(by.xpath('//*[@id="default"]/div[1]/ul/li/aadhya-chat-message/div/div/div/div[2]/p/span/span'));
  browser.driver.sleep(10000);
  expect(a.getText()).toBe("hi Editied Message");
  browser.driver.sleep(5000);
    element(by.className('fa fa-user-circle dropdown-toggle font3x cur')).click();
   browser.driver.sleep(5000);
   element(by.linkText('Signout from AAIL')).click();
   browser.driver.sleep(5000);

    }); 
  });