// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let newValueInEuros = valueInDollar / 1.07;

    let valueInYen = newValueInEuros * 156.5;
    return parseFloat(valueInYen.toFixed(2)); 
}

const fromYenToPound = function (valueInYen) {
    let valueInEuros = valueInYen / 156.5;

    let valueInPound = valueInEuros * 0.87;
    return parseFloat(valueInPound.toFixed(3));
}

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
