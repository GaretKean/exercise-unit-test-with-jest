const {fromEuroToDollar} = require("./app.js");

test("3 Euro should be 3.5 dollars", () => {

const dollars = fromEuroToDollar(3.5);

const expected = 3.5 * 1.07;

expect(dollars).toBe(expected);
})

test("If not number then throw error", () =>{
    expect(()=> fromEuroToDollar("3.5")).toThrow();
});

const {fromDollarToYen} = require("./app.js");
test("1 dollar should be 146.2616822504", () => {
    const yen = fromDollarToYen(156.5);

    const expected = 156.5 * 
})