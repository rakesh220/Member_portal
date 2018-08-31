
//var HtmlReporter = require('protractor-beautiful-reporter');
//var PrettyReporter = require('protractor-pretty-html-reporter').Reporter;
//var HtmlReporter = require('protractor-jasmine2-html-reporter');
var PrettyReporter = require('protractor-pretty-html-reporter').Reporter;
const path = require('path');
var prettyReporter = new PrettyReporter({
  // required, there is no default
  path: path.join(__dirname, 'channel test cases'),
  screenshotOnPassed: true,
  writeReportEachSpec:true,
  showBrowser:true,
  highlightSuspectLine:true,
  isSharded:true,
  
  
  
  
});
exports.config = {
  specs:['spec1.js','spec2.js','spec3.js','spec4.js','spec5.js','spec6.js','spec7.js','spec8.js','spec10.js','spec12.js','spec13.js','spec14.js','spec15.js','spec16.js','spec17.js','spec18.js','spec19.js','spec20.js','spec9.js'],
   capabilities: {
   browserName:'chrome',
   //browserName: 'firefox',
   'chromeOptions': {  
    args: ['--window-size=1600,800']  
},
   'maxInstances': 1, // will split your test files across 2 browser instances,
   'shardTestFiles': true,
 },
 

 params:
 {
   //url:"https://chatapp.aadhya-analytics.com:4201",
   url:"https://dya4247t866iy.cloudfront.net/#/login",
   userid:"Mario",
   testuserid:"userId72",
 },
 
allScriptsTimeout: 1200000,
  getPageTimeout: 1200000,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 1200000,
 },
//HTMLReport called once tests are finished
/*onPrepare: function() {
  protractor.loginHelpers = require('./reuse.js');
    // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
    jasmine.getEnv().addReporter(new HtmlReporter({
       baseDirectory: 'tmp/screenshots'
    }).getJasmine2Reporter());
 },*/
 //HTMLReport called once tests are finishe
onPrepare: function() {
  protractor.loginHelpers = require('./reuse.js');
  jasmine.getEnv().addReporter(prettyReporter);
},
/* if using isSharded option see below */
beforeLaunch() {
  prettyReporter.startReporter();
}


};
