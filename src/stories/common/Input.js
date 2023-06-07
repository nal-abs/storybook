import { InputAdornment as MuiAdornment, TextField } from '@mui/material';
import { React } from 'react';
import * as Icons from '@mui/icons-material';
import { reduce } from '@laufire/utils/collection';
import { nothing } from '@laufire/utils/fn';
import { peek } from '@laufire/utils/debug';

const InputAdornment = (cur, key) => {
	const { text, icon } = cur;
	const Icon = Icons[icon];

	return (
		<MuiAdornment position={ key }>
			{ Icon ? <Icon/> : text }
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
	const {
		adornments = {}, multiline = false, onChange = nothing,
		value: initialValue, ...args
	} = context;
	const MultilineProps = multiline && { ...multiline, multiline: true };

	peek('Hi', initialValue);
	return (
		<TextField
			{ ...{
				InputProps: inputProps(adornments),
				...MultilineProps, ...args,
				value: initialValue,
				onChange: (evt) => onChange(evt),
			} }
		/>);
};

export default Input;

Input.propTypes = {};
