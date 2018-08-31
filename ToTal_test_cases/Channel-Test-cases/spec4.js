//1) remove reaction in channel
describe('channel chat cases', function() {
    it('channel remove reaction.', function() {
      protractor.loginHelpers.Login();
    element(by.xpath('//*[@id="default"]/div[1]/ul/li/aadhya-chat-message/div/div/div/div[2]/span/span')).click();
    browser.driver.sleep(8000);
    element(by.className('fa fa-user-circle dropdown-toggle font3x cur')).click();
    protractor.loginHelpers.Logout();
    }); 
  });