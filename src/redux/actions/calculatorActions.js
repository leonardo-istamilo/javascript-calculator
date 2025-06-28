
const CHOOSE_OPERATOR = 'CHOOSE_OPERATOR';
const INPUT_DOT = 'INPUT_DOT';
const CLEAR = 'CLEAR';
const INPUT_DIGIT = 'INPUT_DIGIT';
const EVALUATE = 'EVALUATE';


const clearAll = () => ({
  type: CLEAR
});

const inputDigit = digit => ({
  type: INPUT_DIGIT,
  digit
});

const evaluate = () => ({
  type: EVALUATE
});

const inputDot = () => ({
  type: INPUT_DOT
});

const chooseOperator = operator => ({
  type: CHOOSE_OPERATOR,
  operator
});


export {
  INPUT_DIGIT,
  INPUT_DOT,
  CLEAR,
  CHOOSE_OPERATOR,
  EVALUATE,
  inputDigit,
  inputDot,
  clearAll,
  chooseOperator,
  evaluate
};
