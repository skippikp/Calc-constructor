import DigitalBlock from '../components/Digital-block/DigitalBlock';
import Display from '../components/Display/Display';
import EqualBlock from '../components/Equal-block/EqualBlock';
import Operations from '../components/Operations/Operations';
import {
	SET_DROPPABLE_SECTION,
	SET_DRAGGABLE_BLOCK,
	SET_BLOCKS,
	DRAG_START,
	DRAG_END,
} from '../actions/constants';

const initialState = {
	isDraging: false,
	draggableBlock: null,
	droppableSection: null,
	blocks: [
		{ id: 1, name: 'display', component: Display },
		{ id: 2, name: 'operations', component: Operations },
		{ id: 3, name: 'digitalBlock', component: DigitalBlock },
		{ id: 4, name: 'equalBlock', component: EqualBlock },
	],
};

const dragReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_BLOCKS:
			return {
				...state,
				blocks: payload,
			};
		case DRAG_START:
			if (state.draggableBlock === payload) {
				return { ...state.drag };
			}
			return {
				...state,
				isDraging: true,
				draggableBlock: payload,
			};

		case DRAG_END:
			return {
				...state,
				isDraging: false,
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

export default dragReducer;
