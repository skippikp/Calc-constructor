import React from 'react';
import { connect } from 'react-redux';

const Button = ({ constructorModeEnable, className, value, onClick }) => {
	const clickHandler = () => {
		if (constructorModeEnable) {
			return;
		}
		onClick();
	};
	return (
		<div onClick={clickHandler} className={className}>
			{value}
		</div>
	);
};

const mapStateToProps = ({ drag: { constructorModeEnable } }) => {
	return {
		constructorModeEnable,
	};
};

export default connect(mapStateToProps)(Button);
