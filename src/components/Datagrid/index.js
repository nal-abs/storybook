/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-magic-numbers */
import * as React from 'react';
import { DataGrid as MuxDataGrid } from '@mui/x-data-grid';
import getColumns from './getColumns';

const DataGrid = (context) => {
	const { data: { collection }, state } = context;

	return <div style={ {
		width: '100%',
		height: 300,
	} }
	       >
		<MuxDataGrid
			rows={ state[collection] }
			columns={ getColumns(context) }
			hideFooterPagination={ true }
		/>
	</div>;
};

export default DataGrid;
