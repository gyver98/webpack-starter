const OPERATORS = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

const isDigit = character => character >= '0' && character <= '9';

const isOperator = character => !!OPERATORS[character];

const isEqualSign = character => character === '=';

const addDigit = (calculatorState, character) => {
  if (calculatorState.initial) {
    return Object.assign({}, calculatorState, {
      display: character,
      initial: false,
      previousOperand: parseInt(calculatorState.display, 10),
    });
  }
  return Object.assign({}, calculatorState, {
    display: calculatorState.display + character,
  });
};

const compute = calculatorState =>
  !calculatorState.operator
    ? Object.assign({}, calculatorState, { initial: true })
    : {
        display: String(
          OPERATORS[calculatorState.operator](
            calculatorState.previousOperand,
            parseInt(calculatorState.display, 10),
          ),
        ),
        initial: true,
      };

const addOperator = (calculatorState, character) => {
  if (!calculatorState.operator || calculatorState.initial) {
    return Object.assign({}, calculatorState, {
      operator: character,
      initial: true,
    });
  }
  return Object.assign({}, compute(calculatorState), { operator: character });
};

module.exports.initialState = { display: '0', initial: true };

module.exports.nextState = (calculatorState, character) => {
  if (isDigit(character)) {
    return addDigit(calculatorState, character);
  } else if (isOperator(character)) {
    return addOperator(calculatorState, character);
  } else if (isEqualSign(character)) {
    return compute(calculatorState);
  }
  return calculatorState;
};
