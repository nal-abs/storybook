import Ajv from 'ajv';
import addFormats from 'ajv-formats';

const validateDateTime = (value, schema) => {
	const ajv = new Ajv();

	const validate = addFormats(ajv).compile(schema);

	const valid = validate(value);

	return valid;
};

export default validateDateTime;
