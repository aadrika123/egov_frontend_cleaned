//////////////////////////////////////////////////////////////////////////////////////
//    Author - swati sharma
//    Version - 1.0
//    Date - 26-09-2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - AgencyMemebersAction
//    DESCRIPTION - AgencyMemebersAction Component
//////////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import { useQuery } from "react-query";
import axios from 'axios'

function AgencyMemebersAction() {

    const { isLoading, data, isError, error } = useQuery("first-query", () => {
        return axios.get("http://localhost:3001/levelCandidateList");
    });
    return (
        <>
            <div className='px-2'>
                <select className="shadow-lg h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-pointer"  >
                    {!isLoading ?
                        data.data.map((data) => (
                            <option value={data.id}>{data.designation}</option>
                        )) : ''
                    }

                </select>
            </div>
        </>
    )
}

export default AgencyMemebersAction