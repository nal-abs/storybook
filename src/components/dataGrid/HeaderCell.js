import { Fragment, React, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Box, TableCell } from '@mui/material';
import ReactTableReorder from '../../helper/ReactTableReorder';

const ReSizer = ({ data: { column }}) => {
	const { isResizing, getResizerProps } = column;

	return (
		<div
			{ ...getResizerProps() }
			className={ `resizer ${ isResizing ? 'isResizing' : '' }` }
		/>
	);
};

const Cell = (context) => {
	const { data: { column }, dropRef } = context;

	return <Fragment>
		<Box { ...{
			className: 'drag',
			ref: dropRef,
		} }
		>
			{column.render('Header')}
		</Box>
		<ReSizer { ...{ ...context } }/>
	</Fragment>;
};

const HeaderCell = (context) => {
	const { data: { column }} = context;
	const dropRef = useRef();
	const position = 'column';

	const [, drop] = useDrop(ReactTableReorder
		.getDrop({ ...context, ref: dropRef, position: position }));
	const [{ isDragging }, drag] = useDrag(ReactTableReorder
		.getDrag({ ...context, position }));
	const opacity = isDragging ? 0 : 1;

	drag(drop(dropRef));

	const { style } = column.getHeaderProps();

	return (
		<TableCell { ...{ style: { ...style, opacity }} }>
			<Cell { ...{ ...context, dropRef } }/>
		</TableCell>
	);
};

export default HeaderCell;
