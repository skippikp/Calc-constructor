import React from 'react';
import { connect } from 'react-redux';
import eventHoc from '../../HOC/eventHoc';
import './Display.css';

const Display = ({ currentOperand }) => {
	return (
		<div className="display">
			<div className="display_text-field">
				{currentOperand?.length > 11 ? (
					<h6>{`${currentOperand.slice(0, 21).toString()}\n${currentOperand
						.slice(21)
						.toString()}`}</h6>
				) : (
					<h3>{currentOperand || '0'}</h3>
				)}
			</div>
		</div>
	);
};

const mapStateToProps = ({ calc: { currentOperand } }) => {
	return {
		currentOperand: currentOperand,
	};
};

export default connect(mapStateToProps)(eventHoc(Display));
