const placeOrderObject = require('./placeOrderObjects');
const excelParse = require('../../utility/excelParse');
const utility = require('../../utility/utility');
const expect = require('chai').expect;

let selectedMenu = '';
const firstName = excelParse.orderDataSet[0].first_name;
const lastName = excelParse.orderDataSet[0].last_name;
const company = excelParse.orderDataSet[0].company;
const email = excelParse.orderDataSet[0].email;
const cardNo = excelParse.orderDataSet[0].card_number;
const recipientsName = excelParse.orderDataSet[1].first_name;
const recipientEmail = excelParse.orderDataSet[1].email;

class PlaceOrderActions {

    async selectDynamicProductMenu() {
        let index = await utility.generateRandomNumber(0, 1);
        console.log('index: ' + index);
        selectedMenu = excelParse.orderDataSet[index].product_menu;
        excelParse.orderDataSet[0].selected_menu = selectedMenu;
        console.log('Product Menu: ' + selectedMenu);
    }

    async clickOnProductMenu() {
        await placeOrderObject.productMenu.click();
    }

    async selectProduct() {
        await placeOrderObject.productImage.click();
    }

    async clickOnAddToCartButton() {
        await placeOrderObject.addToCartButton.click();
    }

    async clickOnRamDropdwon() {
        await placeOrderObject.ramDropdown.click();
    }

    async selectRam() {
        await placeOrderObject.ram.click();
    }

    async selectHdd() {
        await placeOrderObject.hdd.click();
    }

    async enterRecipientName() {
        await placeOrderObject.recipientsName.setValue(recipientsName);
    }

    async enterRecipientEmail() {
        await placeOrderObject.recipientEmail.setValue(recipientEmail)
    }

    async enterSenderName() {
        await placeOrderObject.senderName.setValue(firstName);
    }

    async enterSenderEmail() {
        await placeOrderObject.senderEmail.setValue(email);
    }

    async enterQuantity() {
        let quantity = await utility.generateRandomNumber(1, 5);
        await placeOrderObject.quantityInputField.setValue(quantity);
        console.log("Order Quantity: " + quantity);
    }

    async clickOnToastMsgCrossIcon() {
        await placeOrderObject.addToCartCrossIcon.click();
    }

    async clickOnShoppingCartMenu() {
        await placeOrderObject.shoppingCartMenu.click();
    }

    async clickOnTermsAndConditions() {
        await placeOrderObject.termsAndConditonCheckbox.click();
    }

    async clickOnCheckoutButton() {
        await placeOrderObject.checkoutButton.click();
    }

    async clickOnCheckoutAsGuestButton() {
        await placeOrderObject.checkoutAsGuestButton.click();
    }

    async enterFirstName() {
        await placeOrderObject.baFirstName.setValue(firstName);
    }

    async enterLastName() {
        await placeOrderObject.baLastName.setValue(lastName);
    }

    async enterCompanyName() {
        await placeOrderObject.baCompany.setValue(company);
    }

    async enterEmailAddress() {
        await placeOrderObject.baEmail.setValue(email)
    }

    async clickOnCountryDropdown() {
        await placeOrderObject.baCountryDropdown.click();
    }

    async selectCountry() {
        await placeOrderObject.baCountry.click();
    }

    async enterCity() {
        await placeOrderObject.baCityInputField.setValue('Dhaka');
    }

    async enterAddress() {
        await placeOrderObject.baAddress.setValue('Shantinagar');
    }

    async enterZipCode() {
        await placeOrderObject.baZipCode.setValue('1200')
    }

    async enterPhoneNumber() {
        await placeOrderObject.baPhoneNumber.setValue('+8801234567810');
    }

    async clickOnbilliingAddressContinueButton() {
        await placeOrderObject.baContinueButton.click();
    }

    async selectCreditCardMethod() {
        await placeOrderObject.creditCardselection.click();
    }

    async clickOnPaymentMethodContinueButton() {
        await placeOrderObject.paymentMethodContinueButton.click();
    }

    //shpping method
    async clickOnShippingMethod() {
        await placeOrderObject.shippingMethodNextToAir.click();
    }

    async clickOnShippingMethodContinueButton() {
        await placeOrderObject.shippingMethodContinueButton.click();
    }
    //=== 

    async clickOnCardTypeDropdown() {
        await placeOrderObject.cardTypeDropdown.click();
    }

    async selectCardType() {
        await placeOrderObject.visaCardType.click();
    }

    async enterCardHolderName() {
        await placeOrderObject.cardHolderNameField.setValue(firstName + ' ' + lastName);
    }

    async enterCardNumber() {
        await placeOrderObject.cardNumberField.setValue(cardNo);
    }

    async clickOnCardExpiryMonthDropdown() {
        await placeOrderObject.cardExpiryMonthDropdown.click();
    }

