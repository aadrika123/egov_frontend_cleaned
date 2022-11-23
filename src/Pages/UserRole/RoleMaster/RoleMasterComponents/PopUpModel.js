//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 19 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - PopUpModel
//    DESCRIPTION - PopUpModel
//////////////////////////////////////////////////////////////////////////////////////
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import axios from "axios";
import ViewUser from "./ViewUser";
import { DialogActions, DialogTitle } from "@mui/material";
import EditUserRole from "./EditUserRole";
import DeleteUderRole from "./DeleteUderRole";
import AddUserRole from "./AddUserRole";

export default function PopUpModel(props) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState();
  const [boxHeight, setBoxHeight] = useState();
  const [boxWidth, setBoxWidth] = useState();
  const [title, setTitle] = useState();

  useEffect(() => {
    if (props.actionType === "Add") {
      setTitle("Add New User Role");
      setBoxHeight("60%");
      setBoxWidth("30%");
    } else if (props.actionType === "View") {
      setTitle("View User Role");
      setBoxHeight("50%");
      setBoxWidth("20%");
    } else if (props.actionType === "Edit") {
      setTitle("Edit User Role");
      setBoxHeight("60%");
      setBoxWidth("30%");
    } else if (props.actionType === "Delete") {
      setTitle("Delete User Role");
      setBoxHeight("30%");
      setBoxWidth("30%");
    }
  }, [props.actionType]);

  useEffect(() => {
    setOpen(props.openModele);
  }, [props.openModele]);

  const handleClose = () => {
    setOpen(false);
  };

  const refetchListData = () => {
    props.refetchListData();
  };

  let token = window.localStorage.getItem("token");
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  };

  const fetchData = () => {
    axios
      .get(`http://192.168.0.166/api/get-role/${props.id}`, header)
      .then(function (response) {
        // console.log("The View Data == ", response.data.data)
        setData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [open]);

  return (
    <div>
      {/* <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm" minHeight='80vh'> */}
      <Dialog
        PaperProps={{
          sx: { overflow: "hidden", width: boxWidth, height: boxHeight },
        }}
        open={open}
        onClose={handleClose}
      >
        {/* <DialogTitle sx={{ paddingLeft: 6, paddingRight: 0 }}>{props.actionType && props.actionType} Role </DialogTitle> */}
        <div className="grid grid-cols-12">
          <div className="col-span-10 bg-blue-400 py-2 text-center font-semibold text-xl">
            {title}
          </div>
          <div
            onClick={handleClose}
            className="col-span-2 bg-red-400 hover:bg-red-500 py-2 cursor-pointer text-center font-semibold"
          >
            X
          </div>
        </div>

        <DialogContent>
          {props.actionType === "Add" && (
            <AddUserRole
              id={props.id}
              closeDialoge={handleClose}
              refetchListData={refetchListData}
            />
          )}
          {props.actionType === "View" && (
            <ViewUser id={props.id} data={data} closeDialoge={handleClose} />
          )}
          {props.actionType === "Edit" && (
            <EditUserRole
              id={props.id}
              data={data}
              closeDialoge={handleClose}
              refetchListData={refetchListData}
            />
          )}
          {props.actionType === "Delete" && (
            <DeleteUderRole
              id={props.id}
              data={data}
              closeDialoge={handleClose}
              refetchListData={refetchListData}
            />
          )}
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}

/*
Exported to-
1. UserRoleTab.js
*/
