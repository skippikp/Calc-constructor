import React from 'react';
import Button from '../Button/Button';
import { chooseOperation } from '../../actions/actions';
import { connect } from 'react-redux';
import eventHoc from '../../HOC/eventHoc';
import './Operations.css';

const Operations = ({ chooseOperation }) => {
	const operations = ['/', 'x', '-', '+'];

	return (
		<div className="operations">
			{operations.map((item) => (
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

export default connect(null, mapDispatchToProps)(eventHoc(Operations));
