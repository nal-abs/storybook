import { React } from 'react';
import * as Icons from '@mui/icons-material';
import { GridActionsCellItem } from '@mui/x-data-grid';
import TimeField from './TimeField';
import MultiSelect from './MultiSelect';
import { pick } from '@laufire/utils/collection';
import DateField from './DateField';
import IntegerTextField from './Number/IntegerTextField';
import DecimalTextField from './Number/DecimalTextField';
import buildEvent from '../buildEvent';

const dataFormatter = {
	enum: (props) => ({
		enum: props.data.items.enum,
	}),
	oneOf: (props) => {
		const array = props.data.items.oneOf;

		return {
			enum: pick(array, 'title'),
		};
	},
};

const Actions = {
	editRow: (rows, value) =>
		rows.map((row) => (row.id !== value.id
			? row
			: { ...row, ...value.row })),

	deleteRow: (rows, value) => rows.filter((row) => row.id !== value.id),
};

const inputType = {
	date: (props) => ({
		minWidth: 200,
		renderCell: (params) => <DateField { ...{ params, props } }/>,
		editable: false,
	}),
	actions: (props) => ({
		type: props.type,
		editable: false,
		getActions: (params) => {
			const { columns: { actions = {}}, rows, setRows, onChange } = props;

			return actions.map(({ icon, action }) => {
				const Icon = Icons[icon];

				return (
					<GridActionsCellItem
						key={ params.id }
						icon={ <Icon/> }
						label={ icon }
						onClick={ () => {
							setRows(Actions[action](rows, params));
							onChange(buildEvent(params.row));
						} }
					/>);
			});
		},
	}),
	array: (props) => ({
		renderCell: (params) => {
			const	{ data: { items }} = props;

			const multiSelectType = items.enum ? 'enum' : 'oneOf';

			return (
				<MultiSelect { ...{
					params: params,
					data: dataFormatter[multiSelectType](props),
				} }
				/>);
		},
		minWidth: 200,
	}),
	dateTime: ({ field }) => ({
		type: 'dateTime',
		minWidth: 100,
		valueGetter: ({ value }) => value && new Date(value),
		valueSetter: (params) => ({
			...params.row,
			[field]: params.value.toJSON(),
		}),
	}),
	time: () => ({
		minWidth: 150,
		renderCell: (params) => <TimeField { ...params }/>,
		editable: false,
	}),
	integer: ({ data }) => ({
		type: 'number',
		renderCell: (params) =>
			<IntegerTextField
				{ ...{ ...params, schema: data } }
			/>,
		editable: false,
	}),
	number: ({ data }) => ({
		type: 'number',
		width: 150,
		renderCell: (params) =>
			<DecimalTextField { ...{ ...params,
				schema: data } }
			/>,
		editable: false,
	}),
};

export default inputType;
