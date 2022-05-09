const BasePage = require('../components/basePageHelper');
const { elements } = require('./mainPageElement');

class MainPageMethod extends BasePage {

    async typeTextInInput(webElement, text) {
        await this.waitElementDisplayed(webElement);
        await webElement.sendKeys(text)
    }
  
    async clickOnAddAppointment() {
        await this.waitElementDisplayed(elements.addBtn);
        await elements.addBtn.click();
    }

    async verifyAllFieldsAreRequired() {
        await this.waitElementDisplayed(elements.errorMsg);
        expect(await elements.errorMsg.isDisplayed()).toBe(true);
    }

    async fillOutAppointmentForm(petName = 'Test petName '+Date.now(), owner = 'Test owner '+Date.now(), 
    date = '07/05/2022', time = '12:00', symptoms = 'Falls for no reason') {
       await this.typeTextInInput(elements.petName, petName)
       await this.typeTextInInput(elements.owner, owner)
       await this.typeTextInInput(elements.date, date)
       await this.typeTextInInput(elements.time, time)
       await this.typeTextInInput(elements.symptoms, symptoms)
    }

    async createAppointments(qtyAppointments) {
        while(qtyAppointments>0){
            await this.fillOutAppointmentForm()
            await this.clickOnAddAppointment()
            qtyAppointments--;
        }
    }

    async getTheCurrentAmountOfAppointments() {
        const appointments = await elements.appointments;
        return await appointments.length;
    }

    async deleteAppointment() {
        if (await this.getTheCurrentAmountOfAppointments() > 0) {
            await this.waitElementDisplayed(elements.deleteBtn);
            await elements.deleteBtn.click();
        } else {
            throw new Error("Error: There's no existing appointment to be deleted!");
        }
    }

}

module.exports = new MainPageMethod();