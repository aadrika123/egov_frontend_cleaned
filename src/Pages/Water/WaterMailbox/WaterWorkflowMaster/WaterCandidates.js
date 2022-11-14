//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Date - 04 july 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Candidates
//    DESCRIPTION - Candidates Component
//////////////////////////////////////////////////////////////////////////////////////
import { useQuery } from "react-query";
import { useState, useEffect } from "react";
import axios from 'axios'
import ListTable from "Components/Common/ListTable/ListTable";
import { FiEdit } from 'react-icons/fi'
import { MdDeleteForever } from 'react-icons/md'
import WorkFlowCandidate from "Components/MailboxComponent/WorkFlowCandidate";
import WaterWorkflowCandidateCard from "./WaterWorkflowCandidateCard";
import { baseUrl } from "../WaterBaseUrl";




function WaterCandidates(props) {
  const [candidateList, setCandidateList] = useState([])
  // const COLUMNS = [

  //   // {
  //   //   Header: '#',
  //   //   accessor: 'id'
  //   // },
  //   {
  //     Header: 'Username',
  //     accessor: 'userName'
  //   },
  //   {
  //     Header: 'User Type',
  //     accessor: 'userType',
  //     Cell: ({ cell }) => (
  //       <div ><span className={`${cell.row.values.userType == 'General' ? 'bg-blue-100 shadow-lg' : ''} px-2 py-0`}>{cell.row.values.userType}</span></div>
  //     )
  //   },
  //   {
  //     Header: 'Employee Id',
  //     accessor: 'employeeId'
  //   }
  //   ,
  //   {
  //     Header: 'Action',
  //     accessor: 'id',
  //     Cell: ({ cell }) => (
  //       <div className="flex gap-4">

  //                   <button onClick={() => openModal2(cell.row.values.id, cell.row.values.userName)} className='flex-initial bg-red-200 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-red-800 hover:text-white text-black items-center flex'>
  //                       {/* View {cell.row.values.id} */}
  //                       <MdDeleteForever className="inline" />Remove
  //                   </button>
  //       </div>
  //     )
  //   }
  // ]
  // const { isLoading, data, isError, error } = useQuery("first-query", () => {
  //   return axios.get("http://localhost:3001/workflowCandidate");
  // });

  const addEditCandidate = () => {

  }
  const openModal2 = () => {

  }
  useEffect(() => {
    // setTrackList(props.workflowDetailsData.workflowTrack)
    // console.log('ddd',props.workflowDetailsData)
    setCandidateList(props.workflowDetailsData.candidates)
  }, [props.workflowDetailsData])

  return (
    <>
      {/* <div className="p-1"> */}
      {/* {isLoading && <h1>Looading ...</h1>} */}
      {/* {!isLoading && <ListTable columns={COLUMNS} dataList={data?.data}></ListTable>} */}
      {/* <ListTable columns={COLUMNS} dataList={candidateList}></ListTable> */}
      {/* </div> */}
      {
        candidateList?.map((data,index) => (
          <WaterWorkflowCandidateCard name={data} index={index+1} />

        ))
      }
      {/* <WorkflowCandidateCard/> */}
    </>
  )
}

export default WaterCandidates
/**
 * Exported to :
 * 1. WaterDetailsWorkflow Component
 * 
 */