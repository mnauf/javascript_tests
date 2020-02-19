const functions =  {
    add: (num1, num2) => num1+num2,
    sub: (num1, num2) => num1-num2,
    check_value: (num1) => num1,
    create_user: ()=> {
        const user = {first_name: "Muhammad Naufil"};
        user["last_name"] = "Ahmad";
        return user
    }
};
module.exports= functions
