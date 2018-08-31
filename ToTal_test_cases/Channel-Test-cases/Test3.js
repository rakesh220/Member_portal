//1) Add reaction to messages in chat.
describe('channel chat cases', function() {
    it('Test Add reaction to messages in chat', function() {
      browser.get(browser.params.url);
      browser.waitForAngularEnabled(false);
    element(by.id("Username")).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh");
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(20000);
  element(by.linkText(browser.params.testuserid)).click();
  browser.driver.sleep(40000);
  /*browser.actions().mouseMove(element(by.id('default'))).perform();
  browser.driver.sleep(10000);
  var value1 = browser.executeScript("return $('.midContent.scrollbar').scrollTop(1000);");*/
  var a=element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[3]/span/span/img'));
  browser.driver.sleep(10000);
  expect(a.isPresent()).toBe(true);
  browser.driver.sleep(5000);
    element(by.className('fa fa-user-circle dropdown-toggle font3x cur')).click();
   browser.driver.sleep(5000);
   element(by.linkText('Signout from AAIL')).click();
   browser.driver.sleep(5000);

    }); 
  });