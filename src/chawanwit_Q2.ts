//2.1
interface Car{
    id: number,
    brand: string,
    color?: number,
    distanceUsed: number,
    showCar(): string,
    use(distance: number) : number
}
//2.2
class EuropeCar implements Car{
    id: number;
    brand: string;
    color?: number;
    distanceUsed: number;

    constructor(id: number, brand: string, color?: number, distanceUsed: number;){
        this.id = id;
        this.brand = brand;
        this.color = color;
        this.distanceUsed = distanceUsed;
    }

    showCar(){
        return `${this.brand}`;
    }
    use(distance: number){
            return distance+distance+distance;
    }

}
const occupation = new EuropeCar(102,"Chanvanvit",19);
console.log(occupation.id)
console.log(occupation.brand)
console.log(occupation.color)
console.log(occupation.distance)
console.log(occupation.showCar())
console.log(occupation.use())