var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;
var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);
var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

class BasePage {
    constructor() {
        global.driver = driver;
    }

    async navigateToApp(appUrl) {
        await driver.get(appUrl);
    }

    async waitElementDisplayed(element, timeOut = 5000) {
        return driver.wait(function() {
            return element.isDisplayed();
        }, timeOut);
    }

    async closeDriver() {
        await driver.close();
    }

}

module.exports = BasePage;