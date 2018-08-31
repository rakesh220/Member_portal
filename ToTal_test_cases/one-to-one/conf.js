
var HtmlReporter = require('protractor-beautiful-reporter');
//var PrettyReporter = require('protractor-pretty-html-reporter').Reporter;
//var HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
  specs:['spec1.js'],
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
   userid:"userId91",
   testuserid:"userId72",
 },
 
allScriptsTimeout: 1200000,
  getPageTimeout: 1200000,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 1200000,
 },
//HTMLReport called once tests are finished
onPrepare: function() {
  protractor.loginHelpers = require('./reuse.js');
    // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
    jasmine.getEnv().addReporter(new HtmlReporter({
       baseDirectory: 'tmp/screenshots'
    }).getJasmine2Reporter());
 },


};
