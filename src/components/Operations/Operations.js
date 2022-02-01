import React from 'react';
import Button from '../Button/Button';
import { chooseOperation } from '../../actions/actions';
import { connect } from 'react-redux';
import './Operations.css';

const OPERATIONS = ['/', 'x', '-', '+'];
const Operations = ({ chooseOperation }) => {
	return (
		<div className="operations">
			{OPERATIONS.map((item) => (
				<Button
					key={item}
					className="btn btn-outline-secondary"
					value={item}
					onClick={() => chooseOperation(item)}
				/>
			))}
		</div>
	);
};

const mapDispatchToProps = {
	chooseOperation,
};

export default connect(null, mapDispatchToProps)(Operations);
