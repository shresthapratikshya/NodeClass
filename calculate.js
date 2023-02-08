const httpStatus = require("http-status");

((calculation) => { //calculation is the module that is exported
    calculation.sum = (a, b) => {
        setTimeout(() => {
            console.log("hello");
        }, 5000)
        return a + b;
    }
    calculation.login = async (request) => {
        const isValid = await calculation.loginValidation(request);
    }
    calculation.loginValidation = async (request) => {
        if (request.username == "PATTU") {
            return {
                status: httpStatus.BAD_GATEWAY, message: 'Username required'
            }
        }
        return a + b;
    }
})(module.exports)