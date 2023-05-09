let baseObject = { 
	width: 0, 
	length: 0 
}; 
let rectangle: {width: number, length: number, calcSize: () => number}  = Object.create(baseObject); 

rectangle.width = 5; 
rectangle.length = 2; 

rectangle.calcSize = function() { 
	return this.width * this.length; 
}; 

console.log(rectangle.calcSize()); // 10


enum Week {
	SUN, MON, TUE
}

let day: number = Week.SUN;
console.log(Week);