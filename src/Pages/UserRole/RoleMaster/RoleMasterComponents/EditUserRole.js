//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 19 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - EditUserRole
//    DESCRIPTION - EditUserRole
//////////////////////////////////////////////////////////////////////////////////////
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

function EditUserRole(props) {
  const data = props.data;

  // console.log("Data in EditPage", data)
  // return

  const [roleName, setRoleName] = useState(data?.role_name);
  const [roleDescription, setRoleDescription] = useState(
    data?.role_description
  );
  const [ulbName, setUlbName] = useState(data?.ulb_name);
  const [ulbId, setUlbId] = useState(data?.ulb_id);

  useEffect(() => {
    setRoleName(data?.role_name);
    setRoleDescription(data?.role_description);
    setUlbName(data?.ulb_name);
    setUlbId(data?.ulb_id);
  }, [data]);

  let token = window.localStorage.getItem("token");

  const closeDialoge = () => {
    props.closeDialoge();
  };
  const refetchListData = () => {
    props.refetchListData();
  };

  const savebtnClick = () => {
    // console.log("Save Btn Cicked..", roleName, roleDescription, ulbId)

    axios({
      method: "put",
      url: `http://192.168.0.166/api/edit-role/${props.id}`,
      data: {
        roleName: roleName,
        description: roleDescription,
        ulbID: ulbId,
      },
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    })
      .then(function (response) {
        if (response.data.status) {
          console.log("Data Stores Sussussfull", response.data.message);
          // setMsg(response.data.message)
          closeDialoge();
          refetchListData();
        } else {
          console.log("Data Not Saved..", response.data.message);
          // setMsg(response.data.message)
          closeDialoge();
          refetchListData();
        }
      })
      .catch(function (response) {
        console.log("Failed to Store Data", response);
        // setMsg(response.data.message)
      });
  };

  //Fetch ULB List and ID
  const {
    isLoading,
    data: newData,
    isError,
    error,
  } = useQuery("GetULbListINEditUser", () => {
    return axios.get("http://192.168.0.166/api/get-all-ulb");
  });

  // console.log("All ULB",newData)
  // return

  return (
    <>
      <div>
        <div>
          <p>Role Name :</p>
          <input
            type="text"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
            onBlur={(e) => setRoleName(e.target.value)}
            className="border pl-2  w-72"
          />
        </div>
        <div>
          <p>Role Description</p>
          <input
            type="text"
            value={roleDescription}
            onChange={(e) => setRoleDescription(e.target.value)}
            onBlur={(e) => setRoleDescription(e.target.value)}
            className="border pl-2  w-72"
          />
        </div>
        <div>
          <p>Select ULB Name</p>
          <select
            type="text"
            className="border pl-2 w-72"
            onChange={(e) => setUlbId(e.target.value)}
            onBlur={(e) => setUlbId(e.target.value)}
          >
            <option value={ulbId}>{ulbName}</option>
            {!isLoading
              ? newData.data.map((e) => (
                  <option value={e.id}>{e.ulb_name}</option>
                ))
              : ""}
          </select>
        </div>
        <div className="mt-3 flex justify-center">
          <button
            onClick={savebtnClick}
            className="bg-green-400 hover:bg-green-600 px-2 py-1 mx-1 rounded-sm font-medium"
          >
            Save
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

export default EditUserRole;

/*
Exported to -
1. PopUpModel.js
*/
