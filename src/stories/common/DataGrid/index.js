import * as React from 'react';
import { useState } from 'react';
import { DataGrid as MuxDataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { nothing } from '@laufire/utils/fn';
import getAction from './helper/getAction';
import getColumns from './helper/getColumns';

const DataGrid = ({ value, columns, style, onChange = nothing }) => {
	const [rows, setRows] = useState(value);
	const props = { columns, rows, setRows, onChange };

	return (
		<Box
			sx={ { ...style } }
		>
			<MuxDataGrid
				rows={ rows }
				columns={ [
					...getColumns({ ...props }),
					...getAction({ ...props }),
				] }
				hideFooterPagination={ true }
				rowHeight={ 120 }
			/>
		</Box>);
};

export default DataGrid;
