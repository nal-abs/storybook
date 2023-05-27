import { React, useState } from 'react';
import Radio from '@mui/material/Radio';
import { RadioGroup as MuiRadioGroup } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { map } from '@laufire/utils/collection';
import { nothing } from '@laufire/utils/fn';

const RadioGroup = (context) => {
	const { options, value, onChange = nothing, schema } = context;
	const [state, setState] = useState(value);
	const { disabled } = schema;

	return <FormControl disabled={ disabled }>
		<MuiRadioGroup
			value={ state }
			onChange={ (evt) => {
				setState(evt.target.value);
				onChange(evt);
			} }
		>
			{ map(options, (option, index) =>
				<FormControlLabel
					key={ index }
					value={ option }
					control={ <Radio/> }
					label={ option }
				/>) }</MuiRadioGroup></FormControl>;
};

export default RadioGroup;
