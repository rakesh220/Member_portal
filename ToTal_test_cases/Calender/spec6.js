describe('calendar chat cases', function() {
    //1) Send text message in one-to-one chat
    it('user can see previous months', function() {
      protractor.loginHelpers.Login();
      //element(by.linkText('testpurpose')).click();
      
      
      element(by.className('fa fa-calendar font3x')).click();
      browser.driver.sleep(15000);
      element(by.linkText('Testing Group')).click();
      browser.driver.sleep(30000);
     // element(by.className('fa fa-calendar font3x')).click();

           // browser.driver.sleep(10000);
            //element(by.className('fa fa-calendar font3x')).click();

            //browser.driver.sleep(10000);
            element(by.css('fc-icon fc-icon-right-single-arrow')).click();
            browser.driver.sleep(20000);
    
    }); 
});