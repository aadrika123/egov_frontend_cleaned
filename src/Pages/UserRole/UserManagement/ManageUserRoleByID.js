//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 18 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - 
//    DESCRIPTION -
//////////////////////////////////////////////////////////////////////////////////////
import React, { useState, useEffect, useContext } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import UserPermissionDataTable from '../Common/UserPermissionDataTable';
import Switch from '@mui/material/Switch';
import { contextVar } from 'Components/Context/Context'


function ManageUserRoleByID(props) {
    const { notify } = useContext(contextVar);

    const bearer = JSON.parse(window.localStorage.getItem('token'))
    const header = {
        headers: {
            Authorization: `Bearer ${bearer}`,
            Accept: 'application/json',
        }
    }

    //Update Permission and Modify
    const update = (roleId, permission, modify) => {
        console.log("Role ID", roleId, "Permission", permission, "Can Modify", modify)
        axios({
            method: "put",
            url: `http://192.168.0.166/api/edit-role-user`,
            data: {
                "userID": props.btnId,
                "roleID": roleId,
                "permission": permission,
                "canModify": modify,
            },
            loading: 'Loading...',
            headers: {
                Authorization: `Bearer ${bearer}`,
                Accept: 'application/json',
            }
        })
            .then(function (response) {
                if (response.data.status) {
                    notify(response.data.message, 'success')
                    console.log("Data Update Sussussfull", response.data.message);
                    refetch()
                } else {
                    // console.log("Data Not Update..", response.data.message)
                    console.log("Data Not Update..", response)
                    refetch()
                }
            })
            .catch(function (response) {
                console.log("Failed to update Data", response);
                // setMsg(response.data.message)
            });
    }

    const isPermission = (rowId, permission) => {
        console.log("isPermission - RowID", rowId, "Status", permission)
        update(rowId, permission, 0)
    }

    const canModify = (rowId, modify) => {
        console.log("Can modify = Row ID", rowId, " Can Modify :", modify)
        update(rowId, 1, modify)
    }

    const columns = [
        {
            Header: 'Sl.',
            Cell: ({ row }) => (
                <div className='px-1'>{row.index + 1}</div>
            )
        },
        {
            Header: 'All Roles',
            accessor: 'role_name',
        },
        {
            Header: 'Test',
            accessor: 'id',
        },
        {
            Header: 'Description',
            accessor: 'role_description',
        },
        {
            Header: 'Workflow',
            accessor: 'role_descriptionXXXXXXXXXXX',
            Cell: (props) => {
                return (
                    <div>
                        <label className="inline-flex relative items-center mr-5 cursor-pointer">
                          <select name="" id="" className='border border-black rounded-sm h-6 w-28'>
                              <option value="">Select</option>
                          </select>
                        </label>
                    </div>
                )
            }
        },
        {
            Header: 'Modify',
            accessor: 'can_modify',
            Cell: (props) => {
                return (
                    <div>
                        <label className="inline-flex relative items-center mr-5 cursor-pointer">
                            <input
                                onChange={(e) => canModify(props.cell.row.values.id, e.target.checked)}
                                type="checkbox"
                                value={props.cell.row.values.id}
                                id="green-toggle"
                                className="sr-only peer"
                                checked={props.value}
                            />
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                        </label>
                    </div>
                )
            }
        },
        {
            Header: 'Permission',
            accessor: 'permission_status',
            Cell: (props) => (
                <div className=''>
                    <Switch
                        checked={props.value}
                        onChange={(e) => isPermission(props.cell.row.values.id, e.target.checked)}
                        value={props.cell.row.values.id}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </div>
            )
        },
    ]

    const { isLoading, data, refetch, isError, error } = useQuery("ManageUserRoleByID", () => {
        return axios.get(`http://192.168.0.166/api/get-role-user/${props.btnId}`, header);
    });
    if (!isLoading) { }
    // console.log("Data from api", data?.data.data)

    return (
        <>
            <div className='border bg-white mb-20'>
                {/* <div className='text-center text-xl font-medium'>Manage Role of - {props.userName}</div> */}
                <div>
                    <div>
                        {!isLoading && <UserPermissionDataTable searchText="User" columns={columns} data={data?.data.data} />}
                        {/* {!isLoading && <UserPermissionDataTable searchText="User" columns={columns} data={fakeData} />} */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManageUserRoleByID

/*
Exported To -
1. UserPermissionIndex
*/
