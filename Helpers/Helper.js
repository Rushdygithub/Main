const regexFunction = (params) => {
    
    let regex;
    if (typeof params === "string") 
    {
        regex = /^[a-zA-Z]/; 
        console.log(regex);
        return regex.test(params);
    } 
    else if (typeof params === "number") {
        regex = /'^[0-9]+$'/;
        console.log(regex);
        return regex.test(params);
        //pattern exists in a searched string [test]
    }
}

module.exports = {regexFunction};