import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  inputDigit,
  inputDot,
  clearAll,
  chooseOperator,
  evaluate
} from '../../redux/actions/calculatorActions';

export default function Calculator() {
  const display = useSelector(state => state.displayValue);
  const history = useSelector(state => state.historyValue);
  const dispatch = useDispatch();

  return (
    <div className="calculator">
      {/* Histórico de operações */}
      <div id="history" className="history">{history}</div>
      {/* Valor atual no display */}
      <div id="display" className="display">{display}</div>

      <div className="button-grid">
        {/* Primeiros botões da linha superior (AC, Divisão, Multiplicação) */}
        <button
          id="clear"
          className="button clear"
          onClick={() => dispatch(clearAll())}
        >
          AC
        </button>
        <button
          id="divide"
          className="button operator"
          onClick={() => dispatch(chooseOperator('/'))}
        >
          /
        </button>
        <button
          id="multiply"
          className="button operator"
          onClick={() => dispatch(chooseOperator('*'))}
        >
          ×
        </button>

        {/* Segunda linha de botões (7, 8, 9, Subtração) */}
        <button
          id="seven"
          className="button digit"
          onClick={() => dispatch(inputDigit('7'))}
        >
          7
        </button>
        <button
          id="eight"
          className="button digit"
          onClick={() => dispatch(inputDigit('8'))}
        >
          8
        </button>
        <button
          id="nine"
          className="button digit"
          onClick={() => dispatch(inputDigit('9'))}
        >
          9
        </button>
        <button
          id="subtract"
          className="button operator"
          onClick={() => dispatch(chooseOperator('-'))}
        >
          −
        </button>

        {/* Terceira linha de botões (4, 5, 6, Adição) */}
        <button
          id="four"
          className="button digit"
          onClick={() => dispatch(inputDigit('4'))}
        >
          4
        </button>
        <button
          id="five"
          className="button digit"
          onClick={() => dispatch(inputDigit('5'))}
        >
          5
        </button>
        <button
          id="six"
          className="button digit"
          onClick={() => dispatch(inputDigit('6'))}
        >
          6
        </button>
        <button
          id="add"
          className="button operator"
          onClick={() => dispatch(chooseOperator('+'))}
        >
          +
        </button>

        {/* Quarta linha de botões (1, 2, 3, Igual) */}
        <button
          id="one"
          className="button digit"
          onClick={() => dispatch(inputDigit('1'))}
        >
          1
        </button>
        <button
          id="two"
          className="button digit"
          onClick={() => dispatch(inputDigit('2'))}
        >
          2
        </button>
        <button
          id="three"
          className="button digit"
          onClick={() => dispatch(inputDigit('3'))}
        >
          3
        </button>
        <button
          id="equals"
          className="button equals"
          onClick={() => dispatch(evaluate())}
        >
          =
        </button>

        {/* Última linha de botões (0, Ponto Decimal) */}
        <button
          id="zero"
          className="button digit zero"
          onClick={() => dispatch(inputDigit('0'))}
        >
          0
        </button>
        <button
          id="decimal"
          className="button digit"
          onClick={() => dispatch(inputDot())}
        >
          .
        </button>
      </div>

      {/* Rodapé*/}
      <div
        className="footer"
        style={{
          textAlign: 'center',
          marginTop: '20px',
          fontFamily: 'monospace',
          color: '#ccc'
        }}
      >
        Developed by<br />
        <strong>
          <a
            href="https://www.freecodecamp.org/leonardo_istamilo"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#4db8ff', textDecoration: 'none' }}
          >
            Leonardo Istamilo
          </a>
        </strong>
      </div>
    </div>
  );
}