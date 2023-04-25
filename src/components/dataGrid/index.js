/* eslint-disable react/jsx-key */
import { React, useMemo } from 'react';
import { useTable, useBlockLayout, useResizeColumns } from 'react-table';
import {
	Table as MuiTable,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Box,
} from '@mui/material';

const ReSizer = ({ column }) => {
	const { isResizing, getResizerProps } = column;

	return (
		<div
			{ ...getResizerProps() }
			className={ `resizer ${ isResizing ? 'isResizing' : '' }` }
		/>
	);
};

const Header = ({ headerGroups }) =>
	headerGroups.map((headerGroup) =>
		<TableRow { ...headerGroup.getHeaderGroupProps() }>
			{headerGroup.headers.map((column) =>
				<TableCell key={ column.getHeaderProps().key }>
					<Box { ...column.getHeaderProps() }>
						{column.render('Header')}
					</Box>
					<ReSizer column={ column }/>
				</TableCell>)}
		</TableRow>);

const Body = ({ rows, prepareRow }) =>
	rows.map((row) => {
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

const Table = (props) => {
	const { getTableProps, getTableBodyProps } = props;

	return <MuiTable { ...getTableProps() } stickyHeader={ true }>
		<TableHead>
			<Header { ...props }/>
		</TableHead>
		<TableBody { ...getTableBodyProps() }>
			<Body { ...props }/>
		</TableBody>
	</MuiTable>;
};

const DataGrid = (context) => {
	const { config } = context;
	const data = useMemo(() => config.rows, []);

	const columns = useMemo(() => config.columns, []);

	const defaultColumn = useMemo(() => ({
		minWidth: 30, width: 150, maxWidth: 400,
	}),
	[]);

	const { resetResizing, ...props } = useTable(
		{ columns, data, defaultColumn },
		useBlockLayout,
		useResizeColumns
	);

	return (
		<TableContainer component={ Paper }>
			<Table { ...props }/>
			<button onClick={ resetResizing }>Reset Resizing</button>
		</TableContainer>
	);
};

export default DataGrid;
