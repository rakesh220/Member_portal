describe('User Management Test Cases', function() {
    it('enter wrong security questions answers', function() {
      browser.get(browser.params.url);
    element(by.tagName("a")).click();
    element(by.id("Username")).sendKeys("rakesh");
    element(by.xpath('//button[text()="Submit"]')).click();
    browser.driver.sleep(10000);
    element(by.xpath('//input[@id="squestionOne"]')).sendKeys("zpss");
    element(by.xpath('//input[@id="squestionTwo"]')).sendKeys("cat");
    element(by.xpath('//button[text()="Submit"]')).click();
   browser.driver.sleep(10000);  
    });
   
  });