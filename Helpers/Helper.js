// const crypto = require('crypto')
const bcrypt = require('bcrypt')

const regexFunctionString = (params) => {
    
    let regex;
   
    regex = /^[a-zA-Z]/; 
    return regex.test(params);

}

const regexFunctionNum = (params) => {
    
    regex = /^[0-9]*$/;
    return regex.test(params);
    //pattern exists in a searched string [test]

}

const passHash = (password) => {
    const saltRound = 5

    bcrypt.hash(password, saltRound, function(err, hash) {
        if (err) throw err
       console.log(hash)
    });


    
}



module.exports = {regexFunctionString,regexFunctionNum,passHash};