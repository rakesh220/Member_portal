//1) Get chat history with other users..
describe('one-to-one chat cases', function() {
    it('Get chat history with other users.', function() {
      protractor.loginHelpers.Login();
    browser.actions().mouseMove(element(by.id('default'))).perform();
    browser.driver.sleep(10000);
      var value = browser.executeScript("return $('.midContent.scrollbar').scrollTop(1000);");
    browser.driver.sleep(8000);
    protractor.loginHelpers.Logout();
//testing other user get same message (or) not
/*element(by.id("Username")).sendKeys("raheem");
element(by.id("Password")).sendKeys("raheem");
element(by.buttonText("Sign In")).click();
browser.driver.sleep(20000);

element(by.id(browser.params.testuserid)).click();
browser.driver.sleep(10000);
browser.actions().mouseMove(element(by.id('default'))).perform();
browser.driver.sleep(10000);
  var value1 = browser.executeScript("return $('.midContent.scrollbar').scrollTop(1000);");
browser.driver.sleep(4000);
element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
browser.driver.sleep(4000);
element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[17]/a')).click();
browser.driver.sleep(4000);*/
    }); 
  });