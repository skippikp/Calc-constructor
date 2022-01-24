const eventHoc = (Component) => {
	return ({ onDragStart, onDragEnd, draggable, onDblClick, ...props }) => {
		return (
			<div
				onDragStart={onDragStart}
				onDragEnd={onDragEnd}
				draggable={draggable}
				onDoubleClick={onDblClick}
			>
				<Component {...props} />
			</div>
		);
	};
};

export default eventHoc;
