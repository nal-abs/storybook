import * as React from 'react';
import { useState } from 'react';
import { DataGrid as MuxDataGrid } from '@mui/x-data-grid';
import getColumns from './getColumns';

const DataGrid = ({ value, columns, style, onChange = (x) => x }) => {
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
