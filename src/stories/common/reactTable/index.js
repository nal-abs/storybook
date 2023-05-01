import { React, useState } from 'react';
import {
	useTable, useBlockLayout,
	useResizeColumns, useSortBy,
} from 'react-table';
import {
	Table as MuiTable,
	TableBody,
	TableContainer,
	TableHead,
	TableRow,
	TableCell,
} from '@mui/material';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { DndProvider } from 'react-dnd';
import { HTML5Backend as HTMLBackend } from 'react-dnd-html5-backend';
import HeaderCell from './HeaderCell';
import BodyRow from './BodyRow';

const Header = (context) => {
	const { props: { headerGroups }} = context;

	return headerGroups.map((headerGroup, key) =>
		<TableRow
			key={ key }
			{ ...headerGroup.getHeaderGroupProps() }
		>
			<TableCell><DragHandleIcon style={ { opacity: 0 } }/></TableCell>
			{headerGroup.headers.map((column, index) =>
				<HeaderCell
					key={ index }
					{ ...{ ...context, data: { column, index }} }
				/>)}
		</TableRow>);
};

const Body = (context) => {
	const { props: { rows, prepareRow }} = context;

	return rows.map((row, index) => prepareRow(row)
	|| <BodyRow key={ index } { ...{ ...context, data: { row, index }} }/>);
};

const Table = (context) => {
	const { props: { getTableProps, getTableBodyProps }} = context;

	return <MuiTable { ...getTableProps() } stickyHeader={ true }>
		<TableHead>
			<Header { ...context }/>
		</TableHead>
		<TableBody { ...getTableBodyProps() }>
			<Body { ...context }/>
		</TableBody>
	</MuiTable>;
};

const ReactTable = (args) => {
	const { config: { columns, rows }} = args;
	const [state, setState] = useState({ columns, rows });
	const { resetResizing, ...props } = useTable(
		{ columns: state.columns, data: state.rows },
		useBlockLayout,
		useResizeColumns,
		useSortBy
	);

	const context = { ...args, state, setState };

	return (
		<DndProvider backend={ HTMLBackend }>
			<TableContainer>
				<Table { ...{ ...context, props } }/>
				<button onClick={ resetResizing }>Reset Resizing</button>
			</TableContainer>
		</DndProvider>
	);
};

export default ReactTable;
