const webdriver = require('selenium-webdriver');
const BasePage = require('../components/basePageHelper');
const { locators } = require('./mainPageConstant');
const By = webdriver.By;

class MainPageElement extends BasePage {
    get elements() {
        return {
            get petName() {
                return driver.findElement(By.css(locators.css.petNameInput));
            },
            get owner() {
                return driver.findElement(By.css(locators.css.ownerInput));
            },
            get date() {
                return driver.findElement(By.css(locators.css.dateInput));
            },
            get time() {
                return driver.findElement(By.css(locators.css.timeInput));
            },
            get symptoms() {
                return driver.findElement(By.css(locators.css.symptomsInput));
            },
            get addBtn() {
                return driver.findElement(By.css(locators.css.addButton));
            },
            get appointments() {
                return driver.findElements(By.css(locators.css.appointmentsBox));
            },
            get errorMsg() {
                return driver.findElement(By.css(locators.css.alertErrorMsg));
            },
            get deleteBtn() {
                return driver.findElement(By.css(locators.css.deleteButton));
            }
        }
    }
}

module.exports = new MainPageElement();