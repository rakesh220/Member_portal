//1) other user messages we cannot delete
describe('other user messages we cannot delete', function() {
    it('Add reaction to messages in chat', function() {
      browser.get(browser.params.url);
      browser.waitForAngularEnabled(false);
    element(by.id("Username")).sendKeys("raheem");
    element(by.id("Password")).sendKeys("raheem");
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(20000);

    element(by.id(browser.params.testuserid)).click();
    browser.driver.sleep(10000);
    element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[3]/p')).click();
    browser.driver.sleep(10000);
    element(by.className('fa fa-ellipsis-v')).click();
    
    browser.driver.sleep(10000);
   element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
  browser.driver.sleep(5000);
  element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[17]/a')).click();
  browser.driver.sleep(5000);
    }); 
  });