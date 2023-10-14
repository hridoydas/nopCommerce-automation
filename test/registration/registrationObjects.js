const excelParse = require('../../utility/excelParse');

class RegistrationObjects{

    get registrationMenu(){
        return $("//a[contains(.,'Register')]")
    }

    get genderType(){
        // return $("//label[contains(.,'Male')]");
        return $("//label[contains(.,'"+excelParse.excelDataSet[0].gender+"')]")
    }

    get firstNameInputFIeld(){
        return $("//input[@id='FirstName']");
    }

    get lastNameInputField(){
        return $("//input[@id='LastName']");
    }

    get dobDateField(){
        return $("//select[@name='DateOfBirthDay']");
    }

    get dobDate(){
        // return $("(//option[@value='1'])[1]");
        console.log("Day: "+ excelParse.excelDataSet[0].day);
        return $("(//option[@value='"+excelParse.excelDataSet[0].day+"'])[1]")
    }

    get dobMonthField(){
        return $("//select[@name='DateOfBirthMonth']");
    }

    get dobMonth(){
        // return $("(//option[@value='1'])[2]");
        return $("(//option[@value='"+excelParse.excelDataSet[0].month+"'])[2]")
    }

    get dobYearField(){
        return $("//select[@name='DateOfBirthYear']")
    }

    get dobYear(){
        // return $("//option[@value='1940']");
        return $("(//option[@value='"+excelParse.excelDataSet[0].year+"'])")
    }

    get emailInputField(){
        return $("//input[@id='Email']")
    }

    get companyNameINputField(){
        return $("//input[@id='Company']");
    }

    get newsletterCheckbox(){
        return $("//input[@id='Newsletter']");
    }

    get passwordField(){
        return $("//input[@id='Password']");
    }

    get confirmPasswordField(){
        return $("//input[@id='ConfirmPassword']");
    }

    get registerButton(){
        return $("//button[@id='register-button']")
    }

    get registrationMsg(){
        return $("//div[@class='result']")
    }
}

module.exports = new RegistrationObjects();