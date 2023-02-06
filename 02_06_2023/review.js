// objects
const lowPowerComputer = {
  os: "windows 11",
  ram: "8 GB",
  ssd: "250 GB",
  info: function () {
    return this.os + ", " + this.ram + ", " + this.ssd;
  },
};

const computer = {
  os: "windows 11",
  ram: "16 GB",
  ssd: "1 TB",
  info: function () {
    return this.os + ", " + this.ram + ", " + this.ssd;
  },
};

const crazySpecComputer = {
  os: "windows 11",
  ram: "128 GB",
  ssd: "50 TB",
  info: function () {
    return this.os + ", " + this.ram + ", " + this.ssd;
  },
};

// computer.ssd = "500 GB";

// console.log(crazySpecComputer.info());

// factory functions
function computerFactory(os, ram, ssd) {
  // const newObject = {
  //   os: os,
  //   ram: ram,
  //   ssd: ssd,
  // };

  // function info() {
  //   return this.os + ", " + this.ram + ", " + this.ssd;
  // }

  // this is the same as above
  return {
    os: os,
    ram: ram,
    ssd: ssd,
    info: function () {
      return this.os + ", " + this.ram + ", " + this.ssd;
    },
  };
}

const lowPowerComputerFromFactory = computerFactory(
  "windows 11",
  "8 GB",
  "250 GB"
);
const computerFromFactory = computerFactory("windows 11", "16 GB", "1 TB");
const crazySpecComputerFromFactory = computerFactory(
  "windows 11",
  "128 GB",
  "50 TB GB"
);

// console.log(lowPowerComputerFromFactory.info());
// console.log(computerFromFactory.info());
// console.log(crazySpecComputerFromFactory.info());

// constructor functions
function Computer(os, ram, ssd) {
  this.os = os;
  this.ram = ram;
  this.ssd = ssd;
  this.info = function () {
    return this.os + ", " + this.ram + ", " + this.ssd;
  };
}

const computerFromContructor = new Computer("windows 11", "16 GB", "1 TB");
const macbookFromContructor = new Computer("OS X", "16 GB", "2 TB");

// console.log(computerFromContructor.info());
// console.log(macbookFromContructor.info());

// classes
class ComputerClass {
  constructor(os, ram, ssd) {
    this.os = os;
    this.ram = ram;
    this.ssd = ssd;
  }

  info() {
    return this.os + ", " + this.ram + ", " + this.ssd;
  }
}

const linuxComputerFromClass = new ComputerClass("linux", "16 GB", "1 TB");
const macComputerFromClass = new ComputerClass("OS X", "32 GB", "5 TB");

console.log(linuxComputerFromClass.info());
console.log(macComputerFromClass.info());
