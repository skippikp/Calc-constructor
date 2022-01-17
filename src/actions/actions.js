const addDigit = (payload) => {
	return { type: 'ADD_DIGIT', payload: payload };
};

const chooseOperation = (payload) => {
	return { type: 'CHOOSE_OPERATION', payload: payload };
};

const setBlocks = (payload) => {
	return { type: 'SET_BLOCKS', payload: payload };
};

const setDraggableBlock = (payload) => {
	return { type: 'SET_DRAGGABLE_BLOCK', payload: payload };
};

const evaluate = () => {
	return { type: 'EVALUATE' };
};

const dragEnd = () => {
	return { type: 'DRAG_END' };
};

const dragging = (payload) => {
	return { type: 'DRAG_START', payload: payload };
};

const setDroppableSection = (payload) => {
	return { type: 'SET_DROPPABLE_SECTION', payload: payload };
};

const changeConstructorMode = () => {
	return { type: 'CHANGE_CONSTRUCTOR_MODE' };
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
