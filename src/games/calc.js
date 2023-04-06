import { randomNumber } from '../utils.js';
import gameProcess, { roundGame } from '../gameEntry.js';

const description = 'What is the result of the expression?';

const randomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomOperatorIndex = randomNumber(0, operators.length - 1);
  return operators[randomOperatorIndex];
};

const calculator = (operator, num1, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return Error('Wrong number');
  }
};

const roundsProcess = () => {
  const firstNum = randomNumber(1, 50);
  const secondNum = randomNumber(1, 50);
  const operator = randomOperator();
  const question = `${firstNum} ${operator} ${secondNum}`;
  const correctAnswer = String(calculator(operator, firstNum, secondNum));
  return [question, correctAnswer];
};

const startCalcGame = () => {
  const rounds = [];
  for (let i = 0; i < roundGame; i += 1) {
    rounds[i] = roundsProcess();
  }
  return gameProcess(rounds, description);
};

export default startCalcGame;
