let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromEuroToDollar(euroAmount){
    
    if (typeof euroAmount != "number"){
        throw new Error("wrong type of Euro");
    }
    const dollarAmount = euroAmount * oneEuroIs.USD;
    
    return dollarAmount;
}

function fromDollarToYen(dollarAmount){
    if (typeof dollarAmount != "number"){
        throw new Error("wrong type of Dollar");
    }

    const yenAmount = dollarAmount * oneEuroIs.USD * oneEuroIs.JPY;

    return yenAmount;
}


function fromYenToPound(yenAmount){
    if (typeof yenAmount != "number"){
        throw new Error("wrong type of Yen");
    }

    const euroAmount = yenAmount / oneEuroIs.JPY;
    const poundAmount = euroAmount * oneEuroIs.GBP; 

    return parseFloat(poundAmount.toFixed(2));
}



module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound};



