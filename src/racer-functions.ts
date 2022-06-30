import { Racer } from "./racer";

export function findRacersWithEmptyFuel(racers: Racer[]) {
  const newRacer: Racer[] = [];
  racers.forEach((racer: Racer) => {
    if (racer.isFuelEmpty() === true) {
      newRacer.push(racer);
    }
  });
  return newRacer;
}

export function findAverageSpeed(racers: Racer[]): number {
  if (!racers.length) return 0;
  let avgSpeed = 0;
  racers.forEach((racer: Racer) => (avgSpeed += racer.speed));
  return avgSpeed / racers.length;
}

export function getFasterRacer(racerA: Racer, racerB: Racer) {
  if (racerA.speed > racerB.speed) {
    return racerA;
  }
  if (racerB.speed > racerA.speed) {
    return racerB;
  }
  return null;
}
