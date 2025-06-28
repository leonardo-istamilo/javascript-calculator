import {
  EVALUATE,
  CLEAR,
  INPUT_DOT,
  CHOOSE_OPERATOR,
  INPUT_DIGIT
} from '../actions/calculatorActions';


const initialState = {
  displayValue: '0',
  historyValue: '',
  waitingForOperand: false,
  operator: null,
  previousValue: null,
  evaluated: false
}; 

function calculatorStateReducer(state = initialState, action) {
  switch (action.type) {
    case CHOOSE_OPERATOR: {
      const selectedOperator = action.operator;
      let currentHistory = state.historyValue;

      if (state.evaluated) {
        currentHistory = state.displayValue;
      }

      if (selectedOperator === '-' && /[+\-*/]$/.test(currentHistory)) {
        return {
          ...state,
          historyValue: currentHistory + '-',
          displayValue: '-',
          waitingForOperand: false,
          evaluated: false
        };
      }

      currentHistory = currentHistory.replace(/[-+*/]+$/, '') + selectedOperator;

      return {
        ...state,
        historyValue: currentHistory,
        displayValue: selectedOperator,
        waitingForOperand: true,
        evaluated: false
      };
    }

    case INPUT_DOT: {
      if (state.waitingForOperand) {
        return {
          ...state,
          displayValue: '0.',
          historyValue: state.historyValue + '0.',
          waitingForOperand: false
        };
      }
      if (!state.displayValue.includes('.')) {
        return {
          ...state,
          displayValue: state.displayValue + '.',
          historyValue: state.historyValue + '.'
        };
      }
      return state;
    }

    case INPUT_DIGIT: {
      const digitEntered = action.digit;

      if (state.evaluated) {
        return {
          ...initialState,
          displayValue: digitEntered,
          historyValue: digitEntered
        };
      }

      if (state.waitingForOperand) {
        return {
          ...state,
          displayValue: digitEntered,
          historyValue: state.historyValue + digitEntered,
          waitingForOperand: false
        };
      }

      if (state.displayValue === '0' && digitEntered === '0') {
        return state;
      }

      if (state.displayValue === '0') {
        return {
          ...state,
          displayValue: digitEntered,
          historyValue: state.historyValue === '' ? digitEntered : state.historyValue + digitEntered
        };
      }

      return {
        ...state,
        displayValue: state.displayValue + digitEntered,
        historyValue: state.historyValue + digitEntered
      };
    }

    case EVALUATE: {
      if (!state.historyValue || state.waitingForOperand) return state;

      try {
        const rawResult = eval(state.historyValue);
        const finalResult = String(!isFinite(rawResult) ? Infinity : rawResult);

        return {
          ...state,
          displayValue: finalResult,
          historyValue: state.historyValue + '=' + finalResult,
          waitingForOperand: false,
          evaluated: true
        };
      } catch (error) {
        return state;
      }
    }

    case CLEAR:
      return { ...initialState };

    default:
      return state;
  }
}

export default calculatorStateReducer;