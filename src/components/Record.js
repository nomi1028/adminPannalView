// ** React Imports
import { useEffect, useState } from "react";

// ** MUI Imports
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import Update from "./Update";
import { Avatar } from "@mui/material";

const columns = [
  {
    id: "name",
    label: "Company Name",
    minWidth: 170,

    // align: 'right',
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "code",
    label: "Description",
    minWidth: 170,

    // align: 'right',
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "population",
    label: "Logo",
    minWidth: 170,

    // align: 'right',
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Actions",
    minWidth: 170,

    // align: 'right',
    format: (value) => value.toLocaleString("en-US"),
  },
];
function createData(name, code, population, size) {
  const density = population / size;

  return { name, code, population, size };
}

const TableStickyHeader = (props) => {
  console.log(props.data, "datar");

  // props.values(...)

  // ** States
  const [page, setPage] = useState(0);
  const [editData, setEditData] = useState();
  const [tableData, setTableData] = useState(0);
  const [tablerecord, settablerecord] = useState(props?.data);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [formview, setFormView] = useState(true);
  const [loading, setLoading] = useState(true);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  console.log(tablerecord, "reddd");

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },

    // hide last border

    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  const getdata = () => {
    // axios.get("http://localhost:5000/student").then((res) => {
    axios.get("https://nfttrader1.herokuapp.com/student").then((res) => {
      const persons = res.data.User_Data;
      if (persons) {
        console.log(persons);
        setTableData(persons);
        setLoading(false);
      }
    });
  };
  useEffect(() => {
    getdata();
  }, []);

  const editHandler = (id, e) => {
    // props.valued(true);
    // props.shows(false);
    const NewArray = tableData?.map((e) => {
      if (id === e._id) {
        // console.log();
        setEditData(e);
        setFormView(false);
      }
    });
  };

  const ClickHandler = (id, e) => {
    console.log(id, "id");
    const NewArray = tableData?.map((e) => {
      if (id === e._id) {
        console.log(id, "id");
        // axios.delete(`http://localhost:5000/student/${id}`).then((res) => {
        axios
          .delete(`https://nfttrader1.herokuapp.com/student/${id}`)
          .then((res) => {
            if (res) {
              getdata();
            }
          });
      }
      return e;
    });
  };

  return loading ? (
    <h1>"loading"</h1>
  ) : (
    <>
      {formview ? (
        <>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Order_ID</StyledTableCell>
                    <StyledTableCell>Wallet</StyledTableCell>
                    <StyledTableCell>Taker_Adress</StyledTableCell>

                    <StyledTableCell align="">Maker_Adress</StyledTableCell>
                    <StyledTableCell align="">taker_Name</StyledTableCell>
                    <StyledTableCell align="">Maker_NAME</StyledTableCell>
                    <StyledTableCell align="">Taker_IMG</StyledTableCell>
                    <StyledTableCell align="">Maker_IMG</StyledTableCell>

                    <StyledTableCell>Actions</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableData?.map((row) => (
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        {row?.trade}
                        {/* 111111111111111111111 */}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row" align="">
                        {row?.AdminWallet}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row" align="">
                        {row?.Coinname}
                      </StyledTableCell>
                      <StyledTableCell align="">
                        {row?.Nftadress}
                      </StyledTableCell>

                      {/* <StyledTableCell align="">
                  <img
                    alt={row.Alt_tag}
                    style={{ width: "20px", height: "20px" }}
                  ></img>
                </StyledTableCell> */}
                      <StyledTableCell align="">
                        {row?.Tokenname}
                      </StyledTableCell>
                      <StyledTableCell align="">
                        {row?.nftnname}
                      </StyledTableCell>
                      <StyledTableCell align="">
                        <Avatar alt="Remy Sharp" src={row?.takerImageURL} />
                      </StyledTableCell>
                      <StyledTableCell align="">
                        <Avatar alt="Remy Sharp" src={row?.makerImageURL} />
                      </StyledTableCell>

                      <StyledTableCell>
                        <DeleteIcon
                          onClick={ClickHandler.bind(this, row?._id)}
                        />{" "}
                        <EditIcon onClick={editHandler.bind(this, row?._id)} />
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={tablerecord?.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </>
      ) : (
        <>{editData && <Update editData={editData} />}</>
      )}
    </>
  );
};

export default TableStickyHeader;
