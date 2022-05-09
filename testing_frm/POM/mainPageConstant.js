class MainPageConstant {

    get commonData() {
        return {
            mainUrl: "http://localhost:3000/"
        }
    }

    get locators() {
        return {
            css: {
                petNameInput: "[data-testid='pet']",
                ownerInput: "[data-testid='owner']",
                dateInput: "[data-testid='date']",
                timeInput: "[data-testid='time']",
                symptomsInput: "[data-testid='symptoms']",
                addButton: "[data-testid='btn-submit']",
                appointmentsBox: "[data-testid='appointment']",
                alertErrorMsg: "[data-testid='alert']",
                deleteButton: "[data-testid='btn-delete']"
            }
        }
    }

}

module.exports = new MainPageConstant();