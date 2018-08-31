describe('webRTC group call test cases', function() {
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
});
