import { Racer } from "./racer";

export class SolarCar implements Racer {
  team: string;
  speed: number = 0;

  constructor(team: string) {
    this.team = team;
  }
  accelerate() {
    this.speed += 1;
  }
  isFuelEmpty() {
    return false;
  }
}
