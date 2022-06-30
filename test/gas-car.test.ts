import { GasCar } from "../src/gas-car";

describe("GasCar", () => {
  test("The team and fuel properties are set from the constructor parameters.", () => {
    const team = "Gas Car";
    const fuel = 20;
    const gasCar = new GasCar(team, fuel);
    expect(gasCar.team).toBe(team);
    expect(gasCar.fuel).toBe(fuel);
  });

  test("fuel defaults to 10, when the second constructor parameter is omitted.", () => {
    const team = "Gas Car";
    const gasCar = new GasCar(team);
    expect(gasCar.fuel).toBe(10);
  });

  test("The speed property starts at 0.", () => {
    const team = "Gas Car";
    const gasCar = new GasCar(team);
    expect(gasCar.speed).toBe(0);
  });

  test("Calling accelerate once brings speed to 2.", () => {
    const team = "Gas Car";
    const gasCar = new GasCar(team);
    gasCar.accelerate();
    expect(gasCar.speed).toBe(2);
  });

  test("Calling accelerate twice brings speed to 4.", () => {
    const team = "Gas Car";
    const gasCar = new GasCar(team);
    gasCar.accelerate();
    gasCar.accelerate();
    expect(gasCar.speed).toBe(4);
  });

  test("Calling accelerate once reduces fuel by 1.", () => {
    const team = "Gas Car";
    const gasCar = new GasCar(team);
    gasCar.accelerate();
    expect(gasCar.fuel).toBe(9);
  });

  test("Calling accelerate twice reduces fuel by 2.", () => {
    const team = "Gas Car";
    const gasCar = new GasCar(team);
    gasCar.accelerate();
    gasCar.accelerate();
    expect(gasCar.fuel).toBe(8);
  });

  test("isFuelEmpty returns true when fuel is 0.", () => {
    const team = "Gas Car";
    const gasCar = new GasCar(team, 0);
    const isFuelEmpty = gasCar.isFuelEmpty();
    expect(isFuelEmpty).toBe(true);
  });

  test("isFuelEmpty returns false when fuel is greater than 0.", () => {
    const team = "Gas Car";
    const gasCar = new GasCar(team);
    const isFuelEmpty = gasCar.isFuelEmpty();
    expect(isFuelEmpty).toBe(false);
  });
});
