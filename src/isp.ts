/**
 * voilating the interface segregation principle.
 * Ostrich class have to implement the fly method unnecessarly
 */

interface Bird {
    fly(): void;
    walk(): void;
}

class Sparrow implements Bird {
    fly(): void {
        console.log("flying");
    }

    walk(): void {
        console.log("walking");
    }
}

class Ostrich implements Bird {
    fly(): void {
        console.log("cann't fly😥");
    }

    walk(): void {
        console.log("walking");
    }
}


/**----------------------------------------- */

/**
 * Following interface segregation principle
 */

interface Walkable {
    walk(): void;
}

interface Flyable {
    fly(): void;
}

class Sparrow1 implements Walkable, Flyable {
    walk(): void {
        console.log("walking");
    }

    fly(): void {
        console.log("flying");
    }
}

class Ostrich1 implements Walkable {
    walk(): void {
        console.log("walking");
    }
}