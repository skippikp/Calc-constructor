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

	return (
		<div className="calc-palete d-flex flex-column">
			{blocks.map((block) => (
				<block.component
					key={block.id}
					draggable={constructorModeEnable}
					onDragStart={(e) => dragStartHandler(e, block)}
					onDragEnd={dragEndHandler}
				/>
			))}
		</div>
	);
};

const mapStateToProps = ({
	drag: { draggableBlock, droppableSection, blocks },
	calc: { constructorModeEnable },
}) => {
	return {
		draggableBlock,
		droppableSection,
		constructorModeEnable,
		blocks,
	};
};

const mapDispatchToProps = {
	dragging,
	setDroppableSection,
	dragEnd,
	setBlocks,
};

export default connect(mapStateToProps, mapDispatchToProps)(CalcPalette);
