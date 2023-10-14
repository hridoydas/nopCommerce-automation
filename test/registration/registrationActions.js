const registrationObjects = require('./registrationObjects')
const excelParse = require('../../utility/excelParse')
const utility = require('../../utility/utility')
const expect = require("chai").expect;
let date = ''
let month = '';
let year = '';
let password = excelParse.excelDataSet[0].password;

class RegistrationActions {

    async clickOnRegistration() {
        await registrationObjects.registrationMenu.click();
    }

    async clickOnGenderType() {
        const genders = "FM";
        const index = Math.floor(Math.random() * genders.length);
        const choice = genders.charAt(index);
        if(choice =='F'){
            excelParse.excelDataSet[0].gender = 'Female'
        }else{
            excelParse.excelDataSet[0].gender = 'Male'
        }
        await registrationObjects.genderType.click();
    }

    async enterFirstName() {
        let fName = "F_" + await utility.generateRandomText(4);
        await registrationObjects.firstNameInputFIeld.setValue(fName);
    }

    async enterLastName() {
        let lName = "L_" + await utility.generateRandomText(3);
        await registrationObjects.lastNameInputField.setValue(lName);
    }

    async clickOnDobDateField() {
        await registrationObjects.dobDateField.click();
    }

    async selectDobDate() {
        date = await utility.generateRandomNumber(1, 20);
        excelParse.excelDataSet[0].day = date;
        await registrationObjects.dobDate.click();
    }

    async clickOnMonthField() {
        await registrationObjects.dobMonthField.click();
    }

    async selectMonth() {
        month = await utility.generateRandomNumber(1, 12);
        excelParse.excelDataSet[0].month = month;
        await registrationObjects.dobMonth.click();
    }

    async clickOnYearField() {
        await registrationObjects.dobYearField.click();
    }

    async selectYear() {
        year = await utility.generateRandomNumber(1912, 1930);
        excelParse.excelDataSet[0].year = year;
        await registrationObjects.dobYear.click();
    }

    async enterEmail() {
        let email = await utility.generateRandomText(6) + "@yopmail.com";
        await registrationObjects.emailInputField.setValue(email);
    }

    async enterCompanyName() {
        let company = "Company-" + await utility.generateRandomText(4);
        await registrationObjects.companyNameINputField.setValue(company);
    }

    async checkNewsLetter() {
        const isChecked = await registrationObjects.newsletterCheckbox.isSelected();
        if (isChecked) {
            console.log("News letter is checked");
        } else {
            await registrationObjects.newsletterCheckbox.click();
        }
    }

    async setPassword() {
        console.log("Password: "+ password);
        await registrationObjects.passwordField.setValue(password);
    }

    async setConfirmPassword() {
        await registrationObjects.confirmPasswordField.setValue(password);
    }

    async clickOnRegisterButton() {
        await registrationObjects.registerButton.click();
    }

    async verifyRegistrationMsg() {
        await registrationObjects.registrationMsg.isDisplayed({timout: 10000});
        let actulaMsg = await registrationObjects.registrationMsg.getText();
        let expectedMsg = excelParse.excelDataSet[0].registration_msg;
        expect(actulaMsg).to.equal(expectedMsg);
    }

    async userRegistration() {
        await this.clickOnRegistration();
        await this.clickOnGenderType();
        await this.enterFirstName();
        await this.enterLastName();
        await this.clickOnDobDateField();
        await this.selectDobDate();
        await this.clickOnMonthField();
        await this.selectMonth();
        await this.clickOnYearField();
        await this.selectYear();
        await this.enterEmail();
        await this.enterCompanyName();
        await this.checkNewsLetter();
        await this.setPassword();
        await this.setConfirmPassword();
        await this.clickOnRegisterButton();
        await this.verifyRegistrationMsg();
        console.log("Complete Registration");
    }
}
module.exports = new RegistrationActions();