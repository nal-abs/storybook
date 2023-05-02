import { nothing } from '@laufire/utils/fn';
import FieldInput from './FieldInput';
import React from 'react';
import MultiSelect from './MultiSelect';

const formatMap = {
	select: nothing,
	multiSelect: MultiSelect,
	input: FieldInput,
};

const getComponent = (schema) => {
	const { uniqueItems } = schema;
	const component = uniqueItems ? 'multiSelect' : 'input';

	return formatMap[component];
};

const SchemaInput = (props) => {
	const { schema } = props;
	const Component = getComponent(schema);

	return <Component { ...props }/>;
};

export default SchemaInput;
