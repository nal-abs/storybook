import * as React from 'react';
import { DataGrid as MuxDataGrid } from '@mui/x-data-grid';
import MuiSelect from '../stories/Select';

const args = {
	options: ['Ten', 'Twenty', 'Thirty'],
	// label: 'Number',
	variant: 'standard',
	fullWidth: true,
	// helperText: 'welcome to selectBox',
	autoWidth: true,
	size: 'small',
	required: false,
	disabled: false,
	error: false,
	multiple: false,
};

const DropDown = <MuiSelect { ...args }/>;

const rows = [
	{ id: 1, col1: 'Hello', col2: 'World', age: 25 },
	{ id: 2, col1: 'DataGridPro', col2: 'is Awesome', age: 27 },
	{ id: 3, col1: 'MUI', col2: 'is Amazing', age: 30 },
];

const columns = [
	{ field: 'col1', headerName: 'Column 1', width: 150, type: 'string' },
	{ field: 'Select', headerName: 'Select', width: 250,
		renderCell: () => DropDown },
	{ field: 'col2', headerName: 'Column 2', width: 150 },
	{ field: 'age', headerName: 'Age', width: 100, type: 'number',
		editable: true },
];

const DataGrid = () =>
	<div style={ { height: 300, width: '100%' } }>
		<MuxDataGrid rows={ rows } columns={ columns }/>
	</div>
	;

export default DataGrid;
