/* eslint-disable complexity */
import Ajv from 'ajv';

const validator = new Ajv();

const ten = 10;
const decimalLength = 2;

const getFractionPoint = (number) => {
	let fractionPoints = 0;
	let num = number;

	if(isNaN(num))
		return fractionPoints;

	if(typeof num !== 'number')
		num = Number(num);

	const decimalParts = num.toString().split('.');

	if(decimalParts.length === decimalLength)
		fractionPoints += decimalParts[1].length;

	return fractionPoints;
};

const multipleValidator = (schemaNum, testNum) => {
	if(schemaNum === 0 || !(typeof testNum === 'number' && isFinite(testNum)))
		return false;

	const testNumDecimals = getFractionPoint(testNum);
	const schemaNumDecimals = getFractionPoint(schemaNum);

	const maxDecimalNum = Math.max(testNumDecimals, schemaNumDecimals);
	const multiplier = Math.pow(ten, maxDecimalNum);

	if(Math.round(testNum * multiplier)
	% Math.round(schemaNum * multiplier) !== 0)
		return false;

	return true;
};

validator.removeKeyword('multipleOf');
validator.addKeyword({
	keyword: 'multipleOf',
	type: 'number',
	validate: multipleValidator,
});

const numberValidator = (schema, value) => validator.validate(schema, value);

export default numberValidator;
