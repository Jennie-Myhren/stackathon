import React, { useState } from 'react';
import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core';
import data from '../brain/data/testData';

//extract headers for column names
const extractHeaders = row => {
  let headers = [];
  for (let field in row) {
    headers.push(field);
  }
  return headers;
};

const sampleRow = data[0];
let headers = extractHeaders(sampleRow);

//make columns using data headers
const columns = headers.map(header => {
  let format;
  header = header.slice(0, 1).toUpperCase() + header.slice(1);
  if (header === 'diagnosis') {
    format = value => value.toLocaleString();
  } else {
    format = value => value.toFixed(2);
    header = header.replace(/_/gi, ' ');
  }
  return {
    id: header,
    label: header,
    minWidth: 150,
    align: 'center',
    format: format,
  };
});

// const rows = data.map(row => {
//   // let values = [];
//   // for (let field in row) {
//   //   if (field) {
//   //     values.push(row[field]);
//   //   }
//   // }
//   return row;
// });
// console.log('TCL: rows length', rows.length);

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: 'auto',
  },
});

const TestDataTable = () => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(50);

  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = e => {
    setRowsPerPage(+e.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table stickyHeader aria-label="sticky tabel">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {headers.map(header => {
                      const val = row[header];
                      return (
                        <TableCell key={header} align="center">
                          {val}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        rowsPerPageOptions={[25, 50, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'previous page',
        }}
        nextIconButtonProps={{
          'aria-label': 'next page',
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default TestDataTable;
