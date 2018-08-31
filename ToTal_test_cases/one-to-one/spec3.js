///1) Add reaction to messages in chat.
describe('instant chat cases', function() {
  it('Add reaction to messages in chat', function() {
    protractor.loginHelpers.Login();
  element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/p')).click();
  element(by.className('fa fa-smile-o')).click();
  browser.driver.sleep(15000);
  element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[3]/a[1]/ul/li[3]/img')).click();
  browser.driver.sleep(10000);
  protractor.loginHelpers.Logout();
//testing other user get same message (or) not
/*element(by.id("Username")).sendKeys("raheem");
element(by.id("Password")).sendKeys("raheem");
element(by.buttonText("Sign In")).click();
browser.driver.sleep(20000);
element(by.id(browser.params.testuserid)).click();
browser.driver.sleep(10000);
browser.actions().mouseMove(element(by.id('default'))).perform();
browser.driver.sleep(10000);
var value1 = browser.executeScript("return $('.midContent.scrollbar').scrollTop(1000);");
var a=element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/span/span/img'));
browser.driver.sleep(10000);
expect(a.isPresent()).toBe(true);
browser.driver.sleep(10000);
element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
browser.driver.sleep(4000);
element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[17]/a')).click();
browser.driver.sleep(4000);*/
  }); 
});