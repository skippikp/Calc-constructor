import React from 'react';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import { addDigit } from '../../actions/actions';
import './DigitalBlock.css';

const NUMBERS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];

const DigitalBlock = ({ addDigit }) => {
	return (
		<div className="digital-block">
			{NUMBERS.map((item) => (
				<Button
					key={item}
					value={item}
					className={`btn btn-outline-secondary numbers_${item}`}
					onClick={() => addDigit(item)}
				/>
			))}
		</div>
	);
};

const mapDispatchToProps = {
	addDigit,
};

export default connect(null, mapDispatchToProps)(DigitalBlock);
