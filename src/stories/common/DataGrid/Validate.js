import validateDate from './Date/validate';
import validatePhoneNo from './PhoneNo/validate';
import validateNumber from './Number/validate';
import validateInteger from './Integer/validate';

const validate = {
	'date': validateDate,
	'date-time': validateDate,
	'time': validateDate,
	'phoneNo': validatePhoneNo,
	'number': validateNumber,
	'integer': validateInteger,
};

export default validate;
