//1) Add reaction to messages in chat.
describe('one-to-one chat cases', function() {
  it('Add reaction to messages in chat', function() {
      protractor.loginHelpers.Login();
      element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/p')).click();
  browser.driver.sleep(10000);
  element(by.className('fa fa-smile-o')).click();
  browser.driver.sleep(10000);
  element(by.xpath('//*[@id="default"]/div[1]/ul/li/aadhya-chat-message/div/div/div/div[3]/a[1]/ul/li[3]/img')).click();
  browser.driver.sleep(5000);
  protractor.loginHelpers.Logout();
  
  }); 
});