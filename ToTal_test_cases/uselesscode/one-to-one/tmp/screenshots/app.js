var app = angular.module('reportingApp', []);

app.controller('ScreenshotReportController', function ($scope) {
    $scope.searchSettings = {
        description: '',
        passed: true,
        failed: true,
        pending: true,
        withLog: true,
    };

    $scope.inlineScreenshots = false;
    this.showSmartStackTraceHighlight = true;

    this.chooseAllTypes = function () {
        $scope.searchSettings.passed = true;
        $scope.searchSettings.failed = true;
        $scope.searchSettings.pending = true;
        $scope.searchSettings.withLog = true;
    };

    this.getParent = function (str) {
        var arr = str.split('|');
        str = "";
        for (var i = arr.length - 2; i > 0; i--) {
            str += arr[i] + " > ";
        }
        return str.slice(0, -3);
    };

    this.specLevel = function (str) {
        var arr = str.split('|');
        str = "";
        if (arr.length < 3) {
            return true;
        }
        return false;
    };

    this.getSpec = function (str) {
        return getSpec(str);
    };


    this.getShortDescription = function (str) {
        return str.split('|')[0];
    };


    this.nToBr = function (str) {
        return str.replace(/(?:\r\n|\r|\n)/g, '<br />');
    };


    this.convertTimestamp = function (timestamp) {
        var d = new Date(timestamp),
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),
            dd = ('0' + d.getDate()).slice(-2),
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2),
            ampm = 'AM',
            time;

        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        } else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        } else if (hh == 0) {
            h = 12;
        }

        // ie: 2013-02-18, 8:35 AM
        time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;

        return time;
    };


    this.round = function (number, roundVal) {
        return (parseFloat(number)/1000).toFixed(roundVal);
    };


    this.passCount = function () {
        var passCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.passed) {passCount++};
        }
        return passCount;
    };


    this.pendingCount = function () {
        var pendingCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.pending) {pendingCount++};
        }
        return pendingCount;
    };


    this.failCount = function () {
        var failCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (!result.passed && !result.pending) {failCount++}
        }
        return failCount;
    };

    this.applySmartHighlight = function (line) {
        if (this.showSmartStackTraceHighlight) {
            if (line.indexOf('node_modules') > -1) {
                return 'greyout';
            }
            if (line.indexOf('  at ') === -1) {
                return '';
            }

            return 'highlight';
        }
        return true;
    };


    var results =[
    {
        "description": "Send text messages to other users|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "0cc5f7e81e6c456eac3cc861ec9ae240",
        "instanceId": 8022,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530630383374,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530630383388,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530630403520,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530630403523,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530630403524,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530630403524,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530630403525,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js 329:237 \"EXCEPTION: Cannot read property 'length' of undefined\"",
                "timestamp": 1530630413679,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js 329:371 \"ORIGINAL STACKTRACE:\"",
                "timestamp": 1530630413681,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js 329:415 \"TypeError: Cannot read property 'length' of undefined\\n    at e.sendChatMessage (https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js:215:68128)\\n    at View_e5.handleEvent_88 (/e/e/component.ngfactory.js:660:45)\\n    at HTMLElement.\\u003Canonymous> (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:1009:6272)\\n    at t.invokeTask (https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js:36:10021)\\n    at Object.onInvokeTask (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:380:2558)\\n    at t.invokeTask (https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js:36:9942)\\n    at n.runTask (https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js:36:5710)\\n    at HTMLElement.invoke (https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js:36:10889)\"",
                "timestamp": 1530630413681,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js 1621:5060 Uncaught TypeError: Cannot read property 'length' of undefined",
                "timestamp": 1530630413681,
                "type": ""
            }
        ],
        "screenShotFile": "007a008f-00ae-005e-00fc-00e3005800b5.png",
        "timestamp": 1530630356818,
        "duration": 69145
    },
    {
        "description": "Send any type of file to other users|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "5e1aacf92b26c1e9ace66a0788c1e0f6",
        "instanceId": 9143,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530630854299,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530630854303,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530630854304,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530630854304,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530630854304,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530630868433,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530630868434,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js 329:237 \"EXCEPTION: Cannot read property 'length' of undefined\"",
                "timestamp": 1530630878594,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js 329:371 \"ORIGINAL STACKTRACE:\"",
                "timestamp": 1530630878594,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js 329:415 \"TypeError: Cannot read property 'length' of undefined\\n    at e.sendChatMessage (https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js:215:68128)\\n    at View_e5.handleEvent_88 (/e/e/component.ngfactory.js:660:45)\\n    at HTMLElement.\\u003Canonymous> (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:1009:6272)\\n    at t.invokeTask (https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js:36:10021)\\n    at Object.onInvokeTask (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:380:2558)\\n    at t.invokeTask (https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js:36:9942)\\n    at n.runTask (https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js:36:5710)\\n    at HTMLElement.invoke (https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js:36:10889)\"",
                "timestamp": 1530630878594,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js 1621:5060 Uncaught TypeError: Cannot read property 'length' of undefined",
                "timestamp": 1530630878598,
                "type": ""
            }
        ],
        "screenShotFile": "00da0090-00b2-008d-002d-0020006c0097.png",
        "timestamp": 1530630830137,
        "duration": 60739
    },
    {
        "description": "Send image files to other users|one-to-one chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "a5b3802e169b57c1962696dac7faad1e",
        "instanceId": 9951,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: unknown error: Element <i _ngcontent-uks-31=\"\" class=\"fa fa-user-circle dropdown-toggle font3x cur\" data-toggle=\"dropdown\"></i> is not clickable at point (1243, 25). Other element would receive the click: <div _ngcontent-uks-29=\"\" class=\"loading-alternate\">...</div>\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)",
        "trace": "WebDriverError: unknown error: Element <i _ngcontent-uks-31=\"\" class=\"fa fa-user-circle dropdown-toggle font3x cur\" data-toggle=\"dropdown\"></i> is not clickable at point (1243, 25). Other element would receive the click: <div _ngcontent-uks-29=\"\" class=\"loading-alternate\">...</div>\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)\n    at Object.checkLegacyResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/error.js:546:15)\n    at parseHttpResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:509:13)\n    at doSend.then.response (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:441:30)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)\nFrom: Task: WebElement.click()\n    at thenableWebDriverProxy.schedule (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:807:17)\n    at WebElement.schedule_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2010:25)\n    at WebElement.click (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2092:17)\n    at actionFn (/usr/lib/node_modules/protractor/built/element.js:89:44)\n    at Array.map (<anonymous>)\n    at actionResults.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:461:65)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/one-to-one/spec3.js:18:56)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"Send image files to other users\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/one-to-one/spec3.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/one-to-one/spec3.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530631146700,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530631146710,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530631146714,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530631146714,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530631156839,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530631156841,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js 329:237 \"EXCEPTION: Cannot read property 'length' of undefined\"",
                "timestamp": 1530631171408,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js 329:371 \"ORIGINAL STACKTRACE:\"",
                "timestamp": 1530631171408,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js 329:415 \"TypeError: Cannot read property 'length' of undefined\\n    at e.sendChatMessage (https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js:215:68128)\\n    at View_e5.handleEvent_88 (/e/e/component.ngfactory.js:660:45)\\n    at HTMLElement.\\u003Canonymous> (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:1009:6272)\\n    at t.invokeTask (https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js:36:10021)\\n    at Object.onInvokeTask (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:380:2558)\\n    at t.invokeTask (https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js:36:9942)\\n    at n.runTask (https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js:36:5710)\\n    at HTMLElement.invoke (https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js:36:10889)\"",
                "timestamp": 1530631171409,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js 1621:5060 Uncaught TypeError: Cannot read property 'length' of undefined",
                "timestamp": 1530631171409,
                "type": ""
            }
        ],
        "screenShotFile": "00ee0063-0082-00f4-003b-00d200a30078.png",
        "timestamp": 1530631122628,
        "duration": 52900
    },
    {
        "description": "Send image files to other users|one-to-one chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "c13d29c0e080122b6cb3c9c57d14547d",
        "instanceId": 10457,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(xpath, //*[@id=\"navbar\"]/ul/li[8]/a/ul/li[17]/a)",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //*[@id=\"navbar\"]/ul/li[8]/a/ul/li[17]/a)\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/one-to-one/spec3.js:20:65)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"Send image files to other users\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/one-to-one/spec3.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/one-to-one/spec3.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.007ab0463c5e26232fb7.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530631378400,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530631378414,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530631378415,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530631398528,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530631398531,
                "type": ""
            }
        ],
        "screenShotFile": "00eb000a-00a1-0049-00c2-00f500da00dc.png",
        "timestamp": 1530631352272,
        "duration": 90977
    },
    {
        "description": "Send image files to other users|one-to-one chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "1f4c207987215d5cf862fb5c3db53f01",
        "instanceId": 10762,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(css selector, *[id=\"userId72\"])",
        "trace": "NoSuchElementError: No element found using locator: By(css selector, *[id=\"userId72\"])\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/one-to-one/spec3.js:27:43)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"Send image files to other users\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/one-to-one/spec3.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/one-to-one/spec3.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530631588696,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/rakesh'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530631588715,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530631588716,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530631588717,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530631588717,
                "type": ""
            }
        ],
        "screenShotFile": "00dd0028-005b-004c-0025-00cf00c9006d.png",
        "timestamp": 1530631564614,
        "duration": 24135
    },
    {
        "description": "Send image files to other users|one-to-one chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "c3aea8a8e56fba0df41faf9f54814433",
        "instanceId": 10997,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(css selector, *[id=\"userId72\"])",
        "trace": "NoSuchElementError: No element found using locator: By(css selector, *[id=\"userId72\"])\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/one-to-one/spec3.js:27:43)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"Send image files to other users\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/one-to-one/spec3.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/one-to-one/spec3.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530631655926,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/rakesh'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530631655930,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530631655931,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530631655931,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530631655931,
                "type": ""
            }
        ],
        "screenShotFile": "002b009b-005e-0015-00a8-001d007a006c.png",
        "timestamp": 1530631631149,
        "duration": 24811
    },
    {
        "description": "Send image files to other users|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "600ed3ada2a965f9630282156316ec6b",
        "instanceId": 11669,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530631807187,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530631807193,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530631807194,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530631807194,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530631807194,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530631837340,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530631837342,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js 329:237 \"EXCEPTION: Cannot read property 'length' of undefined\"",
                "timestamp": 1530631847478,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js 329:371 \"ORIGINAL STACKTRACE:\"",
                "timestamp": 1530631847478,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js 329:415 \"TypeError: Cannot read property 'length' of undefined\\n    at e.sendChatMessage (https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js:215:68128)\\n    at View_e5.handleEvent_88 (/e/e/component.ngfactory.js:660:45)\\n    at HTMLElement.\\u003Canonymous> (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:1009:6272)\\n    at t.invokeTask (https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js:36:10021)\\n    at Object.onInvokeTask (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:380:2558)\\n    at t.invokeTask (https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js:36:9942)\\n    at n.runTask (https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js:36:5710)\\n    at HTMLElement.invoke (https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js:36:10889)\"",
                "timestamp": 1530631847478,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js 1621:5060 Uncaught TypeError: Cannot read property 'length' of undefined",
                "timestamp": 1530631847479,
                "type": ""
            }
        ],
        "screenShotFile": "001c002d-009a-0099-0073-00f500150045.png",
        "timestamp": 1530631782635,
        "duration": 80138
    },
    {
        "description": "Send video file to other users.|one-to-one chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "fe9ae9ffa48540bc9cb5aebebbb38135",
        "instanceId": 11940,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(css selector, *[id=\"Passwordfile\"])",
        "trace": "NoSuchElementError: No element found using locator: By(css selector, *[id=\"Passwordfile\"])\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as sendKeys] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as sendKeys] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/one-to-one/spec4.js:7:36)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"Send video file to other users.\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/one-to-one/spec4.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/one-to-one/spec4.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [],
        "screenShotFile": "00860035-0078-00d8-00b5-00c800ea00d7.png",
        "timestamp": 1530631995080,
        "duration": 3955
    },
    {
        "description": "Send video file to other users.|one-to-one chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "f00c185f162f3e48d18b1728333a6ea1",
        "instanceId": 12378,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: unknown error: Element <i _ngcontent-tqy-31=\"\" class=\"fa fa-user-circle dropdown-toggle font3x cur\" data-toggle=\"dropdown\"></i> is not clickable at point (1243, 25). Other element would receive the click: <div _ngcontent-tqy-29=\"\" class=\"loading-alternate\">...</div>\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)",
        "trace": "WebDriverError: unknown error: Element <i _ngcontent-tqy-31=\"\" class=\"fa fa-user-circle dropdown-toggle font3x cur\" data-toggle=\"dropdown\"></i> is not clickable at point (1243, 25). Other element would receive the click: <div _ngcontent-tqy-29=\"\" class=\"loading-alternate\">...</div>\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)\n    at Object.checkLegacyResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/error.js:546:15)\n    at parseHttpResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:509:13)\n    at doSend.then.response (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:441:30)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)\nFrom: Task: WebElement.click()\n    at thenableWebDriverProxy.schedule (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:807:17)\n    at WebElement.schedule_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2010:25)\n    at WebElement.click (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2092:17)\n    at actionFn (/usr/lib/node_modules/protractor/built/element.js:89:44)\n    at Array.map (<anonymous>)\n    at actionResults.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:461:65)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/one-to-one/spec4.js:18:56)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"Send video file to other users.\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/one-to-one/spec4.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/one-to-one/spec4.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530632096734,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530632096745,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530632096749,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530632096749,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530632106955,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530632106960,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js 329:237 \"EXCEPTION: Cannot read property 'length' of undefined\"",
                "timestamp": 1530632122514,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js 329:371 \"ORIGINAL STACKTRACE:\"",
                "timestamp": 1530632122515,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js 329:415 \"TypeError: Cannot read property 'length' of undefined\\n    at e.sendChatMessage (https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js:215:68128)\\n    at View_e5.handleEvent_88 (/e/e/component.ngfactory.js:660:45)\\n    at HTMLElement.\\u003Canonymous> (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:1009:6272)\\n    at t.invokeTask (https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js:36:10021)\\n    at Object.onInvokeTask (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:380:2558)\\n    at t.invokeTask (https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js:36:9942)\\n    at n.runTask (https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js:36:5710)\\n    at HTMLElement.invoke (https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js:36:10889)\"",
                "timestamp": 1530632122515,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js 1621:5060 Uncaught TypeError: Cannot read property 'length' of undefined",
                "timestamp": 1530632122516,
                "type": ""
            }
        ],
        "screenShotFile": "007000e5-005d-00b4-00d1-005500dc0007.png",
        "timestamp": 1530632072532,
        "duration": 55179
    },
    {
        "description": "Send video file to other users.|one-to-one chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "6870d3cb08303b1ef254fc7cca3f1359",
        "instanceId": 12907,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(xpath, //*[@id=\"navbar\"]/ul/li[8]/a/ul/li[17]/a)",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //*[@id=\"navbar\"]/ul/li[8]/a/ul/li[17]/a)\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/one-to-one/spec4.js:37:63)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"Send video file to other users.\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/one-to-one/spec4.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/one-to-one/spec4.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.007ab0463c5e26232fb7.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530632414323,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530632414338,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530632414339,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530632414339,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530632434490,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530632434496,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js 329:237 \"EXCEPTION: Cannot read property 'length' of undefined\"",
                "timestamp": 1530632444833,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js 329:371 \"ORIGINAL STACKTRACE:\"",
                "timestamp": 1530632444833,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js 329:415 \"TypeError: Cannot read property 'length' of undefined\\n    at e.sendChatMessage (https://dya4247t866iy.cloudfront.net/0.007ab0463c5e26232fb7.chunk.js:215:68130)\\n    at View_e5.handleEvent_88 (/e/e/component.ngfactory.js:660:45)\\n    at HTMLElement.\\u003Canonymous> (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:1009:6272)\\n    at t.invokeTask (https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js:36:10021)\\n    at Object.onInvokeTask (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:380:2558)\\n    at t.invokeTask (https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js:36:9942)\\n    at n.runTask (https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js:36:5710)\\n    at HTMLElement.invoke (https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js:36:10889)\"",
                "timestamp": 1530632444834,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js 1621:5060 Uncaught TypeError: Cannot read property 'length' of undefined",
                "timestamp": 1530632444835,
                "type": ""
            }
        ],
        "screenShotFile": "008600f8-0003-0057-0089-0042005c007e.png",
        "timestamp": 1530632389663,
        "duration": 65607
    },
    {
        "description": "Send video file to other users.|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "daaa306f14c19886f6b775e7c1f0238a",
        "instanceId": 13142,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530632509892,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530632509908,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530632509911,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530632509912,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530632509912,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530632530117,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530632530121,
                "type": ""
            }
        ],
        "screenShotFile": "00d000db-0000-0056-0066-000400a70041.png",
        "timestamp": 1530632485690,
        "duration": 65052
    },
    {
        "description": "Add reaction to messages in chat|one-to-one chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "8828ed2132b64d2caa2ac073f38346fe",
        "instanceId": 14172,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(xpath, //*[@id=\"default\"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[3]/a[1]/ul/li[3]/img)",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //*[@id=\"default\"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[3]/a[1]/ul/li[3]/img)\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/one-to-one/spec5.js:15:118)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"Add reaction to messages in chat\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/one-to-one/spec5.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/one-to-one/spec5.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530633145513,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530633145516,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530633145517,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530633145517,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530633155642,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530633155647,
                "type": ""
            }
        ],
        "screenShotFile": "00db00d3-0057-004e-00ae-00b4008b009c.png",
        "timestamp": 1530633121350,
        "duration": 49496
    },
    {
        "description": "Add reaction to messages in chat|one-to-one chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "6cf5bdc18f63abe68c1ea432b89715ee",
        "instanceId": 14405,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(xpath, //*[@id=\"default\"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[3]/a[1]/ul/li[3]/img)",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //*[@id=\"default\"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[3]/a[1]/ul/li[3]/img)\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/one-to-one/spec5.js:15:118)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"Add reaction to messages in chat\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/one-to-one/spec5.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/one-to-one/spec5.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.007ab0463c5e26232fb7.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530633228703,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530633228709,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530633228709,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530633238831,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530633238834,
                "type": ""
            }
        ],
        "screenShotFile": "006100f0-0001-0044-003a-00cd006c00b0.png",
        "timestamp": 1530633204408,
        "duration": 49553
    },
    {
        "description": "Add reaction to messages in chat|one-to-one chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "eb4f7610f1f3943d054f8862a7b967d5",
        "instanceId": 14671,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(xpath, //*[@id=\"navbar\"]/ul/li[8]/a/ul/li[17]/a)",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //*[@id=\"navbar\"]/ul/li[8]/a/ul/li[17]/a)\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/one-to-one/spec5.js:20:65)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"Add reaction to messages in chat\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/one-to-one/spec5.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/one-to-one/spec5.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.007ab0463c5e26232fb7.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530633399168,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530633399174,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530633399174,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530633409298,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530633409304,
                "type": ""
            }
        ],
        "screenShotFile": "009a006d-0040-004a-00d0-0018007600bd.png",
        "timestamp": 1530633373600,
        "duration": 66534
    },
    {
        "description": "Add reaction to messages in chat|one-to-one chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "e1a276a802da1620f33191898dec676d",
        "instanceId": 14993,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Expected true to be false.",
        "trace": "Error: Failed expectation\n    at UserContext.<anonymous> (/home/rakesh/Desktop/one-to-one/spec5.js:35:23)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2974:25)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530633643183,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530633643187,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530633643188,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530633643188,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530633643188,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530633663314,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530633663318,
                "type": ""
            }
        ],
        "screenShotFile": "00f2005d-000a-0062-0053-00cf009c00b2.png",
        "timestamp": 1530633617528,
        "duration": 64138
    },
    {
        "description": "Remove reaction to messages in chat.|one-to-one chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "4981d633657771a138317284cafcd48b",
        "instanceId": 15301,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(xpath, //*[@id=\"default\"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/span/span/img)",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //*[@id=\"default\"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/span/span/img)\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/one-to-one/spec6.js:17:114)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"Remove reaction to messages in chat.\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/one-to-one/spec6.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/one-to-one/spec6.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530634006150,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting2'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530634006156,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530634006159,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530634006159,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530634016279,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530634016281,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530634016282,
                "type": ""
            }
        ],
        "screenShotFile": "001500e5-002c-00a3-00ca-009700ec00f0.png",
        "timestamp": 1530633981640,
        "duration": 34688
    },
    {
        "description": "Remove reaction to messages in chat.|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "2b85b3efbab4facdd3017aa9d1708e94",
        "instanceId": 15747,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530634110860,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530634110871,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530634110875,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530634110875,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530634120989,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530634120991,
                "type": ""
            }
        ],
        "screenShotFile": "005e006e-0062-006e-007c-00b2006b0053.png",
        "timestamp": 1530634086183,
        "duration": 55205
    },
    {
        "description": "Remove reaction to messages in chat.|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "2557c15eba51e658546dcfbe866e9b52",
        "instanceId": 16051,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530634448521,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530634448536,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530634448540,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530634448540,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530634448540,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530634466675,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530634466677,
                "type": ""
            }
        ],
        "screenShotFile": "001f001b-0018-006f-0032-00eb004a00cf.png",
        "timestamp": 1530634422638,
        "duration": 62342
    },
    {
        "description": "Get chat history with other users.|one-to-one chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "7b60e0dbce9c2fb420a5f5b6afb26d57",
        "instanceId": 16440,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(xpath, //*[@id=\"default\"]/div[1]/ul/li[2]/aadhya-chat-message/div/div/div/div/p)",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //*[@id=\"default\"]/div[1]/ul/li[2]/aadhya-chat-message/div/div/div/div/p)\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/one-to-one/spec9.js:15:99)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"Get chat history with other users.\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/one-to-one/spec9.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/one-to-one/spec9.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530634719761,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530634719773,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530634719774,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530634719774,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530634729882,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530634729883,
                "type": ""
            }
        ],
        "screenShotFile": "004b0021-0010-007b-00bf-0030009400a0.png",
        "timestamp": 1530634684260,
        "duration": 55753
    },
    {
        "description": "Get chat history with other users.|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "26428550b7f5ad2d28d76c674295f157",
        "instanceId": 16904,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530634862347,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530634862357,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530634862361,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530634862361,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530634872473,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530634872475,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530634919195,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530634919195,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530634919196,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530634919196,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530634929308,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530634929308,
                "type": ""
            }
        ],
        "screenShotFile": "005d0082-008c-0055-0050-00d800d200b4.png",
        "timestamp": 1530634835946,
        "duration": 115738
    },
    {
        "description": "Edit sent message.|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "30cba5d98aad41897a5e0b8bb87f1f4e",
        "instanceId": 17546,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530635529747,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530635529755,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530635529757,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530635529758,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530635539870,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530635539873,
                "type": ""
            }
        ],
        "screenShotFile": "00d70026-004a-0068-008c-004a0025005b.png",
        "timestamp": 1530635503392,
        "duration": 81435
    },
    {
        "description": "Edit sent message.|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "23aec2c8d750b82c3a29359793518812",
        "instanceId": 17839,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530635778030,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530635778042,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530635778044,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530635778044,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530635778044,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530635792188,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530635792190,
                "type": ""
            }
        ],
        "screenShotFile": "00ec00c4-00cb-0076-00db-00b5001500c7.png",
        "timestamp": 1530635754117,
        "duration": 50386
    },
    {
        "description": "View profile picture.|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "070067acb7cad93907292c86e08a5586",
        "instanceId": 18938,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530638669905,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530638669919,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530638669922,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530638669922,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530638680038,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530638680040,
                "type": ""
            }
        ],
        "screenShotFile": "004d001e-00a3-0043-003c-004e00dd0038.png",
        "timestamp": 1530638645158,
        "duration": 57233
    },
    {
        "description": "Chat history with timestamps|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "552d592ab61d06435470ce6d38f13245",
        "instanceId": 19337,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530639036807,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530639036817,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530639036819,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530639036819,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530639046936,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530639046939,
                "type": ""
            }
        ],
        "screenShotFile": "0050007f-0013-00a8-00e6-0026008c0015.png",
        "timestamp": 1530639012547,
        "duration": 52755
    },
    {
        "description": "pin a message.|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "3f06c7b4f0460eb8c82b21e9ff03a414",
        "instanceId": 20043,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530640863668,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530640863679,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530640863684,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530640863684,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530640873808,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530640873810,
                "type": ""
            }
        ],
        "screenShotFile": "001500ce-0059-0053-0097-00d300cd0016.png",
        "timestamp": 1530640838789,
        "duration": 67669
    },
    {
        "description": "pin a message.|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "f324b2f128a86167d269bfccfe33b4bf",
        "instanceId": 20348,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530641108004,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530641108015,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530641108016,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530641108016,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530641108016,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530641122149,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530641122151,
                "type": ""
            }
        ],
        "screenShotFile": "00630086-0005-00af-00b9-006600a900cc.png",
        "timestamp": 1530641083082,
        "duration": 51380
    },
    {
        "description": "pin a message.|cannot pin a message",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "4c5dd3b136fd73d12f2da0736432634c",
        "instanceId": 20912,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(xpath, //*[@id=\"default\"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/p)",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //*[@id=\"default\"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/p)\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/one-to-one/spec14.js:13:102)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"pin a message.\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/one-to-one/spec14.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/one-to-one/spec14.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530641563166,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530641563170,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530641563171,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530641563171,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530641573281,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530641573284,
                "type": ""
            }
        ],
        "screenShotFile": "00660033-0006-008c-0011-004a00ed00d1.png",
        "timestamp": 1530641538747,
        "duration": 34574
    },
    {
        "description": "pin a message.|cannot pin a message",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "5dc917aa41d46a4153c2e99a72ce83f3",
        "instanceId": 21441,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530641759745,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530641759759,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530641759763,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530641759764,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530641769909,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530641769911,
                "type": ""
            }
        ],
        "screenShotFile": "004e00c2-002e-00da-00ef-00b500d2004e.png",
        "timestamp": 1530641734488,
        "duration": 71932
    },
    {
        "description": "pin a message.|cannot pin a message",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "0f3e7594849dc205e27f6eb8d2fbfb9b",
        "instanceId": 21800,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530642146289,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530642146291,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530642146292,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530642146292,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530642156433,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530642156435,
                "type": ""
            }
        ],
        "screenShotFile": "00d60008-0079-0015-0001-00ac005c0031.png",
        "timestamp": 1530642121162,
        "duration": 76885
    },
    {
        "description": "pin a message.|add reply to message",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "577582b4de61779f36df66e494c2a965",
        "instanceId": 23244,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530643801768,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530643801771,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530643801772,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530643801772,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530643815886,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530643815887,
                "type": ""
            }
        ],
        "screenShotFile": "00f70065-0091-00cf-004e-00ac007400ba.png",
        "timestamp": 1530643777465,
        "duration": 46672
    },
    {
        "description": "pin a message.|add reply to message",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "1b76abbdf4453f30ad2ea46d378e4d47",
        "instanceId": 23481,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530643885221,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530643885235,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530643885237,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530643885237,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530643895377,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530643895378,
                "type": ""
            }
        ],
        "screenShotFile": "003700e0-0098-00e2-0030-001c002600e8.png",
        "timestamp": 1530643860690,
        "duration": 47132
    },
    {
        "description": "pin a message.| update or edit reply to amessage",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "8657b84097c520ae5398e91ab581e1a8",
        "instanceId": 23927,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(css selector, .\\/\\/\\*\\[\\@id\\=\\\"sidebar\\\"\\]\\/div\\[2\\]\\/div\\[3\\]\\/div\\[1\\]\\/div\\/aadhya-reply-message\\/div\\[2\\]\\/p)",
        "trace": "NoSuchElementError: No element found using locator: By(css selector, .\\/\\/\\*\\[\\@id\\=\\\"sidebar\\\"\\]\\/div\\[2\\]\\/div\\[3\\]\\/div\\[1\\]\\/div\\/aadhya-reply-message\\/div\\[2\\]\\/p)\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/one-to-one/spec17.js:15:103)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"pin a message.\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/one-to-one/spec17.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/one-to-one/spec17.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.007ab0463c5e26232fb7.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530644614651,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530644614667,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530644614667,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530644614675,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530644624922,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530644624926,
                "type": ""
            }
        ],
        "screenShotFile": "00be001c-0052-008a-001d-00d200a9002d.png",
        "timestamp": 1530644590327,
        "duration": 44814
    },
    {
        "description": "pin a message.| update or edit reply to amessage",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "2d020f23d13e7045e696a5b72590e651",
        "instanceId": 24153,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(css selector, .\\/\\/\\*\\[\\@id\\=\\\"sidebar\\\"\\]\\/div\\[2\\]\\/div\\[3\\]\\/div\\[1\\]\\/div\\/aadhya-reply-message\\/div\\[2\\]\\/p)",
        "trace": "NoSuchElementError: No element found using locator: By(css selector, .\\/\\/\\*\\[\\@id\\=\\\"sidebar\\\"\\]\\/div\\[2\\]\\/div\\[3\\]\\/div\\[1\\]\\/div\\/aadhya-reply-message\\/div\\[2\\]\\/p)\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/one-to-one/spec17.js:15:103)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"pin a message.\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/one-to-one/spec17.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/one-to-one/spec17.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530644665884,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530644665894,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530644665896,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530644665896,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530644665896,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530644676025,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530644676027,
                "type": ""
            }
        ],
        "screenShotFile": "00050045-00f4-0093-0035-005f00c8006e.png",
        "timestamp": 1530644641407,
        "duration": 44815
    },
    {
        "description": "pin a message.| update or edit reply to amessage",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "f5e8ddd3697ba6510777d5430cf23317",
        "instanceId": 24651,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(css selector, .\\/\\/\\*\\[\\@id\\=\\\"sidebar\\\"\\]\\/div\\[2\\]\\/div\\[3\\]\\/div\\[1\\]\\/div\\/aadhya-reply-message\\/div\\[2\\]\\/p)",
        "trace": "NoSuchElementError: No element found using locator: By(css selector, .\\/\\/\\*\\[\\@id\\=\\\"sidebar\\\"\\]\\/div\\[2\\]\\/div\\[3\\]\\/div\\[1\\]\\/div\\/aadhya-reply-message\\/div\\[2\\]\\/p)\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/one-to-one/spec17.js:15:103)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"pin a message.\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/one-to-one/spec17.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/one-to-one/spec17.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530644859154,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530644859158,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530644859158,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530644859158,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530644859159,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530644869277,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530644869279,
                "type": ""
            }
        ],
        "screenShotFile": "00110060-005c-0007-00f6-00f600c900bf.png",
        "timestamp": 1530644834886,
        "duration": 44646
    },
    {
        "description": "pin a message.| update or edit reply to amessage",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "fac7bc49492c8e2dae9173f1d3f0ac12",
        "instanceId": 24906,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(css selector, .\\/\\/\\*\\[\\@id\\=\\\"sidebar\\\"\\]\\/div\\[2\\]\\/div\\[3\\]\\/div\\[1\\]\\/div\\/aadhya-reply-message\\/div\\[2\\]\\/h5)",
        "trace": "NoSuchElementError: No element found using locator: By(css selector, .\\/\\/\\*\\[\\@id\\=\\\"sidebar\\\"\\]\\/div\\[2\\]\\/div\\[3\\]\\/div\\[1\\]\\/div\\/aadhya-reply-message\\/div\\[2\\]\\/h5)\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/one-to-one/spec17.js:15:104)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"pin a message.\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/one-to-one/spec17.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/one-to-one/spec17.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.007ab0463c5e26232fb7.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530644951309,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530644951328,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530644951328,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530644951328,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530644961456,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530644961458,
                "type": ""
            }
        ],
        "screenShotFile": "005e0081-0022-0024-00b5-004600bb00e4.png",
        "timestamp": 1530644923901,
        "duration": 47797
    },
    {
        "description": "pin a message.| update or edit reply to amessage",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "1e08df36edda8a1b6a88ea557d8ef535",
        "instanceId": 25364,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(css selector, .\\/\\/\\*\\[\\@id\\=\\\"sidebar\\\"\\]\\/div\\[2\\]\\/div\\[3\\]\\/div\\[1\\]\\/div\\/aadhya-reply-message\\/div\\[2\\]\\/h5)",
        "trace": "NoSuchElementError: No element found using locator: By(css selector, .\\/\\/\\*\\[\\@id\\=\\\"sidebar\\\"\\]\\/div\\[2\\]\\/div\\[3\\]\\/div\\[1\\]\\/div\\/aadhya-reply-message\\/div\\[2\\]\\/h5)\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/one-to-one/spec17.js:15:104)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"pin a message.\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/one-to-one/spec17.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/one-to-one/spec17.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530645122660,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530645122664,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530645122665,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530645122665,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530645122665,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530645132788,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530645132790,
                "type": ""
            }
        ],
        "screenShotFile": "00f90021-00a6-001a-0012-00bc00370011.png",
        "timestamp": 1530645098317,
        "duration": 54731
    },
    {
        "description": "pin a message.| update or edit reply to amessage",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "85e933122327b0cf7410e520b2610947",
        "instanceId": 25601,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: element not visible\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)",
        "trace": "ElementNotVisibleError: element not visible\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)\n    at Object.checkLegacyResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/error.js:546:15)\n    at parseHttpResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:509:13)\n    at doSend.then.response (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:441:30)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)\nFrom: Task: WebElement.click()\n    at thenableWebDriverProxy.schedule (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:807:17)\n    at WebElement.schedule_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2010:25)\n    at WebElement.click (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2092:17)\n    at actionFn (/usr/lib/node_modules/protractor/built/element.js:89:44)\n    at Array.map (<anonymous>)\n    at actionResults.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:461:65)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/one-to-one/spec17.js:17:47)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"pin a message.\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/one-to-one/spec17.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/one-to-one/spec17.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530645219467,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530645219483,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530645219486,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530645219486,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530645219486,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530645229631,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530645229633,
                "type": ""
            }
        ],
        "screenShotFile": "003100a6-00fd-005d-002d-003200770057.png",
        "timestamp": 1530645195341,
        "duration": 74686
    },
    {
        "description": "pin a message.| update or edit reply to amessage",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "e706e1d37553f2a699caa8419e67daac",
        "instanceId": 25861,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: element not visible\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)",
        "trace": "ElementNotVisibleError: element not visible\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)\n    at Object.checkLegacyResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/error.js:546:15)\n    at parseHttpResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:509:13)\n    at doSend.then.response (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:441:30)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)\nFrom: Task: WebElement.click()\n    at thenableWebDriverProxy.schedule (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:807:17)\n    at WebElement.schedule_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2010:25)\n    at WebElement.click (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2092:17)\n    at actionFn (/usr/lib/node_modules/protractor/built/element.js:89:44)\n    at Array.map (<anonymous>)\n    at actionResults.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:461:65)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/one-to-one/spec17.js:17:47)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"pin a message.\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/one-to-one/spec17.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/one-to-one/spec17.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530645319885,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530645319901,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530645319904,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530645319904,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530645319904,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530645330031,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530645330032,
                "type": ""
            }
        ],
        "screenShotFile": "00f90087-00a3-00ee-0087-00ec005400a5.png",
        "timestamp": 1530645295964,
        "duration": 74444
    },
    {
        "description": "pin a message.| update or edit reply to amessage",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "56adf1aeb751d95af916eb1483da1995",
        "instanceId": 26130,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: element not visible\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)",
        "trace": "ElementNotVisibleError: element not visible\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)\n    at Object.checkLegacyResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/error.js:546:15)\n    at parseHttpResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:509:13)\n    at doSend.then.response (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:441:30)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)\nFrom: Task: WebElement.click()\n    at thenableWebDriverProxy.schedule (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:807:17)\n    at WebElement.schedule_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2010:25)\n    at WebElement.click (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2092:17)\n    at actionFn (/usr/lib/node_modules/protractor/built/element.js:89:44)\n    at Array.map (<anonymous>)\n    at actionResults.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:461:65)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/one-to-one/spec17.js:17:103)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"pin a message.\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/one-to-one/spec17.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/one-to-one/spec17.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530645543103,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530645543108,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530645543108,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530645543108,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530645543108,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530645553268,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530645553270,
                "type": ""
            }
        ],
        "screenShotFile": "0036008a-00d7-0046-0091-007a00fd00ec.png",
        "timestamp": 1530645518905,
        "duration": 74757
    },
    {
        "description": "pin a message.| update or edit reply to amessage",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "55760613cd7cebd20d104dc564591941",
        "instanceId": 26616,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530645729558,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530645729562,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530645729563,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530645729563,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530645729563,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530645739682,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530645739683,
                "type": ""
            }
        ],
        "screenShotFile": "00fb00b4-00f1-006d-00ed-005f00c1009e.png",
        "timestamp": 1530645705393,
        "duration": 141697
    },
    {
        "description": "pin a message.| update or edit reply to amessage",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "3e468ac1f4e2a587b864371425f2f70c",
        "instanceId": 26873,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530645895081,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530645895085,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530645895086,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530645895086,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530645895086,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530645905216,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530645905220,
                "type": ""
            }
        ],
        "screenShotFile": "00360028-00fa-0012-004a-00ef003100b1.png",
        "timestamp": 1530645870284,
        "duration": 137118
    },
    {
        "description": "pin a message.| update or edit reply to amessage",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "f9f707839a89b136bc7aad9e141dd300",
        "instanceId": 27133,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530646067862,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530646067873,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530646067876,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530646067877,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530646078008,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530646078011,
                "type": ""
            }
        ],
        "screenShotFile": "00a600ba-00b2-00e1-007f-0030006f009e.png",
        "timestamp": 1530646043646,
        "duration": 46803
    },
    {
        "description": "pin a message.| update or edit reply to amessage",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "bc320a7da662a95d63fc8fcda52846df",
        "instanceId": 27422,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: element not visible\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)",
        "trace": "ElementNotVisibleError: element not visible\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)\n    at Object.checkLegacyResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/error.js:546:15)\n    at parseHttpResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:509:13)\n    at doSend.then.response (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:441:30)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)\nFrom: Task: WebElement.click()\n    at thenableWebDriverProxy.schedule (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:807:17)\n    at WebElement.schedule_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2010:25)\n    at WebElement.click (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2092:17)\n    at actionFn (/usr/lib/node_modules/protractor/built/element.js:89:44)\n    at Array.map (<anonymous>)\n    at actionResults.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:461:65)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/one-to-one/spec18.js:17:114)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"pin a message.\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/one-to-one/spec18.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/one-to-one/spec18.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530646366882,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530646366886,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530646366887,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530646366887,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530646366887,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530646377027,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530646377028,
                "type": ""
            }
        ],
        "screenShotFile": "004700d6-0090-00a4-00f2-00ed00ec004c.png",
        "timestamp": 1530646342385,
        "duration": 74995
    },
    {
        "description": "pin a message.| update or edit reply to amessage",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "34fd7f9e6832f50aede04c7655e988a7",
        "instanceId": 27917,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530646649545,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530646649560,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530646649562,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530646649562,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530646649562,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530646659695,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530646659698,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530646766840,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/#/chat/default - WebSocket connection to 'wss://chatapp.aadhya-analytics.com:3001/socket.io/?auth_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMTExYzFiNGJhNDljMGYwNzc2NzE1MSIsImlhdCI6MTUzMDY0Njc0NywiZXhwIjoxNTMzMjM4NzQ3fQ.e13DuR2sj0HKV_ZngJVwrZLRGrh-BPoM6VDwv2e_4kk&EIO=3&transport=websocket' failed: WebSocket is closed before the connection is established.",
                "timestamp": 1530646766841,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530646766841,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530646766841,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530646776940,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530646776941,
                "type": ""
            }
        ],
        "screenShotFile": "00380005-00a1-005a-0023-00c900110009.png",
        "timestamp": 1530646625295,
        "duration": 164031
    },
    {
        "description": "Send text messages to other users|Get push notification when application minimized",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "629989b204302dfc518a0498ba709844",
        "instanceId": 28300,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530647292352,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530647292355,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530647292356,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530647292356,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530647302469,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530647302471,
                "type": ""
            }
        ],
        "screenShotFile": "000600d8-00b5-0068-00f1-00ed00090023.png",
        "timestamp": 1530647268123,
        "duration": 50998
    },
    {
        "description": "Edit sent message.|one-to-one chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "2555179b5f89310331e3e2873be5836d",
        "instanceId": 28752,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: a is not defined",
        "trace": "ReferenceError: a is not defined\n    at UserContext.<anonymous> (/home/rakesh/Desktop/one-to-one/spec11.js:40:8)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2974:25)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\nFrom: Task: Run it(\"Edit sent message.\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/one-to-one/spec11.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/one-to-one/spec11.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [],
        "screenShotFile": "00dc00a3-0001-0092-00dc-0038002f0036.png",
        "timestamp": 1530647837141,
        "duration": 25
    },
    {
        "description": "Edit sent message.|one-to-one chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "935a14208f40af8cb6457ea0fb42066e",
        "instanceId": 28963,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: a is not defined",
        "trace": "ReferenceError: a is not defined\n    at UserContext.<anonymous> (/home/rakesh/Desktop/one-to-one/spec11.js:40:8)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2974:25)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\nFrom: Task: Run it(\"Edit sent message.\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/one-to-one/spec11.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/one-to-one/spec11.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [],
        "screenShotFile": "009400eb-00ba-00ca-00f0-0097002a0079.png",
        "timestamp": 1530647851535,
        "duration": 30
    },
    {
        "description": "Edit sent message.|one-to-one chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "a70dbb92aa3fb53dd27674fbb5d13158",
        "instanceId": 29184,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(xpath, //*[@id=\"default\"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/div[2]/a[1])",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //*[@id=\"default\"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/div[2]/a[1])\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/one-to-one/spec11.js:22:112)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"Edit sent message.\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/one-to-one/spec11.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/one-to-one/spec11.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530647938459,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530647938465,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530647938467,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530647938467,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530647948609,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530647948613,
                "type": ""
            }
        ],
        "screenShotFile": "00170000-0001-000c-0098-00e1002f00ed.png",
        "timestamp": 1530647913809,
        "duration": 69583
    },
    {
        "description": "Edit sent message.|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "fd0bf48bacfdfb4496015e5e3afac192",
        "instanceId": 29649,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530648110867,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530648110890,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530648110896,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530648110896,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530648110896,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530648121158,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530648121162,
                "type": ""
            }
        ],
        "screenShotFile": "00fb0051-0038-00f9-0075-00a500ff004f.png",
        "timestamp": 1530648086719,
        "duration": 57066
    },
    {
        "description": "Add reaction to messages in chat|other user messages we cannot delete",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "a6f6b97f955ca7d23d10b81ceb47f3af",
        "instanceId": 30226,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(xpath, //*[@id=\"default\"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/p)",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //*[@id=\"default\"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/p)\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/one-to-one/spec12.js:13:102)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"Add reaction to messages in chat\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/one-to-one/spec12.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/one-to-one/spec12.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530648653392,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530648653396,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530648653396,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530648653396,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530648653396,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530648663516,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530648663517,
                "type": ""
            }
        ],
        "screenShotFile": "00b0002e-00f3-0055-00ff-000b0085003c.png",
        "timestamp": 1530648628281,
        "duration": 35318
    },
    {
        "description": "Add reaction to messages in chat|other user messages we cannot delete",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "4e789ac874be28805939c2821d6cf073",
        "instanceId": 30458,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(xpath, //*[@id=\"default\"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/p)",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //*[@id=\"default\"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/p)\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/one-to-one/spec12.js:13:102)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"Add reaction to messages in chat\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/one-to-one/spec12.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/one-to-one/spec12.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530648720308,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530648720314,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530648720315,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530648720315,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530648720315,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530648730458,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530648730464,
                "type": ""
            }
        ],
        "screenShotFile": "008a002f-0030-00f7-0057-00a5008a00d1.png",
        "timestamp": 1530648695953,
        "duration": 34606
    },
    {
        "description": "Add reaction to messages in chat|other user messages we cannot delete",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "676cc18de4733df5e3fc5d44a18f3dae",
        "instanceId": 30736,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530648839195,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530648839199,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530648839200,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530648839200,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530648839200,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530648849321,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530648849322,
                "type": ""
            }
        ],
        "screenShotFile": "004000dd-00ca-0057-00c7-00b4005300ff.png",
        "timestamp": 1530648814985,
        "duration": 64861
    },
    {
        "description": "Send code snippet.|one-to-one chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "0893d2a5a556b9fb200fb0d19b84e45c",
        "instanceId": 31259,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: unknown error: cannot focus element\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)",
        "trace": "WebDriverError: unknown error: cannot focus element\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)\n    at Object.checkLegacyResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/error.js:546:15)\n    at parseHttpResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:509:13)\n    at doSend.then.response (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:441:30)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)\nFrom: Task: WebElement.sendKeys()\n    at thenableWebDriverProxy.schedule (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:807:17)\n    at WebElement.schedule_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2010:25)\n    at WebElement.sendKeys (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2174:19)\n    at actionFn (/usr/lib/node_modules/protractor/built/element.js:89:44)\n    at Array.map (<anonymous>)\n    at actionResults.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:461:65)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as sendKeys] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as sendKeys] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/one-to-one/spec21.js:19:92)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"Send code snippet.\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/one-to-one/spec21.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/one-to-one/spec21.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530649214388,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting2'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530649214391,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530649214391,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530649214391,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530649214391,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530649224532,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530649224535,
                "type": ""
            }
        ],
        "screenShotFile": "00e50097-0051-00e3-003d-00f4000b00eb.png",
        "timestamp": 1530649189989,
        "duration": 57007
    },
    {
        "description": "Send code snippet.|one-to-one chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "228d5a5229a6beff279d5b40c6211258",
        "instanceId": 31724,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: unknown error: cannot focus element\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)",
        "trace": "WebDriverError: unknown error: cannot focus element\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)\n    at Object.checkLegacyResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/error.js:546:15)\n    at parseHttpResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:509:13)\n    at doSend.then.response (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:441:30)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)\nFrom: Task: WebElement.sendKeys()\n    at thenableWebDriverProxy.schedule (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:807:17)\n    at WebElement.schedule_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2010:25)\n    at WebElement.sendKeys (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2174:19)\n    at actionFn (/usr/lib/node_modules/protractor/built/element.js:89:44)\n    at Array.map (<anonymous>)\n    at actionResults.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:461:65)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as sendKeys] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as sendKeys] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/one-to-one/spec21.js:19:92)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"Send code snippet.\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/one-to-one/spec21.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/one-to-one/spec21.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530649367781,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting2'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530649367796,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530649367801,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530649367801,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530649367801,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530649378036,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530649378038,
                "type": ""
            }
        ],
        "screenShotFile": "00fa0021-0094-00e2-0043-006400730075.png",
        "timestamp": 1530649343031,
        "duration": 57673
    },
    {
        "description": "Send code snippet.|one-to-one chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "b5b939349d1d8b0ff0b00a1e93bc5f55",
        "instanceId": 32167,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: unknown error: cannot focus element\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)",
        "trace": "WebDriverError: unknown error: cannot focus element\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)\n    at Object.checkLegacyResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/error.js:546:15)\n    at parseHttpResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:509:13)\n    at doSend.then.response (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:441:30)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)\nFrom: Task: WebElement.sendKeys()\n    at thenableWebDriverProxy.schedule (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:807:17)\n    at WebElement.schedule_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2010:25)\n    at WebElement.sendKeys (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2174:19)\n    at actionFn (/usr/lib/node_modules/protractor/built/element.js:89:44)\n    at Array.map (<anonymous>)\n    at actionResults.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:461:65)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as sendKeys] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as sendKeys] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/one-to-one/spec21.js:19:92)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"Send code snippet.\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/one-to-one/spec21.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/one-to-one/spec21.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530649494903,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530649494909,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530649494911,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530649494911,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530649505052,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530649505053,
                "type": ""
            }
        ],
        "screenShotFile": "00680024-008a-004b-00b2-0057001a0024.png",
        "timestamp": 1530649469344,
        "duration": 60163
    },
    {
        "description": "Send code snippet.|one-to-one chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "0994e905fdd4e6cfb6842672094fbdb8",
        "instanceId": 32429,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: unknown error: cannot focus element\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)",
        "trace": "WebDriverError: unknown error: cannot focus element\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)\n    at Object.checkLegacyResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/error.js:546:15)\n    at parseHttpResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:509:13)\n    at doSend.then.response (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:441:30)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)\nFrom: Task: WebElement.sendKeys()\n    at thenableWebDriverProxy.schedule (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:807:17)\n    at WebElement.schedule_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2010:25)\n    at WebElement.sendKeys (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2174:19)\n    at actionFn (/usr/lib/node_modules/protractor/built/element.js:89:44)\n    at Array.map (<anonymous>)\n    at actionResults.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:461:65)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as sendKeys] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as sendKeys] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/one-to-one/spec21.js:19:81)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"Send code snippet.\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/one-to-one/spec21.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/one-to-one/spec21.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530649602614,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530649602620,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530649602620,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530649602620,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530649612724,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530649612725,
                "type": ""
            }
        ],
        "screenShotFile": "003f00c6-001f-0037-0060-006800c00050.png",
        "timestamp": 1530649578285,
        "duration": 58880
    },
    {
        "description": "Send code snippet.|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "3eeb44839769e7feebbcbd921dc37e8a",
        "instanceId": 32676,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530649744590,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530649744604,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530649744604,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530649744605,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530649754771,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530649754776,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530649795886,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530649799919,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530649799920,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1530649799921,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/#/chat/default - WebSocket connection to 'wss://chatapp.aadhya-analytics.com:3001/socket.io/?auth_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5NWE1NThkYmNjMDcwNTJhOTgzMjkwNiIsImlhdCI6MTUzMDY0OTgwOSwiZXhwIjoxNTMzMjQxODA5fQ.tbXWL2mCTkFCuKxj1rNtCyVhiOdQmu-01UgIaIu9uTI&EIO=3&transport=websocket' failed: WebSocket is closed before the connection is established.",
                "timestamp": 1530649828791,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530649828796,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530649828798,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530649828798,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530649828798,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530649838927,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530649838928,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530649838933,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530649838933,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/#/login - WebSocket connection to 'wss://chatapp.aadhya-analytics.com:3001/socket.io/?auth_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5NWE1NThkYmNjMDcwNTJhOTgzMjkwNiIsImlhdCI6MTUzMDY0OTgwOSwiZXhwIjoxNTMzMjQxODA5fQ.tbXWL2mCTkFCuKxj1rNtCyVhiOdQmu-01UgIaIu9uTI&EIO=3&transport=websocket' failed: WebSocket is closed before the connection is established.",
                "timestamp": 1530649861305,
                "type": ""
            }
        ],
        "screenShotFile": "00e70090-0025-008f-00be-0086000300d1.png",
        "timestamp": 1530649720315,
        "duration": 140977
    },
    {
        "description": "Send data to email through code snippet.|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "cb8b7278780660d934533d32ebcf0e49",
        "instanceId": 718,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530649993282,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530649993285,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530649993286,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530649993286,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530650003395,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530650003397,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530650003403,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530650003403,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1530650003403,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530650070832,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/#/chat/default - WebSocket connection to 'wss://chatapp.aadhya-analytics.com:3001/socket.io/?auth_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5NWE1NThkYmNjMDcwNTJhOTgzMjkwNiIsImlhdCI6MTUzMDY1MDA1MSwiZXhwIjoxNTMzMjQyMDUxfQ.Ix5BBZU8I3K7Rol0uOLrfbIEmNR_RzxQ40bdXpklVyU&EIO=3&transport=websocket' failed: WebSocket is closed before the connection is established.",
                "timestamp": 1530650070834,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530650070834,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530650070834,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530650070835,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530650080943,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530650080945,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530650080950,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530650080951,
                "type": ""
            }
        ],
        "screenShotFile": "00e600f3-008c-000d-004b-000d008c0035.png",
        "timestamp": 1530649969075,
        "duration": 134209
    },
    {
        "description": "Send url in one-one chat.|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "68fed1d46d4e7b30665b03d2488b25df",
        "instanceId": 1030,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530650198470,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530650198481,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530650198483,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530650198483,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530650208605,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530650208607,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530650208616,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530650208616,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1530650208617,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/#/chat/message/raheem - Failed to load https://www.mrf.com/: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'https://dya4247t866iy.cloudfront.net' is therefore not allowed access. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.",
                "timestamp": 1530650227264,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530650255816,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530650255816,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530650255816,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530650255816,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/#/chat/default - WebSocket connection to 'wss://chatapp.aadhya-analytics.com:3001/socket.io/?auth_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5NWE1NThkYmNjMDcwNTJhOTgzMjkwNiIsImlhdCI6MTUzMDY1MDIzNiwiZXhwIjoxNTMzMjQyMjM2fQ.tAwgmOvOm5gWLAbaBmnGELSaAf4m6Kb_lJ528-I_PoM&EIO=3&transport=websocket' failed: WebSocket is closed before the connection is established.",
                "timestamp": 1530650255817,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530650265917,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530650265918,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530650265922,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530650265922,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/null - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1530650265922,
                "type": ""
            }
        ],
        "screenShotFile": "00c300d6-00be-00ce-0010-002e002b000d.png",
        "timestamp": 1530650174431,
        "duration": 113851
    },
    {
        "description": " Do not get typing notifications|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "6e9a7e0d36689f607a64e3a9f2f2f34b",
        "instanceId": 1819,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530650837493,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530650837504,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530650837508,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530650837508,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530650847648,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530650847650,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530650847655,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530650847656,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1530650847657,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/null - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1530650847657,
                "type": ""
            }
        ],
        "screenShotFile": "005f00c9-0061-00b2-0036-000c008100d2.png",
        "timestamp": 1530650813217,
        "duration": 42735
    }
];

    this.sortSpecs = function () {
        this.results = results.sort(function sortFunction(a, b) {
    if (a.sessionId < b.sessionId) return -1;else if (a.sessionId > b.sessionId) return 1;

    if (a.timestamp < b.timestamp) return -1;else if (a.timestamp > b.timestamp) return 1;

    return 0;
});
    };

    this.sortSpecs();
});

