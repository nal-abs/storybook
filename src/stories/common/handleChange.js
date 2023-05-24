import updateRow from '../common/DataGrid/updateRow';

const handleChange = (newValue, props) => {
	const { context, setValue } = props;

	updateRow({ ...context, value: newValue });
	setValue(newValue);
};

export default handleChange;
