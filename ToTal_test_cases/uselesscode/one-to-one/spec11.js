//1) Edit sent message...
describe('one-to-one chat cases', function() {
    it('Edit sent message.', function() {
      browser.get(browser.params.url);
      browser.waitForAngularEnabled(false);
   /*element(by.id("Username")).sendKeys("jameelTesting1");
    element(by.id("Password")).sendKeys("Sha03");
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(20000);

    element(by.id(browser.params.userid)).click();
    browser.driver.sleep(10000);
    browser.actions().mouseMove(element(by.id('default'))).perform();
    browser.driver.sleep(10000);
      var value = browser.executeScript("return $('.midContent.scrollbar').scrollTop(1000);");
    element(by.xpath('//*[@id="default"]/div[1]/ul/li[5]/aadhya-chat-message/div/div/div/div[2]/p')).click();
    browser.driver.sleep(8000);
   element(by.className('fa fa-ellipsis-v')).click();
    browser.driver.sleep(8000);
    element(by.xpath('//*[@id="default"]/div[1]/ul/li[5]/aadhya-chat-message/div/div/div/div[3]/a[2]/ul/li[2]/a')).click();
    browser.driver.sleep(8000);
   // element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/div[2]/a[1]')).click();
    //browser.driver.sleep(4000);
   element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
  browser.driver.sleep(4000);
  element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[17]/a')).click();
  browser.driver.sleep(4000);*/
//testing other user get same message (or) not
element(by.id("Username")).sendKeys("raheem");
element(by.id("Password")).sendKeys("raheem");
element(by.buttonText("Sign In")).click();
browser.driver.sleep(20000);

element(by.id(browser.params.testuserid)).click();
browser.driver.sleep(10000);
browser.actions().mouseMove(element(by.id('default'))).perform();
browser.driver.sleep(10000);
 browser.executeScript("return $('.midContent.scrollbar').scrollTop(1000);");
browser.driver.sleep(4000);
element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
browser.driver.sleep(4000);
element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[17]/a')).click();
browser.driver.sleep(4000);
    }); 
  });