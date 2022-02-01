import React, { useState } from 'react';
import {
	dragEnd,
	dragStart,
	setDroppableSection,
	setBlocks,
} from '../../actions/actions';
import { connect } from 'react-redux';
import './CalcPalette.css';
import DragContainer from '../../HOC/DragContainer';
import Display from '../Display/Display';
import DigitalBlock from '../Digital-block/DigitalBlock';
import Operations from '../Operations/Operations';
import EqualBlock from '../Equal-block/EqualBlock';

const CalcPalette = ({
	droppableSection,
	dragStart,
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
			dragStart(item);
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

	const renderElement = (element) => {
		switch (element) {
			case 'Display':
				return <Display />;
			case 'DigitalBlock':
				return <DigitalBlock />;
			case 'Operations':
				return <Operations />;
			case 'EqualBlock':
				return <EqualBlock />;
			default:
				return <div>Error</div>;
		}
	};

	return (
		<div className="calc-palete d-flex flex-column">
			{blocks.map((block) => (
				<DragContainer
					key={block.id}
					draggable={constructorModeEnable}
					onDragStart={(e) => dragStartHandler(e, block)}
					onDragEnd={dragEndHandler}
				>
					{renderElement(block.component)}
				</DragContainer>
			))}
		</div>
	);
};

const mapStateToProps = ({
	drag: { droppableSection, blocks, constructorModeEnable },
}) => {
	return {
		droppableSection,
		constructorModeEnable,
		blocks,
	};
};

const mapDispatchToProps = {
	dragStart,
	setDroppableSection,
	dragEnd,
	setBlocks,
};

export default connect(mapStateToProps, mapDispatchToProps)(CalcPalette);
