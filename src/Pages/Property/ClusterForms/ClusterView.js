//////////////////////////////////////////////////////////////////////
// Author      : R U Bharti
// Date        : 23rd Nov., 2022  12:00 PM
// Project     : JUIDCO
// Component   : ClusterView
// Description : Cluster View Details
//////////////////////////////////////////////////////////////////////

import React from 'react'
import {TbListDetails} from 'react-icons/tb'
import { BeatLoader } from 'react-spinners'
import { useQuery } from 'react-query';
import axios from 'axios';
import apiList from 'Components/ApiList/ClusterFormApi'
import ApiHeader from "Components/ApiList/ApiHeader";
import ListTable from 'Components/Common/ListTable/ListTable';

const ClusterView = (props) => {

    const {getCluster, addCluster, viewCluster, updateCluster, deleteCluster} = apiList()

    const { isLoading, data, isError, error } = useQuery("first-query", () => {
        return axios.get(getCluster, ApiHeader());
    });

    const COLUMNS = [
        {
          Header: 'S.No.',
        Cell: ({ row }) => <div>{row.index + 1}</div>,
        },
        {
          Header:"Ward No.",
        //   accessor: 'name'
        },
    
        {
          Header: "Owner Name",
        //   accessor: 'type'
        },
    
        {
          Header: "Address",
        //   accessor: 'address'
        },
        {
          Header: "Property Type",
        //   accessor : 'mobileNo'
        },
        {
          Header : "Mobile No.",
        //   accessor : 'authPersonName'
        }    
      ];

  return (
    <>

    <div className='flex flex-wrap flex-col w-full text-zinc-800'>

        {/* Basic Details */}
        <div>

            {/* Heading */}
            <div className='flex flex-wrap justify-between'>

                <div className='flex items-center space-x-2 '>
                    <span className="font-extrabold"><TbListDetails/></span>
                    <span className='font-bold'>Basic Details</span>
                </div>

                <div>
                <button className="py-2 bg-green-200 hover:bg-green-300 cursor-pointer px-4 mr-20 -mt-[7rem] transition-all ease-in-out duration-300 rounded-md shadow-md text-xs font-semibold">Add Holding</button>
                </div>

            </div>
            
            {/* Details */}
            <div  className='bg-slate-100 rounded-md shadow-lg w-full px-4 py-2.5 pb-4 mt-4 flex flex-wrap flex-row space-y-4'>
                <div className='flex flex-col mt-4 space-y-1 bg-blue-100 px-4 py-1.5 hover:bg-blue-200 cursor-pointer mr-4 rounded-md shadow-md w-[15rem]'>
                    <div className='text-xs'>Name</div>
                    <div className='text-sm font-semibold'>Sam</div>
                </div>
                <div className='flex flex-col space-y-1 bg-blue-100 px-4 py-1.5 hover:bg-blue-200 cursor-pointer mr-4 rounded-md shadow-md w-[15rem]'>
                    <div className='text-xs'>Type</div>
                    <div className='text-sm font-semibold'>Sam</div>
                </div>
                <div className='flex flex-col space-y-1 bg-blue-100 px-4 py-1.5 hover:bg-blue-200 cursor-pointer mr-4 rounded-md shadow-md w-[15rem]'>
                    <div className='text-xs'>Address</div>
                    <div className='text-sm font-semibold'>Sam</div>
                </div>
                <div className='flex flex-col space-y-1 bg-blue-100 px-4 py-1.5 hover:bg-blue-200 cursor-pointer mr-4 rounded-md shadow-md w-[15rem]'>
                    <div className='text-xs'>Mobile No.</div>
                    <div className='text-sm font-semibold'>Sam</div>
                </div>
                <div className='flex flex-col space-y-1 bg-blue-100 px-4 py-1.5 hover:bg-blue-200 cursor-pointer mr-4 rounded-md shadow-md w-[15rem]'>
                    <div className='text-xs'>Authorized Person Name</div>
                    <div className='text-sm font-semibold'>Sam</div>
                </div>
            </div>

        </div>

        {/* Holding list */}
        <div>

                {/* Heading */}
                <div className='flex items-center space-x-2 mt-20'>
                    <span className="font-extrabold"><TbListDetails/></span>
                    <span className='font-bold'>Holding List</span>
                </div>

            {/* Holding List */}
            {(isLoading) &&
     <BeatLoader color='#022751' />}

     <div className="mt-4">

     {!isLoading && <ListTable columns={COLUMNS} dataList={data?.data?.data} />}

     </div>

        </div>

        <div className='mb-4'>
        <button onClick={props.backFun}
                  type="button"
                  className="md:mt-1.5 px-6 py-1.5 bg-blue-500 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-060 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Back
                </button>
        </div>

    </div>
    
    
    </>
  )
}

export default ClusterView