import { React, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Box, TableCell } from '@mui/material';
import ReactTableReorder from '../../helper/ReactTableReorder';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ReSizer = ({ data: { column }}) => {
	const { isResizing, getResizerProps } = column;

	return (
		<div
			{ ...getResizerProps() }
			className={ `resizer ${ isResizing ? 'isResizing' : '' }` }
		/>
	);
};

const Sort = ({ data: { column }}) => (column.isSorted
	? column.isSortedDesc
		? <ArrowDownwardIcon/>
		: <ArrowUpwardIcon/>
	: '');

const Cell = (context) => {
	const { data: { column }, dropRef } = context;
	const { style, ...prop } = column
		.getHeaderProps(column.getSortByToggleProps());

	return <Box { ...{ sx: { ...style, display: 'flex' }, ...prop } }>
		<Box { ...{ className: 'drag', ref: dropRef } }>
			{column.render('Header')}
		</Box>
		<Box>
			<Sort { ...{ ...context } }/>
		</Box>
		<ReSizer { ...{ ...context } }/>
	</Box>;
};

const HeaderCell = (context) => {
	const dropRef = useRef();
	const position = 'column';

	const [, drop] = useDrop(ReactTableReorder
		.getDrop({ ...context, ref: dropRef, position: position }));
	const [{ isDragging }, drag] = useDrag(ReactTableReorder
		.getDrag({ ...context, position }));
	const opacity = isDragging ? 0 : 1;

	drag(drop(dropRef));

	return (
		<TableCell { ...{ style: { opacity }} }>
			<Cell { ...{ ...context, dropRef } }/>
		</TableCell>
	);
};

export default HeaderCell;
