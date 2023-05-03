import { React, useState } from 'react';
import {
	useTable, useBlockLayout,
	useResizeColumns, useSortBy,
} from 'react-table';
import {
	Table as MuiTable,
	TableBody,
	TableContainer,
	TableRow,
	TableCell,
	Paper,
} from '@mui/material';
import { DndProvider } from 'react-dnd';
import { HTML5Backend as HTMLBackend } from 'react-dnd-html5-backend';
import HeaderCell from './HeaderCell';
import BodyRow from './BodyRow';
import dataTable from '../../../helper/dataTable';

const Header = (context) => {
	const { props: { headerGroups }} = context;

	return headerGroups.map((headerGroup, key) =>
		<TableRow
			key={ key }
		>
			<TableCell/>
			{headerGroup.headers.map((column, index) =>
				<HeaderCell
					key={ index }
					{ ...{ ...context, data: { column, index }} }
				/>)}
		</TableRow>);
};

const Body = (context) => {
	const { props: { rows, prepareRow }} = context;

	return rows.map((data, index) => prepareRow(data)
	|| <BodyRow key={ index } { ...{ ...context, data } }/>);
};

const Table = (context) => <MuiTable stickyHeader={ true }>
	<TableBody>
		<Header { ...context }/>
		<Body { ...context }/>
	</TableBody>
</MuiTable>;

const DataGridVTwo = (args) => {
	const { value: rows } = args;
	const columns = dataTable.getColumns(args);

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
			<TableContainer component={ Paper } sx={ { maxHeight: 440 } }>
				<Table { ...{ ...context, props } }/>
				<button onClick={ resetResizing }>Reset Resizing</button>
			</TableContainer>
		</DndProvider>
	);
};

export default DataGridVTwo;
