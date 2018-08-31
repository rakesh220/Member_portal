
describe('Channel chat cases', function() {
    //1) Send text message in one-to-one chat
    it('Send text messages to other users', function() {
      protractor.loginHelpers.Login();
    element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/input')).sendKeys("hi");
   browser.driver.sleep(6000);
   element(by.className('fa fa-telegram')).click();
   browser.driver.sleep(5000);
   element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/input')).sendKeys("how are you?");
   browser.driver.sleep(6000);
   element(by.className('fa fa-telegram')).click();
    browser.driver.sleep(6000);
    element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/input')).sendKeys("ok bye");
   browser.driver.sleep(6000);
   element(by.className('fa fa-telegram')).click();
    browser.driver.sleep(6000);
    }); 

    //2)Send any type of file to other users
    it('Send any type of file to other users', function() {
      element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/span[1]/span/button/span')).click();
      browser.driver.sleep(10000);
      element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/span[1]/span/ul/li[3]/a/label')).click();
      browser.driver.sleep(20000);
      }); 

     //3)Send image files to other users
     it('Send image files to other users', function() {
      element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/span[1]/span/button/span')).click();
      browser.driver.sleep(10000);
      element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/span[1]/span/ul/li[3]/a/label')).click();
      browser.driver.sleep(20000);
     });

     //4)Send video file to other users
     it('Send video file to other users', function() {
        browser.actions().mouseMove(element(by.id('default'))).perform();
        browser.driver.sleep(5000);
          var value = browser.executeScript("return $('.midContent.scrollbar').scrollTop(10000);");
        browser.driver.sleep(5000);
      element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/span[1]/span/button/span')).click();
      browser.driver.sleep(10000);
      element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/span[1]/span/ul/li[3]/a/label')).click();
      browser.driver.sleep(20000);
     });

     //5)Add reaction to messages in chat
     it('Add reaction to messages in chat', function() {
        browser.actions().mouseMove(element(by.id('default'))).perform();
        browser.driver.sleep(5000);
          var value = browser.executeScript("return $('.midContent.scrollbar').scrollTop(0);");
        browser.driver.sleep(5000);
      element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/p')).click();
      element(by.className('fa fa-smile-o')).click();

      browser.driver.sleep(15000);
      element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[3]/a[1]/ul/li[3]/img')).click();
      browser.driver.sleep(10000);
      element(by.xpath('//*[@id="default"]/div[1]/ul/li[3]/aadhya-chat-message/div/div/div/div[1]/p')).click();
      element(by.className('fa fa-smile-o')).click();
      browser.driver.sleep(15000);
      element(by.xpath('//*[@id="default"]/div[1]/ul/li[3]/aadhya-chat-message/div/div/div/div[2]/a[1]/ul/li[3]/img')).click();
      browser.driver.sleep(6000);
     });

     //6)Remove reaction to messages in chat
     it('Remove reaction to messages in chat', function() {
      element(by.xpath('//*[@id="default"]/div[1]/ul/li[3]/aadhya-chat-message/div/div/div/div[1]/span/span/img')).click();
      browser.driver.sleep(20000);
     });

     //7)Get typeing notification in chat
     it('Get typeing notification in chat', function() {
      browser.driver.sleep(30000);
     });

     //8)Do not get typing notifications
        it(' Do not get typing notifications', function() {
            browser.driver.sleep(10000);
        }); 

     //9)Get chat history with other users
     it('Get chat history with other users', function() {
      browser.actions().mouseMove(element(by.id('default'))).perform();
      browser.driver.sleep(20000);
        var value = browser.executeScript("return $('.midContent.scrollbar').scrollTop(10000);");
      browser.driver.sleep(5000);
     });

     //10)Edit sent message
     it('Edit sent message', function() {
        browser.actions().mouseMove(element(by.id('default'))).perform();
        browser.driver.sleep(5000);
          var value = browser.executeScript("return $('.midContent.scrollbar').scrollTop(0);");
        browser.driver.sleep(5000);
      element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/p')).click();
      browser.driver.sleep(8000);
     element(by.className('fa fa-ellipsis-v')).click();
      browser.driver.sleep(8000);
      element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[3]/a[2]/ul/li[1]/a')).click();
      browser.driver.sleep(8000);
      element(by.xpath('//*[@id="field-7"]')).sendKeys(" how are you");
      browser.driver.sleep(10000);
      element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/div[2]/a[1]')).click();
      browser.driver.sleep(4000);
     });

  
     //12)
     //13)pin a message
     it('pin a message', function() {
      browser.driver.sleep(5000);
        browser.actions().mouseMove(element(by.id('default'))).perform();
        browser.driver.sleep(5000);
          var value = browser.executeScript("return $('.midContent.scrollbar').scrollTop(0);");
        browser.driver.sleep(5000);
      element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/p')).click();
      browser.driver.sleep(8000);
     element(by.className('fa fa-ellipsis-v')).click();
      browser.driver.sleep(8000);
      element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[3]/a[2]/ul/li[3]/a')).click();
      browser.driver.sleep(10000);
     });
         //
         it('pin other message',function() {
      element(by.xpath('//*[@id="default"]/div[1]/ul/li[3]/aadhya-chat-message/div/div/div/div/p')).click();
      browser.driver.sleep(10000);
     element(by.xpath('//*[@id="default"]/div[1]/ul/li[3]/aadhya-chat-message/div/div/div/div[2]/a[2]')).click();
      browser.driver.sleep(10000);
      element(by.xpath('//*[@id="default"]/div[1]/ul/li[3]/aadhya-chat-message/div/div/div/div[2]/a[2]/ul/li[3]/a')).click();
      browser.driver.sleep(8000);
      
      var pinned=element(by.xpath('//*[@id="default"]/div[1]/ul/li[3]/aadhya-chat-message/div/div/div/div[1]/small/div'));
      browser.driver.sleep(8000);
      expect(pinned.isPresent()).toBe(true);
     browser.driver.sleep(8000);
     });

     //14)cannot pin a message twice
     it('cannot pin a message twice', function() {
       browser.driver.sleep(5000);
      element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[3]/p')).click();
      browser.driver.sleep(10000);
     element(by.className('fa fa-ellipsis-v')).click();
      browser.driver.sleep(10000);
      
     });

     //15)unpin message
     it('unpin message', function() {
      browser.driver.sleep(6000);
      element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[3]/p')).click();
      browser.driver.sleep(10000);
     element(by.className('fa fa-ellipsis-v')).click();
      browser.driver.sleep(10000);
    var a=  element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[4]/a[2]/ul/li[3]/a')).click();
    browser.driver.sleep(6000);
    var pinned=element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/small/div'));
    browser.driver.sleep(6000);
    expect(pinned.isPresent()).toBe(false);
   browser.driver.sleep(6000);
     });

     
  

     //19)Get push notification when application minimized
     /*it('Get push notification when application minimized', function() {
      element(by.linkText('testpurpose')).click();
       browser.driver.sleep(3000);
        browser.actions().mouseMove(element(by.id('default'))).perform();
        browser.driver.sleep(5000);
          var value = browser.executeScript("return $('.midContent.scrollbar').scrollTop(1000);");
        browser.driver.sleep(5000);
      element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/input')).sendKeys("hello guys");
      browser.driver.sleep(20000);
      element(by.className('fa fa-telegram')).click();
      browser.driver.sleep(20000);
      
     });

     //20)As a user I should able to get unread count in one-one chat
     it('As a user I should able to get unread count in one-one chat', function() {
        
        browser.driver.sleep(2000);
        element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/input')).sendKeys("hello guys");
      browser.driver.sleep(20000);
      element(by.className('fa fa-telegram')).click();
        browser.driver.sleep(20000);
       });*/

     //21)Send code snippet.
     it('Send code snippet.', function() {
      element(by.linkText('Testing Group')).click();
      browser.actions().mouseMove(element(by.id('default'))).perform();
  browser.driver.sleep(8000);
    var value1 = browser.executeScript("return $('.midContent.scrollbar').scrollTop(10000);");
      element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/span[1]/span/button/span')).click();
      browser.driver.sleep(10000);
      element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/span[1]/span/ul/li[5]/a')).click();
      browser.driver.sleep(10000);
      element(by.xpath('//*[@id="file-share"]/div/div/div[2]/div[2]/ace-editor/textarea')).sendKeys("hi");
      browser.driver.sleep(10000);
      element(by.xpath('//*[@id="file-share"]/div/div/div[3]/button[2]')).click();
      browser.driver.sleep(4000);
     });

     //22)Send data to email through code snippet.
     it('Send data to email through code snippet.', function() {
      browser.actions().mouseMove(element(by.id('default'))).perform();
  browser.driver.sleep(8000);
    var value1 = browser.executeScript("return $('.midContent.scrollbar').scrollTop(10000);");
      element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/span[1]/span/button/span')).click();
      browser.driver.sleep(4000);
      element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/span[1]/span/ul/li[5]/a')).click();
      browser.driver.sleep(4000);
      element(by.xpath('//*[@id="file-share"]/div/div/div[2]/div[1]/select')).$('[value="email"]').click();
      browser.driver.sleep(8000);
      element(by.xpath('//*[@id="file-share"]/div/div/div[2]/div[2]/quill-editor/div[2]/div[1]')).sendKeys("hi");
      browser.driver.sleep(8000);
      element(by.xpath('//*[@id="file-share"]/div/div/div[3]/button[2]')).click();
      browser.driver.sleep(4000);
     });

     //23)Send url in one-one chat
     it('Send url in one-one chat', function() {
      browser.actions().mouseMove(element(by.id('default'))).perform();
  browser.driver.sleep(8000);
    var value1 = browser.executeScript("return $('.midContent.scrollbar').scrollTop(10000);");
      element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/input')).sendKeys("https://www.mrf11.com");
      browser.driver.sleep(8000);
      element(by.className('fa fa-telegram')).click();
      browser.driver.sleep(8000);
      element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/input')).sendKeys("hi");
      browser.driver.sleep(6000);
      element(by.className('fa fa-telegram')).click();
      browser.driver.sleep(5000);
      element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/input')).sendKeys("hi");
      browser.driver.sleep(6000);
      element(by.className('fa fa-telegram')).click();
      browser.driver.sleep(5000);
     });

     //24)Chat history with timestamps
     it('Chat history with timestamps', function() {
      browser.driver.sleep(5000);
  browser.actions().mouseMove(element(by.id('default'))).perform();
  browser.driver.sleep(6000);
    var value1 = browser.executeScript("return $('.midContent.scrollbar').scrollTop(10000);");
   var a=element(by.xpath('//*[@id="default"]/div[1]/ul/li[2]/aadhya-chat-message/div/div/div/div[2]/p'));
  browser.driver.sleep(6000);
      }); 

      //25)View profile picture
      it('View profile picture', function() {
        browser.driver.sleep(5000);
  browser.actions().mouseMove(element(by.id('default'))).perform();
  browser.driver.sleep(6000);
    var value1 = browser.executeScript("return $('.midContent.scrollbar').scrollTop(10000);");
  browser.driver.sleep(6000);
      });



      //18)delete reply to a message
     it('delete reply to a message', function() {
      browser.driver.sleep(3000);
      browser.actions().mouseMove(element(by.id('default'))).perform();
        browser.driver.sleep(5000);
          var value = browser.executeScript("return $('.midContent.scrollbar').scrollTop(1000);");
      
      browser.driver.sleep(5000);
      element(by.xpath('//*[@id="default"]/div[1]/ul/li[10]/aadhya-chat-message/div/div/div/div[1]/p')).click();
      browser.driver.sleep(8000);
      element(by.xpath('//*[@id="default"]/div[1]/ul/li[10]/aadhya-chat-message/div/div/div/div[2]/span/a/span')).click();
      browser.driver.sleep(8000);
      element(by.xpath('//*[@id="message-text"]')).sendKeys('hello');
      browser.driver.sleep(8000);
      var enter = browser.actions().sendKeys(protractor.Key.ENTER);
      enter.perform();
      browser.driver.sleep(8000);
      //-------------------
      element(by.xpath('//*[@id="sidebar"]/div[2]/div[3]/div[1]/div/aadhya-reply-message/div[2]/p')).click();
      browser.driver.sleep(20000);
     element(by.xpath('//*[@id="sidebar"]/div[2]/div[3]/div[1]/div/aadhya-reply-message/div[2]/span')).click();
    
      browser.driver.sleep(20000);
      element(by.xpath('//*[@id="sidebar"]/div[2]/div[3]/div[1]/div/aadhya-reply-message/div[2]/span/ul/li[2]/a')).click();
      browser.driver.sleep(8000);
     });

       //11)Delete sent message
   it('Delete sent message', function() {
    browser.actions().mouseMove(element(by.id('default'))).perform();
    browser.driver.sleep(5000);
      var value = browser.executeScript("return $('.midContent.scrollbar').scrollTop(1000);");
  
  browser.driver.sleep(5000);
    element(by.xpath('//*[@id="default"]/div[1]/ul/li[11]/aadhya-chat-message/div/div/div/div[1]/p')).click();
    browser.driver.sleep(10000);
   element(by.className('fa fa-ellipsis-v')).click();
    browser.driver.sleep(10000);
    element(by.xpath('//*[@id="default"]/div[1]/ul/li[11]/aadhya-chat-message/div/div/div/div[2]/a[2]/ul/li[2]/a')).click();
    browser.driver.sleep(10000);
   });
   //16)Add reply to amessage
it('Add reply to amessage', function() {
  browser.actions().mouseMove(element(by.id('default'))).perform();
  browser.driver.sleep(5000);
    var value = browser.executeScript("return $('.midContent.scrollbar').scrollTop(0);");
  browser.driver.sleep(5000);

 element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[3]/p')).click();
browser.driver.sleep(10000);
element(by.className('fa fa-share')).click();
browser.driver.sleep(10000);
var a=  element(by.xpath('//*[@id="message-text"]')).sendKeys('hi');
browser.driver.sleep(5000);
var enter = browser.actions().sendKeys(protractor.Key.ENTER);
enter.perform();
browser.driver.sleep(5000);
element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-thread/div/ul/li[1]/a/i')).click();
browser.driver.sleep(5000);
//---------
element(by.xpath('//*[@id="default"]/div[1]/ul/li[3]/aadhya-chat-message/div/div/div/div/p')).click();
browser.driver.sleep(10000);
element(by.className('fa fa-share')).click();
browser.driver.sleep(10000);
var a1=  element(by.xpath('//*[@id="message-text"]')).sendKeys('hi');
browser.driver.sleep(5000);
var enter1 = browser.actions().sendKeys(protractor.Key.ENTER);
enter1.perform();
browser.driver.sleep(5000);
element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-thread/div/ul/li[1]/a/i')).click();
browser.driver.sleep(5000);
browser.actions().mouseMove(element(by.id('default'))).perform();
browser.driver.sleep(5000);
  var value = browser.executeScript("return $('.midContent.scrollbar').scrollTop(0);");
  browser.driver.sleep(5000);
 });

 //17)update reply to amessage
 it('update reply to amessage', function() {
  protractor.loginHelpers.Login();
  browser.actions().mouseMove(element(by.id('default'))).perform();
  browser.driver.sleep(5000);
    var value = browser.executeScript("return $('.midContent.scrollbar').scrollTop(0);");
  
  browser.driver.sleep(3000);
   element(by.xpath('//*[@id="default"]/div[1]/ul/li[3]/aadhya-chat-message/div/div/div/div/p')).click();
   browser.driver.sleep(8000);
   element(by.className('fa fa-share')).click();
   browser.driver.sleep(8000);
   element(by.xpath('//*[@id="sidebar"]/div[2]/div[3]/div[1]/div/aadhya-reply-message/div[2]')).click();
   browser.driver.sleep(8000);
  element(by.xpath('//*[@id="sidebar"]/div[2]/div[3]/div[1]/div/aadhya-reply-message/div[2]/span')).click();
  browser.driver.sleep(20000);
 element(by.linkText('Edit Reply')).click();
  browser.driver.sleep(10000);
  element(by.xpath('//*[@id="sidebar"]/div[2]/div[3]/div[1]/div/aadhya-reply-message/input')).sendKeys('edited');
  
  browser.driver.sleep(5000);
var enter = browser.actions().sendKeys(protractor.Key.ENTER);
  enter.perform();
  browser.driver.sleep(5000);
  element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-thread/div/ul/li[1]/a/i')).click();
  browser.driver.sleep(5000);
  browser.actions().mouseMove(element(by.id('default'))).perform();
  browser.driver.sleep(5000);
    var value = browser.executeScript("return $('.midContent.scrollbar').scrollTop(0);");
    browser.driver.sleep(5000);
 });
  });
