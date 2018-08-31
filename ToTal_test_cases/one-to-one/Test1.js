//1) Send text message in one-to-one chat
describe('one-to-one chat cases', function() {
    it('Test Send text messages to other users', function() {
      protractor.loginHelpers.TestLogin();
    var a=element(by.xpath('//*[@id="default"]/div[1]/ul/li/aadhya-chat-message/div/div/div/div[2]/p'));
    browser.driver.sleep(4000);
    expect(a.getText()).toBe("hi");
    browser.driver.sleep(4000);
    protractor.loginHelpers.TestLogout();
    }); 
  });
