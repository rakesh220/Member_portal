//1) Send text message in instant chat
describe('instant chat cases', function() {
    //2)
    it('Send text messages to other users', function() {
      protractor.loginHelpers.Login();
    element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/input')).sendKeys("hi");
   browser.driver.sleep(6000);
   element(by.className('fa fa-telegram')).click();
    browser.driver.sleep(6000);
    }); 
   //3)
   it('Send any type of file (or) image (or) video to other users', function() {
  element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/span[1]/span/button/span')).click();
  browser.driver.sleep(30000);
  element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/span[1]/span/ul/li[3]/a/label')).click();
  browser.driver.sleep(30000);
  }); 
  //4)
  it('Add reaction to messages in chat', function() {
  element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/p')).click();
  element(by.className('fa fa-smile-o')).click();
  browser.driver.sleep(15000);
  element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[3]/a[1]/ul/li[3]/img')).click();
  browser.driver.sleep(10000);
  });
  //5)
  it('Remove reaction to messages in chat.', function() {
  element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/span/span/img')).click();
  browser.driver.sleep(20000);
  });
  //6)
  //7)
  it('Get typeing notification in chat', function() {
  browser.driver.sleep(30000);
  });
  //8)
  it('Get chat history with other users.', function() {
  browser.actions().mouseMove(element(by.id('default'))).perform();
  browser.driver.sleep(20000);
    var value = browser.executeScript("return $('.midContent.scrollbar').scrollTop(1000);");
  browser.driver.sleep(8000);
  });
  //9)
  it('Edit sent message.', function() {
  element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/p')).click();
  browser.driver.sleep(8000);
 element(by.className('fa fa-ellipsis-v')).click();
  browser.driver.sleep(8000);
  element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[3]/a[2]/ul/li[1]/a')).click();
  browser.driver.sleep(8000);
  element(by.xpath('//*[@id="field-7"]')).sendKeys(" Editied Message");
  browser.driver.sleep(8000);
  element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/div[2]/a[1]')).click();
  browser.driver.sleep(4000);
  });
  //10)
  it('Delete sent message', function() {
  element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[3]/p')).click();
  browser.driver.sleep(10000);
 element(by.className('fa fa-ellipsis-v')).click();
  browser.driver.sleep(10000);
  element(by.linkText('Delete Message')).click();
  browser.driver.sleep(10000);
  });
  //11)
  it('pin a message.', function() {
  element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/p')).click();
  browser.driver.sleep(8000);
 element(by.className('fa fa-ellipsis-v')).click();
  browser.driver.sleep(8000);
  element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[3]/a[2]/ul/li[3]/a')).click();
  browser.driver.sleep(8000);
  });
 //12)
 it('unpin message', function() {
  element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[3]/p')).click();
  browser.driver.sleep(10000);
 element(by.className('fa fa-ellipsis-v')).click();
  browser.driver.sleep(10000);
var a=  element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[4]/a[2]/ul/li[3]/a')).click();
browser.driver.sleep(5000);
 });
 //13)
 it('Add reply to amessage', function() {
    browser.driver.sleep(5000);
    element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[3]/p')).click();
  browser.driver.sleep(10000);
 element(by.className('fa fa-share')).click();
  browser.driver.sleep(10000);
var a=  element(by.xpath('//*[@id="message-text"]')).sendKeys('reply message');
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
 //14)
 it('update reply to amessage', function() {
    element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[4]/div/h5/a')).click();
    browser.driver.sleep(20000);
   element(by.xpath('//*[@id="sidebar"]/div[2]/div[3]/div[1]/div/aadhya-reply-message/div[2]/p')).click();
    browser.driver.sleep(10000);
    element(by.xpath('//*[@id="sidebar"]/div[2]/div[3]/div[1]/div/aadhya-reply-message/div[2]/span')).click();
    browser.driver.sleep(10000);
    element(by.xpath('//*[@id="sidebar"]/div[2]/div[3]/div[1]/div/aadhya-reply-message/div[2]/span/ul/li[1]/a')).click();
    browser.driver.sleep(5000);
    element(by.xpath('//*[@id="sidebar"]/div[2]/div[3]/div[1]/div/aadhya-reply-message/input')).sendKeys('edited message');
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
 //15)
 it('delete reply to a message', function() {
    element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[4]/div/h5/a')).click();
    browser.driver.sleep(20000);
   element(by.xpath('//*[@id="sidebar"]/div[2]/div[3]/div[1]/div/aadhya-reply-message/div[2]/p')).click();
    browser.driver.sleep(20000);
    element(by.xpath('//*[@id="sidebar"]/div[2]/div[3]/div[1]/div/aadhya-reply-message/div[2]/span')).click();
    browser.driver.sleep(20000);
    element(by.xpath('//*[@id="sidebar"]/div[2]/div[3]/div[1]/div/aadhya-reply-message/div[2]/span/ul/li[2]/a')).click();
    browser.driver.sleep(10000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-thread/div/ul/li[1]/a/i')).click();
    browser.driver.sleep(5000);
   });
 //16)
 it('Get push notification when application minimized', function() {
  element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/input')).sendKeys("hello guys");
  browser.driver.sleep(20000);
  element(by.className('fa fa-telegram')).click();
  browser.driver.sleep(20000);
 });
  //17)
  it('Send code snippet.', function() {
  browser.actions().mouseMove(element(by.id('default'))).perform();
browser.driver.sleep(10000);
var value1 = browser.executeScript("return $('.midContent.scrollbar').scrollTop(1000);");
  element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/span[1]/span/button/span')).click();
  browser.driver.sleep(10000);
  element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/span[1]/span/ul/li[5]/a')).click();
  browser.driver.sleep(10000);
  element(by.xpath('//*[@id="file-share"]/div/div/div[2]/div[2]/ace-editor/textarea')).sendKeys("hi");
  browser.driver.sleep(10000);
  element(by.xpath('//*[@id="file-share"]/div/div/div[3]/button[2]')).click();
  browser.driver.sleep(4000);
  });
  //18)
  it('Send data to email through code snippet.', function() {
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
  browser.driver.sleep(4000);
  });
 //19)
 it('Send url in one-one chat.', function() {
  browser.actions().mouseMove(element(by.id('default'))).perform();
browser.driver.sleep(10000);
var value1 = browser.executeScript("return $('.midContent.scrollbar').scrollTop(1000);");
  element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/input')).sendKeys("https://www.mrf.com");
  browser.driver.sleep(4000);
  element(by.className('fa fa-telegram')).click();
  browser.driver.sleep(4000);
 });
 //20)
 it('Chat history with timestamps', function(){
browser.actions().mouseMove(element(by.id('default'))).perform();
browser.driver.sleep(10000);
var value1 = browser.executeScript("return $('.midContent.scrollbar').scrollTop(1000);");
var a=element(by.xpath('//*[@id="default"]/div[1]/ul/li[2]/aadhya-chat-message/div/div/div/div[2]/p'));
browser.driver.sleep(4000);
  }); 
  //21)
  it('View profile picture.', function() {
browser.actions().mouseMove(element(by.id('default'))).perform();
browser.driver.sleep(10000);
var value1 = browser.executeScript("return $('.midContent.scrollbar').scrollTop(1000);");
browser.driver.sleep(4000);
  }); 
  //22)
  it('remove instant group from contact list', function() {
element(by.xpath('//*[@id="leftscroll"]/ul[4]/li[110]/div/span[2]/a/i')).click();
browser.driver.sleep(4000);
protractor.loginHelpers.Logout();
  }); 
  
});