import * as React from 'react';
import { useState } from 'react';
import { DataGrid as MuxDataGrid } from '@mui/x-data-grid';
import getColumns from './DataGrid/getColumns';

const DataGrid = ({ value, columns, style }) => {
	const [rows, setRows] = useState(value);

	return <div style={ style }>
		<MuxDataGrid
			rows={ rows }
			columns={ getColumns({ ...{
				columns, rows, setRows,
			}}) }
			hideFooterPagination={ true }
		/>
	</div>;
};

export default DataGrid;
