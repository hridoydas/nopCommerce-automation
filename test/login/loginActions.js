const loginObjects = require('./loginObjects')
const excelParse = require('../../utility/excelParse');
const expect = require("chai").expect;

const validEmail = excelParse.excelDataSet[1].email; 
const validPass = excelParse.excelDataSet[1].password;
const invalidEmail = 'invalid@yopmail.com';
const invalidPass = 'invalid'

class LoginActions{

    async clickOnLoginMenu(){
        await loginObjects.loginMenu.click();
    }

    async enterLoginEmail(email){
        await loginObjects.loginEmailInputField.setValue(email);
    }

    async enterLoginPassword(password){
        await loginObjects.loginPasswordInputField.setValue(password);
    }

    async clickOnLoginInButton(){
        await loginObjects.loginButton.click();
    }

    async verifyEmailErrorMsg(){
        let actualMsg = await loginObjects.loginEmailErrorMsg.getText();
        let expectedMsg = 'Please enter your email';
        await expect(actualMsg).to.include(expectedMsg);
    }

    async verifyLoginErrorMessage(){
        let actualMsg = await loginObjects.invalidCredentialsMsg.getText();
        let expectedMsg = 'Login was unsuccessful. Please correct the errors and try again';
        expect(actualMsg).to.include(expectedMsg);
    }

    async login(email, password){
        await this.clickOnLoginMenu();
        await this.enterLoginEmail(email);
        await this.enterLoginPassword(password);
        await this.clickOnLoginInButton();
    }

    async loginWithValidCredentials(){
        await this.login(validEmail, validPass)
    }

    async loginWithEmptyLoginCredentials(){
        await this.login('', '');
        await this.verifyEmailErrorMsg();
    }

    async loginWithWrongEmailValidPass(){
        await this.login(invalidEmail, validPass);
        await this.verifyLoginErrorMessage();
    }

    async loginWithValidEmailInvalidPass(){
        await this.login(validEmail, invalidPass);
        await this.verifyLoginErrorMessage();
    }
}

module.exports = new LoginActions();