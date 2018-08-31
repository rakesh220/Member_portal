describe('User Management Test Cases', function() {
    it('user enter 3 times wrong security questions answer then user must be block', function() {
      browser.get(browser.params.url);
    element(by.tagName("a")).click();
    element(by.id("Username")).sendKeys("rakesh");
    element(by.xpath('//button[text()="Submit"]')).click();
    browser.driver.sleep(10000);
    element(by.xpath('//input[@id="squestionOne"]')).sendKeys("cat11");
    element(by.xpath('//input[@id="squestionTwo"]')).sendKeys("khammam1");
    element(by.xpath('//button[text()="Submit"]')).click();
    element(by.xpath('//input[@id="squestionOne"]')).clear();
    element(by.xpath('//input[@id="squestionTwo"]')).clear();
    element(by.xpath('//input[@id="squestionOne"]')).sendKeys("dog");
    element(by.xpath('//input[@id="squestionTwo"]')).sendKeys("hyderabad");
    element(by.xpath('//button[text()="Submit"]')).click();
    element(by.xpath('//input[@id="squestionOne"]')).clear();
    element(by.xpath('//input[@id="squestionTwo"]')).clear();
    element(by.xpath('//input[@id="squestionOne"]')).sendKeys("rat");
    element(by.xpath('//input[@id="squestionTwo"]')).sendKeys("russia");
    element(by.xpath('//button[text()="Submit"]')).click();
   browser.driver.sleep(10000);  
    });
   
  });