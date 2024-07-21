const {fromEuroToDollar, fromDollarToYen, fromYenToPound} = require("./app.js");

test("3 Euro should be 3.21 dollars", () => {

const dollars = fromEuroToDollar(3);

const expected = (3 * 1.07).toFixed(2);

expect(dollars).toBe(parseFloat(expected));
})

test("If not number then throw error", () =>{
    expect(()=> fromEuroToDollar("3.5")).toThrow();
});
// Dollar to Yen tests

test("2 dollars should be 334.91", () => {
    const yen = fromDollarToYen(2);

    const expected =  (2 * 1.07 * 156.5).toFixed(2); 
    expect(yen).toBe(parseFloat(expected));
});
test("If not number then throw error", () =>{
    expect(()=> fromDollarToYen("2")).toThrow()
});
// yen to pound tests

test("25 yen should be 0.14 pounds", () => {
    const poundAmount = fromYenToPound(25);

    const expected =  (25 / 156.5 * 0.87).toFixed(2); 
    expect(poundAmount).toBe(parseFloat(expected));
});
test("If not number then throw error", () =>{
    expect(()=> fromYenToPound("25")).toThrow()
});

