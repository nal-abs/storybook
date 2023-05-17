import addFormats from 'ajv-formats';
import Ajv from 'ajv';

const validateDate = (value, schema) => {
	const ajv = new Ajv();

	const validate = addFormats(ajv).compile(schema);

	const valid = validate(value);

	return valid;
};

export default validateDate;
