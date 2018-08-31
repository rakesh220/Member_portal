//1) Send text message in instant chat
describe('instant chat cases', ()=> {
    it('Send text messages to other users', ()=> {
      protractor.loginHelpers.Login();
    element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/input')).sendKeys("hi");
   browser.driver.sleep(6000);
   element(by.className('fa fa-telegram')).click();
    browser.driver.sleep(6000);
    protractor.loginHelpers.Logout();
    }); 
  });
