/**
 * BadPrint class is voilating the open-closed principle. 
 * Not able to extend the class for rectangle and circle without changing the existing code.
 */

class BadPrint {
    printArea(square: BadSquare1): void {
        console.log(square.area);
    }

    printPerimeter(square: BadSquare1): void {
        console.log(square.perimeter);
    }
}

class BadSquare1 {
    sideLength: number;
    area: number;
    perimeter: number;

    constructor (sideLength: number) {
        this.sideLength = sideLength;
    }

    calculateArea(): void {
        this.area = this.sideLength * this.sideLength;
    }

    calculatePerimeter(): void {
        this.perimeter = 4 * this.sideLength;
    }
}


/**------------------------------------------------------------------ */

/**
 * GoodPrint class following the open-closed principle.
 * Can extend it for circle and rectangle also.
 */

class GoodPrint {
    area: number;
    perimeter: number;

    printPerimeter(): void {
        console.log(this.perimeter);
    }

    printArea(): void {
        console.log(this.area);
    }
}

class GoodRectangle1 extends GoodPrint {
    sideLength: number;
    sideBreadth: number;
    area: number;
    perimeter: number;

    constructor (sideLength: number, sideBreadth: number) {
        super();
        this.sideLength = sideLength;
        this.sideBreadth = sideBreadth;
    }

    calculateArea(): void {
        this.area = this.sideLength * this.sideLength;
    }

    calculatePerimeter(): void {
        this.perimeter = 4 * this.sideLength;
    }
}

class GoodSquare1 extends GoodRectangle1 {
    sideLength: number;

    constructor(sideLength: number) {
        super(sideLength, sideLength);
    }
}


var square1 = new GoodSquare1(10);
square1.calculateArea();
square1.calculatePerimeter();
square1.printArea();
square1.printPerimeter();
