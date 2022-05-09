const mainPageMethod = require('../POM/mainPageMethod');
const { commonData } = require('../POM/mainPageConstant');
jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000;

describe('Happy path test', function() {

    beforeAll(async() => {
        await mainPageMethod.navigateToApp(commonData.mainUrl);
    });

    afterAll(async() => {
        await mainPageMethod.closeDriver();
    });

    it('1. Make an appointment successfully', async() => {
        const qtyAppointments = await mainPageMethod.getTheCurrentAmountOfAppointments();
        var petName = 'Felina',
            owner = 'Alexander',
            date = '07/05/2022',
            time = '00:00',
            symptoms = 'Wobble while walking'
        await mainPageMethod.fillOutAppointmentForm(petName, owner, date, time, symptoms);
        await mainPageMethod.clickOnAddAppointment();
        const newQtyAppointments = await mainPageMethod.getTheCurrentAmountOfAppointments();
        expect(await newQtyAppointments).toEqual(qtyAppointments + 1);
    });

    it('2. Make multiple appointments at once successfully', async() => {
        const qtyAppointments = await mainPageMethod.getTheCurrentAmountOfAppointments();
        await mainPageMethod.createAppointments(2);
        const newQtyAppointments = await mainPageMethod.getTheCurrentAmountOfAppointments();
        expect(await newQtyAppointments).toEqual(qtyAppointments + 2);
    });

    it('3. Verify all fields are mandatory', async() => {
        const qtyAppointments = await mainPageMethod.getTheCurrentAmountOfAppointments();
        var petName = 'Coquito',
            owner = 'Roberta',
            date = '',
            time = '14:26',
            symptoms = 'Spins for no reason'
        await mainPageMethod.fillOutAppointmentForm(petName, owner, date, time, symptoms);
        await mainPageMethod.clickOnAddAppointment();
        await mainPageMethod.verifyAllFieldsAreRequired();
        const newQtyAppointments = await mainPageMethod.getTheCurrentAmountOfAppointments();
        expect(await newQtyAppointments).toEqual(qtyAppointments);
    });

    it('4. Delete an appointment', async() => {
        let qtyAppointments = await mainPageMethod.getTheCurrentAmountOfAppointments();
        if (qtyAppointments <= 1) {
            await mainPageMethod.createAppointments(2);          
            qtyAppointments = await mainPageMethod.getTheCurrentAmountOfAppointments();
        }
        await mainPageMethod.deleteAppointment();
        const newQtyAppointments = await mainPageMethod.getTheCurrentAmountOfAppointments();
        expect(await newQtyAppointments).toEqual(qtyAppointments - 1);
    });

});