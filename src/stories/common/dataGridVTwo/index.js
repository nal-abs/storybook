import { React, useEffect, useState } from 'react';
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
	TableHead,
} from '@mui/material';
import { DndProvider } from 'react-dnd';
import { HTML5Backend as HTMLBackend } from 'react-dnd-html5-backend';
import { FixedSizeList } from 'react-window';
import HeaderCell from './HeaderCell';
import BodyRow from './BodyRow';
import dataTable from '../../../helper/dataTable';
import Pagination from './Pagination';

const Header = (context) => {
	const { props: { headerGroups }} = context;

	return <TableHead>
		{ headerGroups.map((headerGroup, key) =>
			<TableRow
				key={ key }
			>
				<TableCell/>
				{headerGroup.headers.map((column, index) =>
					<HeaderCell
						key={ index }
						{ ...{ ...context, data: { column, index }} }
					/>)}
			</TableRow>)}
	</TableHead>;
};

const Body = (context) => {
	const {
		props: { rows, prepareRow },
		data: { index, isScrolling },
	} = context;

	const data = rows[index];

	return prepareRow(data)
	|| (isScrolling
		? 'Scrolling'
		: <BodyRow key={ index } { ...{ ...context, data } }/>);
};

const Table = (context) => {
	const { value } = context;

	return <MuiTable stickyHeader={ true }>
		<Header { ...context }/>
		<TableBody>
			<FixedSizeList
				height={ 400 }
				itemCount={ value.length }
				itemSize={ 35 }
				useIsScrolling={ true }
			>
				{({ index, isScrolling, style }) =>
					<Body { ...{
						...context, data: { index, isScrolling, style },
					} }
					/>}
			</FixedSizeList>
		</TableBody>
	</MuiTable>;
};

const updateRows = (setState, rows) => {
	setState((preState) => ({
		...preState,
		rows: rowsPerPage > 0
			? rows.slice(preState.page * preState.rowsPerPage,
				preState.page * preState.rowsPerPage + preState.rowsPerPage)
			: preState.rows,
	}));
};

const useEnhancedTable = (state) => useTable(
	{ columns: state.columns, data: state.rows },
	useBlockLayout,
	useResizeColumns,
	useSortBy
);

const page = 0;
// eslint-disable-next-line no-magic-numbers
const rowsPerPageOptions = [5, 10, 25, { label: 'All', value: -1 }];
const rowsPerPage = rowsPerPageOptions[0];

const DataGridVTwo = (args) => {
	const { value: rows } = args;
	const columns = dataTable.getColumns(args);
	const [state, setState] = useState({ columns, rows, page, rowsPerPage });

	useEffect(() => {
		updateRows(setState, rows);
	}, [state.page, state.rowsPerPage]);

	const props = useEnhancedTable(state);

	const context = { ...args, state, setState, props, rowsPerPageOptions };

	return (
		<DndProvider backend={ HTMLBackend }>
			<TableContainer component={ Paper } sx={ { maxHeight: 440 } }>
				<Table { ...{ ...context } }/>
				<Pagination { ...context }/>
			</TableContainer>
		</DndProvider>
	);
};

export default DataGridVTwo;
