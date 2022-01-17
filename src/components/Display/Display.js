import React from 'react';
import { connect } from 'react-redux';
import './Display.css';

const Display = ({
	onDragStart,
	onDragEnd,
	currentOperand,
	draggable = true,
	onDblClick,
}) => {
	return (
		<div
			onDragStart={onDragStart}
			onDragEnd={onDragEnd}
			onDoubleClick={onDblClick}
			draggable={draggable}
			className="display"
		>
			<div className="display_text-field">
				<h3>{currentOperand || '0'}</h3>
			</div>
		</div>
	);
};

const mapStateToProps = ({ calc: { currentOperand } }) => {
	return {
		currentOperand: currentOperand,
	};
};

export default connect(mapStateToProps)(Display);
