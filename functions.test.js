const functions = require("./functions");

test("Adds 2 + 2 equals 4",()=>{
    expect(functions.add(2,2)).toBe(4);
})
test("Adds 2 + 2 not equals 5",()=>{
    expect(functions.add(2,2)).not.toBe(5);
})
