//1) remove reaction to messages in chat.
describe('one-to-one chat cases', function() {
    it('Remove reaction to messages in chat.', function() {
      browser.get(browser.params.url);
      browser.waitForAngularEnabled(false);
   /*element(by.id("Username")).sendKeys("jameelTesting1");
    element(by.id("Password")).sendKeys("Sha03");
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(20000);
    element(by.id(browser.params.userid)).click();
    browser.driver.sleep(10000);
    element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/span/span/img')).click();
    browser.driver.sleep(10000);
   element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
  browser.driver.sleep(5000);
  element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[17]/a')).click();
  browser.driver.sleep(5000);*/
//testing other user get same message (or) not
element(by.id("Username")).sendKeys("raheem");
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
browser.driver.sleep(4000);
    }); 
  });