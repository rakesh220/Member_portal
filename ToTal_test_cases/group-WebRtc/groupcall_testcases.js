describe('webRTC one-to-one chat cases', function() {
    //1) As a user i should able to make audio call
    it('As a user i should able to make audio call', function() {
      protractor.loginHelpers.Login();
  
      element(by.linkText('Testing Group')).click();
      browser.driver.sleep(10000);
      element(by.className('fa fa-calendar font3x')).click();
      browser.driver.sleep(7000);
      element(by.className('fa fa-calendar font3x')).click();
      browser.driver.sleep(7000);
      browser.actions().mouseMove(element(by.className('fc-scroller fc-day-grid-container'))).perform();
      browser.driver.sleep(8000);
        var value = browser.executeScript("return $('.fc-scroller.fc-day-grid-container').scrollTop(50000);");
      browser.driver.sleep(8000);
      element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/calendar-view/app-calendarbody/div[1]/ng-fullcalendar/div[2]/div/table/tbody/tr/td/div/div/div[4]/div[2]/table/tbody/tr[1]/td[6]/a/div/span[2]')).click();
      browser.driver.sleep(8000);
      element(by.xpath('//*[@id="viewmeeting"]/div/div/div[3]/a')).click();
      browser.driver.sleep(10000);
      browser.get('https://dya4247t866iy.cloudfront.net/#/groupcall/5b7d7b0ea720161d6525893f');
      browser.driver.sleep(15000);
      element(by.xpath('/html/body/aadhya-root/aadhya-joinmeeting/aadhya-groupcall-welcome/div/div[2]/div/div/div[3]/div[3]/button')).click();
      browser.driver.sleep(40000);
      element(by.xpath('/html/body/aadhya-root/aadhya-joinmeeting/div/div[1]/div[1]/ul/li[1]/a/i')).click();
     browser.driver.sleep(15000);
      browser.get('https://dya4247t866iy.cloudfront.net/#/chat/calendar/5b586fddeeb6980c68dd9b9f?type=group');
      browser.driver.sleep(10000);
      

    protractor.loginHelpers.Logout();
    
    });
});
