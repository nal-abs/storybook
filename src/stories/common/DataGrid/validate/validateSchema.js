import addFormats from 'ajv-formats';
import Ajv from 'ajv';

const ajv = new Ajv();
const phoneNoPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

const ten = 10;
const decimalLength = 2;

const decimal = (number) => {
	const decimalParts = number.toString().split('.');

	return decimalParts.length === decimalLength
		? decimalParts[1].length
		: 0;
};

const getFractionPoint = (number) =>
	(isNaN(number) ? 0 : decimal(number));

const hasReminder = (schemaNum, testNum) => {
	const testNumDecimals = getFractionPoint(testNum);
	const schemaNumDecimals = getFractionPoint(schemaNum);

	const maxDecimalNum = Math.max(testNumDecimals, schemaNumDecimals);
	const multiplier = Math.pow(ten, maxDecimalNum);

	return Math.round(testNum * multiplier)
% Math.round(schemaNum * multiplier) !== 0;
};

const isTypeNumber = (schemaNum, testNum) => schemaNum === 0
|| !(typeof testNum === 'number' && isFinite(testNum));

const validateMultipleOf = (schemaNum, testNum) =>
	(isTypeNumber(schemaNum, testNum)
		? false
		: !hasReminder(schemaNum, testNum));

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
