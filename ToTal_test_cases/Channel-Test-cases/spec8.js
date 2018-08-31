//1) Edit sent message...
describe('channel chat cases', function() {
  it('Edit sent message.', function() {
    protractor.loginHelpers.Login();
  element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/p')).click();
  browser.driver.sleep(10000);
 element(by.className('fa fa-ellipsis-v')).click();
  browser.driver.sleep(8000);
  element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[3]/a[2]/ul/li[1]/a')).click();
  browser.driver.sleep(8000);
  element(by.xpath('//*[@id="field-7"]')).sendKeys(" Editied Message");
  browser.driver.sleep(8000);
  element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/div[2]/a[1]')).click();
  browser.driver.sleep(4000);
  protractor.loginHelpers.Logout();
  
  }); 
});
