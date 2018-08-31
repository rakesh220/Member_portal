//1) Send text message in Channel chat
describe('Channel chat cases', function() {
    it('Send text messages to other users', function() {
      protractor.loginHelpers.Login();
   element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/input')).sendKeys("hi");
    browser.driver.sleep(4000);
   element(by.className('fa fa-telegram')).click();
    browser.driver.sleep(5000);
    protractor.loginHelpers.Logout();
    }); 
  });
