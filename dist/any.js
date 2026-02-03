"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Vehicle class
class Vehicle {
    company;
    type;
    price;
    constructor(company, type, price) {
        this.company = company;
        this.type = type;
        this.price = price;
    }
    getDetails() {
        return `${this.company.toUpperCase()} ${this.type} costs ₹${this.price}`;
    }
}
// objects
const car1 = new Vehicle('toyota', 'SUV', 1500000);
const car2 = new Vehicle('honda', 'Sedan', 1200000);
const car3 = new Vehicle('mahindra', 'EV', 1800000);
// usage
console.log(car1.getDetails());
console.log(car2.getDetails());
console.log(car3.getDetails());
//# sourceMappingURL=any.js.map