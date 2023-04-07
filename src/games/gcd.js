import { randomNumber } from '../utils.js';
import gameProcess, { roundGame } from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcdGame = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  }
  return gcdGame(num2 % num1, num1);
};

const roundsProcess = () => {
  const firstNum = randomNumber(1, 50);
  const secondNum = randomNumber(1, 50);
  const correctAnswer = String(gcdGame(firstNum, secondNum));
  const question = `${firstNum} ${secondNum}`;
  return [question, correctAnswer];
};

const startGcdGame = () => {
  const rounds = [];
  for (let i = 0; i < roundGame; i += 1) {
    rounds[i] = roundsProcess();
  }
  return gameProcess(rounds, description);
};

export default startGcdGame;
