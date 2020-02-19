const functions = require("./functions");

test("Adds 2 + 2 equals 4",()=>{
    expect(functions.add(2,2)).toBe(4);
})
test("Adds 2 + 2 not equals 5",()=>{
    expect(functions.add(2,2)).not.toBe(5);
})
test("Adds 2 + 2 to be a truth value ",()=>{
    expect(functions.add(2,2)).toBeTruthy();
})
test("Subtracting 2 - 2 equals 0",()=>{
    expect(functions.sub(2,2)).toBe(0);
})
test("Subtracting 2 - 2 not equals -5",()=>{
    expect(functions.sub(2,2)).not.toBe(-5);
})
test("Checking values if they are false",()=>{
    expect(functions.check_value(undefined)).toBeFalsy();
})
test("Checking object",()=>{
    expect(functions.create_user()).toEqual({first_name: "Muhammad Naufil",last_name: "Ahmad"})
})
test("Sum of 500+ 500 should be less than 1200",()=>{
    expect(500+500).toBeLessThan(1200);
})
test("Sum of 500+ 500 should be less than 1200",()=>{
    expect(functions.add(3,4)).toBeGreaterThan(3);
})