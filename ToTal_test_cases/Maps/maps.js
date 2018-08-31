describe('maps test cases', function() {
    //1) 
    /*it('It should display  the selected user current location', function() {
      protractor.loginHelpers.Login();

      browser.driver.sleep(5000);
      element(by.xpath('//*[@id="navbar"]/ul/li[3]/a/i')).click();
     browser.driver.sleep(10000);
     protractor.loginHelpers.Logout();
    }); 
    //2)
  it('Accessing the  other users location ', function() {
    protractor.loginHelpers.Login();
    browser.driver.sleep(5000);
    element(by.xpath('//*[@id="navbar"]/ul/li[3]/a/i')).click();
        element(by.id('userId61')).click();
       browser.driver.sleep(10000);
       element(by.xpath('//*[@id="navbar"]/ul/li[3]/a/i')).click();
       browser.driver.sleep(10000);
       protractor.loginHelpers.Logout();
      }); 
      //3)
      it('Accessing the User Info Details in maps page', function() {
        protractor.loginHelpers.Login();
        browser.driver.sleep(5000);
        element(by.xpath('//*[@id="navbar"]/ul/li[3]/a/i')).click();
       element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-topbar-innerleft/div[1]/div/div[1]/div/div/div[2]/h5')).click();
       browser.driver.sleep(10000);
       element(by.className('fa fa-times-circle')).click();
       browser.driver.sleep(10000);
       element(by.linkText('Testing Group')).click();
       browser.driver.sleep(10000);
       element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-topbar-innerleft/div[1]/div/div[1]/div/div/div[1]/a/img')).click();
       browser.driver.sleep(10000);
       
      }); 
      //4))
      it('Closing the user info', function() {
        element(by.className('fa fa-times-circle')).click();
        browser.driver.sleep(10000);
        protractor.loginHelpers.Logout();
      });
       //5)
      it('application should display previously logged in user location', function() {
        protractor.loginHelpers.Login();
        element(by.id('userId37')).click();
        browser.driver.sleep(10000);
        element(by.xpath('//*[@id="navbar"]/ul/li[3]/a/i')).click();
        browser.driver.sleep(10000);
        protractor.loginHelpers.Logout();
       });
       //6))
      it('Every user should  able to get other users location ', function() {
          protractor.loginHelpers.TestLogin();
          element(by.xpath('//*[@id="navbar"]/ul/li[3]/a/i')).click();
          element(by.id('userId27')).click();
          browser.driver.sleep(5000);
          element(by.id('userId44')).click();
          browser.driver.sleep(5000);
          element(by.id('userId47')).click();
          browser.driver.sleep(5000);
          protractor.loginHelpers.TestLogout();

       });
       //7)
       it('Application should not miss match users location ', function() {
         protractor.loginHelpers.Login();
        element(by.id('userId77')).click();
        browser.driver.sleep(5000);
        element(by.xpath('//*[@id="navbar"]/ul/li[3]/a/i')).click();
        browser.driver.sleep(5000);
        element(by.id('userId97')).click();
        browser.driver.sleep(5000);
        element(by.id('userId66')).click();
        browser.driver.sleep(5000);
        protractor.loginHelpers.Logout();
       });
      //8)
      it(' As a user i should able to get my weather details', function() {
        protractor.loginHelpers.Login();
        element(by.xpath('//*[@id="navbar"]/ul/li[3]/a/i')).click();
        browser.driver.sleep(5000);
        element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-map-page/div/div[1]/usersearch/div/button')).click();
        browser.driver.sleep(5000);
        element(by.className('fa fa-times-circle')).click();
        browser.driver.sleep(5000);
        expect(true).toBe(false);
      
       });
       //9)
       it('As a user I should be able to get other users weather details', function() {

        element(by.id('userId77')).click();
        browser.driver.sleep(5000);
        element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-map-page/div/div[1]/usersearch/div/button')).click();
        browser.driver.sleep(10000);
        expect(true).toBe(false);
       });
       //10)
       it('Application should display next 24 hours weather details of users.', function() {
      
        element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/app-weather/div/div/div/div/p[2]/button[2]')).click();
        browser.driver.sleep(10000);
        expect(true).toBe(false);
        
       });
       //11)
       it('Application should display weekly  weather details of users.', function() {
        element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/app-weather/div/div/div/div/p[2]/button[3]')).click();
        browser.driver.sleep(10000);
        expect(true).toBe(false);
        element(by.className('fa fa-times-circle')).click();
        browser.driver.sleep(5000);
        protractor.loginHelpers.Logout();
       });
       //12)
       it('Application should display heat map.', function() {
        protractor.loginHelpers.Login();
        element(by.xpath('//*[@id="navbar"]/ul/li[3]/a/i')).click();
        browser.driver.sleep(5000);
        element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-map-page/div/div[1]/usersearch/div/div[3]/button')).click();
        browser.driver.sleep(5000);
        element(by.xpath('//*[@id="search_loc"]')).sendKeys('khammam');
        browser.driver.sleep(15000);
        element(by.xpath('/html/body/div[6]/div[1]/span[3]')).click();
        browser.driver.sleep(10000);
        
       });
       //13)
       it('Weather details should not miss match', function() {
        element(by.id('userIdrakesh')).click();
        browser.driver.sleep(5000);
        element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-map-page/div/div[1]/usersearch/div/button')).click();
        browser.driver.sleep(5000);
        element(by.id('userId97')).click();
        browser.driver.sleep(5000);
        element(by.id('userId66')).click();
       // element(by.className('fa fa-times-circle')).click();
        browser.driver.sleep(5000);
        expect(true).toBe(false);
       });
       //14)
       it('closing the weather details', function() {
        element(by.className('fa fa-times-circle')).click();
        browser.driver.sleep(10000);
        protractor.loginHelpers.Logout();
       });
       //15)*/
       it('User should able to draw circle', function() {
      
         browser.driver.sleep(8000);
         element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-map-page/div/div[1]/mapoperations/div/button[3]')).click();
         browser.driver.sleep(10000);
         var a =element(by.xpath('//*[@id="map"]/div/div/div[1]/div[1]'));
         browser.actions().
        mouseMove(a).
        mouseMove({x: 50, y: 50}).
        doubleClick().
        perform();
        browser.driver.sleep(20000);
        browser.actions().mouseMove({x: 60, y: 60}).perform().then(() => browser.actions()
        .click()
        .perform()).then(function() {
            browser.driver.sleep(20000);
         var c =  element(by.xpath('//*[@id="map"]/div/div/div[1]'));
         browser.driver.sleep(20000);
         //element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-map-page/div/div[1]/mapoperations/div/button[4]')).click();
         //browser.driver.sleep(5000);
        });
       });
       //16)
       it('application should display users in the circle', function() {
      
       browser.driver.sleep(10000);
       var a =element(by.xpath('//*[@id="map"]/div/div/div[1]/div[1]'));
       browser.actions().
      mouseMove(a).
      mouseMove({x: 50, y: 50}).
      doubleClick().
      perform();
      browser.driver.sleep(20000);
      browser.actions().mouseMove({x: 60, y: 60}).perform().then(() => browser.actions()
      .click()
      .perform()).then(function() {
          browser.driver.sleep(20000);
       var c =  element(by.xpath('//*[@id="map"]/div/div/div[1]')).click();
       browser.driver.sleep(20000);
      });
      
       });
       //17)
       it('Application shouldn’t display one user in multiple circles', function() {
        expect(true).toBe(false);
       });
       //18)
       it('Every User should able to get users in circle part', function() {
        browser.driver.sleep(10000);
        var a =element(by.xpath('//*[@id="map"]/div/div/div[1]/div[1]'));
        browser.actions().
       mouseMove(a).
       mouseMove({x: 50, y: 50}).
       doubleClick().
       perform();
       browser.driver.sleep(20000);
       browser.actions().mouseMove({x: 60, y: 60}).perform().then(() => browser.actions()
       .click()
       .perform()).then(function() {
           browser.driver.sleep(20000);
        var c =  element(by.xpath('//*[@id="map"]/div/div/div[1]')).click();
        browser.driver.sleep(20000);
       });
      });
       //19)
       it('Clear the circles', function() {
        element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-map-page/div/div[1]/mapoperations/div/button[4]')).click();
        browser.driver.sleep(5000);
       });
       //20)
       it('User should able to access circle at any time', function() {
        browser.driver.sleep(10000);
        var a =element(by.xpath('//*[@id="map"]/div/div/div[1]/div[1]'));
        browser.actions().
       mouseMove(a).
       mouseMove({x: 50, y: 50}).
       doubleClick().
       perform();
       browser.driver.sleep(20000);
       browser.actions().mouseMove({x: 60, y: 60}).perform().then(() => browser.actions()
       .click()
       .perform()).then(function() {
           browser.driver.sleep(20000);
        var c =  element(by.xpath('//*[@id="map"]/div/div/div[1]')).click();
        browser.driver.sleep(20000);
       });
      });
       //21)
       /*it('User should able to draw polygon', function() {
        //pending
       });
       //22)
       it('application should display users in the polygon', function() {
        //pending
       });
       //23) 
       it('Application shouldn’t display one user in multiple polygons', function() {
        //pending
       });
       //24)
       it('User should able to access polygon at any time', function() {
        //pending
       });
       //25)
       it('Clear polygons', function() {
        element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-map-page/div/div[1]/mapoperations/div/button[4]')).click();
        browser.driver.sleep(5000);
       });
       //26) 
       it('User should able to search members in map', function() {
        element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-map-page/div/div[1]/usersearch/div/div[2]/button')).click();
        browser.driver.sleep(5000);
        element(by.xpath('//*[@id="User"]')).sendKeys('roja');
        browser.driver.sleep(5000);
       
       });
       //27) 
       it('user should able to search group members ', function() {
        
        element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-map-page/div/div[1]/usersearch/div/div[2]/button')).click();
        browser.driver.sleep(5000);
        element(by.xpath('//*[@id="User"]')).clear();
        browser.driver.sleep(5000);
        element(by.xpath('//*[@id="User"]')).sendKeys('Testing Group');
        browser.driver.sleep(5000);
        
       });
       //28)
       it('Application should display location of searched member', function() {
        
        element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-map-page/div/div[1]/usersearch/div/div[2]/button')).click();
        browser.driver.sleep(5000);
        element(by.xpath('//*[@id="User"]')).clear();
        browser.driver.sleep(5000);
        element(by.xpath('//*[@id="User"]')).sendKeys('roja');
        browser.driver.sleep(5000);
        element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-map-page/div/div[1]/usersearch/div/div[2]/div/form/div/ul/li[1]')).click();
        browser.driver.sleep(5000);
        
       });
       //29)
       it('Application should display location of group members', function() {
      
        element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-map-page/div/div[1]/usersearch/div/div[2]/button')).click();
        browser.driver.sleep(5000);
        element(by.xpath('//*[@id="User"]')).clear();
        browser.driver.sleep(5000);
        element(by.xpath('//*[@id="User"]')).sendKeys('Testing Group');
        browser.driver.sleep(5000);
        element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-map-page/div/div[1]/usersearch/div/div[2]/div/form/div/ul/li[12]')).click();
        browser.driver.sleep(5000);
       });
       //30)
       it('Application shouldn’t miss match searched user location', function() {
        //pending
       });
       //31)
       it(' User should able to get route map', function() {
        element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-map-page/div/div[1]/usersearch/div/div[1]/button')).click();
        browser.driver.sleep(10000);
        element(by.xpath('//*[@id="search_from"]')).sendKeys('vijayawada');
        browser.driver.sleep(10000);
       element(by.xpath('/html/body/div[1]/div[1]')).click();
        browser.driver.sleep(10000);
        element(by.xpath('//*[@id="search_to"]')).sendKeys('khammam');
        browser.driver.sleep(10000);
       element(by.xpath('/html/body/div[2]/div[1]')).click();
        browser.driver.sleep(10000);
        element(by.buttonText('Search')).click();
        browser.driver.sleep(15000);
       });
       //32)
       it('User should able to set origin and destination Points', function() {
        
        element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-map-page/div/div[1]/usersearch/div/div[1]/button')).click();
        browser.driver.sleep(10000);
        element(by.xpath('//*[@id="search_from"]')).clear();
        browser.driver.sleep(5000);
        element(by.xpath('//*[@id="search_to"]')).clear();
        browser.driver.sleep(5000);
        element(by.xpath('//*[@id="search_from"]')).sendKeys('vijayawada');
        browser.driver.sleep(10000);
        element(by.xpath('//*[@id="search_to"]')).sendKeys('khammam');
        browser.driver.sleep(10000);
      
       });
//33)
it('Application shouldn’t display route map before clicking on search', function() {
  

  element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-map-page/div/div[1]/usersearch/div/div[1]/button')).click();
  browser.driver.sleep(10000);
  element(by.xpath('//*[@id="search_from"]')).clear();
  browser.driver.sleep(5000);
  element(by.xpath('//*[@id="search_to"]')).clear();
  browser.driver.sleep(5000);
  element(by.xpath('//*[@id="search_from"]')).sendKeys('vijayawada');
  browser.driver.sleep(10000);
  //element(by.xpath('/html/body/div[1]/div[1]')).click();
 // browser.driver.sleep(10000);
  element(by.xpath('//*[@id="search_to"]')).sendKeys('khammam');
  browser.driver.sleep(10000);
 // element(by.xpath('/html/body/div[2]/div[1]')).click();
  browser.driver.sleep(10000);

 });
//)34
it('User must and should give origin and end points', function() {
  

  element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-map-page/div/div[1]/usersearch/div/div[1]/button')).click();
  browser.driver.sleep(10000);
  element(by.xpath('//*[@id="search_from"]')).clear();
  browser.driver.sleep(5000);
  element(by.xpath('//*[@id="search_to"]')).clear();
  browser.driver.sleep(5000);
  element(by.xpath('//*[@id="search_from"]')).sendKeys('vijayawada');
  browser.driver.sleep(10000);
  element(by.xpath('/html/body/div[1]/div[1]')).click();
  browser.driver.sleep(10000);
  element(by.buttonText('Search')).click();
  browser.driver.sleep(6000);

 });*/

       });
