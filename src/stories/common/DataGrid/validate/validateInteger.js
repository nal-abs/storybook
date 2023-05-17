import Ajv from 'ajv';

const validateInteger = (value, schema) => {
	const ajv = new Ajv();
	const validate = ajv.compile(schema);

	const valid = validate(value);

	return valid;
};

export default validateInteger;
