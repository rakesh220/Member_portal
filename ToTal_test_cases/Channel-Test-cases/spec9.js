//1) delete message...
describe('channel chat cases', function() {
  it('delete  message other users canot see that message', function() {
    protractor.loginHelpers.Login();
  element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/p')).click();
  browser.driver.sleep(10000);
 element(by.className('fa fa-ellipsis-v')).click();
  browser.driver.sleep(8000);
  element(by.linkText('Delete Message')).click();
  browser.driver.sleep(4000);
  protractor.loginHelpers.Logout();
  }); 
});