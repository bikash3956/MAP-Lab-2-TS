
let bankAccount: { 
	money: number, 
	deposit(value: number): void
} = { 
	money: 2000, 
	deposit(value) { 
		this.money += value; 
	} 
}; 

interface MySelf{ 
	name: string, 
	bAcc: typeof bankAccount, 
	hobbies: Array<string> 
}; 

let myself: MySelf = { 
	name: "John", 
	bAcc: bankAccount, 
	hobbies: ["Violin", "Cooking"] 
}; 

myself.bAcc.deposit(3000); 
console.log(myself);



