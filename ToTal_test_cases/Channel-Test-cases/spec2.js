//1) Send any file in Channel chat
describe('channel chat cases', function() {
    it('Send any type of file to other users', function() {
      protractor.loginHelpers.Login();
    element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/span[1]/span/button/span')).click();
    browser.driver.sleep(10000);
    element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/span[1]/span/ul/li[3]/a/label')).click();
    browser.driver.sleep(5000);
    protractor.loginHelpers.Logout();
    
    }); 
  });