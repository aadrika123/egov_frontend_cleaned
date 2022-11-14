//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Date - 14 july 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - PropertyConcessionApplicationList (closed)
//    DESCRIPTION - PropertyConcessionApplicationList Component
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'
import {useQuery} from 'react-query'
import axios from 'axios'
import { format } from 'date-fns'
import ListTable from 'Components/Common/ListTable/ListTable'

function PropertyConcessionApplicationList(props) {

    const COLUMNS = [

        {
            Header: '#',
            // accessor: 'ward_no'
            Cell: ({ row }) => (
               <div className='pr-2'>{row.index+1}</div>
            )
        },
        // {
        //     Header: 'Ward No.',
        //     accessor: 'ward_no'
        // },
        {
        Header: 'Saf No.',
            accessor: 'saf_no'
        },
        {
            Header: 'Owner Name',
            accessor: 'owner_name'
        },
        {
            Header: 'Property Type',
            accessor: 'property_type'
        },
        {
            Header: 'Assessment Type',
            accessor: 'assessment_type', Cell: ({ cell }) => (

                <div className={' rounded-full shadow-lg h-7 mx-auto w-7 font-semibold text-center py-1 text-sm px-1  ' + (cell.row.values.assessment_type == 'New Assessment' ? 'bg - green - 200 text- green - 900 ' : '') + (cell.row.values.assessment_type == 'Reassessment' ? 'bg - indigo - 200 text - indigo - 900 ' : '') + (cell.row.values.assessment_type == 'Mutation' ? 'bg - red - 200 text - red - 900' : '')}>
                    {Array.from(cell.row.values.assessment_type)[0]}
                </div >
            )
        }
        ,
        {
            Header: 'Received at',
            accessor: 'received_at',
            Cell: ({ value }) => { return format(new Date(value), 'dd/MM/yyyy') }

        },
        {
            Header: 'Action',
            accessor: 'id',
            Cell: ({ cell }) => (
                <button onClick={()=> props.fun(cell.row.values.id)} className='bg-sky-200 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-sky-800 
                hover:text-white text-black'>
                    View
                </button>
            )
        }
    ]

    const { isLoading, data, isError, error } = useQuery("propertySafApplicationList-query", () => {
        return axios.get("http://localhost:3001/applicationList");
    });
    return (
        <>
            {isLoading && <h1>Looading ...</h1>}
            {!isLoading && <ListTable assessmentType={false} columns={COLUMNS} dataList={data?.data} />} {/** assessmentType to show or hide assessment alias */}
        </>
    )
}

export default PropertyConcessionApplicationList
/**
 * Exported to :
 * 1. PropertyConcessionInbox Component
 * 
 */