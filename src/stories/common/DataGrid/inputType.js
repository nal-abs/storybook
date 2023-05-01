import { React } from 'react';
import MultiSelect from './MultiSelect';
import { pick } from '@laufire/utils/collection';

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
	date: () => ({
		minWidth: 200,
		editable: false,
	}),
	boolean: () => ({
		type: 'boolean',
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
	dateTime: () => ({
		minWidth: 200,
		editable: false,
	}),
	time: () => ({
		minWidth: 150,
		editable: false,
	}),
	integer: () => ({
		editable: false,
	}),
	number: () => ({
		width: 150,
		editable: false,
	}),
	phoneNo: () => ({
		type: 'string',
		width: 150,
		editable: false,
	}),
};

export default inputType;