app.filter('bySearchSettings', function () {
    return function (items, searchSettings) {
        var filtered = [];
        var prevItem = null;

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.displaySpecName = false;

            countLogMessages(item);

            var hasLog = searchSettings.withLog && item.browserLogs && item.browserLogs.length > 0;
            if (searchSettings.description === '' ||
                (item.description && item.description.toLowerCase().indexOf(searchSettings.description.toLowerCase()) > -1)) {

                if (searchSettings.passed && item.passed || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                } else if (searchSettings.failed && !item.passed && !item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                } else if (searchSettings.pending && item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                }

            }
        }

        return filtered;
    };
});

var checkIfShouldDisplaySpecName = function (prevItem, item) {
    if (!prevItem) {
        item.displaySpecName = true;
        return;
    }

    if (getSpec(item.description) != getSpec(prevItem.description)) {
        item.displaySpecName = true;
        return;
    }
};

var getSpec = function (str) {
    var describes = str.split('|');
    return describes[describes.length-1];
};

var countLogMessages = function (item) {
    if ((!item.logWarnings || !item.logErrors) && item.browserLogs && item.browserLogs.length > 0) {
        item.logWarnings = 0;
        item.logErrors = 0;
        for (var logNumber = 0; logNumber < item.browserLogs.length; logNumber++) {
            var logEntry = item.browserLogs[logNumber];
            if (logEntry.level === 'SEVERE') {
                item.logErrors++;
            }
            if (logEntry.level === 'WARNING') {
                item.logWarnings++;
            }
        }
    }
};