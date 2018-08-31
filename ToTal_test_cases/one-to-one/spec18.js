
//1) update or edit reply to amessage
describe(' update or edit reply to amessage', function() {
    it('pin a message.', function() {
      protractor.loginHelpers.Login();
    element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[4]/div/h5/a')).click();
    browser.driver.sleep(20000);
   element(by.xpath('//*[@id="sidebar"]/div[2]/div[3]/div[1]/div/aadhya-reply-message/div[2]/p')).click();
    browser.driver.sleep(20000);
    element(by.xpath('//*[@id="sidebar"]/div[2]/div[3]/div[1]/div/aadhya-reply-message/div[2]/span')).click();
    browser.driver.sleep(20000);
    element(by.xpath('//*[@id="sidebar"]/div[2]/div[3]/div[1]/div/aadhya-reply-message/div[2]/span/ul/li[2]/a')).click();
    browser.driver.sleep(10000);
    protractor.loginHelpers.Logout();
//testing other user get same message (or) not
/*element(by.id("Username")).sendKeys("jameelTesting1");
element(by.id("Password")).sendKeys("Sha03");
element(by.buttonText("Sign In")).click();
browser.driver.sleep(20000);
element(by.id(browser.params.userid)).click();
browser.driver.sleep(10000);
 var a=element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[4]/div/h5/a')).click();

browser.driver.sleep(4000);
element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
browser.driver.sleep(4000);
element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[17]/a')).click();
browser.driver.sleep(4000);*/
    }); 
  });