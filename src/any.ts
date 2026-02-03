// union type
type Company = 'toyota' | 'honda' | 'mahindra';

// Vehicle class
class Vehicle {
  company: Company;
  type: string;
  price: number;

  constructor(company: Company, type: string, price: number) {
    this.company = company;
    this.type = type;
    this.price = price;
  }

  getDetails(): string {
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
