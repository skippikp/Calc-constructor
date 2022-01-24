import {
	ADD_DIGIT,
	CHOOSE_OPERATION,
	SET_DROPPABLE_SECTION,
	EVALUATE,
	SET_DRAGGABLE_BLOCK,
	SET_BLOCKS,
	DRAG_START,
	DRAG_END,
	CHANGE_CONSTRUCTOR_MODE,
} from './constants';

const addDigit = (digit) => {
	return { type: ADD_DIGIT, payload: digit };
};

const chooseOperation = (operation) => {
	return { type: CHOOSE_OPERATION, payload: operation };
};

const setBlocks = (blocks) => {
	return { type: SET_BLOCKS, payload: blocks };
};

const setDraggableBlock = (block) => {
	return { type: SET_DRAGGABLE_BLOCK, payload: block };
};

const evaluate = () => {
	return { type: EVALUATE };
};

const dragEnd = () => {
	return { type: DRAG_END };
};

const dragging = (draggableBlock) => {
	return { type: DRAG_START, payload: draggableBlock };
};

const setDroppableSection = (section) => {
	return { type: SET_DROPPABLE_SECTION, payload: section };
};

const changeConstructorMode = () => {
	return { type: CHANGE_CONSTRUCTOR_MODE };
};
export {
	addDigit,
	chooseOperation,
	evaluate,
	dragging,
	setDroppableSection,
	changeConstructorMode,
	dragEnd,
	setBlocks,
	setDraggableBlock,
};
