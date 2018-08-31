describe('calendar chat cases', function() {
    //1) Send text message in one-to-one chat
    it('user can see previous months', function() {
      protractor.loginHelpers.Login();
      //element(by.linkText('testpurpose')).click();
      
      
      //element(by.className('fa fa-calendar font3x')).click();
      //browser.driver.sleep(15000);
      element(by.id('userId17')).click();
      browser.driver.sleep(10000);
      element(by.className('fa fa-calendar font3x')).click();

            browser.driver.sleep(10000);
            element(by.className('fa fa-calendar font3x')).click();

            browser.driver.sleep(10000);
            element(by.css('fc-prev-button fc-button fc-state-default fc-corner-left')).click();
            browser.driver.sleep(10000);
    
    }); 
});