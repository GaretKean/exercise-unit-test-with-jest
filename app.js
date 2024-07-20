let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromEuroToDollar(euroAmount){
    
    if (typeof euroAmount != "number"){
        throw new Error("wrong type for euroAmount");
    }
    const dollarAmount = euroAmount * oneEuroIs.USD;
    
    return dollarAmount;
}
module.exports = {fromEuroToDollar};



