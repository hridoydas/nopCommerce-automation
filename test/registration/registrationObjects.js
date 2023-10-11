class RegistrationObjects{

    get registrationMenu(){
        return $("//a[contains(.,'Register')]")
    }
}

module.exports = new RegistrationObjects();