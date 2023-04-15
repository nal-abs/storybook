import { InputAdornment as MuiAdornment, TextField } from '@mui/material';
import * as React from 'react';
import * as Icons from '@mui/icons-material';
import { reduce } from '@laufire/utils/collection';

const InputAdornment = (cur, key) => {
	const { text, icon } = cur;
	const Icon = Icons[icon];

	return (
		<MuiAdornment position={ key }>
			{Icon ? <Icon/> : text}
		</MuiAdornment>
	);
};

const inputProps = (adornments) => reduce(
	adornments, (
		acc, cur, key
	) => ({
		...acc,
		[`${ key }Adornment`]: InputAdornment(cur, key),
	}), {}
);

const Input = (context) => {
	const { adornments = {}, multiline, onChange = (x) => x, type: fieldType,
		value: initialValue, ...args } = context;
	const [state, setState] = React.useState(initialValue);
	const MultilineProps = multiline && { ...multiline, multiline: true };

	return (
		<TextField
			{ ...{
				type: fieldType,
				InputProps: inputProps(adornments),
				...MultilineProps,
				...args,
				value: state,
				onChange: (evt) => {
					onChange(evt);
					setState(evt.target.value);
				},
			} }
		/>);
};

export default Input;

Input.propTypes = {

};
