const excelParse = require('../../utility/excelParse');

class PlaceOrderObjects{

    get productMenu(){
        // return $("(//a[contains(.,'Computers')])[1]");
        return $("(//a[contains(.,'"+excelParse.orderDataSet[0].selected_menu+"')])[1]")
    }

    get productImage(){
        return $("(//div[@class='item-box'])[1]");
    }

    get addToCartButton(){
        return $("(//button[contains(.,'Add to cart')])[1]")
    }

    get ramDropdown(){
        return $("//select[@id='product_attribute_2']")
    }

    get ram(){
        return $("//option[@value='3']")
    }

    get hdd(){
        return $("//label[@for='product_attribute_3_6']")
    }

    get quantityInputField(){
        return $("(//input[@class='qty-input'])[1]")
    }

    get addToCartCrossIcon(){
        return $("//span[@class='close']");
    }

    get shoppingCartMenu(){
        return $("//span[contains(.,'Shopping cart')]")
    }

    get termsAndConditonCheckbox(){
        return $("//input[@id='termsofservice']")
    }

    get checkoutButton(){
        return $("//button[contains(.,'Checkout')]")
    }

    get checkoutAsGuestButton(){
        return $("//button[contains(.,'Checkout as Guest')]")
    }

    get baFirstName(){
        return $("//input[@id='BillingNewAddress_FirstName']")
    }

    get baLastName(){
        return $("//input[@id='BillingNewAddress_LastName']")
    }

    get baEmail(){
        return $("//input[@id='BillingNewAddress_Email']")
    }

    get baCompany(){
        return $("//input[@id='BillingNewAddress_Company']")
    }

    get baCountryDropdown(){
        return $("//select[@id='BillingNewAddress_CountryId']")
    }

    get baCountry(){
        return $("//option[contains(.,'Bangladesh')]")
    }

    // get baStateDropdown(){
    //     return $("//select[@id='BillingNewAddress_StateProvinceId']")
    // }

    get baCityInputField(){
        return $("//input[@id='BillingNewAddress_City']")
    }

    get baAddress(){
        return $("//input[@id='BillingNewAddress_Address1']")
    }

    get baZipCode(){
        return $("//input[@id='BillingNewAddress_ZipPostalCode']")
    }

    get baPhoneNumber(){
        return $("BillingNewAddress_PhoneNumber")
    }

    get baContinueButton(){
        return $("//button[@onclick='Billing.save()']")
    }

    get creditCardselection(){
        return $("//label[contains(.,'Credit Card')]")
    }

    get paymentMethodContinueButton(){
        return $("//button[@onclick='PaymentMethod.save()']")
    }

    get cardTypeDropdown(){
        return $("//select[@id='CreditCardType']")
    }

    get visaCardType(){
        return $("//option[@value='visa']")
    }

    get cardHolderNameField(){
        return $("//input[@id='CardholderName']")
    }

    get cardNumberField(){
        return $("//input[@id='CardNumber']")
    }

    get cardExpiryMonthDropdown(){
        return $("//select[@id='ExpireMonth']")
    }

    get cardExpiryMonth(){
        return $("(//option[@value='2'])[2]")
    }

    get cardExpiryYearDropdown(){
        return $("//select[@id='ExpireYear']")
    }

    get cardExpiryYear(){
        return $("//option[@value='2027']")
    }

    get cardCodeInputField(){
        return $("//input[@id='CardCode']")
    }

    get paymentInfoContinueButton(){
        return $("//button[@onclick='PaymentInfo.save()']")
    }

    get orderConfirmContinueButton(){
        return $("//button[@onclick='ConfirmOrder.save()']")
    }

    get orderSuccessMsg(){
        return $("(//div[@class='title'])[1]")
    }
}
module.exports = new PlaceOrderObjects();