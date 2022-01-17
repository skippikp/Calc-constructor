import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
	changeConstructorMode,
	setDroppableSection,
	dragEnd,
	setBlocks,
	setDraggableBlock,
} from '../../actions/actions';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import './Desk.css';

const Desk = ({
	draggableBlock,
	setDroppableSection,
	changeConstructorMode,
	constructorModeEnable,
	blocks,
	setBlocks,
	setDraggableBlock,
}) => {
	const [desk, setDesk] = useState([
		{ id: 1, section: 'top', items: [] },
		{ id: 2, section: 'middle', items: [] },
		{ id: 3, section: 'bottom', items: [] },
	]);

	const [filled, setFill] = useState(false);

	const dragOverHandler = (e, section) => {
		e.preventDefault();
		if (e.target.className === 'desk-item') {
			e.target.style.backgroundColor = 'rgba(0, 159, 249, 0.4)';
		}
		setDroppableSection(section);
	};

	const removeBlockFromDesk = (block, section) => {
		if (!constructorModeEnable) {
			return;
		}
		setDraggableBlock(block);
		const blockIndex = section.items.indexOf(block);
		const sectionIndex = desk.findIndex(
			(item) => item.section === section.section
		);

		const updatedPalette = [
			...blocks.slice(0, block.id - 1),
			block,
			...blocks.slice(block.id - 1),
		];

		setDesk((state) => {
			const newDesk = state.slice();
			newDesk[sectionIndex].items.splice(blockIndex, 1);
			return newDesk;
		});
		setBlocks(updatedPalette);
		setDraggableBlock(null);
	};

	const dropHandler = (e, section) => {
		e.preventDefault();
		if (e.target.className === 'desk-item') {
			e.target.style.backgroundColor = '';
		}

		if (!draggableBlock) {
			return;
		}

		const itemId = desk.indexOf(section);

		setDesk((state) => {
			let newState = state.slice();
			newState[itemId].items.push(draggableBlock);
			return newState;
		});
		dragEnd();
		setFill(true);
	};

	const dragLeaveHandler = (e) => {
		e.preventDefault();
		if (e.target.className === 'desk-item') {
			e.target.style.backgroundColor = '';
		}
		setDroppableSection(null);
	};

	return (
		<div className="right-side">
			<FormGroup>
				<FormControlLabel
					control={<Switch onChange={changeConstructorMode} defaultChecked />}
					label={`Constructor Mode ${constructorModeEnable ? 'On' : 'Off'}`}
				/>
			</FormGroup>
			<div className="desk">
				{desk.map((section) => (
					<div
						key={section.id}
						onDragOver={(e) => dragOverHandler(e, section)}
						onDragLeave={(e) => dragLeaveHandler(e)}
						onDrop={(e) => dropHandler(e, section)}
						className="desk-item"
					>
						{section.items.map((item) => (
							<item.component
								key={item.id}
								onDblClick={() => removeBlockFromDesk(item, section)}
								draggable={false}
							/>
						))}
					</div>
				))}
				{filled ? null : (
					<h5 className="deskInfo">
						Перетащите сюда
						<p>любой элемент из левой панели</p>
					</h5>
				)}
			</div>
		</div>
	);
};

const mapStateToProps = ({
	drag: { draggableBlock, constructorModeEnable, blocks },
}) => {
	return {
		draggableBlock: draggableBlock,
		constructorModeEnable: constructorModeEnable,
		blocks: blocks,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setDroppableSection: (section) => dispatch(setDroppableSection(section)),
		changeConstructorMode: () => dispatch(changeConstructorMode()),
		dragEnd: () => dispatch(dragEnd()),
		setBlocks: (blocks) => dispatch(setBlocks(blocks)),
		setDraggableBlock: (block) => dispatch(setDraggableBlock(block)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Desk);
