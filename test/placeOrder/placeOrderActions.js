const placeOrderObject = require('./placeOrderObjects');
const excelParse = require('../../utility/excelParse');
const utility = require('../../utility/utility');
const expect = require ('chai').expect;

let selectedMenu = '';
const firstName = excelParse.orderDataSet[0].first_name;
const lastName = excelParse.orderDataSet[0].last_name;
const company = excelParse.orderDataSet[0].company;
const email = excelParse.orderDataSet[0].email;
const cardNo = excelParse.orderDataSet[0].card_number;

class PlaceOrderActions{

    async selectDynamicProductMenu(){
        let index = utility.generateRandomNumber(0, 6);
        selectedMenu = excelParse.orderDataSet[index].product_menu;
        excelParse.orderDataSet[index].selected_menu = selectedMenu;
        console.log('Product Menu: '+selectedMenu);
    }

    async clickOnProductMenu(){
        await placeOrderObject.productMenu.click();
    }

    async selectProduct(){
        await placeOrderObject.productImage.click();
    }

    async clickOnAddToCartButton(){
        await placeOrderObject.addToCartButton.click();
    }

    async enterQuantity(){
        let quantity = await utility.generateRandomNumber(1,5);
        await placeOrderObject.quantityInputField.setValue(quantity);
    }

    async clickOnToastMsgCrossIcon(){
        await placeOrderObject.addToCartCrossIcon.click();
    }

    async clickOnShoppingCartMenu(){
        await placeOrderObject.shoppingCartMenu.click();
    }

    async clickOnTermsAndConditions(){
        await placeOrderObject.termsAndConditonCheckbox.click();
    }

    async clickOnCheckoutButton(){
        await placeOrderObject.checkoutButton.click();
    }

    async clickOnCheckoutAsGuestButton(){
        await placeOrderObject.checkoutAsGuestButton.click();
    }

    async enterFirstName(){
        await placeOrderObject.baFirstName.setValue(firstName);
    }

    async enterLastName(){
        await placeOrderObject.baLastName.setValue(lastName);
    }

    async enterCompanyName(){
        await placeOrderObject.baCompany.setValue(company);
    }

    async enterEmailAddress(){
        await placeOrderObject.baEmail.setValue(email)
    }

    async clickOnCountryDropdown(){
        await placeOrderObject.baCountryDropdown.click();
    }

    async selectCountry(){
        await placeOrderObject.baCountry.click();
    }

    async entrCity(){
        await placeOrderObject.baCityInputField.setValue('Dhaka');
    }

    async enterAddress(){
        await placeOrderObject.baAddress.setValue('Shantinagar');
    }

    async enterZipCode(){
        await placeOrderObject.baZipCode.setValue('1200')
    }

    async enterPhoneNumber(){
        await placeOrderObject.baZipCode.setValue('+8801234567810');
    }

    async clickOnbilliingAddressContinueButton(){
        await placeOrderObject.baContinueButton.click();
    }

    async selectCreditCardMethod(){
        await placeOrderObject.creditCardselection.click();
    }

    async clickOnPaymentMethodContinueButton(){
        await placeOrderObject.paymentMethodContinueButton.click();
    }
    
    async clickOnCardTypeDropdown(){
        await placeOrderObject.cardTypeDropdown.click();
    }

    async selectCardType(){
        await placeOrderObject.visaCardType.click();
    }

    async enterCardHolderName(){
        await placeOrderObject.cardHolderNameField.setValue(firstName+' '+lastName);
    }

    async enterCardNumber(){
        await placeOrderObject.cardNumberField.setValue(cardNo);
    }

    async clickOnCardExpiryMonthDropdown(){
        await placeOrderObject.cardExpiryMonthDropdown.click();
    }

    async selectCardExpiryMonth(){
        await placeOrderObject.cardExpiryMonth.click();
    }

    async cardExpiryYearDropdown(){
        await placeOrderObject.cardExpiryYearDropdown.click();
    }

    async selectCardExpiryYear(){
        await placeOrderObject.cardExpiryYear.click();
    }

    async enterCardCode(){
        await placeOrderObject.cardCodeInputField.setValue('123')
    }

    async clickOnPaymentInfoContinueButton(){
        await placeOrderObject.paymentInfoContinueButton.click();
    }

    async orderConfirmContinueButton(){
        await placeOrderObject.orderConfirmContinueButton.click();
    }

    async verifySuccessfullOrderMsg(){
        let actualMsg = await placeOrderObject.orderSuccessMsg.getText();
        let expectedMsg = excelParse.orderDataSet[0].order_success_msg;
        expect(actualMsg).to.include(expectedMsg);
    }
}

module.exports = new PlaceOrderActions();