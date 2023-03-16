import * as React from 'react';
import { DataGrid as MuxDataGrid } from '@mui/x-data-grid';

const DataGrid = (context) => {
	const { rows, columns } = context;

	return <div style={ { height: 300, width: '100%' } }>
		<MuxDataGrid rows={ rows } columns={ columns }/>
	</div>;
}
	;

export default DataGrid;
