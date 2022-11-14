//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu SIngh
//    Version - 1.0
//    Date - 19 july 2022
//    Updated On - 13/Aug/2022 - API Integrated
//    Revision - 1
//    Project - JUIDCO
//    Component  - UserRoleList (closed)
//    DESCRIPTION - UserRoleList Component
//////////////////////////////////////////////////////////////////////////////////////
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { format } from 'date-fns'
import ListTable from 'Components/Common/ListTable/ListTable'
import LoadingData from 'Components/Common/Loading/LoadingData'
import { CgPlayListAdd } from 'react-icons/cg';


function UserRoleList(props) {

    // console.log("refetch list ======", props.refetchList) 

    useEffect(() => {
        refetch()
    }, [props.refetchList])
    

    const addBtnClick = () =>{
        props.add()
    }

    const bearer = JSON.parse(window.localStorage.getItem('token'))
    const header = {
        headers: {
            Authorization: `Bearer ${bearer}`,
            Accept: 'application/json',
        }
    }
    // console.log("header", header)
    const COLUMNS = [

        {
            Header: '#',
            Cell: ({ row }) => (
                <div className='pr-2'>{row.index + 1}</div>
            )
        },
        {
            Header: 'Role Name',
            accessor: 'role_name'
        },
        {
            Header: 'Role Description',
            accessor: 'role_description'
        },
        {
            Header: 'Ulb Name',
            accessor: 'ulb_name'
        },
        // {
        //     Header: 'Entity Name',
        //     accessor: 'entity_name'
        // },
        // {
        //     Header: 'Assessment Type',
        //     accessor: 'assessment_type', Cell: ({ cell }) => (

        //         <div className={' rounded-full shadow-lg h-7 mx-auto w-7 font-semibold text-center py-1 text-sm px-1  ' + (cell.row.values.assessment_type == 'New Assessment' ? 'bg - green - 200 text- green - 900 ' : '') + (cell.row.values.assessment_type == 'Reassessment' ? 'bg - indigo - 200 text - indigo - 900 ' : '') + (cell.row.values.assessment_type == 'Mutation' ? 'bg - red - 200 text - red - 900' : '')}>
        //             {Array.from(cell.row.values.assessment_type)[0]}
        //         </div >
        //     )
        // },
        // {
        //     Header: 'Received at',
        //     accessor: 'created_at',
        //     Cell: ({ value }) => { return format(new Date(value), 'dd/MM/yyyy') }

        // },
        {
            Header: 'Action',
            accessor: 'id',
            Cell: ({ cell }) => (
                <div>
                    <button onClick={() => props.view(cell.row.values.id)} className='bg-sky-200 mx-1 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-sky-800 hover:text-white text-black'>
                        View
                    </button>

                    <button onClick={() => props.edit(cell.row.values.id)} className='bg-sky-200 mx-1 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-sky-800 hover:text-white text-black'>
                        Edit
                    </button>

                    <button onClick={() => props.delete(cell.row.values.id)} className='bg-red-300 mx-1 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-red-800 hover:text-white text-black'>
                        Delete
                    </button>
                </div>
            )
        }
    ]

    const { isLoading, data, refetch, isError, error } = useQuery("get-all-roleserew-query", () => {
        return axios.get(`http://192.168.0.166/api/get-all-roles`, header);
    });
    if (!isLoading) {
        // console.log('data at saf-workflow ',data)
    }


    // console.log("data is", data)
    // return

    return (
        <>
            {isLoading && <h1>Looading ...</h1>}
            {!isLoading && <ListTable assessmentType={false} columns={COLUMNS} dataList={data?.data.data} >
                <button onClick={() => addBtnClick()} className="float-right bg-green-500 px-3 py-1 rounded-sm shadow-lg hover:shadow-xl hover:bg-green-800 hover:text-white text-white flex items-center"><CgPlayListAdd /> Add Role</button></ListTable>}
            {/* <LoadingData/> */}
        </>
    )
}
export default UserRoleList

/**
 * Exported to :
 * 1. UserRoleTab.js
 * 
 */
