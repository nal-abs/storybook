import { Box, TableCell, TableRow } from '@mui/material';
import { React, Fragment, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import update from 'immutability-helper';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import ReactTableColumnMover from '../../helper/ReactTableColumnMover';

const itemType = 'row';

const moveRow = ({ data: { dragIndex, hoverIndex }, setState, state }) => {
	const dragRecord = state.rows[dragIndex];

	setState({ ...state,
		rows: update(state.rows, {
			$splice: [
				[dragIndex, 1],
				[hoverIndex, 0, dragRecord],
			],
		}) });
};

const getHover = (context) => {
	const { data: { item, ref, index }} = context;
	const dragIndex = item.index;
	const hoverIndex = index;

	const shouldMoveColumn = ref.current
	&& ReactTableColumnMover.isMoveColumn(context);

	shouldMoveColumn
	&& moveRow({ ...context, data: { dragIndex, hoverIndex }});

	item.index = hoverIndex;
};

const getDrop = (context) => {
	const { data } = context;

	return {
		accept: itemType,
		hover: (item, monitor) => getHover({ ...context,
			data: { ...data, item, monitor }}),
	};
};

const getDrag = (index) => ({
	type: itemType,
	item: () => ({ id: index + 1, index: index }),
	collect: (monitor) => ({
		isDragging: monitor.isDragging(),
	}),
});

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
	const { data: { row, index }, data } = context;
	const dropRef = useRef();
	const dragRef = useRef();

	const [, drop] = useDrop(getDrop({ ...context,
		data: { ...data, ref: dropRef }}));

	const [{ isDragging }, drag, preview] = useDrag(getDrag(index));

	const opacity = isDragging ? 0 : 1;

	preview(drop(dropRef));
	drag(dragRef);

	return (
		<TableRow { ...{
			ref: dropRef,
			style: { opacity, ...row.getRowProps().style },
		} }
		>
			<Cell { ...{ ...context, dragRef } }/>
		</TableRow>
	);
};

export default BodyRow;
