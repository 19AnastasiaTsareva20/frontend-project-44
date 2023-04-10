import { randomNumber } from '../utils.js';
import gameProcess, { roundGame } from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const roundsProcess = () => {
  const question = randomNumber(1, 50);
  const possibleAnswer = isPrime(question) === true ? 'yes' : 'no';
  return [question, possibleAnswer];
};

const startPrimeGame = () => {
  const rounds = [];
  for (let i = 0; i < roundGame; i += 1) {
    rounds[i] = roundsProcess();
  }
  return gameProcess(rounds, description);
};

export default startPrimeGame;
