$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/FeatureCollection/login1.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: komal_Madane"
    },
    {
      "line": 2,
      "value": "#Date: 26-02-2019"
    },
    {
      "line": 3,
      "value": "#Feature: Login feature"
    }
  ],
  "line": 7,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 6,
      "name": "@smokeTest"
    }
  ]
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Verify that valid able to login into mercury tour application by using valid username and valid password",
  "description": "",
  "id": "login-feature;verify-that-valid-able-to-login-into-mercury-tour-application-by-using-valid-username-and-valid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "user access the login page of mercury application",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "user enters \"\u003cusername\u003e\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user enters \"\u003cpassword\u003e\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user clicks on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user is on flight finder page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user clicks on sign off button",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user access sign on page",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "login-feature;verify-that-valid-able-to-login-into-mercury-tour-application-by-using-valid-username-and-valid-password;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 28,
      "id": "login-feature;verify-that-valid-able-to-login-into-mercury-tour-application-by-using-valid-username-and-valid-password;;1"
    },
    {
      "cells": [
        "komalv",
        "komal123"
      ],
      "line": 29,
      "id": "login-feature;verify-that-valid-able-to-login-into-mercury-tour-application-by-using-valid-username-and-valid-password;;2"
    },
    {
      "cells": [
        "diptichopade",
        "chopade123"
      ],
      "line": 30,
      "id": "login-feature;verify-that-valid-able-to-login-into-mercury-tour-application-by-using-valid-username-and-valid-password;;3"
    },
    {
      "cells": [
        "Suvidyap1",
        "P@ssword1"
      ],
      "line": 31,
      "id": "login-feature;verify-that-valid-able-to-login-into-mercury-tour-application-by-using-valid-username-and-valid-password;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 722763,
  "status": "passed"
});
formatter.background({
  "line": 10,
  "name": "User access the login page of mercury tour application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 11,
  "name": "user opens \"chrome\" browser",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user enters the application url \"http://newtours.demoaut.com/\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user maximize the browser",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user waits \"15\" seconds to load the login page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "mercury tours application login page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 12
    }
  ],
  "location": "LoginMercury.openBrowser(String)"
});
formatter.result({
  "duration": 9710066046,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://newtours.demoaut.com/",
      "offset": 33
    }
  ],
  "location": "LoginMercury.appliUrl(String)"
});
formatter.result({
  "duration": 2845898755,
  "status": "passed"
});
formatter.match({
  "location": "LoginMercury.maxBrowser()"
});
formatter.result({
  "duration": 1154992104,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 12
    }
  ],
  "location": "LoginMercury.pgtimeout(int)"
});
formatter.result({
  "duration": 7603922,
  "status": "passed"
});
formatter.match({
  "location": "LoginMercury.verifyLoginPg()"
});
formatter.result({
  "duration": 9407231,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Verify that valid able to login into mercury tour application by using valid username and valid password",
  "description": "",
  "id": "login-feature;verify-that-valid-able-to-login-into-mercury-tour-application-by-using-valid-username-and-valid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "user access the login page of mercury application",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "user enters \"komalv\" as username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user enters \"komal123\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user clicks on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user is on flight finder page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user clicks on sign off button",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user access sign on page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginMercury.verifyLogo()"
});
formatter.result({
  "duration": 66538427,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "komalv",
      "offset": 13
    }
  ],
  "location": "LoginMercury.username(String)"
});
formatter.result({
  "duration": 120119549,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "komal123",
      "offset": 13
    }
  ],
  "location": "LoginMercury.password(String)"
});
formatter.result({
  "duration": 136252180,
  "status": "passed"
});
formatter.match({
  "location": "LoginMercury.ciSign()"
});
formatter.result({
  "duration": 15456167956,
  "error_message": "org.openqa.selenium.TimeoutException: timeout\n  (Session info: chrome\u003d72.0.3626.119)\n  (Driver info: chromedriver\u003d2.45.615291 (ec3682e3c9061c10f26ea9e5cdcf3c53f3f74387),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-A522TDA\u0027, ip: \u0027192.168.43.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_77\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.45.615291 (ec3682e3c9061c..., userDataDir: C:\\Users\\KOMALA~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:60057}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 72.0.3626.119, webStorageEnabled: true}\nSession ID: ea66bf046254739e2f73fa382a2838b8\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat com.pom.mercuryLogin.LoginMercury.ciSign(LoginMercury.java:103)\r\n\tat ✽.And user clicks on sign in button(src/test/resources/FeatureCollection/login1.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginMercury.verifyfilghtfinder()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginMercury.signoff()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginMercury.retSignIn()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 156274,
  "status": "passed"
});
formatter.before({
  "duration": 229783,
  "status": "passed"
});
formatter.background({
  "line": 10,
  "name": "User access the login page of mercury tour application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 11,
  "name": "user opens \"chrome\" browser",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user enters the application url \"http://newtours.demoaut.com/\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user maximize the browser",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user waits \"15\" seconds to load the login page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "mercury tours application login page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 12
    }
  ],
  "location": "LoginMercury.openBrowser(String)"
});
formatter.result({
  "duration": 4679503853,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://newtours.demoaut.com/",
      "offset": 33
    }
  ],
  "location": "LoginMercury.appliUrl(String)"
});
formatter.result({
  "duration": 6353198355,
  "status": "passed"
});
formatter.match({
  "location": "LoginMercury.maxBrowser()"
});
formatter.result({
  "duration": 6949014,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d72.0.3626.119)\n  (Driver info: chromedriver\u003d2.45.615291 (ec3682e3c9061c10f26ea9e5cdcf3c53f3f74387),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-A522TDA\u0027, ip: \u0027192.168.43.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_77\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.45.615291 (ec3682e3c9061c..., userDataDir: C:\\Users\\KOMALA~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:60082}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 72.0.3626.119, webStorageEnabled: true}\nSession ID: c2ad4ca87a118a211d8b82d506070798\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat com.pom.mercuryLogin.LoginMercury.maxBrowser(LoginMercury.java:56)\r\n\tat ✽.And user maximize the browser(src/test/resources/FeatureCollection/login1.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 12
    }
  ],
  "location": "LoginMercury.pgtimeout(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginMercury.verifyLoginPg()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 30,
  "name": "Verify that valid able to login into mercury tour application by using valid username and valid password",
  "description": "",
  "id": "login-feature;verify-that-valid-able-to-login-into-mercury-tour-application-by-using-valid-username-and-valid-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "user access the login page of mercury application",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "user enters \"diptichopade\" as username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user enters \"chopade123\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user clicks on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user is on flight finder page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user clicks on sign off button",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user access sign on page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginMercury.verifyLogo()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "diptichopade",
      "offset": 13
    }
  ],
  "location": "LoginMercury.username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "chopade123",
      "offset": 13
    }
  ],
  "location": "LoginMercury.password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginMercury.ciSign()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginMercury.verifyfilghtfinder()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginMercury.signoff()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginMercury.retSignIn()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 97156,
  "status": "passed"
});
formatter.before({
  "duration": 152161,
  "status": "passed"
});
formatter.background({
  "line": 10,
  "name": "User access the login page of mercury tour application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 11,
  "name": "user opens \"chrome\" browser",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user enters the application url \"http://newtours.demoaut.com/\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user maximize the browser",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user waits \"15\" seconds to load the login page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "mercury tours application login page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 12
    }
  ],
  "location": "LoginMercury.openBrowser(String)"
});
formatter.result({
  "duration": 3770983781,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d72.0.3626.119)\n  (Driver info: chromedriver\u003d2.45.615291 (ec3682e3c9061c10f26ea9e5cdcf3c53f3f74387),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 3.15 seconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-A522TDA\u0027, ip: \u0027192.168.43.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_77\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$errorHandler$0(JsonWireProtocolResponse.java:54)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.pom.mercuryLogin.LoginMercury.openBrowser(LoginMercury.java:27)\r\n\tat ✽.When user opens \"chrome\" browser(src/test/resources/FeatureCollection/login1.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://newtours.demoaut.com/",
      "offset": 33
    }
  ],
  "location": "LoginMercury.appliUrl(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginMercury.maxBrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 12
    }
  ],
  "location": "LoginMercury.pgtimeout(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginMercury.verifyLoginPg()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 31,
  "name": "Verify that valid able to login into mercury tour application by using valid username and valid password",
  "description": "",
  "id": "login-feature;verify-that-valid-able-to-login-into-mercury-tour-application-by-using-valid-username-and-valid-password;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "user access the login page of mercury application",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "user enters \"Suvidyap1\" as username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user enters \"P@ssword1\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user clicks on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user is on flight finder page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user clicks on sign off button",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user access sign on page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginMercury.verifyLogo()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Suvidyap1",
      "offset": 13
    }
  ],
  "location": "LoginMercury.username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "P@ssword1",
      "offset": 13
    }
  ],
  "location": "LoginMercury.password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginMercury.ciSign()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginMercury.verifyfilghtfinder()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginMercury.signoff()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginMercury.retSignIn()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 265767,
  "status": "passed"
});
});