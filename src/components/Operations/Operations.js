import React from 'react';
import Button from '../Button/Button';
import { chooseOperation } from '../../actions/actions';
import { connect } from 'react-redux';
import './Operations.css';

const Operations = ({
	onDragStart,
	onDragEnd,
	chooseOperation,
	draggable = true,
	onDblClick,
}) => {
	const operations = ['/', 'x', '-', '+'];

	return (
		<div
			onDragStart={onDragStart}
			onDragEnd={onDragEnd}
			onDoubleClick={onDblClick}
			draggable={draggable}
			className="operations "
		>
			{operations.map((item) => (
				<Button
					key={item}
					className="btn btn-outline-secondary"
					value={item}
					clickHandle={() => chooseOperation(item)}
				/>
			))}
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		chooseOperation: (operation) => {
			dispatch(chooseOperation(operation));
		},
	};
};
export default connect(() => {
	return {};
}, mapDispatchToProps)(Operations);
