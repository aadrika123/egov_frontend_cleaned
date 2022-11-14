
//////////////////////////////////////////////////////////////////////////////////////
//    Author - Anshuman
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
// import ListTable from 'Components/Common/ListTable/ListTable'
import LoadingData from 'Components/Common/Loading/LoadingData'
import { CgPlayListAdd } from 'react-icons/cg';
import clock from '../TradeAssests/clock.png';
import ListTableTrade from '../ListTableTrade'
import { HEADER, TRADE } from '../tradeComponent/TradeApiListFile'


function ApplicationList(props) {

    // console.log("refetch list ======", props.refetchList)
    // console.log('props', props);

    useEffect(() => {
        refetch()
    }, [props.refetchList])

    const handleUpdate = (id) => {
        props.fun(5);
        props.applicationTypeFun(id);
    }

    const addBtnClick = () => {
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
            Header: 'Application No',
            accessor: 'application_no'
        },
        {
            Header: 'Apply Date',
            accessor: 'apply_date'
        },
        {
            Header: 'Firm Name',
            accessor: 'firm_name'
        },
        {
            Header: 'Onwer Name',
            accessor: 'owner_name'
        },
        // {
        //     Header: 'Entity Name',
        //     accessor: 'entity_name'
        // },
        // {
        //     Header: 'Assessment Type',
        //     accessor: 'id', Cell: ({ cell }) => (

        //         <div className=''>
        //             view
        //         </div>
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
                <div >

                    {/* <button onClick={() => props.edit(cell.row.values.id)} className='bg-indigo-400 mx-1 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-sky-800 hover:text-white text-black'>
                        View
                    </button> */}

                    <button
                        // onClick={() => handleUpdate(cell.row.values.id)}
                        className='  border-teal-500 mx-1 px-3 py-1 rounded-lg shadow-lg  bg-gray-400  text-stone-600'
                    >
                        <span className="px-4 text-white">disabled </span>
                    </button>
                </div>
            )
        }
    ]

    const { isLoading, data, refetch, isError, error } = useQuery("get-all-roleserew-query", () => {
        return axios.post(TRADE.GET_APPLICATION_LIST, {}, HEADER());
    });
    if (!isLoading) {
        console.log('data at license details ', data?.data.data)
    }


    // console.log("data is", data)
    // return

    return (
        <>
            {isLoading && <h1>Looading ...</h1>}
            {!isLoading && <ListTableTrade assessmentType={false} columns={COLUMNS} dataList={data?.data.data} >
                {/* <button onClick={() => addBtnClick()} className="float-right bg-green-500 px-3 py-1 rounded-sm shadow-lg hover:shadow-xl hover:bg-green-800 hover:text-white text-white flex items-center"><CgPlayListAdd /> Add Role</button> */}
                <img src={clock} alt="img" className="h-12 w-12 float-right" />
            </ListTableTrade>}
            {/* <LoadingData/> */}
        </>
    )
}
export default ApplicationList

/**
 * Exported to :
 * 1. UserRoleTab.js
 * 
 */
