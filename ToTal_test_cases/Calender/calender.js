describe('calendar chat cases', function() {
    //1) Send text message in one-to-one chat
    it('user open the calendar', function() {
      protractor.loginHelpers.Login();
      element(by.linkText('Testing Group')).click();
      browser.driver.sleep(10000);
      element(by.className('fa fa-calendar font3x')).click();
      browser.driver.sleep(7000);
      element(by.className('fa fa-calendar font3x')).click();
      browser.driver.sleep(7000);
    }); 
   //2)
   it('user can select month', function() {
    browser.driver.sleep(7000);
   element(by.buttonText('month')).click();
   browser.driver.sleep(7000);
   }); 
   //3)
   it('user can select week', function() {
          browser.driver.sleep(7000);
          element(by.buttonText('week')).click();
          browser.driver.sleep(7000);
    }); 
    //4)
   it('user can select day', function() {
    browser.driver.sleep(7000);
    element(by.buttonText('day')).click();
    browser.driver.sleep(7000);
    }); 
    //5)
    it('user can see previous months', function() {
      element(by.buttonText('month')).click();
    browser.driver.sleep(5000);
      element(by.className('fc-prev-button fc-button fc-state-default fc-corner-left')).click();
    browser.driver.sleep(5000);
    element(by.className('fc-prev-button fc-button fc-state-default fc-corner-left')).click();
    browser.driver.sleep(5000);
      }); 
      //6)
      it('user can see after months', function() {
        browser.driver.sleep(10000);
          element(by.className('fc-next-button fc-button fc-state-default fc-corner-right')).click();
        browser.driver.sleep(5000);
        element(by.className('fc-next-button fc-button fc-state-default fc-corner-right')).click();
        browser.driver.sleep(5000);
          }); 
          //7)
    it('user can get current date of the calendar', function() {
     browser.driver.sleep(10000);
    element(by.buttonText('today')).click();
    browser.driver.sleep(6000);
              }); 
              //8)
  it('user should able to open schedule meeting page ', function() {
     browser.driver.sleep(10000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/calendar-view/app-calendarbody/div[1]/ng-fullcalendar/div[2]/div/table/tbody/tr/td/div/div/div[4]/div[2]/table/thead/tr/td[1]')).click();
   browser.driver.sleep(7000);
            }); 
            //9)
     it('user should able to create schedule meeting title ', function() {
                browser.driver.sleep(10000);
               element(by.name('eventName')).sendKeys('Protractor');
              browser.driver.sleep(5000);
          }); 
               //10)
               it('user should able to select the meeting room ', function() {
                browser.driver.sleep(10000);
               element(by.xpath('//*[@id="cal-create-event"]/div/div/form/div[1]/div/div/div[2]/div[1]/label/span')).click();
              browser.driver.sleep(5000);
          }); 
                  //11)
                  it('user should able to select the meeting members ', function() {
                    browser.actions().mouseMove(element(by.name('createMeetingForm'))).perform();
                    browser.driver.sleep(1000);
                     var value = browser.executeScript("return $('.ng-untouched.ng-pristine.ng-invalid').scrollTop(5000);");
                    browser.driver.sleep(15000);
                   element(by.xpath('//*[@id="cal-create-event"]/div/div/form/div[1]/div/div/div[5]/ul/li[1]/span/label/span')).click();
                  browser.driver.sleep(5000);
                  element(by.xpath('//*[@id="cal-create-event"]/div/div/form/div[1]/div/div/div[5]/ul/li[2]/span/label/span')).click();
                  browser.driver.sleep(5000);
              }); 
              //12) user should able to save the select meeting 
              it('user should able to save the select meeting', function() {
                browser.driver.sleep(10000);
               element(by.xpath('//*[@id="cal-create-event"]/div/div/form/div[2]/button[2]')).click();
              browser.driver.sleep(5000);
          });
          //13)user should able to see the create  meeting 
          it('user should able to see the create  meeting', function() {
            browser.driver.sleep(10000);
          });
      
    
      //15)user should able to see the edit symbol
      it('user should able to see the edit symbol', function() {
        element(by.xpath('//*[@id="viewmeeting"]')).click();
        browser.driver.sleep(10000);
      });
     //16)user should able to edit the create meeting
     it('user should able to edit the create meeting', function() {
        browser.driver.sleep(10000);
        element(by.xpath('//*[@id="viewmeeting"]/div/div/div[1]/ul/li[1]/a/i')).click();
        browser.driver.sleep(10000);
        element(by.name('channelName')).clear();
        browser.driver.sleep(1000);
        element(by.name('channelName')).sendKeys('new group');
        browser.driver.sleep(1000);
        element(by.xpath('//*[@id="cal-create-event"]/div/div/form/div[2]/button[2]')).click();
        browser.driver.sleep(8000);
      });
         //18)user should able to close the edit page 
         it('user should able to close the edit page ', function() {
            browser.driver.sleep(10000);
            element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/calendar-view/app-calendarbody/div[1]/ng-fullcalendar/div[2]/div/table/tbody/tr/td/div/div/div[4]/div[2]/table/tbody/tr/td[1]/a/div/span[2]')).click();
            browser.driver.sleep(10000);
            element(by.xpath('//*[@id="viewmeeting"]/div/div/div[1]/ul/li[3]/a/i')).click();
            browser.driver.sleep(1000);
          });
    
   //19) user should able to see the list of events 
   it('user should able to see the list of events ', function() {
    browser.driver.sleep(5000);
    element(by.buttonText('list')).click();
    browser.driver.sleep(1000);
  });
  //20)User should able to  clear the calendar 
  it('User should able to  clear the calendar ', function() {
    except(true).toBe(false);
    browser.driver.sleep(1000);
  });
    //17)User should able to delete create event
    it('User should able to delete create event', function() {
      browser.driver.sleep(10000);
      element(by.buttonText('month')).click();
      browser.driver.sleep(5000);
      element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/calendar-view/app-calendarbody/div[1]/ng-fullcalendar/div[2]/div/table/tbody/tr/td/div/div/div[3]/div[2]/table/tbody/tr/td[5]/a/div')).click();
      browser.driver.sleep(10000);
      element(by.xpath('//*[@id="viewmeeting"]/div/div/div[1]/ul/li[3]/a/i')).click();
      browser.driver.sleep(1000);
    });

  //14) user should able to join call on calendar 
  it('user should able to join call on calendar', function() {
    browser.driver.sleep(10000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/calendar-view/app-calendarbody/div[1]/ng-fullcalendar/div[2]/div/table/tbody/tr/td/div/div/div[4]/div[2]/table/tbody/tr/td[1]/a/div/span[2]')).click();
    browser.driver.sleep(8000);
    element(by.xpath('//*[@id="viewmeeting"]/div/div/div[3]/a')).click();
    browser.driver.sleep(20000);
  });
});
