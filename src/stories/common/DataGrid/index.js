import * as React from 'react';
import { useState } from 'react';
import { DataGrid as MuxDataGrid } from '@mui/x-data-grid';
import getColumns from './getColumns';
import { Box } from '@mui/material';
import getAction from './getAction';

const DataGrid = ({ value, columns, style, onChange = (x) => x }) => {
	const [rows, setRows] = useState(value);
	const props = {
		columns, rows, setRows, onChange,
	};

	return (
		<Box
			sx={ { ...style } }
		>
			<MuxDataGrid
				rows={ rows }
				columns={ [...getColumns({ ...props }),
					...getAction({ ...props })] }
				hideFooterPagination={ true }
				rowHeight={ 80 }
			/>
		</Box>);
};

export default DataGrid;
