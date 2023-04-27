/* eslint-disable id-match */
/* eslint-disable react/jsx-key */
import { React, useMemo, useState } from 'react';
import { useTable, useBlockLayout, useResizeColumns } from 'react-table';
import {
	Table as MuiTable,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Box,
	Paper,
} from '@mui/material';
import HeaderCell from './HeaderCell';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Header = (context) => {
	const { props: { headerGroups }} = context;

	return headerGroups.map((headerGroup) =>
		<TableRow { ...headerGroup.getHeaderGroupProps() }>
			{headerGroup.headers.map((column, index) =>
				<HeaderCell
					key={ index }
					{ ...{ ...context, data: { column, index }} }
				/>)}
		</TableRow>);
};

const Body = (context) => {
	const { props: { rows, prepareRow }} = context;

	return rows.map((row) => {
		prepareRow(row);
		return (
			<TableRow { ...row.getRowProps() }>
				{row.cells.map((cell) =>
					<TableCell key={ cell.getCellProps().key }>
						<Box { ...cell.getCellProps() }>
							{cell.render('Cell')}
						</Box>
					</TableCell>)}
			</TableRow>
		);
	});
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

const DataGrid = (args) => {
	const { config } = args;
	const rows = useMemo(() => config.rows, []);
	const columns = useMemo(() => config.columns, []);
	const [state, setState] = useState({ columns, rows });

	const { resetResizing, ...props } = useTable(
		{ columns: state.columns, data: state.rows },
		useBlockLayout,
		useResizeColumns
	);

	const context = { ...args, state, setState };

	return (
		<DndProvider backend={ HTML5Backend }>
			<TableContainer component={ Paper }>
				<Table { ...{ ...context, props } }/>
				<button onClick={ resetResizing }>Reset Resizing</button>
			</TableContainer>
		</DndProvider>
	);
};

export default DataGrid;
