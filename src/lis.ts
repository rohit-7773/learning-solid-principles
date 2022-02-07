/**
 * Voilating the liskov substitution principle
 * calculateArea function will not give expected result when square object will be passed instead of rectangle
 */

class Rectangle {
    sideLength: number;
    sideBreadth: number;

    constructor (sideLength: number, sideBreadth: number) {
        this.sideLength = sideLength;
        this.sideBreadth = sideBreadth;
    }

    updateLength (sideLength: number): void {
        this.sideLength = sideLength;
    }

    updateBreadth (sideBreadth: number): void {
        this.sideBreadth = sideBreadth;
    }
}


class Square extends Rectangle{
    
    constructor (sideLength: number) {
        super(sideLength, sideLength);
    }

    updateLength(sideLength: number): void {
        this.sideLength = sideLength;
        this.sideBreadth = sideLength;
    }
}


function updateDimenstions (box: Rectangle): void {
    console.log(box.sideLength + " " + box.sideBreadth);  // area before updating length;
    box.updateLength(10);
    box.updateBreadth(11);
    console.log(box.sideLength + " " + box.sideBreadth);  // area after updating length;
}

var rectangleBox = new Rectangle(5, 6);
var squareBox = new Square(5);

updateDimenstions(rectangleBox);
updateDimenstions(squareBox);


/**--------------------------------------------------------------------- */

interface Shape {
    sideLength: number;
    updateLength(sideLength: number): void;
}

class GoodRectangle implements Shape {
    sideLength: number;
    sideBreadth: number;

    constructor (sideLength: number, sideBreadth: number) {
        this.sideLength = sideLength;
        this.sideBreadth = sideBreadth;
    }

    updateLength (sideLength: number): void {
        this.sideLength = sideLength;
    }

    updateBreadth (sideBreadth: number): void {
        this.sideBreadth = sideBreadth;
    }
}

class GoodSquare2 implements Shape {
    sideLength: number;

    constructor (sideLength: number) {
        this.sideLength = sideLength;
    }

    updateLength(sideLength: number): void {
        this.sideLength = sideLength;
    }
}

function updateDimenstions1 (box: Shape): void {
    // cann't access breadth because Shape doesn't have breadth property;
    console.log(box.sideLength);  // area before updating length;
    box.updateLength(10);
    console.log(box.sideLength);  // area after updating length;
}

var rectangleBox1: Shape = new Rectangle(5, 6);
var squareBox1: Shape = new Square(5);

updateDimenstions1(rectangleBox);
updateDimenstions1(squareBox);

