//1) Chat history with timestamps
describe('channel chat cases', function() {
  it('Chat history with timestamps', function() {
    protractor.loginHelpers.Login(); 
browser.actions().mouseMove(element(by.id('default'))).perform();
browser.driver.sleep(10000);
var value1 = browser.executeScript("return $('.midContent.scrollbar').scrollTop(1000);");
var a=element(by.xpath('//*[@id="default"]/div[1]/ul/li[2]/aadhya-chat-message/div/div/div/div[2]/p'));
browser.driver.sleep(5000);
protractor.loginHelpers.Logout(); 
  }); 
});
