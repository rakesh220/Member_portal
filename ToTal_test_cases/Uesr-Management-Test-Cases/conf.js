
//var HtmlReporter = require('protractor-html-screenshot-reporter');
//var HtmlReporter = require('protractor-html-screenshot-reporter');
//var ScreenShotReporter = require('protractor-screenshot-reporter');
//var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
//var HtmlReporter = require('protractor-html-screenshot-reporter');
//var HtmlReporter = require('protractor-html-screenshot-reporter');
//var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var reporter = new HtmlScreenshotReporter({
  reportTitle: "user_Management_Test_Cases"
});
var reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'my-report.html'
});
exports.config = {
 

  //specs: ['./home/rakesh/Documents/Protractor/userManagement/spec1.js'],
  specs:['spec6.js'],
   capabilities: {
   'browserName': 'chrome',
   'maxInstances': 1, // will split your test files across 2 browser instances,
   //'shardTestFiles': true,
 },

 //specs: ['spec3.js'],
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

  // Setup the report before any tests start
  beforeLaunch: function() {
    return new Promise(function(resolve){
      reporter.beforeLaunch(resolve);
    });
  },

  // Assign the test reporter to each running instance
  onPrepare: function() {
    jasmine.getEnv().addReporter(reporter);
  },

  // Close the report after all tests finish
  afterLaunch: function(exitCode) {
    return new Promise(function(resolve){
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  }


};
