import * as React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Cupcake", 305, 3.7, 0, 67, 4.3),
  createData("Donut", 452, 25.0, 0, 51, 4.9),
  createData("Eclair", 262, 16.0, 0, 24, 6.0),
  createData("Frozen yoghurt", 159, 6.0, 0, 24, 4.0),
  createData("Gingerbread", 356, 16.0, 0, 49, 3.9),
  createData("Honeycomb", 408, 3.2, 0, 87, 6.5),
  createData("Ice cream sandwich", 237, 9.0, 0, 37, 4.3),
  createData("Jelly Bean", 375, 0.0, 0, 94, 0.0),
  createData("KitKat", 518, 26.0, 0, 65, 7.0),
  createData("Lollipop", 392, 0.2, 0, 98, 0.0),
  createData("Marshmallow", 318, 0, 0, 81, 2.0),
  createData("Nougat", 360, 19.0, 0, 9, 37.0),
  createData("Oreo", 437, 18.0, 0, 63, 4.0),
];

const TanksTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Tank ID</TableCell>
                  <TableCell align="right">Tank Status</TableCell>
                  <TableCell align="right">Tank Percentage</TableCell>
                  <TableCell align="right">Total Volume&nbsp;(l)</TableCell>
                  <TableCell align="right">Current Volume&nbsp;(l)</TableCell>
                  <TableCell align="right">Requirements</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <Link to="#">{row.name}</Link>
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableContainer>
        </Paper>
      </Box>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#424242",
          "&:hover": { backgroundColor: "#212121" },
        }}
      >
        Create Tank
      </Button>
    </>
  );
};

export default TanksTable;
