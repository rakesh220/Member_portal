describe('User Management Test Cases', function() {

    it('dnd setting', function() {
      browser.get('https://chatapp.aadhya-analytics.com:4201');
      browser.waitForAngularEnabled(false);
    element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh221");
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(30000);
    element(by.xpath('//*[@id="navbar"]/ul/li[6]/a')).click();
browser.driver.sleep(10000); 
   // element(by.name("messageTone")).$('[value="messageToneName3"]').click();
    element(by.xpath('//*[@id="dispableTime"]')).click();
   browser.driver.sleep(4000);
    element(by.name("startTime")).$('[value="01:00 AM"]').click();
    browser.driver.sleep(4000);
    element(by.name("endTime")).$('[value="07:00 PM"]').click();
   browser.driver.sleep(4000);
    element(by.xpath('//*[@id="prefSettings"]/div/div/div[3]/button[2]')).click();
     browser.driver.sleep(20000);  
     element(by.xpath('//*[@id="prefSettings"]/div/div/div[3]/button[1]')).click();
     browser.driver.sleep(10000); 
     element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
     browser.driver.sleep(4000);
     element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[17]/a')).click();
     browser.driver.sleep(4000);
});
    });