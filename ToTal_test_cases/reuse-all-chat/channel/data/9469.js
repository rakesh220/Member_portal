window.RESULTS.push({"options":{"screenshotOnPassed":true,"writeReportEachSpec":true,"showBrowser":true,"highlightSuspectLine":true,"driver":null,"path":"/home/rakesh/ToTal_test_cases/reuse-all-chat/all test cases","isSharded":true},"timer":{"stopped":"2018-07-24T20:38:43.598Z","duration":null},"counts":{"specs":12,"failed":3,"passed":9},"sequence":[{"id":"spec0","description":"Test Send text messages to other users","fullName":"Test browser Channel chat cases Test Send text messages to other users","failedExpectations":[{"matcherName":"","message":"Failed: element not visible\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)","stack":"ElementNotVisibleError: element not visible\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)\n    at Object.checkLegacyResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/error.js:546:15)\n    at parseHttpResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:509:13)\n    at doSend.then.response (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:441:30)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)\nFrom: Task: WebElement.click()\n    at thenableWebDriverProxy.schedule (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:807:17)\n    at WebElement.schedule_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2010:25)\n    at WebElement.click (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2092:17)\n    at actionFn (/usr/lib/node_modules/protractor/built/element.js:89:44)\n    at Array.map (<anonymous>)\n    at actionResults.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:461:65)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/ToTal_test_cases/reuse-all-chat/test-purpose.js:7:110)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as getText] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as getText] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/ToTal_test_cases/reuse-all-chat/test-purpose.js:9:16)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"Test Send text messages to other users\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at QueueRunner.execute (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4199:10)\n    at Spec.queueRunnerFactory (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:909:35)\n    at Spec.execute (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:526:10)\n    at UserContext.fn (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:5340:37)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at QueueRunner.execute (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4199:10)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/ToTal_test_cases/reuse-all-chat/test-purpose.js:5:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/ToTal_test_cases/reuse-all-chat/test-purpose.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)","passed":false,"expected":"","actual":"","suspectLine":"  (Session info: chrome=66.0.3359.139)","hasSuspectLine":true}],"passedExpectations":[],"pendingReason":"","started":"2018-07-24T20:21:00.074Z","stopped":"2018-07-24T20:35:02.528Z","duration":842454,"prefix":"Test browser Channel chat cases ","browserName":"chrome","browserLogs":[{"level":"WARNING","message":"https://dya4247t866iy.cloudfront.net/0.f36bdf25a08c9520b0c2.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.","timestamp":1532463696110,"type":""},{"level":"SEVERE","message":"https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)","timestamp":1532463696123,"type":""},{"level":"SEVERE","message":"https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)","timestamp":1532463696123,"type":""},{"level":"SEVERE","message":"https://s3.amazonaws.com/icons_AAIL/icons/15254860405761516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)","timestamp":1532463696123,"type":""},{"level":"WARNING","message":"console-api 0:51460 \"Could not load worker\"","timestamp":1532464496429,"type":""},{"level":"WARNING","message":"console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"","timestamp":1532464496430,"type":""},{"level":"WARNING","message":"console-api 0:51460 \"Could not load worker\"","timestamp":1532464496435,"type":""},{"level":"WARNING","message":"console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"","timestamp":1532464496435,"type":""},{"level":"SEVERE","message":"https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()","timestamp":1532464496436,"type":""},{"level":"SEVERE","message":"https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js 1336 WebSocket connection to 'wss://chatapp.aadhya-analytics.com:3001/socket.io/?auth_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5NWE1NThkYmNjMDcwNTJhOTgzMjkwNiIsImlhdCI6MTUzMjQ2MzY2NywiZXhwIjoxNTM1MDU1NjY3fQ.9n3gdpYLZSqHPOIC6-TrQ27FhPc7-QgvUEQiHVTIGkI&EIO=3&transport=websocket' failed: Error during WebSocket handshake: Unexpected response code: 502","timestamp":1532464496441,"type":""},{"level":"WARNING","message":"console-api 0:51460 \"Could not load worker\"","timestamp":1532464496447,"type":""},{"level":"WARNING","message":"console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"","timestamp":1532464496448,"type":""}],"status":"failed","screenshotPath":"img/9469-1.png"},{"id":"spec1","description":"Test Send any type of file to other users","fullName":"Test browser Channel chat cases Test Send any type of file to other users","failedExpectations":[],"passedExpectations":[{"matcherName":"toBe","message":"Passed.","stack":"","passed":true}],"pendingReason":"","started":"2018-07-24T20:35:02.709Z","stopped":"2018-07-24T20:35:14.783Z","duration":12074,"prefix":"Test browser Channel chat cases ","browserName":"chrome","browserLogs":[],"status":"passed","screenshotPath":"img/9469-2.png"},{"id":"spec2","description":"Test Send image files to other users","fullName":"Test browser Channel chat cases Test Send image files to other users","failedExpectations":[],"passedExpectations":[{"matcherName":"toBe","message":"Passed.","stack":"","passed":true}],"pendingReason":"","started":"2018-07-24T20:35:14.969Z","stopped":"2018-07-24T20:35:27.024Z","duration":12055,"prefix":"Test browser Channel chat cases ","browserName":"chrome","browserLogs":[],"status":"passed","screenshotPath":"img/9469-3.png"},{"id":"spec3","description":"Test Send video file to other users","fullName":"Test browser Channel chat cases Test Send video file to other users","failedExpectations":[],"passedExpectations":[{"matcherName":"toBe","message":"Passed.","stack":"","passed":true}],"pendingReason":"","started":"2018-07-24T20:35:27.167Z","stopped":"2018-07-24T20:35:49.340Z","duration":22173,"prefix":"Test browser Channel chat cases ","browserName":"chrome","browserLogs":[],"status":"passed","screenshotPath":"img/9469-4.png"},{"id":"spec4","description":"Test Add reaction to messages in chat","fullName":"Test browser Channel chat cases Test Add reaction to messages in chat","failedExpectations":[],"passedExpectations":[{"matcherName":"toBe","message":"Passed.","stack":"","passed":true}],"pendingReason":"","started":"2018-07-24T20:35:49.491Z","stopped":"2018-07-24T20:36:10.609Z","duration":21118,"prefix":"Test browser Channel chat cases ","browserName":"chrome","browserLogs":[],"status":"passed","screenshotPath":"img/9469-5.png"},{"id":"spec5","description":"Test Remove reaction to messages in chat","fullName":"Test browser Channel chat cases Test Remove reaction to messages in chat","failedExpectations":[{"matcherName":"toBe","message":"Expected false to be true.","stack":"Error: Failed expectation\n    at UserContext.<anonymous> (/home/rakesh/ToTal_test_cases/reuse-all-chat/test-purpose.js:57:40)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2974:25)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7","passed":false,"expected":true,"actual":false,"suspectLine":"    at UserContext.<anonymous> (/home/rakesh/ToTal_test_cases/reuse-all-chat/test-purpose.js:57:40)","hasSuspectLine":true}],"passedExpectations":[],"pendingReason":"","started":"2018-07-24T20:36:10.749Z","stopped":"2018-07-24T20:36:22.817Z","duration":12068,"prefix":"Test browser Channel chat cases ","browserName":"chrome","browserLogs":[],"status":"failed","screenshotPath":"img/9469-6.png"},{"id":"spec6","description":"Test Edit sent message","fullName":"Test browser Channel chat cases Test Edit sent message","failedExpectations":[{"matcherName":"","message":"Failed: No element found using locator: By(xpath, //*[@id=\"default\"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[3]/p)","stack":"NoSuchElementError: No element found using locator: By(xpath, //*[@id=\"default\"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[3]/p)\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/ToTal_test_cases/reuse-all-chat/test-purpose.js:73:113)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as getText] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as getText] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/ToTal_test_cases/reuse-all-chat/test-purpose.js:75:16)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"Test Edit sent message\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at QueueRunner.execute (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4199:10)\n    at Spec.queueRunnerFactory (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:909:35)\n    at Spec.execute (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:526:10)\n    at UserContext.fn (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:5340:37)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/ToTal_test_cases/reuse-all-chat/test-purpose.js:67:6)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/ToTal_test_cases/reuse-all-chat/test-purpose.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)","passed":false,"expected":"","actual":"","suspectLine":"    at <anonymous>","hasSuspectLine":true}],"passedExpectations":[],"pendingReason":"","started":"2018-07-24T20:36:22.958Z","stopped":"2018-07-24T20:36:44.054Z","duration":21096,"prefix":"Test browser Channel chat cases ","browserName":"chrome","browserLogs":[],"status":"failed","screenshotPath":"img/9469-7.png"},{"id":"spec7","description":"Test pin a message","fullName":"Test browser Channel chat cases Test pin a message","failedExpectations":[],"passedExpectations":[{"matcherName":"toBe","message":"Passed.","stack":"","passed":true}],"pendingReason":"","started":"2018-07-24T20:36:44.204Z","stopped":"2018-07-24T20:37:08.320Z","duration":24116,"prefix":"Test browser Channel chat cases ","browserName":"chrome","browserLogs":[],"status":"passed","screenshotPath":"img/9469-8.png"},{"id":"spec8","description":"Test Send code snippet.","fullName":"Test browser Channel chat cases Test Send code snippet.","failedExpectations":[],"passedExpectations":[{"matcherName":"toBe","message":"Passed.","stack":"","passed":true}],"pendingReason":"","started":"2018-07-24T20:37:08.456Z","stopped":"2018-07-24T20:37:35.595Z","duration":27139,"prefix":"Test browser Channel chat cases ","browserName":"chrome","browserLogs":[],"status":"passed","screenshotPath":"img/9469-9.png"},{"id":"spec9","description":"Test Send data to email through code snippet.","fullName":"Test browser Channel chat cases Test Send data to email through code snippet.","failedExpectations":[],"passedExpectations":[{"matcherName":"toBe","message":"Passed.","stack":"","passed":true}],"pendingReason":"","started":"2018-07-24T20:37:35.759Z","stopped":"2018-07-24T20:37:56.894Z","duration":21135,"prefix":"Test browser Channel chat cases ","browserName":"chrome","browserLogs":[],"status":"passed","screenshotPath":"img/9469-10.png"},{"id":"spec10","description":"Test Send url in one-one chat","fullName":"Test browser Channel chat cases Test Send url in one-one chat","failedExpectations":[],"passedExpectations":[{"matcherName":"toBe","message":"Passed.","stack":"","passed":true}],"pendingReason":"","started":"2018-07-24T20:37:57.083Z","stopped":"2018-07-24T20:38:26.207Z","duration":29124,"prefix":"Test browser Channel chat cases ","browserName":"chrome","browserLogs":[],"status":"passed","screenshotPath":"img/9469-11.png"},{"id":"spec11","description":"Test Delete sent message","fullName":"Test browser Channel chat cases Test Delete sent message","failedExpectations":[],"passedExpectations":[{"matcherName":"toBe","message":"Passed.","stack":"","passed":true}],"pendingReason":"","started":"2018-07-24T20:38:26.377Z","stopped":"2018-07-24T20:38:43.425Z","duration":17048,"prefix":"Test browser Channel chat cases ","browserName":"chrome","browserLogs":[],"status":"passed","screenshotPath":"img/9469-12.png"}]});