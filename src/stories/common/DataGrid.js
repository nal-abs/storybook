import * as React from 'react';
import { DataGrid as MuxDataGrid } from '@mui/x-data-grid';
import getColumns from './DataGrid/getColumns';

const DataGrid = ({ value, columns, style }) =>
	<div style={ style }>
		<MuxDataGrid
			rows={ value }
			columns={ getColumns(columns) }
			hideFooterPagination={ true }
		/>
	</div>;

export default DataGrid;
