import { React } from 'react';
import { TablePagination } from '@mui/material';

const changePage = (setState, state) => (event, newPage) => {
	setState({ ...state, page: newPage });
};

const changeRowsPerPage = (setState, preState) => (event) => {
	setState({
		...preState,
		rowsPerPage: parseInt(event.target.value, 10),
		page: 0,
	});
};

const Pagination = ({ value, state, setState, rowsPerPageOptions }) =>
	<TablePagination
		component="div"
		rowsPerPageOptions={ rowsPerPageOptions }
		count={ value.length }
		rowsPerPage={ state.rowsPerPage }
		page={ state.page }
		onPageChange={ changePage(setState, state) }
		onRowsPerPageChange={ changeRowsPerPage(setState, state) }
		showFirstButton={ true }
		showLastButton={ true }
	/>;

export default Pagination;
