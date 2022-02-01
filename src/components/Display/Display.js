import React from 'react';
import { connect } from 'react-redux';
import './Display.css';

const Display = ({ currentOperand }) => {
	const bigNumber = `${currentOperand
		?.slice(0, 21)
		.toString()}\n${currentOperand?.slice(21).toString()}`;
	return (
		<div className="display">
			<div className="display_text-field">
				{currentOperand?.length > 11 ? (
					<h6>{bigNumber}</h6>
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

export default connect(mapStateToProps)(Display);
