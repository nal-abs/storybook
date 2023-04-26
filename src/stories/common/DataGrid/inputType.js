import { React } from 'react';
import * as Icons from '@mui/icons-material';
import { GridActionsCellItem } from '@mui/x-data-grid';
import TimeField from './TimeField';
import MultiSelect from './MultiSelect';
import { pick } from '@laufire/utils/collection';
import DateField from './DateField';
import buildEvent from '../buildEvent';
import PhoneNoInput from './PhoneNo';
import IntegerInput from './Integer';
import DecimalInput from './Number';
import DateTimeInput from './DateTime';

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
		editable: false,
		renderCell: (params) => <DateField { ...{ params, props } }/>,
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
		minWidth: 200,
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
	}),
	dateTime: ({ data }) => ({
		minWidth: 200,
		editable: false,
		renderCell: (params) =>
			<DateTimeInput { ...{ ...params, schema: data } }/>,
	}),
	time: () => ({
		minWidth: 150,
		editable: false,
		renderCell: (params) => <TimeField { ...params }/>,
	}),
	integer: ({ data }) => ({
		editable: false,
		renderCell: (params) =>
			<IntegerInput { ...{ ...params, schema: data } }/>,
	}),
	number: ({ data }) => ({
		width: 150,
		editable: false,
		renderCell: (params) =>
			<DecimalInput { ...{ ...params,	schema: data } }/>,
	}),
	phoneNo: ({ data }) => ({
		type: 'string',
		width: 150,
		editable: false,
		renderCell: (params) =>
			<PhoneNoInput { ...{ ...params, schema: data } }/>,
	}),
};

export default inputType;
