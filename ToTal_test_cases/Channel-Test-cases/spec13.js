//1) update or edit reply to amessage
describe(' update or edit reply to amessage', function() {
  it('update a message.', function() {
    protractor.loginHelpers.Login();    
  element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[4]/div/h5/a')).click();
  browser.driver.sleep(20000);
 element(by.xpath('//*[@id="sidebar"]/div[2]/div[3]/div[1]/div/aadhya-reply-message/div[2]/p')).click();
  browser.driver.sleep(20000);
  element(by.xpath('//*[@id="sidebar"]/div[2]/div[3]/div[1]/div/aadhya-reply-message/div[2]/span')).click();
  browser.driver.sleep(20000);
  element(by.xpath('//*[@id="sidebar"]/div[2]/div[3]/div[1]/div/aadhya-reply-message/div[2]/span/ul/li[1]/a')).click();
  browser.driver.sleep(10000);
  element(by.xpath('//*[@id="sidebar"]/div[2]/div[3]/div[1]/div/aadhya-reply-message/input')).sendKeys('edited message');
  browser.driver.sleep(10000);
var enter = browser.actions().sendKeys(protractor.Key.ENTER);
  enter.perform();
  browser.driver.sleep(5000);
  protractor.loginHelpers.Logout(); 
  }); 
});