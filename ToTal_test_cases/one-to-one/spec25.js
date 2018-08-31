//1) user see profile pic every message
describe('one-to-one chat cases', function() {
    it('View profile picture.', function() {
      protractor.loginHelpers.Login();
browser.actions().mouseMove(element(by.id('default'))).perform();
browser.driver.sleep(10000);
  var value1 = browser.executeScript("return $('.midContent.scrollbar').scrollTop(1000);");
browser.driver.sleep(4000);
protractor.loginHelpers.Logout();
    }); 
  });