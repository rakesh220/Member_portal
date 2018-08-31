//1) Send data to email through code snippet
describe('channel chat cases', function() {
  it('Send data to email through code snippet.', function() {
    protractor.loginHelpers.Login(); 
  browser.actions().mouseMove(element(by.id('default'))).perform();
browser.driver.sleep(10000);
var value1 = browser.executeScript("return $('.midContent.scrollbar').scrollTop(1000);");
  element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/span[1]/span/button/span')).click();
  browser.driver.sleep(4000);
  element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/span[1]/span/ul/li[5]/a')).click();
  browser.driver.sleep(4000);
  element(by.xpath('//*[@id="file-share"]/div/div/div[2]/div[1]/select')).$('[value="email"]').click();
  browser.driver.sleep(8000);
  element(by.xpath('//*[@id="file-share"]/div/div/div[2]/div[2]/quill-editor/div[2]/div[1]')).sendKeys("hi");
  browser.driver.sleep(8000);
  element(by.xpath('//*[@id="file-share"]/div/div/div[3]/button[2]')).click();
  browser.driver.sleep(5000);
  protractor.loginHelpers.Logout(); 
  }); 
});