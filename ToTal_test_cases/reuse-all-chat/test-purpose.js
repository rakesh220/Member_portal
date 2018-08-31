
describe('Test browser Channel chat cases', function() 
{
    //1) Send text message in one-to-one chat
    it('Test Send text messages to other users', function() {
      protractor.loginHelpers.TestLogin();
    var text = element(by.xpath('//*[@id="default"]/div[1]/ul/li[2]/aadhya-chat-message/div/div/div/div/p')).click();
    browser.driver.sleep(6000);
   expect(text.getText()).toBe("how are you?");
   browser.driver.sleep(6000);
    }); 

    //2)Send any type of file to other users
    it('Test Send any type of file to other users', function() {
     var file= element(by.xpath('//*[@id="default"]/div[1]/ul/li[4]/aadhya-chat-message/div'));
      browser.driver.sleep(6000);
      expect(file.isPresent()).toBe(true);
      browser.driver.sleep(6000);
      }); 

     //3)Send image files to other users
     it('Test Send image files to other users', function() {
     var image = element(by.xpath('//*[@id="default"]/div[1]/ul/li[5]/aadhya-chat-message/div'));
      browser.driver.sleep(6000);
      expect(image.isPresent()).toBe(true);
      browser.driver.sleep(6000);
     });

     //4)Send video file to other users
     it('Test Send video file to other users', function() {
        browser.actions().mouseMove(element(by.id('default'))).perform();
        browser.driver.sleep(5000);
          var value = browser.executeScript("return $('.midContent.scrollbar').scrollTop(10000);");
        browser.driver.sleep(5000);
     var video=element(by.xpath('//*[@id="default"]/div[1]/ul/li[6]/aadhya-chat-message/div'));
      browser.driver.sleep(6000);
      expect(video.isPresent()).toBe(true);
      browser.driver.sleep(6000);
     });

     //5)Add reaction to messages in chat
     it('Test Add reaction to messages in chat', function() {
        browser.actions().mouseMove(element(by.id('default'))).perform();
        browser.driver.sleep(5000);
          var value = browser.executeScript("return $('.midContent.scrollbar').scrollTop(0);");
        browser.driver.sleep(5000);
        var emoji=element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[3]/span/span/img')).click();
     browser.driver.sleep(6000);
      expect(emoji.isPresent()).toBe(false);
      browser.driver.sleep(5000);
     });

     //6)Remove reaction to messages in chat
     it('Test Remove reaction to messages in chat', function() {
     var emojideleted = element(by.xpath('//*[@id="default"]/div[1]/ul/li[3]/aadhya-chat-message/div/div/div/div[2]/span/span/img')).click();
      browser.driver.sleep(6000);
      expect(emojideleted.isPresent()).toBe(true);
     browser.driver.sleep(6000);
     });

     //7)Get typeing notification in chat
     //8)Do not get typing notifications
     //9)Get chat history with other users
     

     //10)Edit sent message
     it('Test Edit sent message', function() {
      browser.driver.sleep(5000);
        browser.actions().mouseMove(element(by.id('default'))).perform();
        browser.driver.sleep(5000);
          var value = browser.executeScript("return $('.midContent.scrollbar').scrollTop(0);");
        browser.driver.sleep(5000);
    var text = element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[3]/p')).click();
   browser.driver.sleep(6000);
   expect(text.getText()).toBe("hi how are you");
   browser.driver.sleep(6000);
      
     });

     //12)

     //13)pin a message
      it('Test pin a message', function() {
        browser.actions().mouseMove(element(by.id('default'))).perform();
        browser.driver.sleep(5000);
          var value = browser.executeScript("return $('.midContent.scrollbar').scrollTop(0);");
        browser.driver.sleep(5000);
    
      var pinned=element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/small/div'));
      browser.driver.sleep(8000);
        
      expect(pinned.isPresent()).toBe(false);
     browser.driver.sleep(6000);
     });

     //14)cannot pin a message twice
     //15)unpin message
    
     //16)Add reply to amessage
     it('test Add reply to amessage', function() {
        
      browser.driver.sleep(5000);
        element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[3]/p')).click();
      browser.driver.sleep(10000);
      element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[4]/span/a')).click();
      browser.driver.sleep(5000);
     var a= element(by.xpath('//*[@id="sidebar"]/div[2]/div[3]/div[1]/div/aadhya-reply-message/div[2]/p')).click();
     browser.driver.sleep(5000);
     expect(a.getText()).toBe('hi');
     browser.actions().mouseMove(element(by.id('default'))).perform();
     browser.driver.sleep(5000);
        var value = browser.executeScript("return $('.midContent.scrollbar').scrollTop(0);");
        browser.driver.sleep(5000);
     });

     //17)update reply to amessage
     it('Test update reply to amessage', function() {
      element(by.xpath('//*[@id="default"]/div[1]/ul/li[3]/aadhya-chat-message/div/div/div/div[2]/p')).click();
      browser.driver.sleep(20000);
      element(by.xpath('//*[@id="default"]/div[1]/ul/li[3]/aadhya-chat-message/div/div/div/div[3]/span/a/span')).click();
      browser.driver.sleep(5000);
     var a=element(by.xpath('//*[@id="sidebar"]/div[2]/div[3]/div[1]/div/aadhya-reply-message/div[2]/p')).click();
         browser.driver.sleep(5000);
     expect(a.getText()).toBe('hiedited');
     browser.actions().mouseMove(element(by.id('default'))).perform();
     browser.driver.sleep(5000);
        var value = browser.executeScript("return $('.midContent.scrollbar').scrollTop(0);");
        browser.driver.sleep(5000);
      
     });

     //19)Get push notification when application minimized
     //20)As a user I should able to get unread count in one-one chat
     //21)Send code snippet.
     it('Test Send code snippet.', function() {
      browser.driver.sleep(5000);
      browser.actions().mouseMove(element(by.id('default'))).perform();
  browser.driver.sleep(8000);
    var value1 = browser.executeScript("return $('.midContent.scrollbar').scrollTop(10000);");
      var a=element(by.xpath('//*[@id="default"]/div[1]/ul/li[7]/aadhya-chat-message/div/div/div/div[1]/span'));
      browser.driver.sleep(10000);
      expect(a.isPresent()).toBe(true);
      browser.driver.sleep(4000);
     });

     //22)Send data to email through code snippet.
     it('Test Send data to email through code snippet.', function() {
      browser.driver.sleep(5000);
      browser.actions().mouseMove(element(by.id('default'))).perform();
  browser.driver.sleep(8000);
    var value1 = browser.executeScript("return $('.midContent.scrollbar').scrollTop(10000);");
      var a=element(by.xpath('//*[@id="default"]/div[1]/ul/li[8]/aadhya-chat-message/div/div/div/div/span'));
      browser.driver.sleep(4000);
      expect(a.isPresent()).toBe(true);
      browser.driver.sleep(4000);
     });

     //23)Send url in one-one chat
     it('Test Send url in one-one chat', function() {
      browser.driver.sleep(5000);
      browser.actions().mouseMove(element(by.id('default'))).perform();
  browser.driver.sleep(8000);
    var value1 = browser.executeScript("return $('.midContent.scrollbar').scrollTop(10000);");
      var a=element(by.xpath('//*[@id="default"]/div[1]/ul/li[9]/aadhya-chat-message/div/div/div/div'));
      browser.driver.sleep(8000);
      expect(a.isPresent()).toBe(true);
      browser.driver.sleep(8000);
     });

     //24)Chat history with timestamps
      //25)View profile picture
           //18)delete reply to a message
     it('Test delete reply to a message', function() {
     var a= element(by.xpath('//*[@id="default"]/div[1]/ul/li[10]/aadhya-chat-message/div/div/div/div[3]/div/h5/a')).click();
      browser.driver.sleep(8000);
      
      expect(a.isPresent()).toBe(false);
      browser.driver.sleep(5000);
     });
     //11)Delete sent message
   it('Test Delete sent message', function() {
    browser.driver.sleep(5000);
    var a= element(by.xpath('//*[@id="default"]/div[1]/ul/li[11]/aadhya-chat-message/div/div/div/div/p')).click();
        browser.driver.sleep(6000);
        expect(a.isPresent()).toBe(false);
    browser.driver.sleep(6000);
    });

  });
