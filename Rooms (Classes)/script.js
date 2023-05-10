class Room {
  constructor(name, length, width) {
    this.name = name;
    this.length = length;
    this.width = width;
    this.available = true;
    this.capacity = 15;
  }
  getArea() {
    return this.length * this.width;
  }
  getPerimeter() {
    return 2 * (this.length + this.width);
  }
  isAvailable() {
    return this.available
  }
  theCapacity() {
    return this.capacity
  }
}

let room1 = new Room('sun room', 30, 20, true, 15)
console.log(room1)
console.log(room1.getArea())
console.log(room1.getPerimeter())
console.log(room1.isAvailable())
console.log(room1.theCapacity())

let room2 = new Room('Green room', 15, 20, 18)
room2.available = false;
room2.capacity = 18;
console.log(room2)
console.log(room2.getArea())
console.log(room2.getPerimeter())
console.log(room2.isAvailable())
console.log(room2.theCapacity())




