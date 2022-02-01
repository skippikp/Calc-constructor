import React from 'react';

const DragContainer = ({
	children,
	onDragStart,
	onDragEnd,
	draggable,
	onDblClick,
	...props
}) => {
	return (
		<div
			onDragStart={onDragStart}
			onDragEnd={onDragEnd}
			draggable={draggable}
			onDoubleClick={onDblClick}
		>
			{React.Children.map(children, (child) => {
				return React.cloneElement(child, { props });
			})}
		</div>
	);
};

export default DragContainer;
