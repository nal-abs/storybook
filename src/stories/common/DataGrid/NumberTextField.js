/* eslint-disable max-lines-per-function */
import { useState, React } from 'react';
import Input from '../Input';
import transformSchema from './IntegerTextField/transformSchema';
import numberValidator from './numberValidator';

const NumberTextField = (context) => {
	const { props: { data: schema }, value, row, field } = context;
	const [numberValue, setValue]	= useState(value);
	const [className, setClassName] = useState(numberValidator(schema, value));

	return (
		<Input { ...{
			className: className ? '' : 'error',
			variant: 'standard',
			type: 'number',
			value: numberValue,
			onChange: ({ target: { value: number }}) => {
				const convertedNumber = Number(number);

				setClassName(numberValidator(schema, convertedNumber));
				return setValue((prev) => {
					const newValue = numberValidator(schema, convertedNumber)
						? convertedNumber
						: prev;

					row[field] = newValue;
					return newValue;
				});
			},
			InputProps: { disableUnderline: true },
			inputProps: transformSchema(schema),
		} }
		/>
	);
};

export default NumberTextField;
