window.RESULTS.push({"options":{"screenshotOnPassed":true,"writeReportEachSpec":true,"showBrowser":true,"highlightSuspectLine":true,"driver":null,"path":"/home/rakesh/ToTal_test_cases/Uesr-Management-Test-Cases/all test cases","isSharded":true},"timer":{"started":"2018-08-01T21:18:15.617Z","stopped":"2018-08-01T21:18:27.608Z","duration":11991},"counts":{"specs":1,"failed":1},"sequence":[{"id":"spec0","description":"login with correct userid and password","fullName":"User Management Test Cases login with correct userid and password","failedExpectations":[{"matcherName":"","message":"Failed: unknown command: session/b4c4be9b1b0b3b5c00fe34688beb7120/element/0.4377562933927057-1/screenshot","stack":"UnsupportedOperationError: unknown command: session/b4c4be9b1b0b3b5c00fe34688beb7120/element/0.4377562933927057-1/screenshot\n    at parseHttpResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:534:11)\n    at doSend.then.response (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:441:30)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)\nFrom: Task: WebElement.takeScreenshot(false)\n    at thenableWebDriverProxy.schedule (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:807:17)\n    at WebElement.schedule_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2010:25)\n    at WebElement.takeScreenshot (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2379:17)\n    at actionFn (/usr/lib/node_modules/protractor/built/element.js:89:44)\n    at Array.map (<anonymous>)\n    at actionResults.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:461:65)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as takeScreenshot] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as takeScreenshot] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/ToTal_test_cases/Uesr-Management-Test-Cases/spec1.js:9:7)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"login with correct userid and password\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at QueueRunner.execute (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4199:10)\n    at Spec.queueRunnerFactory (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:909:35)\n    at Spec.execute (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:526:10)\n    at UserContext.fn (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:5340:37)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at QueueRunner.execute (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4199:10)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/ToTal_test_cases/Uesr-Management-Test-Cases/spec1.js:2:3)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/ToTal_test_cases/Uesr-Management-Test-Cases/spec1.js:1:63)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)","passed":false,"expected":"","actual":"","suspectLine":"    at <anonymous>","hasSuspectLine":true}],"passedExpectations":[],"pendingReason":"","started":"2018-08-01T21:18:18.250Z","stopped":"2018-08-01T21:18:27.489Z","duration":9239,"prefix":"User Management Test Cases ","browserName":"chrome","browserLogs":[],"status":"failed","screenshotPath":"img/19841-1.png"}]});