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

module.exports = {regexFunctionString,regexFunctionNum};