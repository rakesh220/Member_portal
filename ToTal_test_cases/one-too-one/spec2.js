//1) Send any file in one-to-one chat
describe('one-to-one chat cases', ()=> {
    it('Send any type of file to other users', ()=> {
      protractor.loginHelpers.Login();
    element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/span[1]/span/button/span')).click();
    browser.driver.sleep(30000);
    element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/span[1]/span/ul/li[3]/a/label')).click();
    browser.driver.sleep(30000);
    protractor.loginHelpers.Login();
    }); 
  });
