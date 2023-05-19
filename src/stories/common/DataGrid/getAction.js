import React from 'react';
import * as Icons from '@mui/icons-material';
import { GridActionsCellItem } from '@mui/x-data-grid';
import buildEvent from '../buildEvent';
import { nothing } from '@laufire/utils/fn';

const Actions = {
	editRow: (rows, value) => rows.map((row) => (row.id !== value.id
		? row
		: { ...row, ...value.row })),

	deleteRow: (rows, value) => rows.filter((row) => row.id !== value.id),
};

const getActionItems = (props, params) => {
	const { columns: { actions = [] }, rows,
		setRows, onChange = nothing } = props;

	return actions.map(({ icon, action }, key) => {
		const Icon = Icons[icon];

		return (
			<GridActionsCellItem
				key={ key }
				icon={ <Icon/> }
				label={ icon }
				onClick={ () => {
					setRows(Actions[action](rows, params));
					onChange(buildEvent(params.row));
				} }
			/>);
	});
};

const getAction = (props) => [{ type: 'actions',
	editable: false,
	field: 'Action',
	getActions: (params) => getActionItems(props, params) }];

export default getAction;
