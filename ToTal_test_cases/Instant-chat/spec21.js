//1) user see profile pic every message
describe('instangt chat cases', ()=> {
    it('View profile picture.', ()=> {
      protractor.loginHelpers.Login();
browser.actions().mouseMove(element(by.id('default'))).perform();
browser.driver.sleep(10000);
  var value1 = browser.executeScript("return $('.midContent.scrollbar').scrollTop(1000);");
browser.driver.sleep(4000);
protractor.loginHelpers.Logout();
    }); 
  });
