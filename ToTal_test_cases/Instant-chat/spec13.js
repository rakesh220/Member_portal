//1) add reply to message
describe('instant chat cases', ()=> {
    it('Add reply to amessage', ()=> {
      protractor.loginHelpers.Login();
    element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[3]/p')).click();
    browser.driver.sleep(10000);
   element(by.className('fa fa-share')).click();
    browser.driver.sleep(10000);
  var a=  element(by.xpath('//*[@id="message-text"]')).sendKeys('reply message');
  browser.driver.sleep(5000);
  var enter = browser.actions().sendKeys(protractor.Key.ENTER);
    enter.perform();
    browser.driver.sleep(5000);
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
