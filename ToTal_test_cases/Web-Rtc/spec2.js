describe('webRtc chat cases', function() {
    //1) Send text message in one-to-one chat
    it('if user is offline then vide/audio call disbled', function() {
      protractor.loginHelpers.Login();
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-topbar-innerleft/div[1]/div/div[1]/div/div/div[2]/h5')).click();
    browser.driver.sleep(10000);
    element(by.xpath('//*[@id="sidebar"]/ul/li[3]/a')).click();
    browser.driver.sleep(9000);
protractor.loginHelpers.Logout();
    }); 
});
