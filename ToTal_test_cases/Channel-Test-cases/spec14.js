//1) update or edit reply to amessage
describe(' update or edit reply to amessage', function() {
  it('update a message.', function() {
    protractor.loginHelpers.Login(); 
  element(by.xpath('//*[@id="default"]/div[1]/ul/li/aadhya-chat-message/div/div/div/div[4]/div/h5/a')).click();
  browser.driver.sleep(20000);
 element(by.xpath('//*[@id="sidebar"]/div[2]/div[3]/div[1]/div[2]/aadhya-reply-message/div[2]/p')).click();
  browser.driver.sleep(20000);
  element(by.xpath('//*[@id="dLabel"]/i')).click();
  browser.driver.sleep(20000);
  element(by.linkText('Delete Reply')).click();
  browser.driver.sleep(10000);
  protractor.loginHelpers.Logout(); 
  }); 
});