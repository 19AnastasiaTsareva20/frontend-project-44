import { randomNumber } from '../utils.js';
import gameProcess, { roundGame } from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const roundsProcess = () => {
  const question = randomNumber(1, 50);
  const possibleAnswer = isEven(question) ? 'yes' : 'no';
  return [question, possibleAnswer];
};

const startEvenGame = () => {
  const rounds = [];
  for (let i = 0; i < roundGame; i += 1) {
    rounds[i] = roundsProcess();
  }
  return gameProcess(rounds, description);
};

export default startEvenGame;
