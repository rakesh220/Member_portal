//1) Send any type of file to other users
describe('one-to-one chat cases', function() {
    it('Send any type of file to other users', function() {
      protractor.loginHelpers.TestLogin();
    var a=element(by.xpath('//*[@id="default"]/div[1]/ul/li/aadhya-chat-message/div/div/div/div[2]/p'));
    browser.driver.sleep(4000);
    var a=element(by.xpath('//*[@id="default"]/div[1]/ul/li[2]/aadhya-chat-message/div/div/div'));
    browser.driver.sleep(20000);
    expect(a.isPresent()).toBe(true);
    browser.driver.sleep(4000);
    protractor.loginHelpers.TestLogout();
    }); 
  });