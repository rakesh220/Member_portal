//1) add reply to message
describe(' channel add reply to message', function() {
  it('add reply to message', function() {
    protractor.loginHelpers.Login();
  element(by.xpath('//*[@id="default"]/div[1]/ul/li/aadhya-chat-message/div/div/a/div[19]/div/img')).click();
  browser.driver.sleep(10000);
 element(by.className('fa fa-share')).click();
  browser.driver.sleep(10000);
var a=  element(by.xpath('//*[@id="message-text"]')).sendKeys('reply message');
browser.driver.sleep(5000);
var enter = browser.actions().sendKeys(protractor.Key.ENTER);
  enter.perform();
  browser.driver.sleep(5000);
  protractor.loginHelpers.Logout();
  }); 
});