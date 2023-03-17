import * as React from 'react';
import { DataGrid as MuxDataGrid } from '@mui/x-data-grid';
import getColumns from './getColumns';

const DataGrid = (context) => {
	const { data: { collection }, state, config } = context;

	return <div style={ { height: 300, width: '100%' } }>
		<MuxDataGrid
			rows={ state[collection] }
			columns={ getColumns(config[collection]) }
		/>
	</div>;
};

export default DataGrid;
