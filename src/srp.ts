/**
 * This class voilating the single resposibility principle
 * This class is calculating the perimeter and area and also printing the area and perimeter
 */

class BadSquare {
    sideLength: number;
    area: number;
    perimeter: number;

    constructor (sideLength: number) {
        this.sideLength = sideLength;
    }

    calculatePermeter(): void {
        this.perimeter = 4 * this.sideLength;
    }

    calculateArea(): void {
        this.area = this.sideLength * this.sideLength;
    }

    printArea(): void {
        console.log(this.area);
    }

    printPerimeter(): void {
        console.log(this.perimeter);
    }
}


/**---------------------------------------------- */


/**
 * Following the single resposibility principle.
 * Print class is responsible for printing the area and perimeter.
 * GoodSquare class is responsible for calculating the area and perimeter.
 */

class Print {
    area: number;
    perimeter: number;

    printPerimeter(): void {
        console.log(this.perimeter);
    }

    printArea(): void {
        console.log(this.area);
    }
}

class GoodSquare extends Print {
    sideLength: number;
    area: number;
    perimeter: number;

    constructor (sideLength: number) {
        super();
        this.sideLength = sideLength;
    }

    calculateArea(): void {
        this.area = this.sideLength * this.sideLength;
    }

    calculatePerimeter(): void {
        this.perimeter = 4 * this.sideLength;
    }
}


var square = new GoodSquare(10);
square.calculateArea();
square.calculatePerimeter();
square.printArea();
square.printPerimeter();




