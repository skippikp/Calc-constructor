import Button from '../Button/Button';
import React from 'react';
import { connect } from 'react-redux';
import { evaluate } from '../../actions/actions';
import './EqualBlock.css';

const EqualBlock = ({ evaluate }) => {
	return (
		<div className="equal">
			<Button
				value={'='}
				className={'equal_btn btn btn-primary'}
				onClick={evaluate}
			/>
		</div>
	);
};

const mapDispatchToProps = {
	evaluate,
};

export default connect(null, mapDispatchToProps)(EqualBlock);
