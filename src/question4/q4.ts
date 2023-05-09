abstract class Shape {
abstract calcSize(): number;
constructor(protected type: string){
}
}

class Rectangle extends Shape{
    private width: number;
    private length: number;
    constructor(width: number, length: number, type: string){
        super(type);
        this.width = width;
        this.length = length;
    }
    calcSize(): number {
        return this.width * this.length; 
    }
    setWidth(width: number) : void {
        this.width = width;
    }
    getWidth(): number{
        return this.width;
    }
    setLength(length: number) : void {
        this.length = length;
    }
    getLength(): number{
        return this.length;
    }

    
}

let rectangle: Rectangle = new Rectangle(4,5, 'Rectangle');

rectangle.setWidth(5); 
rectangle.setLength(2); 

rectangle.calcSize = function() { 
	return this.getWidth() * this.getLength(); 
}; 

console.log(rectangle.calcSize()); // 10