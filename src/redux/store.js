import { createStore } from 'redux';
import reducer from './redurcers/CalculatorReducer';

const store = createStore(reducer);

export default store;
