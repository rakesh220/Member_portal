

describe('maps test cases', function() {
    it('It should display  the selected user current location', function() {
      protractor.loginHelpers.Login();
      element(by.xpath('//*[@id="navbar"]/ul/li[3]/a/i')).click();
     browser.driver.sleep(10000);
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
     var c =  element(by.xpath('//*[@id="map"]/div/div/div[1]')).click();
     browser.driver.sleep(20000);
    });
    }); 
});