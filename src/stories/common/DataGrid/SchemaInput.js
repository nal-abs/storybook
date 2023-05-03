import FieldInput from './FieldInput';
import React from 'react';
import MultiSelect from './MultiSelect';
import SingleSelect from './SingleSelect';

const formatMap = {
	singleSelect: SingleSelect,
	multiSelect: MultiSelect,
	input: FieldInput,
};
const select = (value) => (value ? 'singleSelect' : 'input');

const getComponent = (schema) => {
	const { uniqueItems, enum: Enum } = schema;

	const component = uniqueItems ? 'multiSelect' : select(Enum);

	return formatMap[component];
};

const SchemaInput = (props) => {
	const { schema } = props;
	const Component = getComponent(schema);

	return <Component { ...props }/>;
};

export default SchemaInput;
