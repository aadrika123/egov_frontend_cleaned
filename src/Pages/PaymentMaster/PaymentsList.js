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
import PaymentDataTable from './Components/PaymentDataTable';
import { useQuery } from 'react-query'
import axios from 'axios'
import PaymentApiList from './PaymentApiList';


function PaymentsList(props) {

    // const [selectedRowData, setselectedRowData] = useState([]);
    let selectedDataList = []

    const {getAllPayments} = PaymentApiList();


    const bearer = JSON.parse(window.localStorage.getItem('token'))
    const header = {
        headers: {
            Authorization: `Bearer ${bearer}`,
            Accept: 'application/json',
        }
    }


    const handlebtnSendNotice = () => {
        const idlist = selectedDataList.map((row) => {
            return row.original.id
        })
        console.log('Selected Rows', idlist)
    }

    const columns = [

        {
            Header: 'Payment_ID',
            accessor: 'payment_id',
        },
        {
            Header: 'Rzp Order Id',
            accessor: 'order_id',
        },
        {
            Header: 'Amount',
            accessor: 'amount',
            Cell: (props) => {
                return (
                    <p >
                        {props.value && '₹' + props.value}
                    </p>
                );
            }
        },
        {
            Header: 'Phone',
            accessor: 'phone',
        },
        {
            Header: 'Created At',
            accessor: 'payment_date',
        },
        {
            Header: 'Status',
            accessor: 'payment_status',
            Cell: (props) => {
                return (
                    <p>
                        {props.value == 'Complated' && <p className='bg-green-600 text-white font-semibold text-center px-1 py-0.5 rounded-md'>{props.value}</p>}
                        {props.value == 'Processing' && <p className='bg-blue-600 text-white font-semibold text-center px-1 py-0.5 rounded-md'>{props.value}</p>}
                        {props.value == 'Hold' && <p className='bg-yellow-600 text-white font-semibold text-center px-1 py-0.5 rounded-md'>{props.value}</p>}
                        {props.value == 'Failed' && <p className='bg-red-600 text-white font-semibold text-center px-1 py-0.5 rounded-md'>{props.value}</p>}
                        {props.value == 'Cancel' && <p className='bg-red-600 text-white font-semibold text-center px-1 py-0.5 rounded-md'>{props.value}</p>}
                    </p>

                    //   <p style={{ background: props.value === "Complated" ? "green" : "red" }}>
                    //     {props.value}
                    //   </p>
                );
            }
        },
        {
            Header: 'Action',
            accessor: 'id',
            Cell: ({ cell }) => (
                <button onClick={() => props.fun1(cell.row.values.id)} className='bg-blue-600 hover:bg-blue-400 py-1 px-3 text-white rounded-sm'>
                    View
                </button>
            )
        }
    ]

    const { isLoading, data, isError, error } = useQuery("api/get-all-paymentsery", () => {
        return axios.get(getAllPayments, header);
    });
    if (!isLoading) { }
    // console.log("Data from api", data?.data.data)

        const selectedData = (e) => {
            // console.log("testing....", e)
            selectedDataList = e
            // console.log('value at static variable ......', selectedDataList)
            // e.map((z)=>(
            //     console.log(z.original.id)
            // ))
        }

        return (
            <>
                <div className='border mt-0 mx-0 px-1 pt-1 pb-10 bg-white mb-20'>
                    <div>
                        <div>
                           { !isLoading && <PaymentDataTable columns={columns} data={data?.data.data} fun={selectedData} />}
                        </div>
                    </div>
                    <div className='mt-5'>
                        <button onClick={handlebtnSendNotice} className='bg-green-500 hover:bg-green-600 hover:text-white py-1 px-2 font-semibold shadow-md'>Check Status</button>
                    </div>
                </div>
            </>
        )
    }

    export default PaymentsList

/*
Exported To -
1. PropertyNoticeIndex.js
*/

// export default PaymentsList