import { React, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Box, TableCell } from '@mui/material';
import update from 'immutability-helper';
import ReactTableColumnMover from '../../helper/ReactTableColumnMover';

const style = {
	cursor: 'move',
};

const ItemTypes = 'column';

const ReSizer = ({ column }) => {
	const { isResizing, getResizerProps } = column;

	return (
		<div
			{ ...getResizerProps() }
			className={ `resizer ${ isResizing ? 'isResizing' : '' }` }
		/>
	);
};

const moveColumn = ({ setState, data: { dragIndex, hoverIndex }}) => {
	setState((prevCards) => ({
		...prevCards,
		columns: update(prevCards.columns, {
			$splice: [
				[dragIndex, 1],
				[hoverIndex, 0, prevCards.columns[dragIndex]],
			],
		}),
	}));
};

const getHover = (context) => {
	const { data: { item, ref, index }} = context;
	const dragIndex = item.index;
	const hoverIndex = index;

	const shouldMoveColumn = ref.current
	&& ReactTableColumnMover.isMoveColumn(context);

	shouldMoveColumn
	&& moveColumn({ ...context, data: { dragIndex, hoverIndex }});

	item.index = hoverIndex;
};

const getDrag = (index) => ({
	type: ItemTypes,
	item: () => ({ id: index + 1, index: index }),
	collect: (monitor) => ({
		isDragging: monitor.isDragging(),
	}),
});

const getDrop = (context) => {
	const { data: { ref, index }} = context;

	return {
		accept: ItemTypes,
		collect: (monitor) => ({
			handlerId: monitor.getHandlerId(),
		}),
		hover: (item, monitor) => getHover({ ...context,
			data: { item, monitor, ref, index }}),
	};
};

const HeaderCell = (context) => {
	const { data: { index, column }} = context;
	const ref = useRef(null);
	const [{ handlerId }, drop] = useDrop(getDrop({ ...context,
		data: { ref, index }}));
	const [{ isDragging }, drag] = useDrag(getDrag(index));
	const opacity = isDragging ? 0 : 1;

	drag(drop(ref));

	return (
		<TableCell
			style={ { ...style, opacity } }
			data-handler-id={ handlerId }
		>
			<Box ref={ ref } { ...column.getHeaderProps() }>
				{column.render('Header')}
			</Box>
			<ReSizer column={ column }/>
		</TableCell>
	);
};

export default HeaderCell;
