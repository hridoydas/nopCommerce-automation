class Utility{

    async generateRandomText(size){
            var lenght= size;
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            for (let i = 0; i < lenght; i++) {
                result += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            return result;
    }

    async generateRandomNumber(minNum, maxNum){
        var min = minNum;
        var max = maxNum;
        var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNum;
    }

    async
}
module.exports = new Utility();