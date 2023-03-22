/* eslint-disable max-lines-per-function */
import { map } from '@laufire/utils/collection';
import { values } from '@laufire/utils/lib';
import { Delete, Save } from '@mui/icons-material';
import { GridActionsCellItem } from '@mui/x-data-grid';
import * as React from 'react';

const DataType = {
	date: ({ data }) => ({ type: data,
		valueGetter: ({ value }) => value && new Date(value) }),
	actions: (context) => ({
		type: context.data,
		getActions: (params) => [
			<GridActionsCellItem
				key={ params.id }
				icon={ <Delete/> }
				onClick={ () => context.actions.deleteRow(params.id) }
				label="Delete"
			/>,
			<GridActionsCellItem
				key={ params.id }
				icon={ <Save/> }
				onClick={ () => context.actions.updateRow(params) }
				label="Save"
			/>,
		],
	}),
};

const getColumns = (context) => {
	const { data: { collection }, config } = context;
	const data = config[collection];

	return values(map(data.properties, (ele, key) => {
		const { format, type } = ele;
		const parameter = format || type;
		const singleSelect = ele.enum && {
			type: 'singleSelect',
			valueOptions: ele.enum,
		};

		return {
			...ele,
			headerName: ele.title,
			field: key,
			editable: true,
			width: 120,
			...singleSelect,
			...DataType[parameter] && DataType[parameter]({ ...context,
				data: parameter }),
		};
	}));
};

export default getColumns;
