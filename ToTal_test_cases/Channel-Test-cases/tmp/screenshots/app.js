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
        "description": "pin  message other users canot see that pin|channel chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "43fba7d279a3d1a7a93f1ba7f4eb51e1",
        "instanceId": 2197,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(xpath, //*[@id=\"default\"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/p)",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //*[@id=\"default\"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/p)\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec10.js:12:100)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"pin  message other users canot see that pin\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec10.js:3:3)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec10.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530733563990,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530733564010,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530733564015,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530733564015,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530733564015,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530733574264,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530733574266,
                "type": ""
            }
        ],
        "screenShotFile": "00430050-007f-00a7-007a-0040009500f0.png",
        "timestamp": 1530733538590,
        "duration": 35744
    },
    {
        "description": "pin  message other users canot see that pin|channel chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "5de8d09d0ddf5da3ba09ece050ec9cda",
        "instanceId": 2651,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(xpath, //*[@id=\"default\"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/p)",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //*[@id=\"default\"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/p)\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec10.js:12:100)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"pin  message other users canot see that pin\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec10.js:3:3)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec10.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530733627228,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530733627237,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530733627239,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530733627239,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530733627239,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530733637437,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530733637438,
                "type": ""
            }
        ],
        "screenShotFile": "0069003c-00c3-00bc-007b-0078008000ba.png",
        "timestamp": 1530733601866,
        "duration": 35605
    },
    {
        "description": "pin  message other users canot see that pin|channel chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "83668ead2b96bf16ec783d624d24fd34",
        "instanceId": 3154,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530733822644,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530733822649,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530733822651,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530733822651,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530733822651,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530733832839,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530733832840,
                "type": ""
            }
        ],
        "screenShotFile": "00ea001c-0019-009e-00ca-003b00ed00ea.png",
        "timestamp": 1530733797985,
        "duration": 67796
    },
    {
        "description": "test channel pin message other user cannot see|channel chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "0b57467f9c83193cff85c523b5588033",
        "instanceId": 3159,
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
                "timestamp": 1530733823356,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/rakesh'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530733823362,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530733823364,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530733823364,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530733823364,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530733883581,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530733883582,
                "type": ""
            }
        ],
        "screenShotFile": "0054001c-00e6-002b-004a-001600e80022.png",
        "timestamp": 1530733798317,
        "duration": 100736
    },
    {
        "description": "unpin |channel chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "3b52c7d4b962741f473e986e3bc07029",
        "instanceId": 3702,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(xpath, //*[@id=\"default\"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/p)",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //*[@id=\"default\"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/p)\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec11.js:12:100)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"unpin \") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec11.js:3:3)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec11.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530734257816,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530734257832,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530734257836,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530734257836,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530734257836,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530734268012,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530734268012,
                "type": ""
            }
        ],
        "screenShotFile": "003500b9-0080-00e1-0091-00d4002e00ce.png",
        "timestamp": 1530734233362,
        "duration": 34685
    },
    {
        "description": "unpin |channel chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "b21c1ac3644867cbec27e508c76d71b1",
        "instanceId": 3967,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(xpath, //*[@id=\"default\"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/p)",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //*[@id=\"default\"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[2]/p)\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec11.js:12:100)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"unpin \") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec11.js:3:3)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec11.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.007ab0463c5e26232fb7.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530734339815,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530734339829,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530734339829,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530734339829,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530734350034,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530734350034,
                "type": ""
            }
        ],
        "screenShotFile": "00fd00d7-00c3-00f3-0049-002b00c50083.png",
        "timestamp": 1530734315434,
        "duration": 34652
    },
    {
        "description": "unpin |channel chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "c3b8e188d65a44585250e458471869bc",
        "instanceId": 4236,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.007ab0463c5e26232fb7.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530734440855,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530734440860,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530734440860,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530734440860,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530734451083,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530734451083,
                "type": ""
            }
        ],
        "screenShotFile": "006400af-00c0-0085-0042-001c00630001.png",
        "timestamp": 1530734416280,
        "duration": 67647
    },
    {
        "description": "unpin |channel chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "2de70be7945120b851931e22cb21a2ff",
        "instanceId": 4465,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(xpath, //*[@id=\"default\"]/div[1]/ul/li/aadhya-chat-message/div/div/div/div[2]/small/div)",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //*[@id=\"default\"]/div[1]/ul/li/aadhya-chat-message/div/div/div/div[2]/small/div)\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec11.js:12:105)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"unpin \") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec11.js:3:3)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec11.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530734514279,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530734514288,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530734514290,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530734514290,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530734514290,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530734524463,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530734524464,
                "type": ""
            }
        ],
        "screenShotFile": "00fc0021-00da-0080-0015-00fc00ed00f6.png",
        "timestamp": 1530734489850,
        "duration": 34647
    },
    {
        "description": "unpin |channel chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "af2ce98d22b5b6ca2045345d94b1e6ac",
        "instanceId": 4916,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(xpath, //*[@id=\"default\"]/div[1]/ul/li/aadhya-chat-message/div/div/div/div[2]/small/div)",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //*[@id=\"default\"]/div[1]/ul/li/aadhya-chat-message/div/div/div/div[2]/small/div)\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec11.js:12:105)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"unpin \") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec11.js:3:3)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec11.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530734607218,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530734607234,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530734607235,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530734607235,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530734607235,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530734617413,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530734617414,
                "type": ""
            }
        ],
        "screenShotFile": "0068006e-002f-00d1-0015-004500fd0056.png",
        "timestamp": 1530734583141,
        "duration": 34332
    },
    {
        "description": "unpin |channel chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "db046ba5920a95f34bfdcce6d37508c5",
        "instanceId": 5137,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(xpath, //*[@id=\"default\"]/div[1]/ul/li/aadhya-chat-message/div/div/div/div[2]/small/div)",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //*[@id=\"default\"]/div[1]/ul/li/aadhya-chat-message/div/div/div/div[2]/small/div)\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec11.js:12:105)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"unpin \") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec11.js:3:3)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec11.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530734656660,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530734656675,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530734656676,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530734656676,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530734656676,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530734666857,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530734666858,
                "type": ""
            }
        ],
        "screenShotFile": "00f60080-00e4-0032-0021-00f6009400ca.png",
        "timestamp": 1530734632331,
        "duration": 34562
    },
    {
        "description": "unpin |channel chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "49523fe45d8e8452c3d128009eecf3d8",
        "instanceId": 5363,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(xpath, //*[@id=\"default\"]/div[1]/ul/li/aadhya-chat-message/div/div/div/div[2]/small/div)",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //*[@id=\"default\"]/div[1]/ul/li/aadhya-chat-message/div/div/div/div[2]/small/div)\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec11.js:12:105)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"unpin \") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec11.js:3:3)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec11.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530734697201,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530734697206,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530734697207,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530734697207,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530734697207,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530734707361,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530734707362,
                "type": ""
            }
        ],
        "screenShotFile": "009d00ad-00bd-00f2-00e3-00e600b400bb.png",
        "timestamp": 1530734672957,
        "duration": 34436
    },
    {
        "description": "unpin |channel chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "c5988ee85389e5722d568041b0a513ef",
        "instanceId": 5629,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(xpath, //*[@id=\"default\"]/div[1]/ul/li/aadhya-chat-message/div/div/div/div[2]/small/div)",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //*[@id=\"default\"]/div[1]/ul/li/aadhya-chat-message/div/div/div/div[2]/small/div)\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec11.js:12:105)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"unpin \") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec11.js:3:3)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec11.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530734917698,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530734917716,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530734917718,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530734917718,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530734917718,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530734927897,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530734927899,
                "type": ""
            }
        ],
        "screenShotFile": "0086000b-00b0-00b9-00e0-00de00a400f2.png",
        "timestamp": 1530734893494,
        "duration": 34440
    },
    {
        "description": "unpin |channel chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "5ff6ad2b244260b4cd7d034f62063a73",
        "instanceId": 5878,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(xpath, //*[@id=\"default\"]/div[1]/ul/li/aadhya-chat-message/div/div/div/div[2]/small/div)",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //*[@id=\"default\"]/div[1]/ul/li/aadhya-chat-message/div/div/div/div[2]/small/div)\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec11.js:12:105)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"unpin \") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec11.js:3:3)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec11.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530734959020,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530734959036,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530734959038,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530734959038,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530734959038,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530734969200,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530734969200,
                "type": ""
            }
        ],
        "screenShotFile": "00630067-00dd-0076-007c-00b40096001b.png",
        "timestamp": 1530734934711,
        "duration": 34521
    },
    {
        "description": "unpin |channel chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "2ed28406a92e5e6596feeefdef9ff5df",
        "instanceId": 6130,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530735105596,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530735105607,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530735105608,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530735105608,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530735105608,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530735115781,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530735115783,
                "type": ""
            }
        ],
        "screenShotFile": "00830038-0077-0074-0013-007c00000005.png",
        "timestamp": 1530735081057,
        "duration": 67556
    },
    {
        "description": " Test add reply to message| channel add reply to message",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "63ef013d9e5fc18a3567a19e502a8af8",
        "instanceId": 7005,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(css selector, *[id=\"ProTest\"])",
        "trace": "NoSuchElementError: No element found using locator: By(css selector, *[id=\"ProTest\"])\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/Test12.js:11:47)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\" Test add reply to message\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/Test12.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/Test12.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530735783608,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/rakesh'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530735783628,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530735783633,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530735783633,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530735783633,
                "type": ""
            }
        ],
        "screenShotFile": "0031008e-0056-00ae-00e7-008f00c60067.png",
        "timestamp": 1530735758566,
        "duration": 25104
    },
    {
        "description": "add reply to message| channel add reply to message",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "c22392c64b307b72c1c28b42e06cce4a",
        "instanceId": 7000,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(css selector, *[id=\"ProTest\"])",
        "trace": "NoSuchElementError: No element found using locator: By(css selector, *[id=\"ProTest\"])\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec12.js:11:45)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"add reply to message\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec12.js:3:3)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec12.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530735783709,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530735783718,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530735783719,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530735783719,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530735783719,
                "type": ""
            }
        ],
        "screenShotFile": "00c20015-0078-00ce-005b-00d500b900f9.png",
        "timestamp": 1530735758404,
        "duration": 25373
    },
    {
        "description": " Test add reply to message| channel add reply to message",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "cbfd5430924a58cd69c688951ea8973a",
        "instanceId": 7886,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(css selector, *[id=\"ProTest\"])",
        "trace": "NoSuchElementError: No element found using locator: By(css selector, *[id=\"ProTest\"])\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/Test12.js:11:47)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\" Test add reply to message\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/Test12.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/Test12.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530735843130,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/rakesh'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530735843141,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530735843144,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530735843144,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530735843144,
                "type": ""
            }
        ],
        "screenShotFile": "0023002c-0058-00bd-002e-00d500c5006d.png",
        "timestamp": 1530735818205,
        "duration": 24972
    },
    {
        "description": " Test add reply to message| channel add reply to message",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "b1ee89563627e393410e0f363fbc013c",
        "instanceId": 8330,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(css selector, *[id=\"ProTest\"])",
        "trace": "NoSuchElementError: No element found using locator: By(css selector, *[id=\"ProTest\"])\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/Test12.js:11:47)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\" Test add reply to message\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/Test12.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/Test12.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530735889470,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/rakesh'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530735889480,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530735889481,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530735889481,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530735889481,
                "type": ""
            }
        ],
        "screenShotFile": "00a8008c-0027-0029-00f5-0051002900bd.png",
        "timestamp": 1530735864043,
        "duration": 25469
    },
    {
        "description": "add reply to message| channel add reply to message",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "095d260c9b4ec12fba26d1def40d2b00",
        "instanceId": 8325,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(css selector, *[id=\"ProTest\"])",
        "trace": "NoSuchElementError: No element found using locator: By(css selector, *[id=\"ProTest\"])\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec12.js:11:45)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"add reply to message\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec12.js:3:3)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec12.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530735889537,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530735889544,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530735889545,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530735889545,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530735889545,
                "type": ""
            }
        ],
        "screenShotFile": "0079006f-00bc-00e7-0027-00a200d70054.png",
        "timestamp": 1530735864205,
        "duration": 25453
    },
    {
        "description": "add reply to message| channel add reply to message",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "73c9095013e6a944613a1164230ae86e",
        "instanceId": 8785,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530735977722,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530735977733,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530735977734,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530735977734,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530735977734,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530735987910,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530735987910,
                "type": ""
            }
        ],
        "screenShotFile": "006000a5-009f-0010-0010-006a000d001b.png",
        "timestamp": 1530735952980,
        "duration": 75874
    },
    {
        "description": "update a message.| update or edit reply to amessage",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "1bc47d05c8d210c21ed26bfd3675c808",
        "instanceId": 9354,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530736373912,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530736373925,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530736373926,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530736373926,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530736373926,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530736384100,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530736384101,
                "type": ""
            }
        ],
        "screenShotFile": "005a00be-0033-00f9-009a-00ca006c0016.png",
        "timestamp": 1530736349428,
        "duration": 130856
    },
    {
        "description": "update a message.| update or edit reply to amessage",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "1cc57c7b1cfe37bb7d58d576119117ed",
        "instanceId": 9868,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: by.linkTest is not a function",
        "trace": "TypeError: by.linkTest is not a function\n    at UserContext.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec14.js:19:14)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2974:25)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\nFrom: Task: Run it(\"update a message.\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec14.js:3:3)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec14.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [],
        "screenShotFile": "003700c0-00d3-0086-00e8-003b00ae0037.png",
        "timestamp": 1530737104737,
        "duration": 17
    },
    {
        "description": "update a message.| update or edit reply to amessage",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "41274c6d54a9d6ddcad0a40cca8a5f32",
        "instanceId": 10111,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: by.linkTest is not a function",
        "trace": "TypeError: by.linkTest is not a function\n    at UserContext.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec14.js:19:14)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2974:25)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\nFrom: Task: Run it(\"update a message.\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec14.js:3:3)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec14.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [],
        "screenShotFile": "001300e0-002d-0067-00e1-006e002e009c.png",
        "timestamp": 1530737192734,
        "duration": 17
    },
    {
        "description": "update a message.| update or edit reply to amessage",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "dcd4f213c6653c6b3a061b6eea6ab1fe",
        "instanceId": 10552,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: element not visible\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)",
        "trace": "ElementNotVisibleError: element not visible\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)\n    at Object.checkLegacyResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/error.js:546:15)\n    at parseHttpResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:509:13)\n    at doSend.then.response (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:441:30)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)\nFrom: Task: WebElement.click()\n    at thenableWebDriverProxy.schedule (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:807:17)\n    at WebElement.schedule_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2010:25)\n    at WebElement.click (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2092:17)\n    at actionFn (/usr/lib/node_modules/protractor/built/element.js:89:44)\n    at Array.map (<anonymous>)\n    at actionResults.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:461:65)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec14.js:17:45)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"update a message.\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec14.js:3:3)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec14.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530737298299,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530737298315,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530737298317,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530737298317,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530737298317,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530737308508,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530737308509,
                "type": ""
            }
        ],
        "screenShotFile": "00e000ca-0063-0032-00f4-001300ee006a.png",
        "timestamp": 1530737273871,
        "duration": 75015
    },
    {
        "description": "update a message.| update or edit reply to amessage",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "22bf15fd00001066ac1d0c35f0848b75",
        "instanceId": 10796,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: element not visible\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)",
        "trace": "ElementNotVisibleError: element not visible\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)\n    at Object.checkLegacyResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/error.js:546:15)\n    at parseHttpResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:509:13)\n    at doSend.then.response (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:441:30)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)\nFrom: Task: WebElement.click()\n    at thenableWebDriverProxy.schedule (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:807:17)\n    at WebElement.schedule_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2010:25)\n    at WebElement.click (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2092:17)\n    at actionFn (/usr/lib/node_modules/protractor/built/element.js:89:44)\n    at Array.map (<anonymous>)\n    at actionResults.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:461:65)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec14.js:17:40)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"update a message.\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec14.js:3:3)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec14.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530737415212,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530737415224,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530737415225,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530737415225,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530737415225,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530737425391,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530737425391,
                "type": ""
            }
        ],
        "screenShotFile": "00b3001c-001d-00ba-0041-00f100d000af.png",
        "timestamp": 1530737390793,
        "duration": 74931
    },
    {
        "description": "update a message.| update or edit reply to amessage",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "ada231b462cc0849efc51749660a5ceb",
        "instanceId": 11047,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: element not visible\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)",
        "trace": "ElementNotVisibleError: element not visible\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)\n    at Object.checkLegacyResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/error.js:546:15)\n    at parseHttpResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:509:13)\n    at doSend.then.response (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:441:30)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)\nFrom: Task: WebElement.click()\n    at thenableWebDriverProxy.schedule (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:807:17)\n    at WebElement.schedule_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2010:25)\n    at WebElement.click (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2092:17)\n    at actionFn (/usr/lib/node_modules/protractor/built/element.js:89:44)\n    at Array.map (<anonymous>)\n    at actionResults.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:461:65)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec14.js:17:44)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"update a message.\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec14.js:3:3)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec14.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530737538653,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530737538665,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530737538666,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530737538666,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530737538666,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530737548870,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530737548871,
                "type": ""
            }
        ],
        "screenShotFile": "00e50087-009a-00e8-007b-00e100a400c5.png",
        "timestamp": 1530737514539,
        "duration": 74694
    },
    {
        "description": "Send text messages to other users|Channel chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "1aeaa47f9295447f790e8aced6e63bd6",
        "instanceId": 12247,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: protractor.loginHelpers.loginToPage is not a function",
        "trace": "TypeError: protractor.loginHelpers.loginToPage is not a function\n    at UserContext.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/Test.js:3:33)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2974:25)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\nFrom: Task: Run it(\"Send text messages to other users\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/Test.js:2:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/Test.js:1:63)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [],
        "screenShotFile": "005e005c-00be-003c-008c-00e600b8004c.png",
        "timestamp": 1530739045964,
        "duration": 8
    },
    {
        "description": "Send text messages to other users|Channel chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "b45b881aced39dba54d197a307abfba3",
        "instanceId": 12489,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: protractor.loginHelpers.loginToPage is not a function",
        "trace": "TypeError: protractor.loginHelpers.loginToPage is not a function\n    at UserContext.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/Test.js:3:33)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2974:25)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\nFrom: Task: Run it(\"Send text messages to other users\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/Test.js:2:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/Test.js:1:63)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [],
        "screenShotFile": "00730002-00ee-008c-0019-0085008300ae.png",
        "timestamp": 1530739172834,
        "duration": 8
    },
    {
        "description": "Send text messages to other users|Channel chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "93896eaf5b0e8a251296f574750ef1bb",
        "instanceId": 13252,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(xpath, //*[@id=\"Messages\"]/div/div[3]/div[1]/input)",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //*[@id=\"Messages\"]/div/div[3]/div[1]/input)\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as sendKeys] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as sendKeys] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/Test.js:4:70)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"Send text messages to other users\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/Test.js:2:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/Test.js:1:63)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530739383024,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530739383031,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530739383032,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530739383032,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530739383032,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530739403210,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530739403211,
                "type": ""
            }
        ],
        "screenShotFile": "0075001b-002e-00b8-000b-005300c20020.png",
        "timestamp": 1530739358783,
        "duration": 44471
    },
    {
        "description": "Send text messages to other users|Channel chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "f688f69bb1a7718a79e3f3ff64180f42",
        "instanceId": 13522,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(css selector, .fa.fa-telegram)",
        "trace": "NoSuchElementError: No element found using locator: By(css selector, .fa.fa-telegram)\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/Test.js:5:45)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"Send text messages to other users\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/Test.js:2:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/Test.js:1:63)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530739472334,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530739472346,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530739472347,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530739472347,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530739472347,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530739496526,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530739496528,
                "type": ""
            }
        ],
        "screenShotFile": "007a00c4-0003-0099-008a-0013006100d2.png",
        "timestamp": 1530739447121,
        "duration": 49441
    },
    {
        "description": "Send text messages to other users|Channel chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "a47d5da0920450d4a6621fab6f9ab320",
        "instanceId": 13977,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(css selector, .fa.fa-telegram)",
        "trace": "NoSuchElementError: No element found using locator: By(css selector, .fa.fa-telegram)\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/Test.js:5:45)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"Send text messages to other users\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/Test.js:2:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/Test.js:1:63)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530739593307,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530739593321,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530739593324,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530739593324,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530739593324,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530739617509,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530739617510,
                "type": ""
            }
        ],
        "screenShotFile": "00740081-002c-00dd-00a5-007300bc009c.png",
        "timestamp": 1530739568894,
        "duration": 48664
    },
    {
        "description": "Send text messages to other users|Channel chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "9f5b212cb94ab60cf8a340bb84c4daa4",
        "instanceId": 14215,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530739705355,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530739705364,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530739705366,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530739705366,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530739705366,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530739725542,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530739725543,
                "type": ""
            }
        ],
        "screenShotFile": "00af005b-005a-0033-00d2-0065009b000f.png",
        "timestamp": 1530739680644,
        "duration": 55287
    },
    {
        "description": "Send code snippet.|channel chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "be7b1f479289016f331edd1c366b8951",
        "instanceId": 4191,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(css selector, *[id=\"ProTest\"])",
        "trace": "NoSuchElementError: No element found using locator: By(css selector, *[id=\"ProTest\"])\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec16.js:10:41)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"Send code snippet.\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec16.js:3:3)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec16.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530799252273,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530799252283,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530799252285,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530799252285,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530799252285,
                "type": ""
            }
        ],
        "screenShotFile": "00b50060-002a-0060-00d1-0032006b000f.png",
        "timestamp": 1530799227077,
        "duration": 25239
    },
    {
        "description": "Send text messages to other users|Channel chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "85e7a411c3013065f72ea504e2c10158",
        "instanceId": 5484,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(xpath, //*[@id=\"Messages\"]/div/div[3]/div[1]/input)",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //*[@id=\"Messages\"]/div/div[3]/div[1]/input)\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as sendKeys] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as sendKeys] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec1.js:5:70)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"Send text messages to other users\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec1.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec1.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530802613969,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530802613986,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530802634177,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530802634177,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530802634177,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530802634181,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530802634182,
                "type": ""
            }
        ],
        "screenShotFile": "00ce00f0-00f1-00dc-00a1-0052004200dc.png",
        "timestamp": 1530802587114,
        "duration": 47106
    },
    {
        "description": "Send text messages to other users|Channel chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "973538d77f711193332da97136af1811",
        "instanceId": 5710,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.007ab0463c5e26232fb7.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530802682739,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530802682758,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530802682758,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530802682758,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530802707967,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530802707968,
                "type": ""
            }
        ],
        "screenShotFile": "003300f8-0097-00b1-00c1-00fd00370074.png",
        "timestamp": 1530802657799,
        "duration": 60561
    },
    {
        "description": "Send text messages to other users|Channel chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "881541f7badc1ddee8572693bb8d9efb",
        "instanceId": 5953,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.007ab0463c5e26232fb7.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530802790890,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530802806094,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530802806094,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530802806095,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530802806095,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530802806095,
                "type": ""
            }
        ],
        "screenShotFile": "00e800d5-000c-0080-003b-00fe001e0011.png",
        "timestamp": 1530802773486,
        "duration": 40970
    },
    {
        "description": "Send text messages to other users|Channel chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "e1dc5a2886f0b96a8fc90bc31591d2ca",
        "instanceId": 6182,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(link text, ProTest)",
        "trace": "NoSuchElementError: No element found using locator: By(link text, ProTest)\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at Object.exports.Login (/home/rakesh/Desktop/Channel_test_cases/reuse.js:8:47)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec1.js:4:31)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\nFrom: Task: Run it(\"Send text messages to other users\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec1.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec1.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [],
        "screenShotFile": "009a00af-0095-00d7-0071-00b700f200f6.png",
        "timestamp": 1530802840545,
        "duration": 9975
    },
    {
        "description": "Send text messages to other users|Channel chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "32bfa8c0c770f0655c41d7dd7309054b",
        "instanceId": 6396,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(link text, ProTest)",
        "trace": "NoSuchElementError: No element found using locator: By(link text, ProTest)\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at Object.exports.Login (/home/rakesh/Desktop/Channel_test_cases/reuse.js:8:47)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec1.js:4:31)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\nFrom: Task: Run it(\"Send text messages to other users\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec1.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec1.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530802869772,
                "type": ""
            }
        ],
        "screenShotFile": "00ef0091-005d-0076-00b2-001900f2009e.png",
        "timestamp": 1530802858663,
        "duration": 11169
    },
    {
        "description": "Send text messages to other users|Channel chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "59cb85e1c6fa3b780d91cc49c8fa4b39",
        "instanceId": 6609,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.007ab0463c5e26232fb7.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530802903921,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530802903934,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530802903934,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530802903934,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530802919109,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530802919109,
                "type": ""
            }
        ],
        "screenShotFile": "006e00bb-002f-0003-00ea-003500b500fb.png",
        "timestamp": 1530802889145,
        "duration": 38327
    },
    {
        "description": "Send text messages to other users|Channel chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "7141b899223891160b088cce05676149",
        "instanceId": 6870,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(xpath, //*[@id=\"Messages\"]/div/div[3]/div[1]/input)",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //*[@id=\"Messages\"]/div/div[3]/div[1]/input)\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as sendKeys] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as sendKeys] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec1.js:5:69)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"Send text messages to other users\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec1.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/Desktop/Channel_test_cases/spec1.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.739d514da6171c09499b.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1530803138566,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/polyfills.00257976fd93020569bc.bundle.js 28 Mixed Content: The page at 'https://dya4247t866iy.cloudfront.net/#/chat/default' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://52.32.253.191/cmsapi_jwt/public/api/member_roles/show/raheem'. This request has been blocked; the content must be served over HTTPS.",
                "timestamp": 1530803138582,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1530803148767,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1530803148768,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530803148770,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530803148770,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1530803148770,
                "type": ""
            }
        ],
        "screenShotFile": "00d800fa-00a3-005c-00d8-0064006100af.png",
        "timestamp": 1530803118647,
        "duration": 30155
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