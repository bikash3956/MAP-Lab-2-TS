"use strict";
let bankAccount = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};
;
let myself = {
    name: "John",
    bAcc: bankAccount,
    hobbies: ["Violin", "Cooking"]
};
myself.bAcc.deposit(3000);
console.log(myself);
