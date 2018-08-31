//1) Send any  video  in one-to-one chat
describe('one-to-one chat cases', ()=> {
    it('Send video file to other users.', ()=> {
      protractor.loginHelpers.Login();
    element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/span[1]/span/button/span')).click();
    browser.driver.sleep(30000);
    element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/span[1]/span/ul/li[3]/a/label')).click();
    browser.driver.sleep(3000);
    protractor.loginHelpers.Logout();
//testing other user get same message (or) not
/*element(by.id("Username")).sendKeys("raheem");
element(by.id("Password")).sendKeys("raheem");
element(by.buttonText("Sign In")).click();
browser.driver.sleep(20000);
element(by.id(browser.params.testuserid)).click();
browser.driver.sleep(10000);
 var a=element(by.xpath('//*[@id="default"]/div[1]/ul/li[4]/aadhya-chat-message/div/div/div'));
browser.driver.sleep(10000);
expect(a.isPresent()).toBe(true);
browser.driver.sleep(10000);
element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
browser.driver.sleep(5000);
element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[17]/a')).click();
browser.driver.sleep(5000);*/
    }); 
  });
