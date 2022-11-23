//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 19 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - AddUserRole
//    DESCRIPTION - AddUserRole
//////////////////////////////////////////////////////////////////////////////////////
import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";

function AddUserRole(props) {
  const [roleName, setRoleName] = useState();
  const [roleDesc, setRoleDesc] = useState();
  const [roleUlb, setRoleUlb] = useState();
  const [msg, setMsg] = useState();

  let token = window.localStorage.getItem("token");
  // const header = {
  //     headers:
  //     {
  //         Authorization: `Bearer ${token}`,
  //         Accept: 'application/json',
  //     }
  // }
  // console.log("Token is ", token)

  console.log("add btn in adduserRole.js 3");

  const closeDialoge = () => {
    props.closeDialoge();
  };
  const refetchListData = () => {
    props.refetchListData();
  };

  const handleSaveBtn = () => {
    axios({
      method: "post",
      url: "http://192.168.0.166/api/save-role",
      data: {
        roleName: roleName,
        description: roleDesc,
        ulbID: roleUlb,
      },
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    })
      .then(function (response) {
        if (response.data.status) {
          console.log("Data Stores Sussussfull", response.data.message);
          setMsg(response.data.message);
          closeDialoge();
          refetchListData();
        } else {
          console.log("Data Not Saved..", response.data.message);
          setMsg(response.data.message);
          closeDialoge();
          refetchListData();
        }
      })
      .catch(function (response) {
        // console.log("Failed to Store Data", response);
        setMsg(response.data.message);
      });
  };

  //Fetch ULB List and ID
  const { isLoading, data, isError, error } = useQuery(
    "GetULBLIstFromAPIForAddUser",
    () => {
      return axios.get("http://192.168.0.166/api/get-all-ulb");
    }
  );

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="my-2">
          <p className="font-medium">Role Name :</p>
          <input
            type="text"
            className="pl-2 w-72 border-2 border-blue-300 rounded-md h-8 font-semibold"
            onChange={(e) => setRoleName(e.target.value)}
          />
        </div>
        <div className="my-2">
          <p className="font-medium">Role Description</p>
          <input
            type="text"
            className="pl-2 w-72 border-2 border-blue-300 rounded-md h-8 font-semibold"
            onChange={(e) => setRoleDesc(e.target.value)}
          />
        </div>
        <div className="my-2">
          <p className="font-medium">Select ULB Name</p>
          <select
            type="text"
            className="pl-2 w-72 border-2 border-blue-300 rounded-md h-8 font-semibold"
            onChange={(e) => setRoleUlb(e.target.value)}
          >
            <option value="">Select Your ULB</option>
            {!isLoading
              ? data.data.map((data) => (
                  <option value={data.id}>{data.ulb_name}</option>
                ))
              : ""}
          </select>
        </div>
        <div>{msg && msg}</div>
        <div className="mt-3 ">
          <button
            onClick={handleSaveBtn}
            className="bg-green-400 hover:bg-green-600 px-2 py-1 mx-1 rounded-sm font-medium"
          >
            Add Role
          </button>
          <button
            onClick={closeDialoge}
            className="bg-red-400 hover:bg-red-600 px-2 py-1 mx-1 rounded-sm font-medium"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

export default AddUserRole;

/*
Exported to -
1. PopUpModel.js
*/
