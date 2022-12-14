//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 18 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - 
//    DESCRIPTION -
//////////////////////////////////////////////////////////////////////////////////////
import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import UserPermissionDataTable from '../Common/UserPermissionDataTable';
import { MdPersonAdd } from 'react-icons/md';
import { BsFillTelephoneForwardFill } from 'react-icons/bs';


function UserPermissionList(props) {

    const bearer = JSON.parse(window.localStorage.getItem('token'))
    const header = {
        headers: {
            Authorization: `Bearer ${bearer}`,
            Accept: 'application/json',
        }
    }

    const setTest = (a,b)=>{
        console.log("The value is ",a, b)
    }

    const columns = [
        {
            Header: 'Sl.',
            Cell: ({ row }) => (
                <div className='px-1'>{row.index + 1}</div>
            )
        },
        {
            Header: 'User Name',
            accessor: 'user_name',
        },
        {
            Header: 'Mobile',
            accessor: 'mobile',
        },
        {
            Header: 'Email',
            accessor: 'email',
        },
        {
            Header: 'Assigned Roles',
            accessor: 'role_name',
            Cell: (props) => (
                props.value ? <div className='bg-blue-200 rounded-lg p-2'>{props.value}</div> : <div className='bg-red-100 rounded-lg p-2 text-center'>Roles Not Assigned</div>
                // props.value ? <div className='bg-blue-200 rounded-lg p-2'>{props.value.split(',')}</div> : <div className='bg-red-100 rounded-lg p-2 text-center'>Roles Not Assigned</div>
            )
        },
        {
            Header: 'Status',
            accessor: 'suspended',
            Cell: (props) => {
                return (
                    <p>
                        {props.value == false && <p className='bg-green-600 text-white font-semibold text-center px-1 py-0.5 rounded-md'>Active</p>}
                        {props.value == true && <p className='bg-red-600 text-white font-semibold text-center px-1 py-0.5 rounded-md'>Banned</p>}
                    </p>
                );
            }
        },
        {
            Header: 'Action',
            accessor: 'id',
            Cell: ({ cell }) => (
                <div>
                     <button onClick={() => props.allActionBtn(cell.row.values.id,cell.row.values.user_name)} className='my-0.5 bg-blue-600 hover:bg-blue-400 py-2 px-3 text-white rounded-sm mx-1'>Action</button>
                     {/* <button onClick={() => setTest(cell.row.values.id,cell.row.values.user_name)} className='my-0.5 bg-blue-600 hover:bg-blue-400 py-2 px-3 text-white rounded-sm mx-1'>Test</button> */}
                </div>
            )
        }
    ]

    const { isLoading, data, isError, error } = useQuery("get-allUSers-UserPermisonList-Query", () => {
        return axios.get(`http://192.168.0.166/api/get-all-users`, header);
    });
    if (!isLoading) { }
    // console.log("Data from api", data?.data.data)

    return (
        <>
            <div className='border mt-0 mx-1 pb-10 bg-white mb-20'>
                <div className={`p-2 bg-green-400 shadow-lg`}>
                    <div className='grid grid-cols-2 '>
                        <div className='col-span-1 text-xl font-semibold'>List of All Users</div>
                        <div className='col-span-1 justify-self-end'>
                            <button onClick={props.addNewPermission}
                                className='bg-blue-600 hover:bg-blue-500 font-semibold text-white px-5 pl-2 py-1 shadow-lg rounded'>
                                <span className='inline-block hover:animate-bounce'>
                                    <MdPersonAdd fill='white' size={12} className="mt-1" />
                                </span> Add New
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        {!isLoading && <UserPermissionDataTable searchText="User" columns={columns} data={data?.data.data} />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserPermissionList

/*
Exported To -
1. UserPermissionIndex
*/
