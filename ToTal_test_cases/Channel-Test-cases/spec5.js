//1) cannot remove other user reaction in channel
describe('channel chat cases', function() {
  it('channel cannot remove other user  reaction.', function() {
    protractor.loginHelpers.Login();
  element(by.xpath('//*[@id="default"]/div[1]/ul/li/aadhya-chat-message/div/div/div/div[2]/span/span/img')).click();
browser.driver.sleep(10000);
var a=element(by.xpath('//*[@id="default"]/div[1]/ul/li/aadhya-chat-message/div/div/div/div[2]/span/span/img'));
expect(a.isPresent()).toBe(true);
protractor.loginHelpers.Logout();

  }); 
});