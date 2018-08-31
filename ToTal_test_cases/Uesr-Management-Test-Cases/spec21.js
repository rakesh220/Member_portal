
describe('User Management Test Cases', function() {
    it('user can remove another user', function() {
      browser.get(browser.params.url);
      browser.waitForAngularEnabled(false); 
    element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh221");
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(40000);
    element(by.xpath('//*[@id="userId91"]')).click();
    browser.driver.sleep(10000);
element(by.xpath('//*[@id="leftscroll"]/ul[4]/li[92]/div/span[2]/a/i')).click();
     browser.driver.sleep(10000);
     element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
     browser.driver.sleep(10000);
     element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[17]/a')).click();
     browser.driver.sleep(10000);
    });
    });