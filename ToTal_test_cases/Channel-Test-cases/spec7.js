//1) Get chat history with other users..
describe('chennel chat cases', function() {
    it('Get chat history with other users.', function() {
      protractor.loginHelpers.Login();
    browser.actions().mouseMove(element(by.id('default'))).perform();
    browser.driver.sleep(10000);
      var value = browser.executeScript("return $('.midContent.scrollbar').scrollTop(1000);");
    browser.driver.sleep(8000);
    protractor.loginHelpers.Logout();
  
    }); 
  });