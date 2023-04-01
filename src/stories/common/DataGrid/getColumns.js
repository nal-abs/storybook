/* eslint-disable no-mixed-spaces-and-tabs */
import { useState, React } from 'react';
import { map, pick } from '@laufire/utils/collection';
import { values } from '@laufire/utils/lib';
import * as Icons from '@mui/icons-material';
import Select from '../Select';
import { GridActionsCellItem } from '@mui/x-data-grid';
import TimePicker from '../TimePicker';

const dataFormat = {
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

const MultiSelect = ({ params, data }) => {
	const [value, setValue] = useState(params.field);

	return (
		<Select { ...{
			options: data.enum,
			multiple: true,
			sx: { width: '150px' },
			disableUnderline: true,
			variant: 'standard',
			onChange: ({ target: { value: newValue }}) => {
				params.row[params.field] = newValue;
				return setValue(newValue);
			},
			value: value,
		} }
		/>);
};
const TimeField = (params) => {
	const { row, field, value: initialValue } = params;
	const [value, setValue] = useState(initialValue);

	return <TimePicker { ...{
		params: params,
		onChange: ({ target: { value: newValue }}) => {
			row[field] = newValue;
			return setValue(newValue);
		},
		value: value,
	} }
	       />;
};

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
							onChange(transformEvent(params));
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
					data: dataFormat[multiSelectType](props),
				} }
				/>);
		},
		minWidth: 200,
	}),
	dateTime: () => ({
		type: 'dateTime',
		minWidth: 100,
		valueGetter: ({ value }) => value && new Date(value),
	}),
	time: () => ({
		minWidth: 150,
		renderCell: (params) => <TimeField { ...params }/>,
		editable: false,
	}),
};

const singleSelect = (ele) => ele.enum && {
	type: 'singleSelect',
	valueOptions: ele.enum,
};

const Format = {
	'date-time': 'dateTime',
	'date': 'date',
	'time': 'time',
};

const getColumns = (props) => {
	const { columns: { data, editable, width }} = props;

	return values(map(data.properties, (ele, key) => {
		const { format, type } = ele;
		const parameter = Format[format] || type;

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
