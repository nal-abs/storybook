import { Box, TableCell, TableRow } from '@mui/material';
import { React, Fragment, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import ReactTableReorder from '../../../helper/ReactTableReorder';

const Cell = ({ data }) =>
	<Fragment>
		{data.cells.map((cell, index) =>
			<TableCell key={ `${ cell.row.original.id }${ index }` } component={ Box }>
				<Box { ...cell.getCellProps() }>{cell.render('Cell')}</Box>
			</TableCell>)}
	</Fragment>;

// eslint-disable-next-line max-lines-per-function
const BodyRow = (context) => {
	const dropRef = useRef();
	const dragRef = useRef();
	const position = 'row';
	const { data: { style }, data } = context;

	const [, drop] = useDrop(ReactTableReorder
		.getDrop({ ...context, ref: dropRef, position: position }));

	const [{ isDragging }, drag] = useDrag(ReactTableReorder
		.getDrag({ ...context, position }));

	const opacity = isDragging ? 0 : 1;

	drag(drop(dropRef));
	const { key: dummy, ...props } = data.getRowProps();

	return (
		<TableRow
			ref={ dropRef }
			component={ Box }
			{ ...{ ...{ style: { opacity, ...style, ...props.style }}} }
		>
			<Cell { ...{ ...context, dragRef } }/>
		</TableRow>
	);
};

export default BodyRow;
