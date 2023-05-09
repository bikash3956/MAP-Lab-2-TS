
let bankAccount: { 
	money: number, 
	deposit(value: number): void
}; 
 bankAccount = { 
	money: 2000, 
	deposit(value) { 
		this.money += value; 
	} 
}; 

interface MySelf{ 
	name: string, 
	bankAccount: any, 
	hobbies: Array<string> 
}; 

let myself: MySelf = { 
	name: "John", 
	bankAccount: bankAccount, 
	hobbies: ["Violin", "Cooking"] 
}; 

myself.bankAccount.deposit(3000); 
console.log(myself);