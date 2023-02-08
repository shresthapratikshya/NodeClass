const httpStatus = require("http-status");
const { request } = require("http");

((calculation) => { //calculation is the module that is exported
    // calculation.sum = (a, b) => {
    //     setTimeout(() => {
    //         console.log("hello");
    //     }, 5000)
    //     return a + b;
    // }
    calculation.login = async (request) => {
        const isValid = await calculation.loginValidation(request);
        if (!isValid) {
            return false;
        } else {
            return true;
        }
        //     return {
        //         status: httpStatus.BAD_GATEWAY, message: 'Username required'
        //     }
        // }
        // if (request.username == "PATTU") {
        //     console.log("Username Accessed");
        // } else {
        //     console.log("Username Denied");
        // }
    }
    calculation.loginValidation = (request) => {
        if (request.username == "PATTU" && request.password == "password") {
            console.log("Entered");
            return true;
        }
        return false;
    }


    // calculation.password = async (request) => {
    //     const isValid = await calculation.passwordValidation(request);
    //     if (!isValid) {
    //         return {
    //             status: httpStatus.BAD_GATEWAY, message: 'Unmatched Password'
    //         }
    //     }
    //     if (request.password == "password") {
    //         console.log("Password matched");
    //         //res.send("Correct Password");
    //     } else {
    //         console.log("Password unmatched");
    //         //res.send("Incorrect Password");
    //     }
    // }
    // calculation.passwordValidation = async (request) => {
    //     if (request.password) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
})(module.exports)