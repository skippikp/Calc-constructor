import React from 'react';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import { addDigit } from '../../actions/actions';
import './DigitalBlock.css';

const DigitalBlock = ({
	onDragEnd,
	onDragStart,
	addDigit,
	draggable,
	onDblClick,
}) => {
	const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];

	return (
		<div
			onDragEnd={onDragEnd}
			onDragStart={onDragStart}
			draggable={draggable}
			className="digital-block"
			onDoubleClick={onDblClick}
		>
			{numbers.map((item) => (
				<Button
					key={item}
					value={item}
					className={`btn btn-outline-secondary numbers_${item}`}
					clickHandle={() => addDigit(item)}
				/>
			))}
		</div>
	);
};

const mapStateToProps = (state) => {
	return state;
};

const mapDispatchToProps = (dispatch) => {
	return {
		addDigit: (digit) => {
			dispatch(addDigit(digit));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DigitalBlock);
