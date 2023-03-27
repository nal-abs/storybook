/* eslint-disable no-console */
import { map } from '@laufire/utils/collection';
import { values } from '@laufire/utils/lib';
import * as Icons from '@mui/icons-material';
import { GridActionsCellItem } from '@mui/x-data-grid';
import * as React from 'react';

const Actions = {
	editRow: (rows, value) =>
		rows.map((row) => (row.id !== value.id
			? row
			: { ...row, ...value.row })),

	deleteRow: (rows, value) => rows.filter((row) => row.id !== value.id),
};

const transformEvent = (params) => ({
	target: {
		value: params.row,
	},
});

const DataType = {
	date: ({ type }) => ({ type: type,
		minWidth: 100,
		valueGetter: ({ value }) => value && new Date(value) }),
	actions: (props) => ({
		type: props.type,
		getActions: (params) => {
			const { columns: { actions = {}}, rows, setRows,
				onChange } = props;

			return actions.map(({ icon, action }) => {
				const Icon = Icons[icon];

				return (
					<GridActionsCellItem
						key={ params.id }
						icon={ <Icon/> }
						label={ icon }
						onClick={ () => {
							setRows(Actions[action](rows, params));
							onChange(transformEvent(params));
						} }
					/>);
			});
		},
	}),

};

const singleSelect = (ele) => ele.enum && {
	type: 'singleSelect',
	valueOptions: ele.enum,
};

const getColumns = (props) => {
	const { columns: { data, editable, width }} = props;

	return values(map(data.properties, (ele, key) => {
		const { format, type } = ele;
		const parameter = format || type;

		return {
			...ele,
			headerName: ele.title,
			field: key,
			editable: editable,
			width: width,
			...singleSelect(ele),
			...DataType[parameter] && DataType[parameter]({ ...props,
				type: parameter, data: ele }),
		};
	}));
};

export default getColumns;
