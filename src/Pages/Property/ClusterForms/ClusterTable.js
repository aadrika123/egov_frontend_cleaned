//////////////////////////////////////////////////////////////////////
// Author      : R U Bharti
// Date        : 22nd Nov., 2022  10:30 PM
// Project     : JUIDCO
// Component   : Cluster List
// Description : Cluster Table List
//////////////////////////////////////////////////////////////////////

import axios from "axios";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import Popup from "reactjs-popup";
import apiList from 'Components/ApiList/ClusterFormApi'
import { useQuery } from "react-query";
import { BeatLoader } from 'react-spinners'
import { ClusterForm } from "./ClusterForm";
import ApiHeader from "Components/ApiList/ApiHeader";
import ListTable from 'Components/Common/ListTable/ListTable'
import {IoSearchSharp} from 'react-icons/io5'
import ClusterView from "./ClusterView";

const ClusterTable = (props) => {

  const [table, settable] = useState(true)
  const [edit, setedit] = useState(false)
  const [index, setindex] = useState()
  const [userData, setuserData] = useState()
  const [view, setview] = useState(false)
  const [add, setadd] = useState(false)
  const [holdingScreen, setholdingScreen] = useState(false)

 const {getCluster, addCluster, viewCluster, updateCluster, deleteCluster} = apiList()

  // To get data from server
const { isLoading, data, isError, error } = useQuery("first-query", () => {
    return axios.get(getCluster, ApiHeader());
});

  // For Deletion
  const funDel = (ind) => {
    axios
      .delete(deleteCluster + ind)
      .then(
        (res) => (
          toast("Deleted Successfully !!")
        )
      );
  };

  // Toggle Table
  const funAdd = () =>{
    settable(false)
    setadd(true)
  }

  const funEdit = (id) => {
    axios.post(viewCluster + id, ApiHeader())
    .then((res) => {
      console.log("--4-- getting user data => ", res.data.data)
      setuserData(res.data.data)
      settable(false)
      setedit(true)
      setindex(id)
    })
    .catch((err) => console.log("--4-- getting user data error => ", err))
  }

  console.log("user index => ", index)

  const backFun = () => {
    settable(true)
    setedit(false)
    setadd(false)
    setview(false)
    setuserData('')
  }

  const funView = (id) => {
    // setuserData(res.data.data)
      settable(false)
      setview(true)
      setindex(id)
    
    // axios.post(viewCluster + id, ApiHeader())
    // .then((res) => {
    //   console.log("--4-- getting user data => ", res.data.data)
    //   setuserData(res.data.data)
    //   settable(false)
    //   setview(true)
    //   setindex(id)
    // })
    // .catch((err) => console.log("--4-- getting user data error => ", err))
  }
  
  console.log("name => ", userData?.name)

  // For making columns in table
  const COLUMNS = [
    {
      Header: 'S.No.',
    Cell: ({ row }) => <div>{row.index + 1}</div>,
    },
    {
      Header:"Name",
      accessor: 'name'
    },

    {
      Header: "Type",
      accessor: 'type'
    },

    {
      Header: "Address",
      accessor: 'address'
    },
    {
      Header: "Mobile No.",
      accessor : 'mobileNo'
    },
    {
      Header : "Authorized Person Name",
      accessor : 'authPersonName'
    },
  {
    Header: "Actions",
    accessor: "id",
    Cell: ({cell}) => (
      <>
        {/* Button in table */}
        <div className="space-x-2">
          <button
            className="bg-green-400 text-white rounded-sm shadow-lg py-1 px-2"
            onClick={() => funEdit(cell.row.values.id)}
          >
            Edit
          </button>

          <button
            className="bg-green-400 text-white rounded-sm shadow-lg py-1 px-2"
            onClick={() => funView(cell.row.values.id)}
          >
            View
          </button>

        {/* Pop Up */}
          <Popup
            trigger={
              <button className="bg-green-400 text-white rounded-sm shadow-lg py-1 px-2">
                Delete
              </button>
            }
            modal
            nested
          >
            {(close) => (
              <div className="modal bg-gradient-to-r from-blue-100 to-blue-200 w-max text-zinc-700 rounded-lg p-4 shadow-lg ">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="flex flex-col justify-center items-cener">
                  <div>Are you sure want to delete ?</div>
                  <div className="flex justify-center items-center">
                    <button
                      className="bg-blue-400 shadow-md px-4 py-1 m-4 rounded-md"
                      onClick={() => {
                        close();
                        funDel(cell.row.values.id);
                      }}
                    >
                      Yes
                    </button>
                    <button
                      className="bg-blue-500 px-4 shadow-md py-1 m-4 rounded-md"
                      onClick={close}
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Popup>
        </div>
      </>
    ),
  }

  ];

  return (
    <>

<ToastContainer position="top-right" autoClose={2000} />

     {(isLoading) &&
     <BeatLoader color='#022751' />}

     <div className="mt-8">

     {(!isLoading && table) && <>

     <div><button className='bg-sky-400 px-3 pr-3  shadow-lg rounded py-1 text-white hover:shadow-2xl hover:bg-green-600 text-center absolute right-16' onClick={() => funAdd()}>Add</button></div>
     
      <ListTable columns={COLUMNS} dataList={data?.data.data} />

     </>}

     </div>


        {(edit || add) && <>
        
          <ClusterForm backFun={backFun} editState={edit} userId={index} userData={userData} />

        </>}


          {
            view && <ClusterView backFun={backFun}/>
          }
    </>
  );
};

export default ClusterTable;

///////////////////////////////////////
// Export to : ClusterFormIndex.js