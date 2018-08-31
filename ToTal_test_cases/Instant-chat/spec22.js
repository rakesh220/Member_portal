//1) remove instant group from contact list
describe('instangt chat cases', ()=> {
    it('remove instant group from contact list', ()=> {
      protractor.loginHelpers.Login();
element(by.xpath('//*[@id="leftscroll"]/ul[4]/li[110]/div/span[2]/a/i')).click();
browser.driver.sleep(4000);
protractor.loginHelpers.Logout();
    }); 
  });
