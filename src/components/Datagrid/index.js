import * as React from 'react';
import { DataGrid as MuxDataGrid } from '@mui/x-data-grid';
import getColumns from './getColumns';

const DataGrid = (context) => {
	const { data: { collection }, state, style } = context;

	return <div style={ style }>
		<MuxDataGrid
			rows={ state[collection] }
			columns={ getColumns(context) }
			hideFooterPagination={ true }
		/>
	</div>;
};

export default DataGrid;
