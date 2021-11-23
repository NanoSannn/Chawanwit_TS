//2.2
class EuropeCar {
    constructor(id, brand, color, distanceUsed) {
        this.id = id;
        this.brand = brand;
        this.color = color;
        this.distanceUsed = distanceUsed;
    }
    showCar() {
        return `${this.brand}`;
    }
    use(distance) {
        return distance + distance + distance;
    }
}
const occupation = new EuropeCar(102, "Chanvanvit", 19);
console.log(occupation.id);
console.log(occupation.brand);
console.log(occupation.color);
console.log(occupation.distance);
console.log(occupation.showCar());
console.log(occupation.use());
