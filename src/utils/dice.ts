export interface DiceRoll {
  dice: [number, number, number];
  bonus: number;
  total: number;
  luck: boolean;
}

export type RandomGenerator = () => number;

const clampDie = (value: number): number => {
  const die = Math.floor(value * 6) + 1;
  return Math.min(6, Math.max(1, die));
};

export const roll3d6Plus2 = (rng: RandomGenerator = Math.random): DiceRoll => {
  const dice: [number, number, number] = [
    clampDie(rng()),
    clampDie(rng()),
    clampDie(rng())
  ];
  const baseTotal = dice[0] + dice[1] + dice[2];
  const luck = dice[0] === dice[1] && dice[1] === dice[2];
  const total = luck ? 20 : baseTotal + 2;

  return {
    dice,
    bonus: luck ? 0 : 2,
    total,
    luck
  };
};

