class LoginObjects{

    get loginMenu(){
        return $("//a[contains(.,'Log in')]");
    }

    get loginEmailInputField(){
        return $("//input[@id='Email']");
    }

    get loginPasswordInputField(){
        return $("//input[@id='Password']");
    }

    get loginButton(){
        return $("//button[contains(.,'Log in')]");
    }

    get loginEmailErrorMsg(){
        return $("//span[@id='Email-error']")
    }

    get invalidCredentialsMsg(){
        return $("//div[@class='message-error validation-summary-errors']")
    }

}

module.exports = new LoginObjects();