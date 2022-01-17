import React, { useState } from 'react';
import {
	dragEnd,
	dragging,
	setDroppableSection,
	setBlocks,
} from '../../actions/actions';
import { connect } from 'react-redux';
import './CalcPalette.css';

const CalcPalette = ({
	draggableBlock,
	droppableSection,
	dragging,
	constructorModeEnable,
	setDroppableSection,
	dragEnd,
	blocks,
	setBlocks,
}) => {
	const [index, setIndex] = useState(null);

	const dragOverHandler = (e) => {
		e.preventDefault();
	};

	const dragStartHandler = (e, item) => {
		const elemIdx = blocks.indexOf(item);
		if (constructorModeEnable) {
			setIndex(elemIdx);
			dragging(item);
			setTimeout(() => (e.target.style.visibility = 'hidden'), 50);
		}
		return;
	};

	const dragEndHandler = (e) => {
		e.preventDefault();
		if (droppableSection) {
			const updatedState = [
				...blocks.slice(0, index),
				...blocks.slice(index + 1),
			];
			setBlocks(updatedState);
			setDroppableSection(null);
		}
		dragEnd();
		e.target.style.visibility = 'visible';
	};

	const dropHandler = (e) => {
		e.preventDefault();
		if (droppableSection) {
			return;
		}

		const updatedState = [
			...blocks.slice(0, index - 1),
			draggableBlock,
			...blocks.slice(index),
		];
		setBlocks(updatedState);
	};

	return (
		<div className="calc-palete d-flex flex-column">
			{blocks.map((block) => (
				<block.component
					key={block.id}
					draggable={constructorModeEnable}
					onDragOver={(e) => dragOverHandler(e)}
					onDragStart={(e) => dragStartHandler(e, block)}
					onDragEnd={(e) => dragEndHandler(e)}
					onDrop={(e) => dropHandler(e)}
				/>
			))}
		</div>
	);
};

const mapStateToProps = ({
	drag: { draggableBlock, droppableSection, constructorModeEnable, blocks },
}) => {
	return {
		draggableBlock: draggableBlock,
		droppableSection: droppableSection,
		constructorModeEnable: constructorModeEnable,
		blocks: blocks,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		dragging: (element) => dispatch(dragging(element)),
		setDroppableSection: (section) => dispatch(setDroppableSection(section)),
		dragEnd: () => dispatch(dragEnd()),
		setBlocks: (blocks) => dispatch(setBlocks(blocks)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CalcPalette);
