describe('webRTC chat cases', function() {
    //1) Send text message in one-to-one chat
    it('user profile will display', function() {
      protractor.loginHelpers.Login();
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-topbar-innerleft/div[1]/div/div[1]/div/div/div[2]/h5')).click();
    browser.driver.sleep(6000);
protractor.loginHelpers.Logout();
    }); 
});
