import calcReducer from './CalcReducer';
import constructorReducer from './ConstructorReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	calc: calcReducer,
	drag: constructorReducer,
});

export default rootReducer;
