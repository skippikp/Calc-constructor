import React from 'react';
import { connect } from 'react-redux';
import { addDigit } from '../../actions/actions';

const Button = ({ className, value, clickHandle }) => {
	return (
		<div onClick={clickHandle} className={className}>
			{value}
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		addDigit: (newValue) => {
			dispatch(addDigit(newValue));
		},
	};
};

export default connect(() => {
	return {};
}, mapDispatchToProps)(Button);
