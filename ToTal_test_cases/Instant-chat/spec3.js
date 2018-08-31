//1) Send any file in instant chat
describe('instant chat cases', ()=> {
    it('Send any type of file to other users', ()=> {
      protractor.loginHelpers.Login();
    element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/span[1]/span/button/span')).click();
    browser.driver.sleep(30000);
    element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/span[1]/span/ul/li[3]/a/label')).click();
    browser.driver.sleep(30000);
    protractor.loginHelpers.Login();
    }); 
  });
