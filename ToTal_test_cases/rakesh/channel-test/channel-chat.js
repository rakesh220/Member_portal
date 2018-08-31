//1) Send text message in Channel chat
describe('Channel chat cases', function() {
    //1)
    it('Send text messages to other users', function() {
      protractor.loginHelpers.Login();
   element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/input')).sendKeys("hi");
    browser.driver.sleep(4000);
   element(by.className('fa fa-telegram')).click();
    browser.driver.sleep(5000);
    }); 
    //2)
    it('Send any type of file to other users', function() {
      element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/span[1]/span/button/span')).click();
      browser.driver.sleep(10000);
      element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/span[1]/span/ul/li[3]/a/label')).click();
      browser.driver.sleep(5000);
      }); 
     //3)
     it('Add reaction to messages in chat', function() {
        element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/p')).click();
    browser.driver.sleep(10000);
    element(by.className('fa fa-smile-o')).click();
    browser.driver.sleep(10000);
    element(by.xpath('//*[@id="default"]/div[1]/ul/li/aadhya-chat-message/div/div/div/div[3]/a[1]/ul/li[3]/img')).click();
    browser.driver.sleep(5000);
    }); 
    //4)
    it(' remove reaction.', function() {
      element(by.xpath('//*[@id="default"]/div[1]/ul/li/aadhya-chat-message/div/div/div/div[2]/span/span')).click();
      browser.driver.sleep(8000);
      element(by.className('fa fa-user-circle dropdown-toggle font3x cur')).click();
      }); 
      //5)
      it('channel cannot remove other user  reaction.', function() {
      element(by.xpath('//*[@id="default"]/div[1]/ul/li/aadhya-chat-message/div/div/div/div[2]/span/span/img')).click();
    browser.driver.sleep(10000);
    var a=element(by.xpath('//*[@id="default"]/div[1]/ul/li/aadhya-chat-message/div/div/div/div[2]/span/span/img'));
    expect(a.isPresent()).toBe(true);
      }); 
      //6)
      //7)
      it('Get chat history with other users.', function() {
      browser.actions().mouseMove(element(by.id('default'))).perform();
      browser.driver.sleep(10000);
        var value = browser.executeScript("return $('.midContent.scrollbar').scrollTop(1000);");
      browser.driver.sleep(8000);
      }); 
      //8)
      it('Edit sent message.', function() {
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
      
      }); 
      //9)
      it('delete  message other users canot see that message', function() {
      element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/p')).click();
      browser.driver.sleep(10000);
     element(by.className('fa fa-ellipsis-v')).click();
      browser.driver.sleep(8000);
      element(by.linkText('Delete Message')).click();
      browser.driver.sleep(4000);
      }); 
      //10)
      it('pin  message other users canot see that pin', function() {
      element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/p')).click();
      browser.driver.sleep(10000);
     element(by.className('fa fa-ellipsis-v')).click();
      browser.driver.sleep(8000);
      element(by.linkText('Pin Message')).click();
      browser.driver.sleep(4000);
      }); 
      //11)
      it('unpin ', function() {
      element(by.xpath('//*[@id="default"]/div[1]/ul/li/aadhya-chat-message/div/div/a/div[19]/div/img')).click();
      browser.driver.sleep(10000);
     element(by.className('fa fa-ellipsis-v')).click();
      browser.driver.sleep(8000);
      element(by.linkText('Unpin Message')).click();
      browser.driver.sleep(4000);
      }); 
    //12)

  });