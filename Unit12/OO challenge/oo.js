class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return "Beep.";
    }
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }
}

// let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
// myFirstVehicle.honk(); 

class Car extends Vehicle{
    constructor(make, model, year) {
        super(make, model, year);
        // add numWheels to 4
        this.numWheels = 4;    
    }
}

class Motorcycle extends Vehicle{
    constructor(make, model, year) {
        super(make, model, year);
        // add numWheels to 4
        this.numWheels = 2; 
    }
    // honk() {
    //     return super.honk();
    // }
    revEgine() {
        return "VROOM!"
    }
}


// Garage 
class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    add (newVehicles) {
        // console.log(this.capacity)
        // console.log(this.vehicles.length)
        if (this.capacity > this.vehicles.length) {
            if (newVehicles instanceof Car || newVehicles instanceof Motorcycle) {
                this.vehicles.push(newVehicles);
                // console.log(this.vehicles)
                // console.log("added")
                return "Vehicle added!";
            }else {
                // console.log(this.vehicles)
                // console.log("only")
                return "Only vehicles are allowed in here!";
            }
        }else{
            // console.log("full")
            return "Sorry, we're full.";
        }
    }
}




// let garage = new Garage(2);
// garage.add(new Car("Hyundai", "Elantra", 2015)); 
// garage.add("Taco");

// garage.add(new Motorcycle("Honda", "Nighthawk", 2000));

// garage.add(new Motorcycle("Honda", "Nighthawk", 2001));
