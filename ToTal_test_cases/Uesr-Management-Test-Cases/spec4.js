describe('User Management Test Cases', function() {
    it('user can change password with forgot option', function() {
    browser.get(browser.params.url);
    element(by.tagName("a")).click();
    element(by.id("Username")).sendKeys("rakesh");
    element(by.xpath('//button[text()="Submit"]')).click();
    browser.driver.sleep(10000);
    element(by.xpath('//input[@id="squestionOne"]')).sendKeys("madhu");
    element(by.xpath('//input[@id="squestionTwo"]')).sendKeys("dog");
    element(by.xpath('//button[text()="Submit"]')).click();
   browser.driver.sleep(10000);
   browser.ignoreSynchronization = true;
    browser.get('https://mail.google.com');
    browser.driver.sleep(10000);  
    element(by.name('identifier')).sendKeys('rkondabala@zapoj.com');
    element(by.xpath('//*[@id="identifierNext"]/content/span')).click();

    browser.driver.sleep(10000);
    element(by.xpath('//*[@id="password"]/div[1]/div/div[1]/input')).sendKeys('rakesh321');
    
    browser.driver.sleep(10000);
    element(by.xpath('//*[@id="passwordNext"]/content/span')).click();
    browser.driver.sleep(30000);
    element(by.xpath('//*[@id=":2m"]')).click();
    browser.driver.sleep(20000);
    browser.driver.findElement(by.xpath('//*[@id=":kf"]/a')).click();
   //var dog = element(by.cssContainingText('.a3s.aXjCH.m1644278894b8aa1e'));
  // browser.driver.sleep(20000);
  //console.log(dog.getText());
  browser.driver.sleep(10000);


  
  
  
  



    






    });
   
  });