import {
	SET_DROPPABLE_SECTION,
	SET_DRAGGABLE_BLOCK,
	SET_BLOCKS,
	DRAG_START,
	DRAG_END,
	CHANGE_CONSTRUCTOR_MODE,
} from '../actions/constants';

const initialState = {
	draggableBlock: null,
	droppableSection: null,
	blocks: [
		{ id: 1, name: 'display', component: 'Display' },
		{ id: 2, name: 'operations', component: 'Operations' },
		{ id: 3, name: 'digitalBlock', component: 'DigitalBlock' },
		{ id: 4, name: 'equalBlock', component: 'EqualBlock' },
	],
	constructorModeEnable: true,
};

const constructorReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case CHANGE_CONSTRUCTOR_MODE:
			return {
				...state,
				constructorModeEnable: !state.constructorModeEnable,
			};
		case SET_BLOCKS:
			return {
				...state,
				blocks: payload,
			};
		case DRAG_START:
			if (state.draggableBlock === payload) {
				return { ...state };
			}
			return {
				...state,
				draggableBlock: payload,
			};

		case DRAG_END:
			return {
				...state,
				draggableBlock: null,
			};

		case SET_DROPPABLE_SECTION:
			return {
				...state,
				droppableSection: payload,
			};

		case SET_DRAGGABLE_BLOCK:
			return {
				...state,
				draggableBlock: payload,
			};

		default:
			return state;
	}
};

export default constructorReducer;
