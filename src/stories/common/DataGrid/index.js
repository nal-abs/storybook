import * as React from 'react';
import { useState } from 'react';
import { DataGrid as MuxDataGrid } from '@mui/x-data-grid';
import getColumns from './getColumns';
import { Box } from '@mui/material';

const DataGrid = ({ value, columns, style, onChange = (x) => x }) => {
	const [rows, setRows] = useState(value);

	return (
		<Box
			sx={ { ...style } }
		>
			<MuxDataGrid
				rows={ rows }
				columns={ getColumns({ ...{
					columns, rows, setRows, onChange,
				}}) }
				hideFooterPagination={ true }
				rowHeight={ 80 }
			/>
		</Box>);
};

export default DataGrid;
