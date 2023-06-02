import addFormats from 'ajv-formats';
import Ajv from 'ajv';
import validateMultipleOf from './validateMultipleOf';

const ajv = new Ajv();
const phoneNoPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

ajv.removeKeyword('multipleOf');

ajv.addKeyword({
	keyword: 'multipleOf',
	type: 'number',
	validate: validateMultipleOf,
});

ajv.addFormat('phoneNo', {
	validate: (phoneNumber) =>
		phoneNoPattern.test(phoneNumber),
});

addFormats(ajv);

const validateSchema = (value, schema) => {
	const valid = ajv.validate(schema, value);

	return valid;
};

export default validateSchema;
