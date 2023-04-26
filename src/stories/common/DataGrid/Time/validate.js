import Ajv from 'ajv';
import addFormats from 'ajv-formats';

const validateTime = (value, schema) => {
	const ajv = new Ajv();

	const validate = addFormats(ajv).compile(schema);

	const valid = validate(value);

	return valid;
};

export default validateTime;
