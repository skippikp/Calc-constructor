import CalcReducer from './CalcReducer';
import DragReducer from './DragReducer';

const reducer = (state, action) => {
	return {
		calc: CalcReducer(state, action),
		drag: DragReducer(state, action),
	};
};

export default reducer;
