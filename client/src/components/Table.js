import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PaginationActions from './shared/Pagination';
import * as actions from '../store/actions/index';
import { connect } from 'react-redux';
import { columns } from '../helpers/table';

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

const MainTable = ({ onGetProducts, products, total }) => {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [orderBy, setOrderBy] = useState({ id: 'Title', order: 'asc' });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  const handleSorting = (order) => setOrderBy({ ...order });

  useEffect(() => {
    onGetProducts({
      page,
      size: rowsPerPage,
      sorting: { [orderBy.id.toLowerCase()]: orderBy.order === 'asc' ? 1 : -1 },
    });
  }, [onGetProducts, orderBy.id, orderBy.order, page, rowsPerPage, total]);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            {columns.map((headCell) => (
              <TableCell
                key={headCell.label}
                align={headCell.align && headCell.align}
                sortDirection={headCell.sorting && headCell.sorting}
              >
                <TableSortLabel
                  active={
                    orderBy.id === headCell.label && headCell.sorting
                      ? true
                      : false
                  }
                  direction={
                    headCell.sorting && orderBy.id === headCell.label
                      ? orderBy.order
                      : 'asc'
                  }
                  onClick={() =>
                    handleSorting({
                      id: headCell.label,
                      order: orderBy.order === 'asc' ? 'desc' : 'asc',
                    })
                  }
                  disableRipple={!headCell.sorting}
                  disabled={!headCell.sorting}
                >
                  {headCell.label}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {products &&
            products.map((row) => (
              <TableRow key={row.key}>
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.price}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: total }]}
              colSpan={3}
              count={total ? total : 25}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={PaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    total: state.products.total_elements,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetProducts: (args = { page: 1, size: 10, sorting: { title: 1 } }) =>
      dispatch(actions.getProductsData(args)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainTable);
