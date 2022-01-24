import calcReducer from './CalcReducer';
import dragReducer from './DragReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	calc: calcReducer,
	drag: dragReducer,
});

export default rootReducer;
