describe('User Management Test Cases', function() {
    it('user cannot get password with user name is wrong', function() {
      browser.get(browser.params.url);
    element(by.tagName("a")).click();
    element(by.id("Username")).sendKeys("rakesh2");
    element(by.xpath('//button[text()="Submit"]')).click();
   browser.driver.sleep(10000);  
   var a=element(by.xpath('/html/body/aadhya-root/aadhya-forgot-password/div/div/div/div/aadhya-find-user/div/form/p'));
   expect(a.isPresent()).toBe(true);
   browser.driver.sleep(5000);
    });
   
  });