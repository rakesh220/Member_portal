

//var HtmlReporter = require('protractor-html-screenshot-reporter');
//var ScreenShotReporter = require('protractor-screenshot-reporter');

//var HtmlReporter = require('protractor-html-screenshot-reporter');
//var HtmlReporter = require('protractor-html-screenshot-reporter');
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
  framework: 'jasmine',

 //specs: ['spec3.js'],

  //specs: ['./home/rakesh/Documents/Protractor/userManagement/spec1.js'],
  specs:['spec1.js','Test1.js'],
   capabilities: {
   'browserName': 'chrome',
   'maxInstances': 2, // will split your test files across 2 browser instances,
   'shardTestFiles': true,
 },
 params:
 {
   //url:"https://chatapp.aadhya-analytics.com:4201",
   url:"https://dya4247t866iy.cloudfront.net/#/login",
   userid:"userId91",
   testuserid:"userId72",
 },
allScriptsTimeout: 1200000,

  getPageTimeout: 1200000,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 1200000,
 },
 
/// onPrepare: function() {
  // Add a screenshot reporter and store screenshots to `/tmp/screnshots`:
  //jasmine.getEnv().addReporter(new ScreenShotReporter({
     //baseDirectory: '/tmp/screenshots'
 // }));
//}


onPrepare: function() {
    protractor.loginHelpers = require('./reuse.js');
  jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        
          savePath: 'target/screenshots'
      })
  );
}
};