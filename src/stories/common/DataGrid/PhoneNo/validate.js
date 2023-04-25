import Ajv from 'ajv';

const validate = (schema, value) => {
	const pattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

	const ajv = new Ajv();

	ajv.addFormat('phoneNo', {
		validate: (phoneNumber) => pattern.test(phoneNumber),
	});

	const valid = ajv.validate(schema, value);

	return valid;
};

export default validate;
