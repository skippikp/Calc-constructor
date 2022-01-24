import React from 'react';
import { connect } from 'react-redux';
import { evaluate } from '../../actions/actions';
import eventHoc from '../../HOC/eventHoc';
import './EqualBlock.css';

const EqualBlock = ({ evaluate }) => {
	return (
		<div className="equal">
			<div onClick={evaluate} className="equal_btn btn btn-primary">
				=
			</div>
		</div>
	);
};

const mapDispatchToProps = {
	evaluate,
};

export default connect(null, mapDispatchToProps)(eventHoc(EqualBlock));
