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
        "sessionId": "f699f2bd99dfb56bd7669560abfaab2b",
        "instanceId": 8845,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.007ab0463c5e26232fb7.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1531243956119,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531243956132,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531243956132,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531243956132,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531243976256,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1531243976259,
                "type": ""
            }
        ],
        "screenShotFile": "00de0051-00ee-0096-000a-006c00030008.png",
        "timestamp": 1531243930492,
        "duration": 66419
    },
    {
        "description": "Send any type of file to other users|one-to-one chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "14cc9245c27da05c3ec61bb88ffb137e",
        "instanceId": 9099,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(css selector, *[id=\"Username\"])",
        "trace": "NoSuchElementError: No element found using locator: By(css selector, *[id=\"Username\"])\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as sendKeys] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as sendKeys] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at Object.exports.Login (/home/rakesh/ToTal_test_cases/Instant-chat/reuse.js:4:30)\n    at UserContext.it (/home/rakesh/ToTal_test_cases/Instant-chat/spec2.js:9:29)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\nFrom: Task: Run it(\"Send any type of file to other users\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.describe (/home/rakesh/ToTal_test_cases/Instant-chat/spec2.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/ToTal_test_cases/Instant-chat/spec2.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.007ab0463c5e26232fb7.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1531244024918,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531244024940,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531244024940,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531244024940,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531244045071,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1531244045072,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531244105578,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531244105580,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1531244105582,
                "type": ""
            }
        ],
        "screenShotFile": "00500003-008d-00c5-0053-003e00680054.png",
        "timestamp": 1531244000595,
        "duration": 105195
    },
    {
        "description": "Send image files to other users|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "1219e473a682e30d8ee9a84fcd26e682",
        "instanceId": 9353,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.007ab0463c5e26232fb7.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1531244136061,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531244136075,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531244136075,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531244136076,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531244156189,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1531244156190,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531244156193,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531244156193,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1531244156193,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531244216647,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531244216648,
                "type": ""
            }
        ],
        "screenShotFile": "008000cf-00cc-008a-007e-0020004b0001.png",
        "timestamp": 1531244109221,
        "duration": 115844
    },
    {
        "description": "Send video file to other users.|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "f7a90c90a1a27917dd8a1f16a2be7e32",
        "instanceId": 9603,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.007ab0463c5e26232fb7.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1531244255005,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531244255009,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531244255009,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531244255009,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531244275130,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1531244275132,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531244275135,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531244275135,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531244275137,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531244275137,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1531244275138,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531244312658,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531244312659,
                "type": ""
            }
        ],
        "screenShotFile": "0077009c-004d-00ca-005b-00ff006c005b.png",
        "timestamp": 1531244228538,
        "duration": 88416
    },
    {
        "description": "Add reaction to messages in chat|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "0ee4fbcaaa25e5903b4533597289aba6",
        "instanceId": 9844,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.007ab0463c5e26232fb7.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1531244345003,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531244345017,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531244345017,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531244345018,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531244365173,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1531244365174,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531244365176,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531244365176,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531244365177,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531244365178,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531244365179,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531244365179,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1531244365179,
                "type": ""
            }
        ],
        "screenShotFile": "00ec0009-0096-00e2-0069-00cb0097001d.png",
        "timestamp": 1531244320376,
        "duration": 78591
    },
    {
        "description": "Remove reaction to messages in chat.|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "75d22e8b5b5bd2f853b804f7940e6405",
        "instanceId": 10081,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.007ab0463c5e26232fb7.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1531244427601,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531244427620,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531244427620,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531244427620,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531244447758,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1531244447762,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531244447767,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531244447767,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531244447769,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531244447770,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531244447772,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531244447772,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1531244447773,
                "type": ""
            }
        ],
        "screenShotFile": "00fa0005-00d8-004a-0045-00fe006b003e.png",
        "timestamp": 1531244402370,
        "duration": 73990
    },
    {
        "description": "Get typeing notification in chat|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "04dd16baf78dd3df0634e819ff405b05",
        "instanceId": 10306,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.007ab0463c5e26232fb7.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1531244503930,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531244503948,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531244503948,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531244503950,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531244554098,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1531244554099,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531244554101,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531244554102,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531244554103,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531244554103,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531244554104,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531244554104,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1531244554104,
                "type": ""
            }
        ],
        "screenShotFile": "00f20078-00b5-001f-0050-0044000f00bc.png",
        "timestamp": 1531244479746,
        "duration": 82813
    },
    {
        "description": " Do not get typing notifications|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "e488b1ae8da85453ac3d5bd3d8727cd9",
        "instanceId": 10544,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.007ab0463c5e26232fb7.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1531244590748,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531244590759,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531244590759,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531244590759,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531244610892,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1531244610893,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531244610896,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531244610897,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531244610900,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531244610901,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531244610903,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531244610903,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1531244610903,
                "type": ""
            }
        ],
        "screenShotFile": "00220052-0088-007e-0062-009600af00c1.png",
        "timestamp": 1531244565976,
        "duration": 53369
    },
    {
        "description": "Edit sent message.|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "f014b20e31d39bde199f05e71ece386c",
        "instanceId": 10975,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.007ab0463c5e26232fb7.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1531244652050,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531244652065,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531244652065,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531244652065,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531244672170,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1531244672171,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531244672173,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531244672173,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531244672174,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531244672174,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531244672175,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531244672176,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1531244672176,
                "type": ""
            }
        ],
        "screenShotFile": "00530005-00e5-0046-0043-00f5002c0053.png",
        "timestamp": 1531244625909,
        "duration": 91382
    },
    {
        "description": "cannot delete message from user B|one-to-one chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "47f0b7a64668d3d2bb7f46adf679be65",
        "instanceId": 11208,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: No element found using locator: By(xpath, //*[@id=\"default\"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[3]/p)",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //*[@id=\"default\"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[3]/p)\n    at elementArrayFinder.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:814:27)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.it (/home/rakesh/ToTal_test_cases/Instant-chat/spec12.js:5:102)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"cannot delete message from user B\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.describe (/home/rakesh/ToTal_test_cases/Instant-chat/spec12.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/ToTal_test_cases/Instant-chat/spec12.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.007ab0463c5e26232fb7.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1531244776514,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531244776529,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531244776529,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531244776529,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531244806689,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1531244806690,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531244806692,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531244806692,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531244806693,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531244806694,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531244806695,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531244806695,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1531244806695,
                "type": ""
            }
        ],
        "screenShotFile": "007f002f-0020-00f5-00b4-0039005500a1.png",
        "timestamp": 1531244720732,
        "duration": 85995
    },
    {
        "description": "pin a message.|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "8f9ba659bdbc340baf4ffa1b4c634323",
        "instanceId": 11455,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.007ab0463c5e26232fb7.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1531244834628,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531244834647,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531244834647,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531244834647,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531244854793,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1531244854794,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531244854796,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531244854796,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531244854797,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531244854798,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531244854799,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531244854799,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1531244854799,
                "type": ""
            }
        ],
        "screenShotFile": "00ff006f-00f7-0003-003c-0062002300d2.png",
        "timestamp": 1531244810160,
        "duration": 77449
    },
    {
        "description": "cannot pin a message twice|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "39c8cf7ea4058a37ef6b5a10adf79018",
        "instanceId": 11688,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.007ab0463c5e26232fb7.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1531244922306,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531244922320,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531244922320,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531244922320,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531244942447,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1531244942449,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531244942452,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531244942452,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531244942454,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531244942455,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531244942458,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531244942458,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1531244942459,
                "type": ""
            }
        ],
        "screenShotFile": "00ff00b7-0050-0048-006d-00d500390073.png",
        "timestamp": 1531244891048,
        "duration": 80111
    },
    {
        "description": "unpin message|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "9225440a972d9f53a09dc09b8340e073",
        "instanceId": 11917,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.007ab0463c5e26232fb7.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1531244999530,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531244999534,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531244999534,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531244999534,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245019643,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1531245019645,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245019648,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531245019648,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245019650,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531245019650,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245019651,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531245019652,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1531245019652,
                "type": ""
            }
        ],
        "screenShotFile": "003e0094-00a9-0044-006d-00f5003c0023.png",
        "timestamp": 1531244974549,
        "duration": 78891
    },
    {
        "description": "Add reply to amessage|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "cdd927b5f9b6dd0367413d72254a368d",
        "instanceId": 12154,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.007ab0463c5e26232fb7.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1531245081683,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531245081702,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531245081702,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531245081702,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245101838,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1531245101839,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245101841,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531245101841,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245101842,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531245101842,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245101844,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531245101844,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1531245101844,
                "type": ""
            }
        ],
        "screenShotFile": "00f1003d-000c-0029-0056-007f009100a4.png",
        "timestamp": 1531245056798,
        "duration": 84011
    },
    {
        "description": "update reply to amessage|one-to-one chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "0a1170a148a694b59ea85c74be72cdd2",
        "instanceId": 12382,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: element not visible\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)",
        "trace": "ElementNotVisibleError: element not visible\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)\n    at Object.checkLegacyResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/error.js:546:15)\n    at parseHttpResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:509:13)\n    at doSend.then.response (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:441:30)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)\nFrom: Task: WebElement.click()\n    at thenableWebDriverProxy.schedule (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:807:17)\n    at WebElement.schedule_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2010:25)\n    at WebElement.click (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2092:17)\n    at actionFn (/usr/lib/node_modules/protractor/built/element.js:89:44)\n    at Array.map (<anonymous>)\n    at actionResults.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:461:65)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.it (/home/rakesh/ToTal_test_cases/Instant-chat/spec17.js:9:103)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"update reply to amessage\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.describe (/home/rakesh/ToTal_test_cases/Instant-chat/spec17.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/ToTal_test_cases/Instant-chat/spec17.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.007ab0463c5e26232fb7.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1531245168970,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531245168980,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531245168980,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531245168980,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245189093,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1531245189094,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245189099,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531245189099,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245189101,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531245189101,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245189103,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531245189103,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1531245189103,
                "type": ""
            }
        ],
        "screenShotFile": "00df00e7-0099-00c4-0004-006e00c30096.png",
        "timestamp": 1531245144164,
        "duration": 85344
    },
    {
        "description": "delete reply to a message|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "1d2f171627e3129b1ccb32b684e6d63a",
        "instanceId": 12621,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.007ab0463c5e26232fb7.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1531245257583,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531245257596,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531245277709,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245277712,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1531245277715,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245277719,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531245277720,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245277722,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531245277722,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245277724,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531245277725,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1531245277725,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531245277725,
                "type": ""
            }
        ],
        "screenShotFile": "00b30056-00c0-00dc-008d-009a00a800f4.png",
        "timestamp": 1531245232976,
        "duration": 123765
    },
    {
        "description": "Get push notification when application minimized|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "20b4f2a309ece81682db98f2461bf9c0",
        "instanceId": 12896,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.007ab0463c5e26232fb7.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1531245384530,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531245384546,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531245384546,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531245384546,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245404666,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1531245404668,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245404671,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531245404672,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245404673,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531245404674,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245404675,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531245404675,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1531245404676,
                "type": ""
            }
        ],
        "screenShotFile": "00d2000c-0076-00c6-007f-005100ab001a.png",
        "timestamp": 1531245360159,
        "duration": 93356
    },
    {
        "description": "Send code snippet.|one-to-one chat cases",
        "passed": false,
        "pending": false,
        "os": "Linux",
        "sessionId": "ba53c957ce9d12f941db4484e31c7b3f",
        "instanceId": 13333,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Failed: element not visible\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)",
        "trace": "ElementNotVisibleError: element not visible\n  (Session info: chrome=66.0.3359.139)\n  (Driver info: chromedriver=2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform=Linux 4.13.0-45-generic x86_64)\n    at Object.checkLegacyResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/error.js:546:15)\n    at parseHttpResponse (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:509:13)\n    at doSend.then.response (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/http.js:441:30)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)\nFrom: Task: WebElement.sendKeys()\n    at thenableWebDriverProxy.schedule (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:807:17)\n    at WebElement.schedule_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2010:25)\n    at WebElement.sendKeys (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver.js:2174:19)\n    at actionFn (/usr/lib/node_modules/protractor/built/element.js:89:44)\n    at Array.map (<anonymous>)\n    at actionResults.getWebElements.then (/usr/lib/node_modules/protractor/built/element.js:461:65)\n    at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)Error\n    at ElementArrayFinder.applyAction_ (/usr/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as sendKeys] (/usr/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as sendKeys] (/usr/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.it (/home/rakesh/ToTal_test_cases/Instant-chat/spec21.js:12:90)\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"Send code snippet.\") in control flow\n    at UserContext.<anonymous> (/usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.describe (/home/rakesh/ToTal_test_cases/Instant-chat/spec21.js:3:5)\n    at addSpecsToSuite (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/home/rakesh/ToTal_test_cases/Instant-chat/spec21.js:2:1)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.007ab0463c5e26232fb7.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1531245487066,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531245487070,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531245487070,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531245487070,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245507188,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1531245507189,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245507191,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531245507192,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245507193,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531245507193,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245507195,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531245507195,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1531245507195,
                "type": ""
            }
        ],
        "screenShotFile": "00df00f4-00ed-00a5-001e-003e00d50047.png",
        "timestamp": 1531245460163,
        "duration": 77527
    },
    {
        "description": "Send data to email through code snippet.|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "f2c4f06ef4aec56a470d78734a6cad37",
        "instanceId": 13561,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.007ab0463c5e26232fb7.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1531245567917,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531245567933,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531245567933,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531245567933,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245588045,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1531245588047,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245588052,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531245588053,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245588055,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531245588055,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245588057,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531245588057,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1531245588057,
                "type": ""
            }
        ],
        "screenShotFile": "00ce00ba-00d4-00c7-00d0-00910063000f.png",
        "timestamp": 1531245541103,
        "duration": 94298
    },
    {
        "description": "Send url in one-one chat.|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "ecf29e4201a59a35a0620a5f79f80815",
        "instanceId": 13796,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.007ab0463c5e26232fb7.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1531245664089,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531245664093,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531245664093,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531245664093,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245684210,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1531245684212,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245684217,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531245684218,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245684220,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531245684221,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245684222,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531245684223,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1531245684223,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/#/chat/message/nagaraju - Failed to load https://www.mrf.com/: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'https://dya4247t866iy.cloudfront.net' is therefore not allowed access. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.",
                "timestamp": 1531245702879,
                "type": ""
            }
        ],
        "screenShotFile": "00260055-000b-00b1-00d5-00c1004e0075.png",
        "timestamp": 1531245638850,
        "duration": 72465
    },
    {
        "description": "Chat history with timestamps|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "3601bda2d9a0efcd4970db63dd96b908",
        "instanceId": 14029,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.007ab0463c5e26232fb7.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1531245739191,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531245739201,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531245739201,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531245739201,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245759331,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1531245759332,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245759335,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531245759336,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245759337,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531245759337,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245759339,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531245759340,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1531245759340,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/null - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1531245759340,
                "type": ""
            }
        ],
        "screenShotFile": "002f002b-00c5-001b-00ef-00e1002d0064.png",
        "timestamp": 1531245714750,
        "duration": 67173
    },
    {
        "description": "View profile picture.|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "f8ce71336cd28afa88cdbeaeef021437",
        "instanceId": 14257,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.007ab0463c5e26232fb7.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1531245820370,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531245820387,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531245820387,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531245820387,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245840540,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1531245840542,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245840547,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531245840548,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245840550,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531245840551,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245840554,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531245840555,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1531245840555,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/null - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1531245840555,
                "type": ""
            }
        ],
        "screenShotFile": "00f00091-005e-0051-0075-000400fe0003.png",
        "timestamp": 1531245785350,
        "duration": 77766
    },
    {
        "description": "cannot delete message from user B|one-to-one chat cases",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "sessionId": "b53c7d78a05dd969c9c2f1f9f2e6ffa3",
        "instanceId": 14480,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://dya4247t866iy.cloudfront.net/0.007ab0463c5e26232fb7.chunk.js 179 The provided value 'moz-chunked-arraybuffer' is not a valid enum value of type XMLHttpRequestResponseType.",
                "timestamp": 1531245921522,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948664651516193783089home_onhover.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531245921540,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15254860395771516193780575home_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531245921540,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://s3.amazonaws.com/icons_AAIL/icons/15238948655881516194176933driving_normal.png - Failed to load resource: the server responded with a status of 403 (Forbidden)",
                "timestamp": 1531245921540,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245951647,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"misspelled option \\\"enableBasicAutocompletion\\\"\"",
                "timestamp": 1531245951648,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245951650,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531245951651,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245951652,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531245951652,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Could not load worker\"",
                "timestamp": 1531245951653,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "console-api 0:51460 \"Automatically scrolling cursor into view after selection change\"",
                "timestamp": 1531245951654,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/node_modules/ace-builds/src-min/theme-tomorrow.js - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1531245951654,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://dya4247t866iy.cloudfront.net/null - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1531245951654,
                "type": ""
            }
        ],
        "screenShotFile": "00850028-00a3-00ad-001f-009800380067.png",
        "timestamp": 1531245866545,
        "duration": 113798
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