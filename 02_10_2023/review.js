// const obj1 = {
//   name: "old entity",
//   age: 9001,
// };

// const obj2 = {
//   name: "really old entity",
//   age: 100009001,
// };

// function constructors
function Dealership() {
  this.vehicles = [];

  this.addVehicleByData = function (model, cost, year, make) {
    const newVehicle = new Vehicle(model, cost, year, make);
    this.vehicles.push(newVehicle);
  };

  // dependency injection
  this.addVehicle = function (vehicle) {
    this.vehicles.push(vehicle);
  };
}

function Vehicle(model, cost, year, make) {
  this.model = model;
  this.cost = cost;
  this.year = year;
  this.make = make;
}

// classes
class DealershipClass {
  constructor() {
    this.vehicles = [];
  }

  addVehicle(vehicle) {
    this.vehicles.push(vehicle);
  }
}

class VehicleClass {
  constructor(model, cost, year, make) {
    this.model = model;
    this.cost = cost;
    this.year = year;
    this.make = make;
  }
}

// invoke our classes/ function constructors

const chevy = new VehicleClass("chevy", 35000, 1976, "corvette");

const dealership = new DealershipClass();

dealership.addVehicle(chevy);

console.log(dealership);
