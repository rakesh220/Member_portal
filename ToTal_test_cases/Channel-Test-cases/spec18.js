//1) Send url in one-one chat
describe('chaneel chat cases', function() {
  it('Send url in one-one chat.', function() {
    protractor.loginHelpers.Login(); 
  browser.actions().mouseMove(element(by.id('default'))).perform();
browser.driver.sleep(10000);
var value1 = browser.executeScript("return $('.midContent.scrollbar').scrollTop(1000);");
  element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/input')).sendKeys("https://www.mrf.com");
  browser.driver.sleep(4000);
  element(by.className('fa fa-telegram')).click();
  browser.driver.sleep(5000);
  protractor.loginHelpers.Logout(); 
  }); 
});