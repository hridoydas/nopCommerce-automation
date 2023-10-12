const registrationObjects = require('./registrationObjects')
const excelParse = require('../../utility/excelParse')
const utility = require('../../utility/utility')
const chaiExpect = require("chai").expect;
let date = ''
let month = '';
let password = excelParse.excelDataSet[0].password;
class RegistrationActions{

    // async getInfo(){
    //     console.log("Initial Data: "+ excelParse.excelDataSet[0].first_name);
    //     excelParse.excelDataSet[0].first_name = "Hridoy";
    //     console.log("Updated data: "+ excelParse.excelDataSet[0].first_name);
    // }

    async clickOnRegistration(){
        await registrationObjects.registrationMenu.click();
    }

    async clickOnGenderType(){
        await registrationObjects.genderType.click();
    }

    async enterFirstName(){
        let fName = "F_"+ utility.generateRandomText(4);
        await registrationObjects.firstNameInputFIeld.setValue(fName);
    }

    async enterLastName(){
        let lName = "L_"+ utility.generateRandomNumber(3);
        await registrationObjects.lastNameInputField.setValue(lName);
    }

    async clickOnDobDateField(){
        await registrationObjects.dobDateField.click();
    }

    async selectDobDate(){
        date = await utility.generateRandomNumber(1,20);
        excelParse.excelDataSet[0].day = date;
        await registrationObjects.dobDate.click();
    }

    async clickOnMonthField(){
        await registrationObjects.dobMonthField.click();
    }

    async selectMonth(){
        month = await utility.generateRandomNumber(1,12);
        excelParse.excelDataSet[0].month = month;
        await registrationObjects.dobMonth.click();
    }

    async clickOnYearField(){
        await registrationObjects.dobYearField.click();
    }

    async selectYear(){
        month = await utility.generateRandomNumber(1912,1930);
        excelParse.excelDataSet[0].month = month;
        await registrationObjects.dobMonth.click();
    }

    async enterEmail(){
        let email = utility.generateRandomText(6) + "@yopmail.com";
        await registrationObjects.emailInputField.setValue(email);
    }

    async enterCompanyName(){
        let company = "Company-"+ utility.generateRandomText(4);
        await registrationObjects.companyNameINputField.setValue(company);
    }

    async checkNewsLetter(){
        const isChecked = await registrationObjects.newsletterCheckbox.isSelected();
        if(isChecked){
            console.log("News letter is checked");
        }else{
            await registrationObjects.newsletterCheckbox.click();
        }
    }

    async setPassword(){
        await registrationObjects.passwordField.setValue(password);
    }

    async setConfirmPassword(){
        await registrationObjects.confirmPasswordField.setValue(password);
    }

    async clickOnRegisterButton(){
        await registrationObjects.registerButton.click();
    }

    async verifyRegistrationMsg(){
        let actulaMsg = await registrationObjects.registrationMsg.getText();
        let expectedMsg = excelParse.excelDataSet[0].registrationMsg;
        chaiExpect(actulaMsg).to.equal(expectedMsg);
    }

    async userRegistration(){
        await this.clickOnRegistration();
        await this.clickOnGenderType();
        await this.enterFirstName();
        await this.enterLastName();
        await this.clickOnDobDateField();
        await this.selectDobDate();
        await this.clickOnMonthField();
        await this.selectMonth();
        await this.clickOnYearField();
        await this.selectMonth();
        await this.enterEmail();
        await this.enterCompanyName();
        await this.checkNewsLetter();
        await this.setPassword();
        await this.setConfirmPassword();
        await this.clickOnRegisterButton();
        await this.verifyRegistrationMsg();
    }
}
module.exports = new RegistrationActions();