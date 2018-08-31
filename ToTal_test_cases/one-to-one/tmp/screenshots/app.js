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
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "77e833394aed10f64e727e249c592834",
        "instanceId": 992,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: element not visible\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)",
        "trace": "ElementNotVisibleError: element not visible\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)\n    at Object.checkLegacyResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/error.js:546:15)\n    at parseHttpResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:509:13)\n    at doSend.then.response (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:441:30)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)\nFrom: Task: WebElement.click()\n    at thenableWebDriverProxy.schedule (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:807:17)\n    at WebElement.schedule_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2010:25)\n    at WebElement.click (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2092:17)\n    at actionFn (/usr/lib/node_modules/protractor/built/element.js:89:44)\n    at Array.map (<anonymous>)\n    at actionResults.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:461:65)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at Object.exports.Login (/home/rakesh/ToTal_test_cases/one-to-one/reuse.js:8:41)\n    at UserContext.<anonymous> (/home/rakesh/ToTal_test_cases/one-to-one/spec1.js:4:31)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\nFrom: Task: Run it(\"Send text messages to other users\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/ToTal_test_cases/one-to-one/spec1.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/ToTal_test_cases/one-to-one/spec1.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530883200992,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/roja'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530883201006,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530883201007,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530883201007,
                "type": ""
            }
        ],
        "screenShotFile": "005c004f-0023-0010-004f-00f200b60048.png",
        "timestamp": 1530883174851,
        "duration": 26215
    },
    {
        "description": "Send text messages to other users|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "f72c00c9892618fbbb245fe8c496bb0c",
        "instanceId": 2404,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530883343586,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530883343592,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530883343594,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530883353705,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530883353708,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530883353709,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530883353710,
                "type": ""
            }
        ],
        "screenShotFile": "005e0045-004c-0042-00f7-00ad005f005e.png",
        "timestamp": 1530883319051,
        "duration": 51317
    },
    {
        "description": "Send any type of file to other users|one-to-one chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "69b26e8109faecd8197ef0a3704cefb5",
        "instanceId": 2625,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(css selector, *[id=\"Username\"])",
        "trace": "NoSuchElementError: No element found using locator: By(css selector, *[id=\"Username\"])\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as sendKeys] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as sendKeys] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at Object.exports.Login (/home/rakesh/ToTal_test_cases/one-to-one/reuse.js:4:30)\n    at UserContext.<anonymous> (/home/rakesh/ToTal_test_cases/one-to-one/spec2.js:9:29)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\nFrom: Task: Run it(\"Send any type of file to other users\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/ToTal_test_cases/one-to-one/spec2.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/ToTal_test_cases/one-to-one/spec2.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530883398493,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530883398496,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530883398497,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530883398497,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530883398497,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530883408608,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530883408610,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/files_AAIL/fileUploads/thumbimage_1530883439105red-love-romantic-flowers.jpg - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530883449103,
                "type": ""
            }
        ],
        "screenShotFile": "002c0027-006c-00e1-00e9-00d50083004c.png",
        "timestamp": 1530883374157,
        "duration": 75180
    },
    {
        "description": "Send image files to other users|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "000f94b0e48ca612a127d2ba9746825c",
        "instanceId": 2874,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530883477694,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530883477698,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530883477700,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530883477700,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530883477700,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530883487855,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530883487856,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530883518313,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530883518314,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1530883518314,
                "type": ""
            }
        ],
        "screenShotFile": "00d200c5-005d-00bb-0023-007900dd001e.png",
        "timestamp": 1530883453099,
        "duration": 73680
    },
    {
        "description": "Send video file to other users.|one-to-one chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "f72b1ecf8a3ecf0e1f72c6fa0c50eda4",
        "instanceId": 3146,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: unknown error: Element <i _ngcontent-ujs-31=\"\" class=\"fa fa-user-circle dropdown-toggle font3x cur\" data-toggle=\"dropdown\"></i> is not clickable at point (1243, 25). Other element would receive the click: <div _ngcontent-ujs-29=\"\" class=\"loading-alternate\">...</div>\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)",
        "trace": "WebDriverError: unknown error: Element <i _ngcontent-ujs-31=\"\" class=\"fa fa-user-circle dropdown-toggle font3x cur\" data-toggle=\"dropdown\"></i> is not clickable at point (1243, 25). Other element would receive the click: <div _ngcontent-ujs-29=\"\" class=\"loading-alternate\">...</div>\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)\n    at Object.checkLegacyResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/error.js:546:15)\n    at parseHttpResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:509:13)\n    at doSend.then.response (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:441:30)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)\nFrom: Task: WebElement.click()\n    at thenableWebDriverProxy.schedule (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:807:17)\n    at WebElement.schedule_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2010:25)\n    at WebElement.click (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2092:17)\n    at actionFn (/usr/lib/node_modules/protractor/built/element.js:89:44)\n    at Array.map (<anonymous>)\n    at actionResults.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:461:65)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at Object.exports.Logout (/home/rakesh/ToTal_test_cases/one-to-one/reuse.js:12:75)\n    at UserContext.<anonymous> (/home/rakesh/ToTal_test_cases/one-to-one/spec4.js:9:29)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\nFrom: Task: Run it(\"Send video file to other users.\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/ToTal_test_cases/one-to-one/spec4.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/ToTal_test_cases/one-to-one/spec4.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530883555111,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530883555115,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530883555116,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530883555116,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530883555116,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530883565226,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530883565228,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530883565233,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530883565234,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1530883565234,
                "type": ""
            }
        ],
        "screenShotFile": "000600b5-0048-0027-0045-0020009800d9.png",
        "timestamp": 1530883530495,
        "duration": 60422
    },
    {
        "description": "Add reaction to messages in chat|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "86d266bc0dafe96c8e022de00bafd80a",
        "instanceId": 3387,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530883619716,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530883619719,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530883619720,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530883619720,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530883619720,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530883629841,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530883629842,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530883629846,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530883629846,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1530883629846,
                "type": ""
            }
        ],
        "screenShotFile": "007e006e-0030-0061-00e0-0030001d00c8.png",
        "timestamp": 1530883594838,
        "duration": 68784
    },
    {
        "description": "Remove reaction to messages in chat.|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "99695326fca08a581bd6f4a8ca041ff9",
        "instanceId": 3617,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530883692573,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530883692577,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530883692578,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530883692578,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530883692578,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530883702682,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530883702683,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530883702686,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530883702687,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1530883702687,
                "type": ""
            }
        ],
        "screenShotFile": "00d20008-00ad-0053-00a5-00e60018005b.png",
        "timestamp": 1530883667332,
        "duration": 53961
    },
    {
        "description": " Do not get typing notifications|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "4cbab3c1a73854bc9ce13f874ac14bb0",
        "instanceId": 4043,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530883753199,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530883753203,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530883753206,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530883753206,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530883753206,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530883763318,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530883763319,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530883763323,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530883763324,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1530883763324,
                "type": ""
            }
        ],
        "screenShotFile": "00390053-0082-00df-0049-003b001e00f5.png",
        "timestamp": 1530883728717,
        "duration": 43005
    },
    {
        "description": "Get chat history with other users.|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "d5ffdbc48732eb8509d2d550a6cc28f2",
        "instanceId": 4268,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530883799700,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530883799704,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530883799705,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530883799705,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530883799705,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530883809813,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530883809814,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530883809817,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530883809817,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1530883809817,
                "type": ""
            }
        ],
        "screenShotFile": "00d70045-0057-008d-006d-005b006700f0.png",
        "timestamp": 1530883775451,
        "duration": 60909
    },
    {
        "description": "Edit sent message.|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "d23b8f24dbbbd27f781bc4f49ba3f0c9",
        "instanceId": 4501,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530883864833,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530883864837,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530883864839,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530883864839,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530883864839,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530883874957,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530883874959,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530883874964,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530883874964,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1530883874964,
                "type": ""
            }
        ],
        "screenShotFile": "005900ee-0096-007a-0099-00f4002600cf.png",
        "timestamp": 1530883840091,
        "duration": 79963
    },
    {
        "description": "Send code snippet.|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "a0d2cf8208db1c97361d649d79fb798d",
        "instanceId": 5342,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530885244365,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530885244368,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530885244368,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530885244368,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530885244368,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530885254468,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530885254469,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530885254472,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530885254473,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1530885254473,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530885295100,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530885299141,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530885299142,
                "type": ""
            }
        ],
        "screenShotFile": "004c00fe-0046-00da-0021-000a0047002b.png",
        "timestamp": 1530885214837,
        "duration": 92713
    },
    {
        "description": "Send data to email through code snippet.|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "035d3d43f061ea84a4d8ebdc8490ca19",
        "instanceId": 5574,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530885335150,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530885335160,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530885335161,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530885335161,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530885335161,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530885345311,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530885345313,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530885345317,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530885345318,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530885345318,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530885345319,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1530885345319,
                "type": ""
            }
        ],
        "screenShotFile": "006d007f-002d-003a-00f6-00c0000000d1.png",
        "timestamp": 1530885310955,
        "duration": 81599
    },
    {
        "description": "Send url in one-one chat.|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "b23ee5d3458422efbaaef7d7c42c124b",
        "instanceId": 5808,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530885421012,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530885421022,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530885421027,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530885421027,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530885421027,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530885431146,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530885431148,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530885431154,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530885431155,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530885431155,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530885431156,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1530885431156,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/#/chat/message/roja - Failed to load https://www.mrf.com/: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'https://dya4247t866iy.cloudfront.net' is therefore not allowed access. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.",
                "timestamp": 1530885449838,
                "type": ""
            }
        ],
        "screenShotFile": "00aa000e-0021-00a4-0011-00bd00390031.png",
        "timestamp": 1530885395960,
        "duration": 62294
    },
    {
        "description": "Chat history with timestamps|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "d82c5ff4a8f9fd7d1abb9627138b2d93",
        "instanceId": 6036,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530885486471,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530885486474,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530885486474,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530885486474,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530885486474,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530885496578,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530885496580,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530885496583,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530885496583,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530885496584,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530885496584,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1530885496584,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/null - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1530885496585,
                "type": ""
            }
        ],
        "screenShotFile": "004400da-00b9-00b1-0036-002a0005005d.png",
        "timestamp": 1530885461466,
        "duration": 57686
    },
    {
        "description": "View profile picture.|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "1f8b9a2c32a5c5419e104ad6b2ad7133",
        "instanceId": 6262,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530885550782,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530885550793,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530885550798,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530885550798,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530885560942,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530885560950,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530885560952,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530885560957,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530885560958,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530885560959,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530885560960,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/null - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1530885560960,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1530885560960,
                "type": ""
            }
        ],
        "screenShotFile": "00f900f3-00d7-00ce-0002-0060004e0051.png",
        "timestamp": 1530885522438,
        "duration": 61083
    },
    {
        "description": "pin a message.|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "200815778238a2e83df2a0c5771797fc",
        "instanceId": 6875,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530886655730,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530886655740,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530886655743,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530886655744,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530886655744,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530886665868,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530886665870,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530886665873,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530886665874,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530886665874,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530886665875,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1530886665875,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/null - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1530886665875,
                "type": ""
            }
        ],
        "screenShotFile": "00960063-0086-000e-0069-00d700a40017.png",
        "timestamp": 1530886631618,
        "duration": 67036
    },
    {
        "description": "pin a message.|cannot pin a message",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "862c459dd3c6d082c07226f747af6ba6",
        "instanceId": 7112,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530886726791,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530886726803,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530886726806,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530886726806,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530886726806,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530886736941,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530886736943,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530886736946,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530886736947,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530886736948,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530886736948,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1530886736948,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/null - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1530886736948,
                "type": ""
            }
        ],
        "screenShotFile": "00eb0060-005b-005e-0036-005200c700f4.png",
        "timestamp": 1530886702131,
        "duration": 63466
    },
    {
        "description": "pin a message.|cannot pin a message",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "acf1fdd083e11cccee342100f29fbf71",
        "instanceId": 7346,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530886795204,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530886795216,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530886795222,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530886795222,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530886795222,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530886805332,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530886805333,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530886805337,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530886805337,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530886805338,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530886805338,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1530886805338,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/null - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1530886805338,
                "type": ""
            }
        ],
        "screenShotFile": "00110045-0052-00e9-0044-00b50069009a.png",
        "timestamp": 1530886769127,
        "duration": 77891
    },
    {
        "description": "pin a message.|add reply to message",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "0556b1ee775f4a6e9d90fb627a657e4b",
        "instanceId": 7634,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530887008776,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530887008787,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530887008790,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530887018907,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530887018912,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530887018914,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530887018915,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530887018918,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530887018919,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530887018919,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530887018920,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1530887018920,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/null - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1530887018920,
                "type": ""
            }
        ],
        "screenShotFile": "0015004a-0063-0013-000e-00e800120047.png",
        "timestamp": 1530886980951,
        "duration": 76941
    },
    {
        "description": "pin a message.| update or edit reply to amessage",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "160fa195fec8ecb014adf21db9ffff8d",
        "instanceId": 7875,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530887092735,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530887092745,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530887092747,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530887092747,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530887092747,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530887102871,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530887102876,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530887102882,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530887102883,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530887102883,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530887102884,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1530887102884,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/null - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1530887102884,
                "type": ""
            }
        ],
        "screenShotFile": "003700fa-00f0-0087-00b4-00f700de00fa.png",
        "timestamp": 1530887061354,
        "duration": 135838
    },
    {
        "description": "pin a message.| update or edit reply to amessage",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "0281713d89f240365b6e5f3b66017be4",
        "instanceId": 8132,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: element not visible\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)",
        "trace": "ElementNotVisibleError: element not visible\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)\n    at Object.checkLegacyResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/error.js:546:15)\n    at parseHttpResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:509:13)\n    at doSend.then.response (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:441:30)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)\nFrom: Task: WebElement.click()\n    at thenableWebDriverProxy.schedule (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:807:17)\n    at WebElement.schedule_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2010:25)\n    at WebElement.click (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2092:17)\n    at actionFn (/usr/lib/node_modules/protractor/built/element.js:89:44)\n    at Array.map (<anonymous>)\n    at actionResults.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:461:65)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/ToTal_test_cases/one-to-one/spec18.js:10:103)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"pin a message.\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/ToTal_test_cases/one-to-one/spec18.js:4:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/ToTal_test_cases/one-to-one/spec18.js:3:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530887231395,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530887231403,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530887231404,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530887231404,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530887231404,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530887241512,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530887241514,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530887241519,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530887241519,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530887241519,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530887241520,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1530887241520,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/null - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1530887241520,
                "type": ""
            }
        ],
        "screenShotFile": "005d000d-004c-00f7-0026-0067000f0063.png",
        "timestamp": 1530887200646,
        "duration": 81263
    },
    {
        "description": "cannot delete message from user B|one-to-one chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "d97540a14cf45abf9a4c59eb59862c58",
        "instanceId": 11015,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: element not visible\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)",
        "trace": "ElementNotVisibleError: element not visible\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)\n    at Object.checkLegacyResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/error.js:546:15)\n    at parseHttpResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:509:13)\n    at doSend.then.response (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:441:30)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)\nFrom: Task: WebElement.click()\n    at thenableWebDriverProxy.schedule (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:807:17)\n    at WebElement.schedule_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2010:25)\n    at WebElement.click (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2092:17)\n    at actionFn (/usr/lib/node_modules/protractor/built/element.js:89:44)\n    at Array.map (<anonymous>)\n    at actionResults.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:461:65)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at Object.exports.TestLogin (/home/rakesh/ToTal_test_cases/one-to-one/reuse.js:24:45)\n    at UserContext.<anonymous> (/home/rakesh/ToTal_test_cases/one-to-one/spec12.js:4:31)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\nFrom: Task: Run it(\"cannot delete message from user B\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/ToTal_test_cases/one-to-one/spec12.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/ToTal_test_cases/one-to-one/spec12.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530894921047,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/roja'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530894921092,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530894921097,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530894921097,
                "type": ""
            }
        ],
        "screenShotFile": "00f40099-0031-002d-0008-00c6002d003f.png",
        "timestamp": 1530894865707,
        "duration": 55502
    },
    {
        "description": "cannot delete message from user B|one-to-one chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "511b8238ec9e10c23f54f65b505efc31",
        "instanceId": 11285,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: element not visible\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)",
        "trace": "ElementNotVisibleError: element not visible\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)\n    at Object.checkLegacyResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/error.js:546:15)\n    at parseHttpResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:509:13)\n    at doSend.then.response (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:441:30)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)\nFrom: Task: WebElement.click()\n    at thenableWebDriverProxy.schedule (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:807:17)\n    at WebElement.schedule_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2010:25)\n    at WebElement.click (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2092:17)\n    at actionFn (/usr/lib/node_modules/protractor/built/element.js:89:44)\n    at Array.map (<anonymous>)\n    at actionResults.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:461:65)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at Object.exports.TestLogin (/home/rakesh/ToTal_test_cases/one-to-one/reuse.js:24:45)\n    at UserContext.<anonymous> (/home/rakesh/ToTal_test_cases/one-to-one/spec12.js:4:31)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\nFrom: Task: Run it(\"cannot delete message from user B\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/ToTal_test_cases/one-to-one/spec12.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/ToTal_test_cases/one-to-one/spec12.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530895055953,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/roja'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530895055971,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530895055973,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530895055973,
                "type": ""
            }
        ],
        "screenShotFile": "003d0027-000a-00b7-00fd-001a00a200b9.png",
        "timestamp": 1530895001627,
        "duration": 54404
    },
    {
        "description": "cannot delete message from user B|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "92815f9b9765e77617eb1c3803e07739",
        "instanceId": 11514,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530895119716,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/roja'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530895119736,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530895119737,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530895119737,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530895149886,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530895149890,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530895149900,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530895149902,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530895149904,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530895149905,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1530895149906,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/null - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1530895149906,
                "type": ""
            }
        ],
        "screenShotFile": "00fb00bd-00f1-0038-00b9-00230066001f.png",
        "timestamp": 1530895063594,
        "duration": 115322
    },
    {
        "description": "Send text messages to other users|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "3f9b555b9cec5a488d36b7e6362da3fb",
        "instanceId": 12202,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530896255824,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530896255834,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530896255836,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530896255836,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530896255836,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530896265952,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530896265955,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530896265959,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530896265959,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530896265960,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530896265960,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1530896265960,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/null - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1530896265960,
                "type": ""
            }
        ],
        "screenShotFile": "00bc000e-0094-000a-00ae-00830058007a.png",
        "timestamp": 1530896231064,
        "duration": 51596
    },
    {
        "description": "Send text messages to other users|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "5d4ce8c0a3b936a6d001f532d1d4b90c",
        "instanceId": 12440,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.007ab0463c5e26232fb7.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530896339426,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530896339432,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530896339432,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530896339432,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530896369852,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530896369855,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530896369859,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530896369860,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530896369860,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530896369861,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1530896369862,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/null - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1530896369862,
                "type": ""
            }
        ],
        "screenShotFile": "007c0093-0087-00eb-002b-0008003400a8.png",
        "timestamp": 1530896308369,
        "duration": 70071
    },
    {
        "description": "Send text messages to other users|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "e035ed2dd36dc16dfda91c62c1c8ac82",
        "instanceId": 12699,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530896423668,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530896423672,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530896423674,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530896423674,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530896423674,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530896433775,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530896433777,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530896433782,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530896433783,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530896433784,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530896433784,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1530896433784,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/null - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1530896433784,
                "type": ""
            }
        ],
        "screenShotFile": "00cc00c3-00e9-0090-00dd-00ae00b100c5.png",
        "timestamp": 1530896398880,
        "duration": 71997
    },
    {
        "description": "Send text messages to other users|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "ef49cdce1edfe1eed4cb68120aed986c",
        "instanceId": 13567,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530897012938,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530897012949,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530897012951,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530897012951,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530897012951,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530897023063,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530897023065,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530897023070,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530897023071,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530897023072,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1530897023072,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1530897023072,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/null - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1530897023072,
                "type": ""
            }
        ],
        "screenShotFile": "005d0008-0087-006d-0099-001800b800ed.png",
        "timestamp": 1530896987492,
        "duration": 72640
    },
    {
        "description": "Send text messages to other users|istant chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "d068cf112f0f450eff7b3a7826b460f3",
        "instanceId": 14404,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: unknown error: Element <i _ngcontent-pkq-29=\"\" class=\"fa fa-telegram\"></i> is not clickable at point (1264, 581). Other element would receive the click: <div _ngcontent-pkq-24=\"\" class=\"loading-alternate\">...</div>\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)",
        "trace": "WebDriverError: unknown error: Element <i _ngcontent-pkq-29=\"\" class=\"fa fa-telegram\"></i> is not clickable at point (1264, 581). Other element would receive the click: <div _ngcontent-pkq-24=\"\" class=\"loading-alternate\">...</div>\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)\n    at Object.checkLegacyResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/error.js:546:15)\n    at parseHttpResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:509:13)\n    at doSend.then.response (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:441:30)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)\nFrom: Task: WebElement.click()\n    at thenableWebDriverProxy.schedule (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:807:17)\n    at WebElement.schedule_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2010:25)\n    at WebElement.click (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2092:17)\n    at actionFn (/usr/lib/node_modules/protractor/built/element.js:89:44)\n    at Array.map (<anonymous>)\n    at actionResults.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:461:65)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/ToTal_test_cases/one-to-one/spec1.js:7:44)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"Send text messages to other users\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/ToTal_test_cases/one-to-one/spec1.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/ToTal_test_cases/one-to-one/spec1.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530898399393,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530898399400,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530898399400,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530898399401,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530898399402,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530898409538,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530898409538,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js 329:237 \"EXCEPTION: Cannot read property 'members' of undefined\"",
                "timestamp": 1530898409633,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js 329:371 \"ORIGINAL STACKTRACE:\"",
                "timestamp": 1530898409633,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js 329:415 \"TypeError: Cannot read property 'members' of undefined\\n    at e.userIsTyping (https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js:215:69604)\\n    at View_e5.handleEvent_64 (/e/e/component.ngfactory.js:638:45)\\n    at e.object.i [as _next] (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:1504:865)\\n    at e.__tryOrUnsub (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:1622:5030)\\n    at e.next (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:1622:4356)\\n    at e._next (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:1622:3410)\\n    at e.next (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:1622:3081)\\n    at e.next (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:541:14626)\\n    at e.emit (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:1504:331)\\n    at e.viewToModelUpdate (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:876:1604)\\n    at t.onChange (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:771:363)\\n    at Wrapper_t.handleEvent (/t/t/wrapper.ngfactory.js:24:34)\\n    at View_e5.handleEvent_64 (/e/e/component.ngfactory.js:628:26)\\n    at HTMLInputElement.\\u003Canonymous> (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:1009:6272)\\n    at t.invokeTask (https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js:36:10021)\"",
                "timestamp": 1530898409634,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js 1621:5060 Uncaught TypeError: Cannot read property 'members' of undefined",
                "timestamp": 1530898409635,
                "type": ""
            }
        ],
        "screenShotFile": "003200ac-004c-0011-0089-00d300fa00a3.png",
        "timestamp": 1530898374608,
        "duration": 39165
    },
    {
        "description": "Send text messages to other users|istant chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "4044a89657a08f47cab020968a4e6324",
        "instanceId": 14633,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: unknown error: Element <i _ngcontent-bkt-29=\"\" class=\"fa fa-telegram\"></i> is not clickable at point (1265, 581). Other element would receive the click: <div _ngcontent-bkt-24=\"\" class=\"loading-alternate\">...</div>\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)",
        "trace": "WebDriverError: unknown error: Element <i _ngcontent-bkt-29=\"\" class=\"fa fa-telegram\"></i> is not clickable at point (1265, 581). Other element would receive the click: <div _ngcontent-bkt-24=\"\" class=\"loading-alternate\">...</div>\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)\n    at Object.checkLegacyResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/error.js:546:15)\n    at parseHttpResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:509:13)\n    at doSend.then.response (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:441:30)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)\nFrom: Task: WebElement.click()\n    at thenableWebDriverProxy.schedule (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:807:17)\n    at WebElement.schedule_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2010:25)\n    at WebElement.click (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2092:17)\n    at actionFn (/usr/lib/node_modules/protractor/built/element.js:89:44)\n    at Array.map (<anonymous>)\n    at actionResults.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:461:65)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/ToTal_test_cases/one-to-one/spec1.js:7:44)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"Send text messages to other users\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/ToTal_test_cases/one-to-one/spec1.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/ToTal_test_cases/one-to-one/spec1.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.007ab0463c5e26232fb7.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530898482375,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530898482379,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530898492516,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530898492516,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530898492517,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530898492518,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js 329:237 \"EXCEPTION: Cannot read property 'members' of undefined\"",
                "timestamp": 1530898492607,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js 329:371 \"ORIGINAL STACKTRACE:\"",
                "timestamp": 1530898492607,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js 329:415 \"TypeError: Cannot read property 'members' of undefined\\n    at e.userIsTyping (https://dya4247t866iy.cloudfront.net/0.007ab0463c5e26232fb7.chunk.js:215:69606)\\n    at View_e5.handleEvent_64 (/e/e/component.ngfactory.js:638:45)\\n    at e.object.i [as _next] (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:1504:865)\\n    at e.__tryOrUnsub (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:1622:5030)\\n    at e.next (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:1622:4356)\\n    at e._next (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:1622:3410)\\n    at e.next (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:1622:3081)\\n    at e.next (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:541:14626)\\n    at e.emit (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:1504:331)\\n    at e.viewToModelUpdate (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:876:1604)\\n    at t.onChange (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:771:363)\\n    at Wrapper_t.handleEvent (/t/t/wrapper.ngfactory.js:24:34)\\n    at View_e5.handleEvent_64 (/e/e/component.ngfactory.js:628:26)\\n    at HTMLInputElement.\\u003Canonymous> (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:1009:6272)\\n    at t.invokeTask (https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js:36:10021)\"",
                "timestamp": 1530898492608,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js 1621:5060 Uncaught TypeError: Cannot read property 'members' of undefined",
                "timestamp": 1530898492610,
                "type": ""
            }
        ],
        "screenShotFile": "00a10092-00e5-00fb-004f-004f00fa00d8.png",
        "timestamp": 1530898450147,
        "duration": 52603
    },
    {
        "description": "Send text messages to other users|istant chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "db9497a8f3138932cc92e2779de805f0",
        "instanceId": 14942,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: unknown error: Element <i _ngcontent-vbs-29=\"\" class=\"fa fa-telegram\"></i> is not clickable at point (1264, 581). Other element would receive the click: <div _ngcontent-vbs-24=\"\" class=\"loading-alternate\">...</div>\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)",
        "trace": "WebDriverError: unknown error: Element <i _ngcontent-vbs-29=\"\" class=\"fa fa-telegram\"></i> is not clickable at point (1264, 581). Other element would receive the click: <div _ngcontent-vbs-24=\"\" class=\"loading-alternate\">...</div>\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)\n    at Object.checkLegacyResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/error.js:546:15)\n    at parseHttpResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:509:13)\n    at doSend.then.response (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:441:30)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)\nFrom: Task: WebElement.click()\n    at thenableWebDriverProxy.schedule (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:807:17)\n    at WebElement.schedule_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2010:25)\n    at WebElement.click (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2092:17)\n    at actionFn (/usr/lib/node_modules/protractor/built/element.js:89:44)\n    at Array.map (<anonymous>)\n    at actionResults.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:461:65)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/ToTal_test_cases/one-to-one/spec1.js:7:44)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"Send text messages to other users\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/ToTal_test_cases/one-to-one/spec1.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/ToTal_test_cases/one-to-one/spec1.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530898603108,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530898603122,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530898603123,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530898603123,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530898603124,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530898613290,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530898613292,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js 329:237 \"EXCEPTION: Cannot read property 'members' of undefined\"",
                "timestamp": 1530898613421,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js 329:371 \"ORIGINAL STACKTRACE:\"",
                "timestamp": 1530898613422,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js 329:415 \"TypeError: Cannot read property 'members' of undefined\\n    at e.userIsTyping (https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js:215:69604)\\n    at View_e5.handleEvent_64 (/e/e/component.ngfactory.js:638:45)\\n    at e.object.i [as _next] (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:1504:865)\\n    at e.__tryOrUnsub (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:1622:5030)\\n    at e.next (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:1622:4356)\\n    at e._next (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:1622:3410)\\n    at e.next (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:1622:3081)\\n    at e.next (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:541:14626)\\n    at e.emit (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:1504:331)\\n    at e.viewToModelUpdate (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:876:1604)\\n    at t.onChange (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:771:363)\\n    at Wrapper_t.handleEvent (/t/t/wrapper.ngfactory.js:24:34)\\n    at View_e5.handleEvent_64 (/e/e/component.ngfactory.js:628:26)\\n    at HTMLInputElement.\\u003Canonymous> (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:1009:6272)\\n    at t.invokeTask (https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js:36:10021)\"",
                "timestamp": 1530898613423,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js 1621:5060 Uncaught TypeError: Cannot read property 'members' of undefined",
                "timestamp": 1530898613423,
                "type": ""
            }
        ],
        "screenShotFile": "003700a0-000b-002c-0065-00b8000a0051.png",
        "timestamp": 1530898578526,
        "duration": 45119
    },
    {
        "description": "Send text messages to other users|istant chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "02067e60fec5b81da0a5dad3b641990c",
        "instanceId": 15191,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: unknown error: Element <i _ngcontent-xyq-29=\"\" class=\"fa fa-telegram\"></i> is not clickable at point (1264, 581). Other element would receive the click: <div _ngcontent-xyq-24=\"\" class=\"loading-alternate\">...</div>\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)",
        "trace": "WebDriverError: unknown error: Element <i _ngcontent-xyq-29=\"\" class=\"fa fa-telegram\"></i> is not clickable at point (1264, 581). Other element would receive the click: <div _ngcontent-xyq-24=\"\" class=\"loading-alternate\">...</div>\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)\n    at Object.checkLegacyResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/error.js:546:15)\n    at parseHttpResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:509:13)\n    at doSend.then.response (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:441:30)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)\nFrom: Task: WebElement.click()\n    at thenableWebDriverProxy.schedule (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:807:17)\n    at WebElement.schedule_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2010:25)\n    at WebElement.click (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2092:17)\n    at actionFn (/usr/lib/node_modules/protractor/built/element.js:89:44)\n    at Array.map (<anonymous>)\n    at actionResults.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:461:65)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/ToTal_test_cases/one-to-one/spec1.js:7:44)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"Send text messages to other users\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/ToTal_test_cases/one-to-one/spec1.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/ToTal_test_cases/one-to-one/spec1.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530898736478,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/jameelTesting1'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530898736493,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530898736498,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530898736499,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530898736499,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530898746650,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530898746651,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js 329:237 \"EXCEPTION: Cannot read property 'members' of undefined\"",
                "timestamp": 1530898746721,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js 329:371 \"ORIGINAL STACKTRACE:\"",
                "timestamp": 1530898746721,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js 329:415 \"TypeError: Cannot read property 'members' of undefined\\n    at e.userIsTyping (https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js:215:69604)\\n    at View_e5.handleEvent_64 (/e/e/component.ngfactory.js:638:45)\\n    at e.object.i [as _next] (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:1504:865)\\n    at e.__tryOrUnsub (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:1622:5030)\\n    at e.next (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:1622:4356)\\n    at e._next (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:1622:3410)\\n    at e.next (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:1622:3081)\\n    at e.next (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:541:14626)\\n    at e.emit (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:1504:331)\\n    at e.viewToModelUpdate (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:876:1604)\\n    at t.onChange (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:771:363)\\n    at Wrapper_t.handleEvent (/t/t/wrapper.ngfactory.js:24:34)\\n    at View_e5.handleEvent_64 (/e/e/component.ngfactory.js:628:26)\\n    at HTMLInputElement.\\u003Canonymous> (https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js:1009:6272)\\n    at t.invokeTask (https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js:36:10021)\"",
                "timestamp": 1530898746722,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/vendor.4bd76a13cb49c059d5e4.bundle.js 1621:5060 Uncaught TypeError: Cannot read property 'members' of undefined",
                "timestamp": 1530898746722,
                "type": ""
            }
        ],
        "screenShotFile": "00020095-0087-001c-0031-00dc005800f9.png",
        "timestamp": 1530898712103,
        "duration": 44855
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