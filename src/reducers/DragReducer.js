import DigitalBlock from '../components/Digital-block/DigitalBlock';
import Display from '../components/Display/Display';
import EqualBlock from '../components/Equal-block/EqualBlock';
import Operations from '../components/Operations/Operations';

const initialState = {
	isDraging: false,
	draggableBlock: null,
	droppableSection: null,
	constructorModeEnable: true,
	blocks: [
		{ id: 1, name: 'display', component: Display },
		{ id: 2, name: 'operations', component: Operations },
		{ id: 3, name: 'digitalBlock', component: DigitalBlock },
		{ id: 4, name: 'equalBlock', component: EqualBlock },
	],
};

const DragReducer = (state, { type, payload }) => {
	if (state === undefined) {
		return initialState;
	}
	switch (type) {
		case 'SET_BLOCKS':
			return {
				...state.drag,
				blocks: payload,
			};
		case 'DRAG_START':
			if (state.drag.draggableBlock === payload) {
				return { ...state.drag };
			}
			return {
				...state.drag,
				isDraging: true,
				draggableBlock: payload,
			};

		case 'DRAG_END':
			return {
				...state.drag,
				isDraging: false,
				draggableBlock: null,
			};

		case 'SET_DROPPABLE_SECTION':
			return {
				...state.drag,
				droppableSection: payload,
			};

		case 'SET_DRAGGABLE_BLOCK':
			return {
				...state.drag,
				draggableBlock: payload,
			};

		case 'CHANGE_CONSTRUCTOR_MODE':
			return {
				...state.drag,
				constructorModeEnable: !state.drag.constructorModeEnable,
			};
		default:
			return state.drag;
	}
};

export default DragReducer;
