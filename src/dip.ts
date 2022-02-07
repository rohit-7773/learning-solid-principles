/**
 * voilating the dependency inversion principle
 * class Square2 needs to know the type ans number of perimeter Reactangle2 class constructor takes
 */

class Rectangle2 {
    
    length: number;
    breadth: number;

    constructor (length: number, breadth: number) {
        this.length = length;
        this.breadth = breadth
    }

    printArea(): void {
        console.log(this.length * this.breadth);
    }

    printPerimeter(): void {
        console.log(2 * (this.length + this.breadth));
    }
}


class Square2 extends Rectangle2 {
    constructor (length: number) {
        super(length, length);
    }
}

/**------------------------------------------------------------ */

interface Shape2 {
    printArea(): void;
    printPerimeter(): void;
}

class Rectangle3 implements Shape2 {
    
    length: number;
    breadth: number;

    constructor (length: number, breadth: number) {
        this.length = length;
        this.breadth = breadth
    }

    printArea(): void {
        console.log(this.length * this.breadth);
    }

    printPerimeter(): void {
        console.log(2 * (this.length + this.breadth));
    }
}


class Square3 implements Shape2 {
    
    sideLength: number;

    constructor (sideLength: number) {
        this.sideLength = sideLength;
    }

    printArea(): void {
        console.log(this.sideLength * this.sideLength);
    }

    printPerimeter(): void {
        console.log(4 * this.sideLength);
    }

}