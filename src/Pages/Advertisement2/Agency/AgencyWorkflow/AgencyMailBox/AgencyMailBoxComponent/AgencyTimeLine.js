//////////////////////////////////////////////////////////////////////////////////////
//    Author - swati sharma
//    Version - 1.0
//    Date - 26-09-2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - AgencyTimeLine
//    DESCRIPTION - AgencyTimeLine Component
//////////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import { useQuery } from "react-query";
import axios from 'axios'
import TradeTimeLineList from './TradeTimeLineList.js.js';

function AgencyTimeLine() {
    const { isLoading, data, isError, error } = useQuery("first-query", () => {
        return axios.get("http://localhost:3001/timeLine");
    });
    return (
        <>
            <h1 className='bg-sky-200 text-black text-center py-2 ml-1 font-semibold'>Timeline</h1>
            <div className='p-10'>
                <ol className="relative border-l border-gray-200 dark:border-gray-700">

                    {!isLoading ?
                        data.data.map((data) => (
                            <TradeTimeLineList sender={data.sender} dateTime={data.dateTime} comment={data.comment} activeStatus={data.activeStatus} />
                        )) : ''
                    }
                </ol>
            </div>
        </>
    )
}

export default AgencyTimeLine