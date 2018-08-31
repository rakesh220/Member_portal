//1) unpin message...
describe('channel chat cases', function() {
  it('unpin ', function() {
    protractor.loginHelpers.Login();
  element(by.xpath('//*[@id="default"]/div[1]/ul/li/aadhya-chat-message/div/div/a/div[19]/div/img')).click();
  browser.driver.sleep(10000);
 element(by.className('fa fa-ellipsis-v')).click();
  browser.driver.sleep(8000);
  element(by.linkText('Unpin Message')).click();
  browser.driver.sleep(4000);
  protractor.loginHelpers.Logout();
  
  }); 
});