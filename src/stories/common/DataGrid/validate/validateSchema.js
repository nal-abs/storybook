import addFormats from 'ajv-formats';
import Ajv from 'ajv';
import validateMultipleOf from './validateMultipleOf';

const ajv = new Ajv();
const phoneNoPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
const getValidator = (schema) => ajv.compile(schema);

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

const validateSchema = (schema) => getValidator(schema);

export default validateSchema;
