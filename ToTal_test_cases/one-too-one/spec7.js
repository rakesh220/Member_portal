//1) get typeing notification when other user chating
describe('one-to-one chat cases', ()=> {
    it('Get typeing notification in chat', ()=> {
      protractor.loginHelpers.Login();
    browser.driver.sleep(30000);
    protractor.loginHelpers.Logout();
//testing other user get same message (or) not
/*element(by.id("Username")).sendKeys("raheem");
element(by.id("Password")).sendKeys("raheem");
element(by.buttonText("Sign In")).click();
browser.driver.sleep(20000);

element(by.id(browser.params.testuserid)).click();
browser.driver.sleep(10000);
 var a=element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/span/span/img'));
browser.driver.sleep(8000);
expect(a.isPresent()).toBe(false);
browser.driver.sleep(10000);
element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
browser.driver.sleep(4000);
element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[17]/a')).click();
browser.driver.sleep(4000);*/
    }); 
  });
