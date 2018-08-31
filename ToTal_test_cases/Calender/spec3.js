describe('calendar chat cases', function() {
    //1) Send text message in one-to-one chat
    it('user can select week', function() {
      protractor.loginHelpers.Login();
      //element(by.linkText('testpurpose')).click();
      //browser.driver.sleep(15000);
      
      ///element(by.className('fa fa-calendar font3x')).click();
      //browser.driver.sleep(15000);
      element(by.id('userId17')).click();
      browser.driver.sleep(10000);
      element(by.className('fa fa-calendar font3x')).click();

            browser.driver.sleep(10000);
            element(by.className('fa fa-calendar font3x')).click();

            browser.driver.sleep(10000);
            element(by.buttonText('week')).click();
            browser.driver.sleep(10000);

    
    }); 
});