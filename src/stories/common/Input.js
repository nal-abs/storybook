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
	const { adornments = {}, multiline, onChange = (x) => x, value,
		...args } = context;
	const [number, setNumber] = React.useState(value);
	const MultilineProps = multiline && { ...multiline, multiline: true };
	const state = number === '' ? number : Number(number).toString();

	return (
		<TextField
			{ ...{
				InputProps: inputProps(adornments),
				...MultilineProps,
				...args,
				value: state,
				onChange: (evt) => {
					onChange(evt);
					setNumber(evt.target.value);
				},
			} }
		/>);
};

export default Input;

Input.propTypes = {

};
