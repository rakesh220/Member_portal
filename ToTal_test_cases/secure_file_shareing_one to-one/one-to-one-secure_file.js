describe('One_to_one secure file shareing', function() {
    //1) Login user can see the folders/files screen
    /*it('Login user can see the folders/files screen', function() {
      protractor.loginHelpers.Login();
    element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
    browser.driver.sleep(9000);
    protractor.loginHelpers.Logout();
    }); 
    //2)Login user can create folder
    it('Login user can create folder', function() {
      protractor.loginHelpers.Login();
    element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[1]/div[1]/div/div[1]/button[2]')).click();
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[1]/div[1]/div/div[1]/ul/li[1]/a')).click();
    browser.driver.sleep(9000);
    element(by.id('foldernme')).sendKeys('Testing1');
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/aadhya-dynamic-modal/div/div/div[3]/button[2]')).click();
    browser.driver.sleep(15000);
    protractor.loginHelpers.Logout();
    }); 
    //3)login user can upload photo/video/documents/html content/excel
    it('login user can upload photo/video/documents/html content/excel', function() {
      protractor.loginHelpers.Login();
    element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
    browser.driver.sleep(9000);
    //uploading png image
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[1]/div[1]/div/div[1]/button[2]')).click();
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[1]/div[1]/div/div[1]/ul/li[3]/a')).click();
    browser.driver.sleep(20000);
    //uploading html file
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[1]/div[1]/div/div[1]/button[2]')).click();
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[1]/div[1]/div/div[1]/ul/li[3]/a')).click();
    browser.driver.sleep(20000);
    //uploading the excel sheet
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[1]/div[1]/div/div[1]/button[2]')).click();
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[1]/div[1]/div/div[1]/ul/li[3]/a')).click();
    browser.driver.sleep(20000);
    //uploading jpg image
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[1]/div[1]/div/div[1]/button[2]')).click();
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[1]/div[1]/div/div[1]/ul/li[3]/a')).click();
    browser.driver.sleep(20000);
    //uploading the doc file
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[1]/div[1]/div/div[1]/button[2]')).click();
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[1]/div[1]/div/div[1]/ul/li[3]/a')).click();
    browser.driver.sleep(20000);
    //uploading the movie 
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[1]/div[1]/div/div[1]/button[2]')).click();
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[1]/div[1]/div/div[1]/ul/li[3]/a')).click();
    browser.driver.sleep(20000);
    protractor.loginHelpers.Logout();
    }); 
   //4) user can rename the folder name
    it('user can rename the folder name', function() {
      protractor.loginHelpers.Login();
    element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
    browser.driver.sleep(9000);
    element(by.className('fa fa-ellipsis-h')).click();
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/div/div[1]/ul/li[2]/a')).click();
    browser.driver.sleep(9000);
    element(by.name('newName')).clear();
    browser.driver.sleep(9000);
    element(by.name('newName')).sendKeys('New_folder');
    browser.driver.sleep(9000);
    element(by.className('btn btn-primary cls-btn ')).click();
    browser.driver.sleep(15000);
    protractor.loginHelpers.Logout();
    }); 
        //5) user can see preview
    it('user can see preview', function() {
    protractor.loginHelpers.Login();
    element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
    browser.driver.sleep(9000);
    element(by.className('fa fa-ellipsis-h')).click();
    browser.driver.sleep(9000);
    element(by.className('preview-btn')).click();
    browser.driver.sleep(9000);
    protractor.loginHelpers.Logout();
    }); 
   //6)user can download folder

   it('user can see preview', function() {
    protractor.loginHelpers.Login();
    element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
    browser.driver.sleep(9000);
    element(by.className('fa fa-ellipsis-h')).click();
    browser.driver.sleep(9000);
    element(by.className('fa fa-download')).click();
    browser.driver.sleep(20000);
    protractor.loginHelpers.Logout();
    }); 
     //7) user can share the folder to other user
    it('user can share the file to other user', function() {
    protractor.loginHelpers.Login();
    element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
    browser.driver.sleep(9000);
    element(by.className('fa fa-ellipsis-h')).click();
    browser.driver.sleep(9000);
    element(by.className('fa fa-share')).click();
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[2]/div/div/div[2]/div/div[2]/div[1]/input')).sendKeys('Rakesh');
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[2]/div/div/div[2]/div/div[2]/div[2]/div[1]/ul/li[1]/label/span')).click();
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[2]/div/div/div[2]/div/div[2]/div[2]/div[1]/div/a')).click();
    browser.driver.sleep(18000);
    //element(by.xpath('')).click();
    //browser.driver.sleep(9000);
    //element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[4]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[2]/div/div/div[2]/div/div[4]/div/div/input')).click();
    //browser.driver.sleep(15000);
    element(by.className('btn btn-primary cls-btn')).click();
    browser.driver.sleep('25000');
    protractor.loginHelpers.Logout();
    }); 
    //8)user delete the folder
    it('user delete the folder', function() {
      protractor.loginHelpers.Login();
    element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
    browser.driver.sleep(9000);
    element(by.className('fa fa-ellipsis-h')).click();
    browser.driver.sleep(9000);
    element(by.className('fa fa-trash')).click();
    browser.driver.sleep(15000);
    protractor.loginHelpers.Logout();
    }); 


  //-----------------------end folder test cases---------------------------------------------







    
    //9)user can move the file
    it('user can move the file', function() {
      protractor.loginHelpers.Login();
    element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
    browser.driver.sleep(9000);
    element(by.className('fa fa-ellipsis-h')).click();
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/div/div[1]/ul/li[6]/a')).click();
    browser.driver.sleep(10000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[3]/div/div/div[2]/ul/li[7]/p')).click();
   browser.driver.sleep(10000);
   element(by.className('btn btn-primary cls-btn')).click();
   browser.driver.sleep(15000);
    protractor.loginHelpers.Logout();
    });
    //10)user can copy the file
    it('user can copy the file', function() {
      protractor.loginHelpers.Login();
    element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
    browser.driver.sleep(9000);
    element(by.className('fa fa-ellipsis-h')).click();
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/div/div[1]/ul/li[7]/a')).click();
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[3]/div/div/div[2]/ul/li[7]/p')).click();
   browser.driver.sleep(9000);
   element(by.className('btn btn-primary cls-btn')).click();
   browser.driver.sleep(15000);
    protractor.loginHelpers.Logout();
    }); 
    //11)user send file to other user than user can give Read access
    it('user send file to other user than user can give Read access', function() {
      protractor.loginHelpers.Login();
    element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
    browser.driver.sleep(9000);
    element(by.className('fa fa-ellipsis-h')).click();
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/div/div[1]/ul/li[8]/a')).click();
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[2]/div/div/div[2]/div/div[2]/div[1]/input')).sendKeys('Rakesh');
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[2]/div/div/div[2]/div/div[2]/div[2]/div[1]/ul/li[1]/label/span')).click();
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[2]/div/div/div[2]/div/div[2]/div[2]/div[1]/div/a')).click();
    browser.driver.sleep(18000);
    //element(by.xpath('')).click();
    //browser.driver.sleep(9000);
    //element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[4]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[2]/div/div/div[2]/div/div[4]/div/div/input')).click();
    //browser.driver.sleep(15000);
    element(by.className('btn btn-primary cls-btn')).click();
    browser.driver.sleep('25000');
    protractor.loginHelpers.Logout();
      }); 
      //12) user send file to other user than user can give Write access
      it('user send file to other user than user can give Write access', function() {
        protractor.loginHelpers.Login();
        element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
        browser.driver.sleep(9000);
        element(by.className('fa fa-ellipsis-h')).click();
        browser.driver.sleep(9000);
        element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/div/div[1]/ul/li[8]/a')).click();
        browser.driver.sleep(9000);
        element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[2]/div/div/div[2]/div/div[2]/div[1]/input')).sendKeys('Rakesh');
        browser.driver.sleep(9000);
        element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[2]/div/div/div[2]/div/div[2]/div[2]/div[1]/ul/li[1]/label/span')).click();
        browser.driver.sleep(9000);
        element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[2]/div/div/div[2]/div/div[2]/div[2]/div[1]/div/a')).click();
        browser.driver.sleep(18000);
        element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[2]/div/div/div[2]/div/div[3]/div/div/select')).click();
        browser.driver.sleep(9000);
        element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[2]/div/div/div[2]/div/div[3]/div/div/select/option[2]')).click();
        browser.driver.sleep(20000);
        element(by.className('btn btn-primary cls-btn')).click();
        browser.driver.sleep('25000');
        protractor.loginHelpers.Logout();
        }); */
        //13)user send file to other user than user can give execute  access
        it('user send file to other user than user can give execute  access', function() {
            protractor.loginHelpers.Login();
    element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
    browser.driver.sleep(9000);
    element(by.className('fa fa-ellipsis-h')).click();
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/div/div[1]/ul/li[8]/a')).click();
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[2]/div/div/div[2]/div/div[2]/div[1]/input')).sendKeys('Rakesh');
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[2]/div/div/div[2]/div/div[2]/div[2]/div[1]/ul/li[1]/label/span')).click();
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[2]/div/div/div[2]/div/div[2]/div[2]/div[1]/div/a')).click();
    browser.driver.sleep(18000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[2]/div/div/div[2]/div/div[3]/div/div/select')).click();
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[2]/div/div/div[2]/div/div[3]/div/div/select/option[3]')).click();
    browser.driver.sleep(20000);
    element(by.className('btn btn-primary cls-btn')).click();
    browser.driver.sleep('25000');
    protractor.loginHelpers.Logout();
          }); 
          /*//14)user can delete the file
          it('user can see preview', function() {
            protractor.loginHelpers.Login();
            element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
            browser.driver.sleep(9000);
            element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[4]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/div/div[1]/a')).click();
            browser.driver.sleep(9000);
            element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[4]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/div/div[1]/ul/li[4]/a')).click();
            browser.driver.sleep(20000);
            protractor.loginHelpers.Logout();
            }); 

            //15)user can search based on the filename

            it('user can search based on the filename', function() {
              protractor.loginHelpers.Login();
              element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
              browser.driver.sleep(9000);
              element(by.xpath('//*[@id="search"]')).click();
              browser.driver.sleep(9000);
              element(by.xpath('//*[@id="search"]')).sendKeys('floder1');
              browser.driver.sleep(1500);
              protractor.loginHelpers.Logout();
              }); 

              //16)user can search based on the folder
              it('user can search based on the folder', function() {
                protractor.loginHelpers.Login();
                element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
                browser.driver.sleep(9000);
                element(by.xpath('//*[@id="search"]')).click();
                browser.driver.sleep(9000);
                element(by.xpath('//*[@id="search"]')).sendKeys('rakesh1234');
                browser.driver.sleep(1500);
                protractor.loginHelpers.Logout();
                }); 

                //17)user search search file type based search filter
                it('user search search file type based search filter', function() {
                  protractor.loginHelpers.Login();
                  element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
                  browser.driver.sleep(9000);
                  element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[1]/div[2]/ul/li[3]/div/a/i')).click();
                  browser.driver.sleep(9000);
                  element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[1]/div[2]/ul/li[3]/div/div/form/div/div/div[4]/label/span')).click();
                  browser.driver.sleep(1500);
                  element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[1]/div[2]/ul/li[3]/div/div/form/div/div/div[1]/label/span')).click();
                  browser.driver.sleep(1500);
                  protractor.loginHelpers.Logout();
                  }); 

                  //18)user can see full information about folder/file

                  it('user can see full information about folder/file', function() {
                    protractor.loginHelpers.Login();
                    element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
                    browser.driver.sleep(9000);
                    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[1]/div[2]/ul/li[2]/a/i')).click();
                    browser.driver.sleep(1500);
                    protractor.loginHelpers.Logout();
                    }); 
                    //19)user can see remaining free space
                    it('user can see remaining free space', function() {
                      protractor.loginHelpers.Login();
                    element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
                    browser.driver.sleep(9000);
                    protractor.loginHelpers.Logout();
                    }); 
                    //20)user can create folder with in other folder
                    it('Login user can create folder', function() {
                      protractor.loginHelpers.Login();
                    element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
                    browser.driver.sleep(9000);
                    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[1]/div[1]/div/div[1]/button[2]')).click();
                    browser.driver.sleep(9000);
                    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[1]/div[1]/div/div[1]/ul/li[1]/a')).click();
                    browser.driver.sleep(9000);
                    element(by.id('foldernme')).sendKeys('Testing1');
                    browser.driver.sleep(9000);
                    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/aadhya-dynamic-modal/div/div/div[3]/button[2]')).click();
                    browser.driver.sleep(20000);
                    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[7]/aadhya-file-details-tileview/div/div/div[1]/img')).click();
                    browser.driver.sleep(9000);
                    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[1]/div[1]/div/div[1]/button[2]')).click();
                    browser.driver.sleep(9000);
                    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[1]/div[1]/div/div[1]/ul/li[1]/a')).click();
                    browser.driver.sleep(9000);
                    element(by.id('foldernme')).sendKeys('Testing2');
                    browser.driver.sleep(9000);
                    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/aadhya-dynamic-modal/div/div/div[3]/button[2]')).click();
                    browser.driver.sleep(15000);
                    protractor.loginHelpers.Logout();
                    }); */



});
