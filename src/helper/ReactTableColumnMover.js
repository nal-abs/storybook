const ReactTableColumnMover = {
	shouldSwap: (isAboveMiddle, isDragBeforeHover) =>
		(isAboveMiddle && isDragBeforeHover)
		|| (!isAboveMiddle && !isDragBeforeHover),

	isMoveColumn: (context) => {
		const { data: { item, monitor, ref, index }} = context;
		const hoverBoundingRect = ref.current.getBoundingClientRect();
		const hoverClientY = monitor.getClientOffset().y
		- hoverBoundingRect.top;
		const half = 2;
		const hoverMiddleY = (hoverBoundingRect.bottom
			- hoverBoundingRect.top) / half;
		const isDragEqualHover = item.index === index;
		const isDragBeforeHover = item.index < index;
		const isAboveMiddle = hoverClientY < hoverMiddleY;

		return !isDragEqualHover
		&& ReactTableColumnMover.shouldSwap(isAboveMiddle, isDragBeforeHover);
	},
};

export default ReactTableColumnMover;
