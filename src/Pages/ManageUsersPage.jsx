import { useState, React, useContext, useEffect, useReducer } from "react";
import {
  Container,
  Paper,
  Grid,
  Typography,
  IconButton,
  Snackbar,
  Alert,
  Modal,
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Delete, Edit, SupervisorAccount } from "@mui/icons-material";
import { UserContext } from "../Context/Context";
import userService from "../ApiCalls/userService";
import _ from "lodash";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import "../Assets/Styles/table.css";
import EmptyView from "../Components/EmptyView";

const ManageUsers = () => {
  const { user, setUser } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [openAlertMod, setOpenAlertMod] = useState(false);

  const [currentUserSelected, setCurrentUserSelected] = useState([]);

  // bos style
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  //modal to delete
  const [openModal, setOpenModal] = useState(false);
  const [openModalChangeRol, setOpenModalChangeRol] = useState(false);

  const handleOpenModal = (data) => {
    setCurrentUserSelected(data);
    setOpenModal(true);
  };

  const handleOpenModalChangeRole = (data) => {
    setCurrentUserSelected(data);
    setOpenModalChangeRol(true);
  };
  const handleCloseModal = () => setOpenModal(false);

  const handleCloseModalChangeRol = () => setOpenModalChangeRol(false);

  const updateTable = () => {
    const res = userService.getAllUsers();
    res.then((val) => {
      if (val.status == 200) {
        setData([..._.get(val, "data")]);
      }
    });
  };

  const handleDelete = () => {
    const userIdToDelete = _.get(
      currentUserSelected,
      "row.original._id",
      undefined
    );

    if (userIdToDelete) {
      const res = userService.deleteUser(userIdToDelete);
      res
        .then((val) => {
          if (val.status == 204) {
            setOpen(true);
          }
        })
        .catch(console.log);
    }
    updateTable();
    handleCloseModal();
  };

  const handleContinue = () => {
    handleCloseModal();
    handleCloseModalChangeRol();
  };

  const [data, setData] = useState([]);

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("name", {
      cell: (info) => info.getValue(),
      header: () => <span>Name</span>,
    }),
    columnHelper.accessor((row) => row.email, {
      id: "email",
      cell: (info) => info.getValue(),
      header: () => <span>Email</span>,
    }),
    columnHelper.accessor("rol", {
      header: () => "Rol",
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("row", {
      header: () => "Actions",
      cell: (info) => {
        return (
          <>
            <IconButton
              aria-label="delete"
              onClick={() => handleOpenModal(info)}
            >
              <Delete />
            </IconButton>
            <IconButton
              aria-label="ChangeRol"
              onClick={() => handleOpenModalChangeRole(info)}
            >
              <SupervisorAccount />
            </IconButton>
          </>
        );
      },
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setOpenAlertMod(false);
  };

  useEffect(() => {
    const res = userService.getAllUsers();
    res.then((val) => {
      if (val.status == 200) {
        setData([..._.get(val, "data")]);
      }
    });
  }, []);

  const handleRoleChange = (e) => {
    const { value } = e.target;
    const id = _.get(currentUserSelected, "row.original._id", undefined);
    if (value != "" && id != "") {
      const res = userService.updateUser({
        id,
        rol: value,
      });
      res
        .then((val) => {
          if (val.status == 200) {
            updateTable();
            setOpenAlertMod(true);
          }
        })
        .catch(console.log);
    }
  };

  return (
    <Container
      id="pqr_container"
      maxWidth="xl"
      className="bg-light text-dark vh-100"
    >
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          User deleted!
        </Alert>
      </Snackbar>
      <Snackbar
        open={openAlertMod}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          User modified!
        </Alert>
      </Snackbar>
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textAlign="center"
          >
            Do you want to delete this account?
          </Typography>
          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              color="secondary"
              onClick={handleDelete}
              sx={{ margin: 1 }}
            >
              Yes, delete it
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleContinue}
              sx={{ margin: 1 }}
            >
              No, keep it
            </Button>
          </Box>
        </Box>
      </Modal>
      <Modal open={openModalChangeRol} onClose={handleCloseModalChangeRol}>
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textAlign="center"
          >
            Change role account
          </Typography>
          <Box display="flex" justifyContent="center">
            <FormControl sx={{ m: 1 }} variant="standard">
              <InputLabel id="role-selector-label" sx={{ m: 1 }}>
                Select new user role
              </InputLabel>
              <Select
                labelId="role-selector-label"
                id="role-selector"
                onChange={handleRoleChange}
                sx={{ width: 250 }}
              >
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="casual">Casual</MenuItem>
                <MenuItem value="root">Root</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              onClick={handleContinue}
              sx={{ margin: 1 }}
            >
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
      {user.rol == "root" || user.rol == "admin" ? (
        <div style={{ paddingTop: 50 }}>
          <Container maxWidth="md">
            <Paper elevation={3} style={{ padding: "20px" }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12}>
                  <Typography variant="h3">Table of all users</Typography>
                </Grid>
                <Grid item>
                  <div className="p-2">
                    <table>
                      <thead>
                        {table.getHeaderGroups().map((headerGroup) => (
                          <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                              <th key={header.id} style={{ width: 250 }}>
                                {header.isPlaceholder
                                  ? null
                                  : flexRender(
                                      header.column.columnDef.header,
                                      header.getContext()
                                    )}
                              </th>
                            ))}
                          </tr>
                        ))}
                      </thead>
                      <tbody>
                        {table.getRowModel().rows.map((row) => (
                          <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                              <td key={cell.id}>
                                {flexRender(
                                  cell.column.columnDef.cell,
                                  cell.getContext()
                                )}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </Container>
        </div>
      ) : (
        <EmptyView />
      )}
    </Container>
  );
};

export default ManageUsers;
