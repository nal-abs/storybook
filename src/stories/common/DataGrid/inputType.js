import { React } from 'react';
import MultiSelect from './MultiSelect';
import { pick } from '@laufire/utils/collection';
import FieldInput from './FieldInput';

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

const inputType = {
	date: ({ data }) => ({
		minWidth: 200,
		editable: false,
		renderCell: (params) =>
			<FieldInput { ...{ ...params, schema: data } }/>,
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
			<FieldInput { ...{ ...params, schema: data } }/>,
	}),
	time: ({ data }) => ({
		minWidth: 150,
		editable: false,
		renderCell: (params) =>
			<FieldInput { ...{ ...params, schema: data } }/>,
	}),
	integer: ({ data }) => ({
		editable: false,
		renderCell: (params) =>
			<FieldInput { ...{ ...params, schema: data } }/>,
	}),
	number: ({ data }) => ({
		width: 150,
		editable: false,
		renderCell: (params) =>
			<FieldInput { ...{ ...params,	schema: data } }/>,
	}),
	phoneNo: ({ data }) => ({
		type: 'string',
		width: 150,
		editable: false,
		renderCell: (params) =>
			<FieldInput { ...{ ...params, schema: data } }/>,
	}),
};

export default inputType;