    async selectCardExpiryMonth() {
        await placeOrderObject.cardExpiryMonth.click();
    }

    async cardExpiryYearDropdown() {
        await placeOrderObject.cardExpiryYearDropdown.click();
    }

    async selectCardExpiryYear() {
        await placeOrderObject.cardExpiryYear.click();
    }

    async enterCardCode() {
        await placeOrderObject.cardCodeInputField.setValue('123')
    }

    async clickOnPaymentInfoContinueButton() {
        await placeOrderObject.paymentInfoContinueButton.click();
    }

    async orderConfirmContinueButton() {
        await browser.pause(3000);
        // await placeOrderObject.orderConfirmContinueButton.scrollIntoView({ block: 'center', inline: 'center' });
        await placeOrderObject.orderConfirmContinueButton.isDisplayed({timeout: 10000});
        await placeOrderObject.orderConfirmContinueButton.click();
    }

    async verifySuccessfullOrderMsg() {
        await browser.pause(3000);
        // await placeOrderObject.orderSuccessMsg.isDisplayed({timeout: 10000});
        let actualMsg = await placeOrderObject.orderSuccessMsg.getText();
        let expectedMsg = excelParse.orderDataSet[0].order_success_msg;
        console.log("actual msg: "+actualMsg+ "\nexpected msg: "+expectedMsg);
        expect(actualMsg).to.include(expectedMsg);
    }

    async productAddAndPurchaseJourneyForComputer() {
        await this.selectProduct();
        await this.clickOnAddToCartButton();
        await this.clickOnRamDropdwon();
        await this.selectRam();
        await this.selectHdd();
        await this.enterQuantity();
        await this.clickOnAddToCartButton();
        await this.clickOnToastMsgCrossIcon();
        await this.clickOnShoppingCartMenu();
        await this.clickOnTermsAndConditions();
        await this.clickOnCheckoutButton();
        await this.clickOnCheckoutAsGuestButton();
        await this.enterFirstName();
        await this.enterLastName();
        await this.enterCompanyName();
        await this.enterEmailAddress();
        await this.clickOnCountryDropdown();
        await this.selectCountry();
        await this.enterCity();
        await this.enterAddress();
        await this.enterZipCode();
        await this.enterPhoneNumber();
        await this.clickOnbilliingAddressContinueButton();
        await this.clickOnShippingMethod();
        await this.clickOnShippingMethodContinueButton();
        await this.selectCreditCardMethod();
        await this.clickOnPaymentMethodContinueButton();
        await this.clickOnCardTypeDropdown();
        await this.selectCardType();
        await this.enterCardHolderName();
        await this.enterCardNumber();
        await this.clickOnCardExpiryMonthDropdown();
        await this.selectCardExpiryMonth();
        await this.cardExpiryYearDropdown();
        await this.selectCardExpiryYear();
        await this.enterCardCode();
        await this.clickOnPaymentInfoContinueButton();
        await this.orderConfirmContinueButton();
    }

    async productAddAndPurchaseJoruneyForGiftCard() {
        await this.clickOnAddToCartButton();
        await this.enterRecipientName();
        await this.enterRecipientEmail();
        await this.enterSenderName();
        await this.enterSenderEmail();
        await this.enterQuantity();
        await this.clickOnAddToCartButton();
        await this.clickOnToastMsgCrossIcon();
        await this.clickOnShoppingCartMenu();
        await this.clickOnTermsAndConditions();
        await this.clickOnCheckoutButton();
        await this.clickOnCheckoutAsGuestButton();
        await this.enterFirstName();
        await this.enterLastName();
        await this.enterCompanyName();
        await this.enterEmailAddress();
        await this.clickOnCountryDropdown();
        await this.selectCountry();
        await this.enterCity();
        await this.enterAddress();
        await this.enterZipCode();
        await this.enterPhoneNumber();
        await this.clickOnbilliingAddressContinueButton();
        await this.selectCreditCardMethod();
        await this.clickOnPaymentMethodContinueButton();
        await this.clickOnCardTypeDropdown();
        await this.selectCardType();
        await this.enterCardHolderName();
        await this.enterCardNumber();
        await this.clickOnCardExpiryMonthDropdown();
        await this.selectCardExpiryMonth();
        await this.cardExpiryYearDropdown();
        await this.selectCardExpiryYear();
        await this.enterCardCode();
        await this.clickOnPaymentInfoContinueButton();
        await this.orderConfirmContinueButton();

    }

    async placeOrderAsGuest() {
        await this.selectDynamicProductMenu();
        await this.clickOnProductMenu();
        if (selectedMenu == 'Computers') {
            await this.productAddAndPurchaseJourneyForComputer();
        } else {
            await this.productAddAndPurchaseJoruneyForGiftCard();
        }
        await this.verifySuccessfullOrderMsg();
    }
}

module.exports = new PlaceOrderActions();