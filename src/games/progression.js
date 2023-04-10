import { randomNumber } from '../utils.js';
import gameProcess, { roundGame } from '../index.js';

const description = 'What number is missing in the progression?';
const progrLength = 10;

const roundsProcess = () => {
  const step = randomNumber(1, 50);
  const progrResult = [];
  const firstNum = randomNumber(1, 100);
  for (let i = 0; i <= progrLength; i += 1) {
    progrResult.push(firstNum + i * step);
  }
  const missingNumber = randomNumber(0, progrLength - 1);
  const possibleAnswer = String(progrResult[missingNumber]);
  progrResult[missingNumber] = '..';
  const question = progrResult.join(' ');
  return [question, possibleAnswer];
};

const startProgrGame = () => {
  const rounds = [];
  for (let i = 0; i < roundGame; i += 1) {
    rounds[i] = roundsProcess();
  }
  return gameProcess(rounds, description);
};

export default startProgrGame;
