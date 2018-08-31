describe('webRTC one-to-one chat cases', function() {
    //1) As a user i should able to make audio call
    it('As a user i should able to make audio call', function() {
      protractor.loginHelpers.Login();
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-topbar-innerleft/div[1]/div/div[1]/div/div/div[2]/h5')).click();
    browser.driver.sleep(9000);
    element(by.xpath('//*[@id="sidebar"]/ul/li[3]/a')).click();
    browser.driver.sleep(30000);
    //element(by.className('btn.btn-sm.btn-danger')).click();
    //browser.driver.sleep(10000);
    protractor.loginHelpers.Logout();
    }); 
    //2)As a user i should able to make video call
    it('As a user i should able to make video call', function() {
      protractor.loginHelpers.Login();
      element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-topbar-innerleft/div[1]/div/div[1]/div/div/div[2]/h5')).click();
      browser.driver.sleep(9000);
      element(by.xpath('//*[@id="sidebar"]/ul/li[2]/a')).click();
      browser.driver.sleep(30000);
      protractor.loginHelpers.Logout();
      }); 
      //3) If user make a call then application should notify opposite user
      it('If user make a call then application should notify opposite user', function() {
        protractor.loginHelpers.Login();
        element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-topbar-innerleft/div[1]/div/div[1]/div/div/div[2]/h5')).click();
        browser.driver.sleep(9000);
        element(by.xpath('//*[@id="sidebar"]/ul/li[3]/a')).click();
        browser.driver.sleep(40000);
        element(by.id('/html/body/aadhya-root/app-chat-page/div/div/div/div/aadhya-videopanel/div/div/div[1]/div[3]/button')).click();
        browser.driver.sleep(10000);
        protractor.loginHelpers.Logout();
        }); 
        //4)Accept and Decline options
        it('Accept and Decline options', function() {
          protractor.loginHelpers.Login();
          element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-topbar-innerleft/div[1]/div/div[1]/div/div/div[2]/h5')).click();
          browser.driver.sleep(9000);
          element(by.xpath('//*[@id="sidebar"]/ul/li[3]/a')).click();
          browser.driver.sleep(40000);
          element(by.id('/html/body/aadhya-root/app-chat-page/div/div/div/div/aadhya-videopanel/div/div/div[1]/div[3]/button')).click();
          browser.driver.sleep(10000);
          protractor.loginHelpers.Logout();
          }); 
          //5)Application should allow user to make an audio call
          it('Application should allow user to make an audio call', function() {
            protractor.loginHelpers.Login();
          element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-topbar-innerleft/div[1]/div/div[1]/div/div/div[2]/h5')).click();
          browser.driver.sleep(9000);
          element(by.xpath('//*[@id="sidebar"]/ul/li[3]/a')).click();
          browser.driver.sleep(40000);
          element(by.id('/html/body/aadhya-root/app-chat-page/div/div/div/div/aadhya-videopanel/div/div/div[1]/div[3]/button')).click();
          browser.driver.sleep(10000);
          protractor.loginHelpers.Logout();
            }); 
            //6)Users should able to talk each other in one to one call
            it('Users should able to talk each other in one to one call', function() {
              protractor.loginHelpers.Login();
              element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-topbar-innerleft/div[1]/div/div[1]/div/div/div[2]/h5')).click();
              browser.driver.sleep(9000);
              element(by.xpath('//*[@id="sidebar"]/ul/li[3]/a')).click();
              browser.driver.sleep(50000);
              element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/aadhya-videopanel/div/div/div[1]/div[2]/div/a[3]/i')).click();
              browser.driver.sleep(1000);
              protractor.loginHelpers.Logout();
              }); 
              //7)Users should able to see each other.
              it('Users should able to see each other.', function() {
                protractor.loginHelpers.Login();
                element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-topbar-innerleft/div[1]/div/div[1]/div/div/div[2]/h5')).click();
                browser.driver.sleep(9000);
                element(by.xpath('//*[@id="sidebar"]/ul/li[2]/a')).click();
                browser.driver.sleep(50000);
                element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/aadhya-videopanel/div/div/div[1]/div[2]/div/a[3]/i')).click();
                protractor.loginHelpers.Logout();
                }); 
                //8)Mute audio
                it('Mute audio', function() {
                  protractor.loginHelpers.Login();
                  element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-topbar-innerleft/div[1]/div/div[1]/div/div/div[2]/h5')).click();
                  browser.driver.sleep(9000);
                  element(by.xpath('//*[@id="sidebar"]/ul/li[3]/a')).click();
                  browser.driver.sleep(50000);
                  element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/aadhya-videopanel/div/div/div[1]/div[2]/div/a[4]/i')).click();
                  browser.driver.sleep(1000);
                  element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/aadhya-videopanel/div/div/div[1]/div[2]/div/a[3]/i')).click();
                  browser.driver.sleep(1000);
                  protractor.loginHelpers.Logout();
                  }); 
                  //9)Unmute Audio
                  it('Unmute Audio', function() {
                 protractor.loginHelpers.Login();
                  element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-topbar-innerleft/div[1]/div/div[1]/div/div/div[2]/h5')).click();
                  browser.driver.sleep(9000);
                  element(by.xpath('//*[@id="sidebar"]/ul/li[3]/a')).click();
                  browser.driver.sleep(50000);
                  element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/aadhya-videopanel/div/div/div[1]/div[2]/div/a[4]/i')).click();
                  browser.driver.sleep(3000);
                  element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/aadhya-videopanel/div/div/div[1]/div[2]/div/a[4]/i')).click();
                  browser.driver.sleep(3000);
                  element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/aadhya-videopanel/div/div/div[1]/div[2]/div/a[3]/i')).click();
                  browser.driver.sleep(2000);
                  protractor.loginHelpers.Logout();
                    }); 
                    //10)Mute video
                    it('Mute video', function() {
                   protractor.loginHelpers.Login();
                element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-topbar-innerleft/div[1]/div/div[1]/div/div/div[2]/h5')).click();
                browser.driver.sleep(9000);
                element(by.xpath('//*[@id="sidebar"]/ul/li[2]/a')).click();
                browser.driver.sleep(50000);
                element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/aadhya-videopanel/div/div/div[1]/div[2]/div/a[1]/i')).click();
                browser.driver.sleep(8000);
                element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/aadhya-videopanel/div/div/div[1]/div[2]/div/a[3]/i')).click();
                browser.driver.sleep(5000);
                protractor.loginHelpers.Logout();
                      }); 
                      //11)Unmute video
                      it('Unmute video', function() {
                        protractor.loginHelpers.Login();
                        element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-topbar-innerleft/div[1]/div/div[1]/div/div/div[2]/h5')).click();
                        browser.driver.sleep(9000);
                        element(by.xpath('//*[@id="sidebar"]/ul/li[2]/a')).click();
                        browser.driver.sleep(50000);
                        element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/aadhya-videopanel/div/div/div[1]/div[2]/div/a[1]/i')).click();
                        browser.driver.sleep(8000);
                        element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/aadhya-videopanel/div/div/div[1]/div[2]/div/a[1]/i')).click();
                        browser.driver.sleep(8000);
                        element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/aadhya-videopanel/div/div/div[1]/div[2]/div/a[3]/i')).click();
                        browser.driver.sleep(5000);
                        protractor.loginHelpers.Logout();
                        }); 
                        //12)Maximize the video
                        it('Maximize the video', function() {
                          protractor.loginHelpers.Login();
                          element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-topbar-innerleft/div[1]/div/div[1]/div/div/div[2]/h5')).click();
                          browser.driver.sleep(9000);
                          element(by.xpath('//*[@id="sidebar"]/ul/li[2]/a')).click();
                          browser.driver.sleep(50000);
                          element(by.className('control zoom-in')).click();
                          browser.driver.sleep(9000);
                          element(by.className('control zoom-out selected')).click();
                          browser.driver.sleep(9000);
                          element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/aadhya-videopanel/div/div/div[1]/div[2]/div/a[3]/i')).click();
                          browser.driver.sleep(5000);
                          protractor.loginHelpers.Logout();
                          }); 
                          //13)Minimize the video
                          it('Minimize the video', function() {
                             protractor.loginHelpers.Login();
                          element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-topbar-innerleft/div[1]/div/div[1]/div/div/div[2]/h5')).click();
                          browser.driver.sleep(9000);
                          element(by.xpath('//*[@id="sidebar"]/ul/li[2]/a')).click();
                          browser.driver.sleep(50000);
                          element(by.className('control zoom-in')).click();
                          browser.driver.sleep(9000);
                          element(by.className('control zoom-out selected')).click();
                          browser.driver.sleep(9000);
                          element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/aadhya-videopanel/div/div/div[1]/div[2]/div/a[3]/i')).click();
                          browser.driver.sleep(5000);
                          protractor.loginHelpers.Logout();
                            }); */
                            //14)share the screen
                            it('share the screen', function() {
                              protractor.loginHelpers.Login();
                              element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-topbar-innerleft/div[1]/div/div[1]/div/div/div[2]/h5')).click();
                              browser.driver.sleep(9000);
                              element(by.xpath('//*[@id="sidebar"]/ul/li[2]/a')).click();
                              browser.driver.sleep(30000);
                              element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/aadhya-videopanel/div/div/div[1]/div[2]/div/a[2]/i')).click();
                              browser.driver.sleep(15000);
                              element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/aadhya-videopanel/div/div/div[1]/div[2]/div/a[3]/i')).click();
                              browser.driver.sleep(5000);
                              protractor.loginHelpers.Logout();
                              }); 
                              //15)Users should able to talk if they shared the screen
                              it('Users should able to talk if they shared the screen', function() {
                                protractor.loginHelpers.Login();
                                element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-topbar-innerleft/div[1]/div/div[1]/div/div/div[2]/h5')).click();
                                browser.driver.sleep(9000);
                                element(by.xpath('//*[@id="sidebar"]/ul/li[2]/a')).click();
                                browser.driver.sleep(30000);
                                element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/aadhya-videopanel/div/div/div[1]/div[2]/div/a[2]')).click();
                                browser.driver.sleep(5000);
                                protractor.loginHelpers.Logout();
                                }); 
                                
                                //16)voice controller
                                it('voice controller', function() {
                                 //panding
                                  }); 
                                  //17)End call
                                  it('End call', function() {
                                    protractor.loginHelpers.Login();
                                    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-topbar-innerleft/div[1]/div/div[1]/div/div/div[2]/h5')).click();
                                    browser.driver.sleep(9000);
                                    element(by.xpath('//*[@id="sidebar"]/ul/li[3]/a')).click();
                                    browser.driver.sleep(50000);
                                    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/aadhya-videopanel/div/div/div[1]/div[2]/div/a[3]/i')).click();
                                    browser.driver.sleep(1000);
                                    protractor.loginHelpers.Logout();
                                    }); 
                                    //18)End call
                                    it('End call', function() {
                                      protractor.loginHelpers.Login();
                                      element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-topbar-innerleft/div[1]/div/div[1]/div/div/div[2]/h5')).click();
                                      browser.driver.sleep(9000);
                                      element(by.xpath('//*[@id="sidebar"]/ul/li[2]/a')).click();
                                      browser.driver.sleep(30000);
                                      protractor.loginHelpers.Logout();
                                      });
        
});