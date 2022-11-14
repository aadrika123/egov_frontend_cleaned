
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
import ListTable from 'Components/Common/ListTable/ListTable'
import LoadingData from 'Components/Common/Loading/LoadingData'
import { CgPlayListAdd } from 'react-icons/cg';
import clock from '../Trade/TradeAssests/clock.png';
import ListTableTrade from '../Trade/ListTableTrade'
import bossicon from '../Trade/TradeAssests/bossBaby.png';



function CashVerification(props) {

    // console.log("refetch list ======", props.refetchList) 
    // let today =  new Date();
    let todaysDates = new Date().toJSON().slice(0, 10);
    console.log(todaysDates);


    useEffect(() => {
        refetch()
    }, [props.refetchList])


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
            Header: 'Action',
            accessor: 'id',
            Cell: ({ cell }) => (
                <div >
                    <button onClick={() => props.fun(3)} className='bg-white-400  mx-1 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-sky-800 hover:text-white text-black'>
                        <span className="px-4 text-green-400 ">View </span>
                    </button>
                </div>
            )
        },
        {
            Header: 'Status',
            accessor: 'status',
            Cell: ({ cell }) => (
                <div >
                    <button className='bg-white-400  mx-1 px-3 py-1'>
                        {cell.row.values.status == 0 ? <span className="px-4 text-red-400 ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                            </svg>
                        </span> : <span className="px-4 text-green-400 ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                            </svg>
                        </span>}
                    </button>
                </div>
            )
        },
        {
            Header: 'Employee Name',
            accessor:'emp_name',
            Cell: ({ cell }) => (
                <div className=''>
                    <button className='bg-white-400'>
                       <span className=" float-left">
                            <img src="https://th.bing.com/th/id/OIP.Zicr7RV9NRzk73GgXQwiIAHaGY?pid=ImgDet&rs=1" alt="employee Pic" className='h-12 w-12 rounded-full' />
                        </span>
                        <span className='float-right mt-4'>{cell.row.values.emp_name}</span>
                    </button>
                </div>
            )
            
        },
        {
            Header: 'Property',
            accessor: 'prop_amt'
        },
        {
            Header: 'GBSAF',
            accessor: 'gbsaf_amt'
        },
        {
            Header: 'Water',
            accessor: 'water_amt'
        },
        {
            Header: 'Trade',
            accessor: 'trade_amt'
        },
        {
            Header: 'Total Amount',
            accessor: 'total_amount'
        },
        {
            Header: 'Verified Amount',
            accessor: 'verified_amt'
        },
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

    ]

    const { isLoading, data, refetch, isError, error } = useQuery("get-all-roleserew-query", () => {
        return axios.get(`http://localhost:3333/cash_verification`, header);
    });
    if (!isLoading) {
        console.log('data at license details ', data)
    }


    // console.log("data is", data)
    // return

    return (
        <>

            {isLoading && <h1>Looading ...</h1>}
            {!isLoading && <ListTableTrade assessmentType={false} columns={COLUMNS} dataList={data?.data} >
                {/* <button onClick={() => addBtnClick()} className="float-right bg-green-500 px-3 py-1 rounded-sm shadow-lg hover:shadow-xl hover:bg-green-800 hover:text-white text-white flex items-center"><CgPlayListAdd /> Add Role</button> */}
                <div className="lg:flex md:flex sm:block sm:w-full md:w-2/3 mx-auto  text-center">
                    <div>
                        {/* <label htmlFor="from">From :</label> */}
                        <input type="date" name='filterbyDate' className='border mx-2 px-2 py-1 rounded-lg' title="Filter By Date" />
                    </div>
                   
                    <div>
                        {/* <label htmlFor="to">SELECT EMPLOYEE</label> */}
                        <select name='filterbyDate' className='border mx-2 px-4 py-1 rounded-lg' title="Filter By Employee Name"  >

                            <option value="0">SELECT EMPLOYEE</option>
                            <option value="1">Arvind Kumar</option>
                            <option value="2">Manish Kumar</option>
                        </select>

                        <img src={clock} alt="img" className="h-12 w-12 float-right" />
                    </div>
                </div>
            </ListTableTrade>}

            {/* <LoadingData/> */}
        </>
    )
}
export default CashVerification

/**
 * Exported to :
 * 1. UserRoleTab.js
 * 
 */
