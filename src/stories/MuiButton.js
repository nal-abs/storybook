import { Button } from '@mui/material';
import { React } from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@mui/icons-material/Add';

const AddButton = () =>
	<Button
		role="AddButton"
	>
		<AddIcon
			color="primary"
			sx={ { '&:hover': { color: 'error.main' }} }
		/>
	</Button>;

export default AddButton;

AddButton.propTypes = {
	context: PropTypes.object,
};
