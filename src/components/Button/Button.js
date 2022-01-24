import React from 'react';

const Button = ({ className, value, onClick }) => {
	return (
		<div onClick={onClick} className={className}>
			{value}
		</div>
	);
};

export default Button;
