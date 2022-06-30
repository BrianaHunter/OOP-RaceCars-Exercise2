import {
  findRacersWithEmptyFuel,
  findAverageSpeed,
} from "../src/racer-functions";
import { GasCar } from "../src/gas-car";
import { SolarCar } from "../src/solar-car";
import { Racer } from "./racer";

// const solarCar1: SolarCar = new SolarCar("Briana");
// const solarCar2: SolarCar = new SolarCar("Nicole");
// const gasCar1: GasCar = new GasCar("Kim", 0);
// const gasCar2: GasCar = new GasCar("Nicole", 0);

// let newArr = [solarCar1, solarCar2, gasCar1, gasCar2];

// console.log(findRacersWithEmptyFuel(newArr));

const avgSpeed1: Racer = new GasCar("Kaylan", 22);
const avgSpeed2: Racer = new GasCar("Mya", 7);
const avgSpeedArray = [avgSpeed1, avgSpeed2];
console.log(findAverageSpeed(avgSpeedArray));
