const registrationActions = require('./registrationActions');

describe('Nopcommerce registration feature Test', () => {

    it("The user should be able to register a new account successfull", async()=>{
        await registrationActions.userRegistration();
    })

});