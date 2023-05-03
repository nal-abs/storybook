import React from 'react';

const ListBody = (context) => {
	const { value, Component, props: { prepareRow }} = context;

	return value.map((data, key) => prepareRow(data)
			|| <Component key={ key } { ...{ ...context, data } }/>);
};

export default ListBody;
