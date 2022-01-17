import React from 'react';
import { connect } from 'react-redux';
import { evaluate } from '../../actions/actions';
import './EqualBlock.css';

const EqualBlock = ({
	onDragStart,
	onDragEnd,
	evaluate,
	draggable = true,
	onDblClick,
}) => {
	return (
		<div
			onDragStart={onDragStart}
			onDragEnd={onDragEnd}
			draggable={draggable}
			onDoubleClick={onDblClick}
			className="equal"
		>
			<div onClick={evaluate} className="equal_btn btn btn-primary">
				=
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		evaluate: () => dispatch(evaluate()),
	};
};

export default connect(() => {
	return {};
}, mapDispatchToProps)(EqualBlock);
