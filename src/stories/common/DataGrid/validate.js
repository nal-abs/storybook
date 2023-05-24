import validateDate from './validate/validate';
import validatePhoneNo from './validate/validatePhoneNo';
import validateNumber from './validate/validateNumber';
import validateInteger from './validate/validateInteger';

const validate = {
	'date': validateDate,
	'date-time': validateDate,
	'time': validateDate,
	'phoneNo': validatePhoneNo,
	'number': validateNumber,
	'integer': validateInteger,
	'string': validateDate,
	'password': validateDate,
};

export default validate;
