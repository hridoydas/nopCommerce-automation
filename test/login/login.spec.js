const loginActions = require('./loginActions');

describe('Nopcommerce login feature Test', () => {

    it("Login with empty login credentials", async()=>{
        await loginActions.loginWithEmptyLoginCredentials();
    })

    it("Login with the wrong email and the correct password", async()=>{
        await loginActions.loginWithWrongEmailValidPass();
    })

    it("Login with the correct email and the wrong credentials", async()=>{
        await loginActions.loginWithValidEmailInvalidPass();
    })

    it("Login with the correct login credentials", async()=>{
        await loginActions.loginWithValidCredentials();
    })

});