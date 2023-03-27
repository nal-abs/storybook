import * as React from 'react';
import { useState } from 'react';
import { DataGrid as MuxDataGrid } from '@mui/x-data-grid';
import getColumns from './DataGrid/getColumns';
import { identity } from '@laufire/utils/fn';

const DataGrid = ({ value, columns, style, onChange = identity }) => {
	const [rows, setRows] = useState(value);

	return <div style={ style }>
		<MuxDataGrid
			rows={ rows }
			columns={ getColumns({ ...{
				columns, rows, setRows, onChange,
			}}) }
			hideFooterPagination={ true }
		/>
	</div>;
};

export default DataGrid;
