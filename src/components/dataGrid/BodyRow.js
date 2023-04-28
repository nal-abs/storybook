import { Box, TableCell, TableRow } from '@mui/material';
import { React, Fragment, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import ReactTableReorder from '../../helper/ReactTableReorder';

const Cell = ({ data: { row }, dragRef: ref }) =>
	<Fragment>
		<TableCell { ...{ ref } }>
			<DragHandleIcon className="rowDrag"/>
		</TableCell>
		{row.cells.map((cell) =>
			<TableCell key={ cell.getCellProps().key }>
				<Box { ...cell.getCellProps() }>{cell.render('Cell')}</Box>
			</TableCell>)}
	</Fragment>;

const BodyRow = (context) => {
	const { data: { row: { getRowProps }}} = context;
	const dropRef = useRef();
	const dragRef = useRef();
	const position = 'row';

	const [, drop] = useDrop(ReactTableReorder
		.getDrop({ ...context, ref: dropRef, position: position }));

	const [{ isDragging }, drag] = useDrag(ReactTableReorder
		.getDrag({ ...context, position }));

	const opacity = isDragging ? 0 : 1;

	drag(drop(dropRef));

	return (
		<TableRow { ...{ ref: dropRef,
			style: { opacity, ...getRowProps().style }} }
		>
			<Cell { ...{ ...context, dragRef } }/>
		</TableRow>
	);
};

export default BodyRow;
