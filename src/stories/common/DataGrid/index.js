import * as React from 'react';
import { DataGrid as MuxDataGrid } from '@mui/x-data-grid';
import getColumns from './getColumn';

const DataGrid = ({ values, columns, style }) =>
	<div style={ style }>
		<MuxDataGrid
			rows={ values }
			columns={ getColumns(columns) }
			hideFooterPagination={ true }
		/>
	</div>;

export default DataGrid;
