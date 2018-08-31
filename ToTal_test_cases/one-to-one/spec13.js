//1) pin a message...
describe('one-to-one chat cases', function() {
    it('pin a message.', function() {
      protractor.loginHelpers.Login();
    element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/p')).click();
    browser.driver.sleep(8000);
   element(by.className('fa fa-ellipsis-v')).click();
    browser.driver.sleep(8000);
    element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[3]/a[2]/ul/li[3]/a')).click();
    browser.driver.sleep(8000);
    protractor.loginHelpers.Logout();
//testing other user get same message (or) not
/*element(by.id("Username")).sendKeys("raheem");
element(by.id("Password")).sendKeys("raheem");
element(by.buttonText("Sign In")).click();
browser.driver.sleep(20000);

element(by.id(browser.params.testuserid)).click();
browser.driver.sleep(10000);
 var a=element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/small/div'));
browser.driver.sleep(4000);
expect(a.isPresent()).toBe(false);
browser.driver.sleep(4000);
element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
browser.driver.sleep(4000);
element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[17]/a')).click();
browser.driver.sleep(4000);*/
    }); 
  });