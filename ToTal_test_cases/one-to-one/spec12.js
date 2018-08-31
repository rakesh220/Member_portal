//1) other user messages we cannot delete
describe('one-to-one chat cases', function() {
    it('cannot delete message from user B', function() {
      protractor.loginHelpers.TestLogin();
    element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[3]/p')).click();
    browser.driver.sleep(10000);
    element(by.className('fa fa-ellipsis-v')).click();
    browser.driver.sleep(10000);
    protractor.loginHelpers.TestLogout();
    }); 
  });