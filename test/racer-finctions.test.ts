import {
  findRacersWithEmptyFuel,
  findAverageSpeed,
  getFasterRacer,
} from "../src/racer-functions";
import { GasCar } from "../src/gas-car";
import { SolarCar } from "../src/solar-car";
import { Racer } from "../src/racer";

describe("findRacersWithEmptyFuel", () => {
  test("an array of GasCar where some have no fuel", () => {
    const gasCar1: GasCar = new GasCar("Briana", 0);
    const gasCar2: GasCar = new GasCar("Nicole");
    const gasCar3: GasCar = new GasCar("Hunter", 20);
    const gasCar4: GasCar = new GasCar("Kaylan", 5);
    const gasCar5: GasCar = new GasCar("Zeke", 0);

    let newArr = [gasCar1, gasCar2, gasCar3, gasCar4, gasCar5];
    const findRacers = findRacersWithEmptyFuel(newArr);
    expect(findRacers).toEqual([
      { speed: 0, team: "Briana", fuel: 0 },
      { speed: 0, team: "Zeke", fuel: 0 },
    ]);
  });

  test("an array of GasCar where ALL have no fuel", () => {
    const gasCar1: GasCar = new GasCar("Briana", 0);
    const gasCar2: GasCar = new GasCar("Nicole", 0);

    let newArr = [gasCar1, gasCar2];
    const findRacers = findRacersWithEmptyFuel(newArr);
    expect(findRacers).toEqual([
      { speed: 0, team: "Briana", fuel: 0 },
      { speed: 0, team: "Nicole", fuel: 0 },
    ]);
  });

  test("an array of GasCar where NONE have NO fuel", () => {
    const gasCar1: GasCar = new GasCar("Briana");
    const gasCar2: GasCar = new GasCar("Nicole");

    let newArr = [gasCar1, gasCar2];
    const findRacers = findRacersWithEmptyFuel(newArr);
    expect(findRacers).toEqual([]);
  });

  test("an array of SolarCar w empty array", () => {
    const solarCar1: SolarCar = new SolarCar("Briana");
    const solarCar2: SolarCar = new SolarCar("Nicole");

    let newArr = [solarCar1, solarCar2];
    const findRacers = findRacersWithEmptyFuel(newArr);
    expect(findRacers).toEqual([]);
  });

  test("an array that has a mix of SolarCar and GasCar", () => {
    const solarCar1: SolarCar = new SolarCar("Briana");
    const gasCar1: GasCar = new GasCar("Kim", 0);

    let newArr = [solarCar1, gasCar1];
    const findRacers = findRacersWithEmptyFuel(newArr);
    expect(findRacers).toEqual([{ speed: 0, team: "Kim", fuel: 0 }]);
  });

  test("an array of SolarCar and GasCar w empty array", () => {
    const solarCar1: SolarCar = new SolarCar("Briana");
    const gasCar1: GasCar = new GasCar("Kim");

    let newArr = [solarCar1, gasCar1];
    const findRacers = findRacersWithEmptyFuel(newArr);
    expect(findRacers).toEqual([]);
  });
});

describe("findAverageSpeed", () => {
  test("an array of GasCar with different speeds", () => {
    const avgSpeed1: GasCar = new GasCar("Kaylan");
    const avgSpeed2: GasCar = new GasCar("Mya");

    avgSpeed1.accelerate();
    avgSpeed1.accelerate();
    avgSpeed1.accelerate();
    avgSpeed2.accelerate();

    const avgSpeedArray = [avgSpeed1, avgSpeed2];

    expect(findAverageSpeed(avgSpeedArray)).toBe(4);
  });

  test("an array of SolarCar and GasCar with different speeds", () => {
    const avgSpeed1: SolarCar = new SolarCar("Nicole");
    const avgSpeed2: SolarCar = new SolarCar("Paige");
    const avgSpeed3: GasCar = new GasCar("Mya");

    avgSpeed1.accelerate();
    avgSpeed1.accelerate();
    avgSpeed1.accelerate();
    avgSpeed2.accelerate();
    avgSpeed3.accelerate();
    avgSpeed3.accelerate();

    const avgSpeedArray = [avgSpeed1, avgSpeed2, avgSpeed3];

    expect(findAverageSpeed(avgSpeedArray)).toBeCloseTo(2.67);
  });

  test("an array of cars that all have 0 speed. (Expect 0.)", () => {
    const avgSpeed1: GasCar = new GasCar("Kaylan", 22);
    const avgSpeed2: GasCar = new GasCar("Mya", 7);
    const avgSpeed3: SolarCar = new SolarCar("Nicole");
    const avgSpeed4: SolarCar = new SolarCar("Nicole");

    const avgSpeedArray = [avgSpeed1, avgSpeed2, avgSpeed3, avgSpeed4];

    expect(findAverageSpeed(avgSpeedArray)).toEqual(0);
  });

  test("an empty array. (Expect 0.)", () => {
    const avgSpeedArray: any = [];

    expect(findAverageSpeed(avgSpeedArray)).toEqual(0);
  });
});

describe("getFasterRacer", () => {
  test("racerA faster.", () => {
    const racerA: GasCar = new GasCar("Kaylan");
    const racerB: GasCar = new GasCar("Mya");

    racerA.accelerate();
    racerA.accelerate();
    racerB.accelerate();

    expect(getFasterRacer(racerA, racerB)).toBe(racerA);
  });

  test("racerB faster.", () => {
    const racerA: GasCar = new GasCar("Kaylan");
    const racerB: GasCar = new GasCar("Mya");

    racerA.accelerate();
    racerB.accelerate();
    racerB.accelerate();

    expect(getFasterRacer(racerA, racerB)).toBe(racerB);
  });

  test("both racers the same speed", () => {
    const racerA: GasCar = new GasCar("Kaylan");
    const racerB: GasCar = new GasCar("Mya");

    racerA.accelerate();
    racerB.accelerate();

    expect(getFasterRacer(racerA, racerB)).toBe(null);
  });

  test("Repeat one of the above with a different mix GasCar and SolarCar in the parameters.", () => {
    const racerA: GasCar = new GasCar("Kaylan");
    const racerB: SolarCar = new SolarCar("Mya");

    racerA.accelerate();
    racerB.accelerate();
    racerB.accelerate();

    expect(getFasterRacer(racerA, racerB)).toBe(null);
  });
});
